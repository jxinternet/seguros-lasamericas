import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectDB } from "@/src/lib/mongodb"
import User from "@/src/models/User"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectDB()
                const userFound = await User.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!userFound) throw new Error("Credenciales Inválidas")

                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    userFound.password
                )

                if (!passwordMatch) throw new Error("Credenciales Inválidas")

                console.log(userFound)

                return userFound
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/api/auth/signout',
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        async session({ session, token }) {
            session.user = token.user
            return session
        }
    }
})

export { handler as GET, handler as POST }
