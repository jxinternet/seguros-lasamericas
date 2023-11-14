import React, { useState } from "react";
import { useForm } from "../utils/useForm";
import { createPayeeAction } from "../services/payeesServices";

// Formulario para Beneficiarios

export const FormPayees = () => {
    const { values, handleInputChange, reset } = useForm({ name_payee: "", cidentified_payee: "", age_payee: "", dateofbirth: "" })
    const sendPayees = (ev) => createPayeeAction(ev, values, reset)

    return (
        <div className="max-w-screen-md pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
                <form onSubmit={sendPayees} className="sm:col-span-8">
                    <h1 className="text-base font-semibold leading-7 text-black-900">Listado de Beneficiarios: </h1>
                    
                    <div className="sm:col-span-3">
                        <label>Nombre Completo</label>
                        <div className="mt-2">
                            <input
                                name="name_payee"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={values.name_payee}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label>Documento de Identificación: </label>
                        <input
                            name="cidentified_payee"
                            type="text"
                            placeholder="0000 00000 0000"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.cidentified_payee}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label>Edad: </label>
                        <input
                            name="age_payee"
                            type="number"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.age_payee}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-span-full">
                        <label>Fecha de Nacimiento: </label>
                        <input
                            name="dateofbirth"
                            type="date"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.dateofbirth}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    );
};
