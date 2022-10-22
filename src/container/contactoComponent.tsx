import { useState } from "react";
import InformacionContacto from "../components/pure/InformacionContacto";
import { Contacto } from "../models/contacto.class";

const ContactoComponent = () => {
  const defaultContacto: Contacto = {
    nombre: "Francisco Javier",
    apellido: "Gil González",
    email: "fragilgon@gmail.com",
    conectado: false,
  };

  const handleConnect = () => {
    setContacto({ ...contacto, conectado: !contacto.conectado });
    console.log(contacto.conectado);
  };

  const [contacto, setContacto] = useState(defaultContacto);

  return (
    <div>
      <h1>Información del contacto</h1>
      <InformacionContacto contacto={contacto} />
      <button onClick={handleConnect}>
        {contacto.conectado ? <span>Desconectar</span> : <span>Conectar</span>}
      </button>
    </div>
  );
};

export default ContactoComponent;
