"use client"

import Mensualidad from './Mensualidad/Mensualidad';
import style from './datosPagos.module.css';

export default function DatosPagos() {
  return (
    <div className={style.containerTopData}>
            <h1 className={style.title}>Datos del Pago del Seguro: </h1>
            <form className={style.formContent}>       
                <div className={style.formGroup}>
                    <div className={style.formChild}>
                        <label htmlFor='formatoPago'>Formato de Pago</label>
                        <input 
                            id="formatoPago" 
                            name="type_polize" 
                            type='text'
                            className={style.inputForm}
                            value={type_polize}
                            onChange={(ev) => setType_polize(ev.target.value)}
                        />                                                         
                    </div>                     
                    <div className={style.formChild}>
                        <label htmlFor='cambioCoin'>Cambio Monetario</label>
                        <input 
                            id="cambioCoin" 
                            name="type_polize" 
                            type='text'
                            className={style.inputForm}
                            value={type_polize}
                            onChange={(ev) => setType_polize(ev.target.value)}
                        />                                                         
                    </div>                  
                </div>
                <div className={style.formGroup}>
                    <div className={style.formChild}>
                        <label htmlFor='fechaPago'>Fecha</label>
                        <input 
                            type='date'
                            id="fechaPago" 
                            name="type_polize" 
                            className={style.inputForm}
                            value={type_polize}
                            onChange={(ev) => setType_polize(ev.target.value)}
                        />                                                         
                    </div> 
                    <div className={style.formChild}>
                        <label htmlFor='status'>Status</label>
                        <input 
                            type='text'
                            id="status" 
                            name="type_polize" 
                            className={style.inputForm}
                            placeholder='Activo'
                            value={type_polize}
                            onChange={(ev) => setType_polize(ev.target.value)}
                        />                                                         
                    </div>
                </div>    
            </form>
        </div>       
  )
}
