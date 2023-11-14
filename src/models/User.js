import { Schema, model, models } from "mongoose"

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: [true, "Se requiere de Correo Electrónico válido"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Email is invalid"
            ]
        },
        password: {
            type: String,
            required: [true, "Se requiere de una Contraseña válida"],
            select: false
        },
        fullname: {
            type: String,
            required: [true, "Se requiere de Nombre Completo"],
            minLength: [3, "Debe incluirse Primer Nombre y Primer Apellido mínimo"],
            maxLength: [20, "Debe cumplir con los términos y condiciones"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = models.User || model("User", UserSchema)
export default User