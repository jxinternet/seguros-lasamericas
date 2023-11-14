import { connectDB } from '@/src/lib/mongodb';
import style from './listado.module.css'
import Image from 'next/image';
import ClientData from '@/src/secure/models/ClientData';
async function Listado() {
    await connectDB()
    const clientes = await ClientData.find();

  return (
    <div className={style.listado}>
      
        {clientes.map((element) => {
          return (
            <>
                <div className={style.card} key={element._id}>
                    <div className={style.cardTop}>
                        <p>Usuario Activo</p>
                        <div className={style.icons}>
                        <Image
                            priority
                            src="/edit.png"
                            height={17}
                            width={17}
                            style={{ marginRight: "10px" }}
                            alt="Editar"
                        />
                        <Image
                            priority
                            src="/trash.png"
                            height={17}
                            width={17}
                            alt="Eliminar"
                        />
                        </div>
                    </div>

                    <div className={style.dataUser}>
                        <p>{element.cidentified}</p>
                        <p>{element.name} {element.lastname}</p>
                    </div>

                    <div className={style.cardBottom}>
                        <div className={style.calendarIcon}>
                        <Image
                            priority
                            src="/calendar.png"
                            height={20}
                            width={20}
                            alt="Calendario"
                        />
                        </div>
                        <div className={style.dateCard}>
                        <p>Número de Teléfono</p>
                        <p>{element.phone}</p>
                        </div>
                    </div>
                </div>
            </>
          );
        })}
    </div>
  );
}

export default Listado