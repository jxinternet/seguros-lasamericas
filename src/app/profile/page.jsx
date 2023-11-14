'use client';
import { useSession, signOut } from "next-auth/react"
import Layout from "../../components/LayoutFolder/Layout"
import styles from './Profile.module.css';

export default function Profile() {
    const { data: session } = useSession()
    return (
<div className={styles.profileContainer}>
            <h1>Perfil</h1>
            <p>Registrado según su Rol en la Agencia: {session?.user?.email}</p>
            <button
                className="bg-zinc-800 text-white px-4 py-2 block mb-2"
                onClick={() => {
                    signOut();
                }}
            >
                Salir
            </button>
        </div>
    );
}