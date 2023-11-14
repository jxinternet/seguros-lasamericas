"use client"

import { useRouter } from 'next/navigation'
import style from './InputCodigoSeguro.module.css'
import { useForm } from '@/src/utils/useForm';
import { createPolizeAction } from '@/src/services/polizaServices';

export const InputCodigoSeguro = (data) => {
    const { values, handleInputChange, reset } = useForm({ codigoPoliza: data.data })
    const sendCodigo = (ev) => createPolizeAction(ev, values, reset)

    return (
        <div className={style.container}>
            <form onSubmit={sendCodigo} className={style.formContent}>
                <h1 className={style.title}>Listado de Asegurados</h1>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Código: </label>                          
                        <input
                            name="codigoPoliza"
                            type="text"
                            placeholder={data.data}
                            className="rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.codigoPoliza}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn-primary">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
