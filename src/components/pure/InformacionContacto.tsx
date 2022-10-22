import { Contacto } from "../../models/contacto.class"

interface Props{
    contacto : Contacto
}
const InformacionContacto = ({contacto}:Props) => {
  return (
    <div>
        <label >Nombre</label>
        <p >{contacto.nombre}</p>
        <label >Apellido</label>
        <p >{contacto.apellido}</p>
        <label >Email</label>
        <p >{contacto.email}</p>
        {
            contacto.conectado ? (
                <div className="conectado">
                    <h3>Conectado</h3>
                </div>
            ):(
                <div className="desconectado">
                    <h3>Desconectado</h3>
                </div>
            )
        }
    </div>
  )
}

export default InformacionContacto