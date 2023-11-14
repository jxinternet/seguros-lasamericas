"use client"

import { useRouter } from 'next/navigation';
import style from './mensualidad.module.css'

function Mensualidad() {
    const router = useRouter();

  return (
    <div className={style.container}>
        <h3 className={style.title}>Ingresos para la Agencia: </h3>

        <div className={style.boxes}>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Primer Periodo</h4>
                        <p>Primas Aseguradas</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='Cantidad en Quetzales' step=".01" />
            </div>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Segundo Periodo</h4>
                        <p>Primas Aseguradas</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='Cantidad en Quetzales' step=".01" />
            </div>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Tercer Periodo</h4>
                        <p>Primas Aseguradas</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='Cantidad en Quetzales' step=".01" />
            </div>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Cuarto Periodo</h4>
                        <p>Primas Aseguradas</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='Cantidad en Quetzales' step=".01" />
            </div>
        </div>
        <button type="button" className={style.buttonBack} onClick={() => router.push('/clientes/poliza')}>
            Atrás
        </button>
    </div>
  )
}

export default Mensualidad