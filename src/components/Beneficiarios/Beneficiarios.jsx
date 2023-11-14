'use client';

import { useState } from 'react'
import style from './beneficiarios.module.css'
import Image from 'next/image'
import { FormBeneficiario } from '../FormPayees/FormBeneficiario'

function Beneficiarios() {

    const [modalFormBeneficiario, setModalFormBeneficiario] = useState(false); 

  return (
    <div className={style.container}>
        {
            modalFormBeneficiario && <FormBeneficiario setModalFormBeneficiario={setModalFormBeneficiario} />
        }

        <div className={style.header}>
           <h3>Listado de Beneficiarios</h3> 

            <Image 
                src='/userplus.png' 
                alt="Plus user icon" 
                className={style.avatar}
                width={40}
                height={40}
                style={{cursor: 'pointer'}}
                onClick={() => setModalFormBeneficiario(true)}
            />
        </div>
        
        <div className={style.listaBeneficiarios}>
            <div className={style.cardBeneficiario}>
                <div className={style.cardTop}>
                    <p>Editar Información</p>
                </div>
                <div className={style.cardCenter}>
                    <div>
                        <p className={style.title}>Nombre Completo: </p>
                        <p>Inserte Nombre del Beneficiario</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Fecha de Nacimiento: </p>
                        <p style={{textAlign: 'right'}}>Inserte Fecha de Nacimiento con Día/Mes/Año</p>
                    </div>                   
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <p className={style.title}>Documento de Identificación: </p>
                        <p>Inserte DPI</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Edad: </p>
                        <p style={{textAlign: 'right'}}>Inserte Años de Edad</p>
                    </div>
                </div>
            </div>
            <div className={style.cardBeneficiario}>
                <div className={style.cardTop}>
                    <p>Editar Información</p>
                </div>
                <div className={style.cardCenter}>
                    <div>
                        <p className={style.title}>Nombre Completo: </p>
                        <p>Inserte Nombre del Beneficiario</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Fecha de Nacimiento: </p>
                        <p style={{textAlign: 'right'}}>Inserte Fecha de Nacimiento con Día/Mes/Año</p>
                    </div>                   
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <p className={style.title}>Documento de Identificación: </p>
                        <p>Inserte DPI</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Edad: </p>
                        <p style={{textAlign: 'right'}}>Inserte Años de Edad</p>
                    </div>
                </div>
            </div>
            <div className={style.cardBeneficiario}>
                <div className={style.cardTop}>
                    <p>Editar Información</p>
                </div>
                <div className={style.cardCenter}>
                    <div>
                        <p className={style.title}>Nombre Completo: </p>
                        <p>Inserte Nombre del Beneficiario</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Fecha de Nacimiento: </p>
                        <p style={{textAlign: 'right'}}>Inserte Fecha de Nacimiento con Día/Mes/Año</p>
                    </div>                   
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <p className={style.title}>Documento de Identificación: </p>
                        <p>Inserte DPI</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Edad: </p>
                        <p style={{textAlign: 'right'}}>Inserte Años de Edad</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneficiarios