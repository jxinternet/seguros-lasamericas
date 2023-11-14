"use client"
import { useRouter } from 'next/navigation'
import style from './FormDifunto.module.css'

function FormDifunto() {
    const router = useRouter()
    const values = {};
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

  return (
    <div className={style.container}>
            <form className={style.formContent}>
                <h1 className={style.title}>Datos para Seguro de Vida</h1>               
                <div className={style.full_input}>
                    <label>Nombre Completo: </label>                          
                    <input
                        name="name"
                        type="text"
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.name}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Documento de Identificación: </label>                          
                        <input
                            name="dpi"
                            type="text"
                            placeholder="DPI"
                            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.dpi}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Estado Civil: </label>
                        <input
                            name="status"
                            type="text"
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.status}
                            //onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.group}>
                    <div className={`${style.groupChild} ${style.typeNumber}`}>
                        <label>Edad: </label>                          
                        <input
                            name="age"
                            type="number"
                            min={0}
                            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.age}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className={`${style.groupChild} ${style.typeNumber}`}>
                        <label>Fecha de Nacimiento: </label>
                        <input
                            name="dateofbirth"
                            type="date"
                            min={0}
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.dateofbirth}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Aseguradora Contratada: </label>
                        <input
                            name="company"
                            type="text"
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.company}
                            // onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.full_input}>
                    <label>Dirección: </label>                          
                    <input
                        name="address"
                        type="text"
                        placeholder="Quetzaltenango, Quetzaltenango, Guatemala"
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.address}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.full_input}>
                    <label>Tipo de Seguro: </label>                          
                    <input
                        name="insurance"
                        type="text"
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.insurance}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.buttons}>                 
                    <button type="button" className="btn-primary" onClick={() => router.push('/ventas/responsable')}>
                        Siguiente
                    </button>
                </div>
            </form>
    </div>
  )
}

export default FormDifunto;