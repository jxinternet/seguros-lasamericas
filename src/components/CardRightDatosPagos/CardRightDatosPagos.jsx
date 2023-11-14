"use client"
import { useRouter } from 'next/navigation'
import style from './cardRightDatosPagos.module.css'

function CardRightDatosPagos() {
  const router = useRouter();

  return (
    <div className={style.container}>
        <h4 className={style.title}>Datos del Pago del Seguro</h4>

        <div className={style.contentTop}>
            <div>
                <p className={style.descripcion}>Fecha: </p>
                <p className={style.data}>Inserte Fecha con Día/Mes/Año</p>
            </div>
            <p className={style.descripcion}>Número de Referencia: </p>
            <p className={style.data}>Inserte No. de Documento de Referencia</p>
            <div className={style.horizontal}>
                <div>
                  <p className={style.descripcion}>Meses con Pago Completo: </p>
                  <p className={style.data}>Inserte Número de Meses con Pago Completo</p> 
                </div>  
                <div>
                  <p className={style.descripcion}>Meses a Pagar</p>
                  <p className={style.data} style={{textAlign: 'right'}}>Inserte Número de Meses a Pagar</p> 
                </div>           
            </div>
            <div className={style.horizontal}>
                <div>
                  <p className={style.descripcion}>Tipo de Plan de Seguro: </p>
                  <p className={style.data}>Inserte Plan</p> 
                </div>  
                <div>
                  <p className={style.descripcion}>Formato de Pago: </p>
                  <p className={style.data}>Inserte Forma de Pago</p> 
                </div>           
            </div>           
        </div>
        <div className={style.contentCenter}>
          <p className={style.titleCenter}>Monto Total según Periodo Asignado</p>
            <div className={style.mesesPagados}>
                <div className={style.mesPagado}>
                  <p className={style.mes}>Primer Periodo</p>
                  <p className={style.monto}>Cantidad en Quetzales</p>
                </div>
                <div className={style.mesPagado}>
                  <p className={style.mes}>Segundo Periodo</p>
                  <p className={style.monto}>Cantidad en Quetzales</p>
                </div>
                <div className={style.mesPagado}>
                  <p className={style.mes}>Tercer Periodo</p>
                  <p className={style.monto}>Cantidad en Quetzales</p>
                </div>
                <div className={style.mesPagado}>
                  <p className={style.mes}>Cuarto Periodo</p>
                  <p className={style.monto}>Cantidad en Quetzales</p>
                </div>
            </div>
            <div className={style.montoEnMoneda}>
                <div className={`${style.mesPagado_center} ${style.monedaBs}`}>
                  <p>Precio Total: </p>
                  <p>Cantidad en Quetzales</p>
                </div>
                <div className={`${style.mesPagado_center} ${style.monedaDolar}`}>
                  <p>Precio en Dólares ($): </p>
                  <p>Cantidad en Dólares $</p>
                </div>
            </div>
        </div>
        <div className={style.contentBottom}>
            <button type='button' onClick={() => router.push('/clientes/confirmar/')} className={style.confirmBtn}>
              Confirmar
            </button>
            <p className={style.cancelarBtn} onClick={() => router.push('/clientes/pagos')}>Cancelar</p>
        </div>
    </div>
  )
}

export default CardRightDatosPagos