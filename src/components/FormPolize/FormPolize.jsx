"use client"
import { useRouter } from 'next/navigation'
import style from './formPolize.module.css'
import { useForm } from "../../utils/useForm";
import { TypePolizeOptions, VendedoresOptions } from "../../utils/optionsForm";
import { updatePolizeAction } from "../../services/polizaServices";

// Formulario para la Gestión de Seguros y Fianzas (Tipos de Servicios de Póliza)

export const FormPolize = () => {
    const router = useRouter()
    const { values, handleInputChange, reset } = useForm({
        type_polize: "", seller: "", dateofcontract: "", city_contract: "" })
    const sendPolize = (ev) => updatePolizeAction(ev, values, reset)

    const validateNext = () => router.push('/clientes/pago')
   

    const tiposLabel = TypePolizeOptions.map((l, i) => <option value={l.value} key={i}>{l.label}</option>)
    const vendedorLabel = VendedoresOptions.map((l, i) => <option value={l.value} key={i} >{l.label}</option>)

    return (
        <div className={style.container}>
            <h1 className={style.title}>Ingrese Datos del Seguro Contratado</h1>
            <form onSubmit={sendPolize} className={style.formContent}>
                
                <div className={style.field}>
                    <label>Tipo de Poliza</label>
                    <select
                        name="type_polize"
                        required
                        className={style.inputForm}
                        value={values.type_polize}
                        onChange={handleInputChange}>
                        <option>Seleccione la opción según Servicio Autorizado</option>
                        {
                            tiposLabel
                        }
                    </select>                                      
                </div>

                <div className={style.field}>
                    <label>Nombre del Ejecutivo de Cuenta</label>                       
                    <select
                        name="seller"
                        required
                        className={style.inputForm}
                        value={values.seller}
                        onChange={handleInputChange}>
                        <option>Seleccione</option>
                        {
                            vendedorLabel
                        }

                    </select>                  
                </div>
                <div className={style.field}>
                    <label>Fecha de Contrato de Seguro</label>
                    <input
                        name="dateofcontract"
                        type="date"
                        className={style.inputForm}
                        value={values.dateofcontract}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.field}>
                    <label>Ciudad</label>
                    <input
                        name="city_contract"
                        type="text"
                        placeholder="Quetzaltenango, Quetzaltenango, Guatemala"
                        className={style.inputForm}
                        value={values.city_contract}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.buttons}>
                    <button type="button" className="btn-primary" onClick={() => router.push('/clientes/crear')}>
                        Atrás
                    </button>
                    <button type="submit" className="btn-primary" onClick={validateNext}>
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
}