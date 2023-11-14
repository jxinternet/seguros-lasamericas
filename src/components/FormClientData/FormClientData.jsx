"use client"

import { useRouter } from 'next/navigation'
import style from './formClientData.module.css'
import { useForm } from '@/src/utils/useForm';
import { createClientAction } from '@/src/services/clienteServices';

// Formulario para Clientes

export const FormClientData = (data) => {
    const router = useRouter()
    const { values, handleInputChange, reset } = useForm({ name: "", lastname: "", cidentified: "", addres: "", phone: "", dateofbirth: "", polize: '' })
    const sendClient = (ev) => createClientAction(ev, values, reset)

    return (
        <div className={style.container}>
            <form onSubmit={sendClient} className={style.formContent}>
                <h1 className={style.title}>Nuevo Cliente</h1>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Nombre Completo: </label>                          
                        <input
                            name="name"
                            type="text"
                            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Estado Civil: </label>
                        <input
                            name="civilstatus"
                            type="text"
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.civilstatus}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.full_input}>
                    <label>Fecha de Nacimiento: </label>
                    <input
                        name="dateofbirth"
                        type="date"
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.dateofbirth}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={style.full_input}>
                    <label>Dirección: </label>
                    <input
                        name="address"
                        type="text"
                        placeholder="Quetzaltenango, Quetzaltenango, Guatemala"
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Documento de Identificación: </label>
                        <input
                            name="dpi"
                            type="number"
                            placeholder="DPI"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.dpi}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Numero de Teléfono: </label>
                        <input
                            name="phone"
                            type="number"
                            placeholder="+502 0000-0000"
                            className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.buttons}>
                    <button type="button" className="btn-primary" onClick={() => {reset(); router.push('/clientes/lista')}}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn-primary" onClick={() => {router.push('/clientes/poliza') }}>
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
};
