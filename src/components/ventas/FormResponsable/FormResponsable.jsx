"use client"
import { useRouter } from 'next/navigation'
import style from './formResponsable.module.css'

function FormResponsable() {
    const router = useRouter()
    const values = {};

  return (
    <div className={style.container}>
    <form className={style.formContent}>
        <h1 className={style.title}>Datos de Responsables de Seguro</h1>               
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
                <label>Número de Teléfono: </label>
                <input
                    name="phone"
                    type="number"
                    placeholder="+502 0000-0000"
                    className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.phone}
                    // onChange={handleInputChange}
                />
            </div>
        </div>
        <div className={style.group}>
            <div className={style.groupChild}>
                <label>Parentesco: </label>                          
                <input
                    name="relationship"
                    type="text"
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.relationship}
                    // onChange={handleInputChange}
                />
            </div>
            <div className={style.groupChild}>
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
        </div>
        <div className={`${style.full_input} ${style.divtypeRadio}`} >
            <label>¿El responsable cuenta con Seguro de Vida?</label> 
            <div className={`${style.typeRadio}`}>
                <label htmlFor='si'>Sí</label>                          
                <input
                    name="yes"
                    type="radio"           
                    id='si'  
                    // onChange={handleInputChange}
                />
            </div>  
            <div className={`${style.typeRadio}`}>
                <label htmlFor='no'>No</label>                          
                <input
                    name="no"
                    type="radio"           
                    id='no'  
                    // onChange={handleInputChange}
                />
            </div>         
        </div>  
        <div className={style.full_input}>
            <label>Seguro Contratado: </label>                          
            <input
                name="contract"
                type="text"
                className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.contract}
                // onChange={handleInputChange}
            />
        </div>     
        <div className={style.buttons}>   
            <button type="button" className="btn-primary" onClick={() => router.push('/ventas')}>
                Atrás
            </button>              
            <button type="button" className="btn-primary" onClick={() => {}}>
                Finalizar
            </button>
        </div>
    </form>
</div>
  )
}
export default FormResponsable