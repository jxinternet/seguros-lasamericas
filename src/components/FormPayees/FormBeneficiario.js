'use client'

import { useForm } from "../../utils/useForm";
import { createPayeeAction } from "../../services/payeesServices";
import style from './FormBeneficiario.module.css'
 
// Formulario para Beneficiarios

export const FormBeneficiario = ({setModalFormBeneficiario}) => {
    const { values, handleInputChange, reset } = useForm({ name_payee: "", cidentified_payee: "", age_payee: "", dateofbirth: "" })
    const sendPayees = (ev) => createPayeeAction(ev, values, reset)

    const cerrarModal = () => {
        setModalFormBeneficiario(false);
    }

    return (
        <div className={style.Backdrop} onClick={cerrarModal}>
            <form onSubmit={sendPayees} className={style.container} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.title}>Registro de Beneficiarios</h1>
                
                <div className={style.field}>
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        required
                        className={style.inputForm}
                        value={values.name_payee}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.field}>
                    <label>Documento de Identificación</label>
                    <input
                        type="text"
                        placeholder="DPI"
                        required
                        className={style.inputForm}
                        value={values.cidentified_payee}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.field}>
                    <label>Edad</label>
                    <input
                        type="number"
                        required
                        className={style.inputForm}
                        value={values.age_payee}
                        onChange={handleInputChange}
                    />
                </div>
 
                <div className={style.field}>
                    <label>Fecha de Nacimiento</label>
                    <input
                        name="dateofbirth"
                        type="date"
                        required
                        className={style.inputForm}
                        value={values.dateofbirth}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.buttons}>
                    <button type="button" className="btn-primary" onClick={cerrarModal}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};