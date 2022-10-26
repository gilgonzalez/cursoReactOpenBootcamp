import { Contacto } from "../../models/contacto.class";

interface Props {
  contacto: Contacto;
  setConnection : (contacto:Contacto)=>void
}
const InformacionContacto = ({ contacto, setConnection }: Props) => {
  return (
      <div className="card mt-3">
      <div className="card-header">
        Información del contacto
      </div>
      <div className="card-body">
        <h5 className="card-title">{contacto.nombre} {contacto.apellido}</h5>
        <p className="card-text">{contacto.email}</p>
        {contacto.conectado ? (
        <div className="btn btn-success">
          <h3>Conectado</h3>
        </div>
      ) : (
        <div className="btn btn-danger">
          <h3>Desconectado</h3>
        </div>
      )}
      </div>
      <div className='d-flex justify-content-center mb-3'>
        <button onClick={()=>setConnection(contacto)} className={`btn ${contacto.conectado ? 'btn-danger':'btn-success' }  btn-block w-25`}>{contacto.conectado ? 'Desconectar':'Conectar'}</button>
      </div>
    </div>

  );
};

export default InformacionContacto;
