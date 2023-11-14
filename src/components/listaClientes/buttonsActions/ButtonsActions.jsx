"use client"
import style from './buttonsActions.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
function ButtonsActions() {
    const router = useRouter()
  return (
    <div className={style.contentButtons}>
        <button type='button'>
            <Image
                priority
                src="/upload.png"
                height={24}
                width={24}
                alt="Volver a Cargar"
            />
            Exportar
        </button>
        <button type='button' onClick={() => router.push('/clientes/crear')}>
            <Image
                priority
                src="/add.png"
                height={24}
                width={24}
                alt="Agregar"
            />
            Registrar
        </button>
    </div>
  )
}

export default ButtonsActions