import { useState } from "react";
import ContactForm from "../components/forms/ContactForm";
import InformacionContacto from "../components/pure/InformacionContacto";
import { Contacto } from "../models/contacto.class";

const defaultContacto: Contacto = {
  nombre: "Francisco Javier",
  apellido: "Gil González",
  email: "fragilgon@gmail.com",
  conectado: false,
};
const anotherContacto: Contacto = {
  nombre: "Francisco Javier",
  apellido: "García Torrejón",
  email: "fragartor@gmail.com",
  conectado: false,
};
const ContactoComponent = () => {
  const [listadoContactos, setListadoContacto] = useState([defaultContacto, anotherContacto]);

  function handleConnection(contacto:Contacto){
    const index = listadoContactos.indexOf(contacto)
    const tempContactos = [...listadoContactos]
    tempContactos[index].conectado = !tempContactos[index].conectado
    setListadoContacto(tempContactos)
  }
  function addNewContact(contacto:Contacto){
    setListadoContacto([...listadoContactos, contacto])
  }
  return (
    <>
      <div>
        {listadoContactos.map((contacto:Contacto, index)=>(
          <InformacionContacto key={index} contacto={contacto} setConnection={handleConnection}/>
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <ContactForm add={addNewContact }/>
      </div>
    </>
  );
};

export default ContactoComponent;
