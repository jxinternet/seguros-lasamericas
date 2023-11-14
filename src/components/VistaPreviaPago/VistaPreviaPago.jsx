"use client";
import style from './vistaPreviaPago.module.css'
import Image from 'next/image';

function VistaPreviaPago() {
  return (
    <div className={style.container}>
       <div className={style.successMessage}>
            <div className={style.circleContent}>
                <Image
                    priority
                    src="/successIcon.png"
                    height={20}
                    width={20}
                    alt="Registro Completado"
                />
            </div>
            <div>
                <p className={style.blueMessage}>El registro ha finalizado</p>
                <p className={style.grayMessage}>Los datos ingresados han sido registrados correctamente</p>
            </div>
       </div>
       <div className={style.content_codigoSeguro}>
            <p className={style.titleInfo}>Código de Autorización del Seguro</p>
            <p className={style.codigoSeguro}>No. de Documento de Autorización</p>
       </div>

       <div className={style.detallesCliente}>
            <p className={style.title_detallesCliente}>Detalles del Registro</p>
            <p className={style.titleInfo}>Datos del Cliente</p>

            <div className={style.dataCliente}>
                <div className={style.field}>
                    <p className={style.title_field}>Nombre Completo</p>
                    <p className={style.data_field}>Asegurado</p>
                </div>
                <div className={style.field}>
                    <p className={style.title_field}>Documento de Identificación</p>
                    <p className={`${style.data_field} ${style.right}`}>DPI</p>
                </div>
            </div>
            <div className={style.dataCliente}>
                <div className={style.field}>
                    <p className={style.title_field}>Número de Teléfono</p>
                    <p className={style.data_field}>+502 0000-0000</p>
                </div>
                <div className={style.field}>
                    <p className={`${style.title_field} ${style.right}`}>Edad</p>
                    <p className={`${style.data_field} ${style.right}`}>Años</p>
                </div>
            </div>
       </div>

       <div className={style.detallesPoliza}>
            <p className={style.titleInfo}>Datos de la Poliza</p>

            <div className={style.dataPoliza}>
                <div className={style.field}>
                    <p className={style.title_field}>Nombre del Ejecutivo de Cuenta Asignado</p>
                    <p className={style.data_field}>Código de Autorización</p>
                </div>
                <div className={style.field}>
                    <p className={style.title_field}>Ciudad</p>
                    <p className={style.data_field}>Quetzaltenango, Quetzaltenango, Guatemala</p>
                </div>
                <div className={style.field}>
                    <p className={style.title_field}>Status</p>
                    <p className={`${style.data_field} ${style.right}`}>Estado de Actividad del Seguro</p>
                </div>
            </div>
            <div className={style.dataPoliza}>
                <div className={style.field}>
                    <p className={style.title_field}>Fecha</p>
                    <p className={style.data_field}>Día/Mes/Año</p>
                </div>
                <div className={style.field}>
                    <p className={`${style.title_field}`}>Número de Beneficiarios</p>
                    <p className={`${style.data_field} ${style.right}`}>Beneficiarios</p>
                </div>
            </div>
       </div>

       <div className={style.contentBeneficiarios}>
            <p className={style.titleInfo}>Lista de Beneficiarios</p>
            <div className={style.listaBeneficiarios}>
                <div className={style.row}>
                    <div className={style.row_content}>
                        <p>Datos</p>
                        <p>Nombre Completo</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Fecha de Nacimiento</p>
                        <p>Día/Mes/Año</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Documento de Identificación</p>
                        <p>DPI</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Número de Teléfono</p>
                        <p>+502 0000-0000</p>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row_content}>
                        <p>Datos</p>
                        <p>Nombre Completo</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Fecha de Nacimiento</p>
                        <p>Día/Mes/Año</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Documento de Identificación</p>
                        <p>DPI</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Número de Teléfono</p>
                        <p>+502 0000-0000</p>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row_content}>
                        <p>Datos</p>
                        <p>Nombre Completo</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Fecha de Nacimiento</p>
                        <p>Día/Mes/Año</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Documento de Identificación</p>
                        <p>DPI</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Número de Teléfono</p>
                        <p>+502 0000-0000</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default VistaPreviaPago