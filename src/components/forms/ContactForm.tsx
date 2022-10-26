import { useRef } from "react";
import { Contacto } from "../../models/contacto.class";

interface Props{
    add : (contacto:Contacto)=>void
}

const ContactForm = ({add}:Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const apellidoRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function addContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newContact = new Contacto(
      nameRef.current!.value,
      apellidoRef.current!.value,
      emailRef.current!.value,
      false
    );
    add(newContact);
  }
  return (
    <form
      onSubmit={addContact}
      className="contact w-75 d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill mt-4 d-flex justify-content-center align-items-center flex-column">
        <h3 className="mb-4">Formulario para añadir nuevo contacto</h3>
        <div className="form-floating mb-3 w-75">
          <input
            type="text"
            className="form-control"
            id="inputName"
            ref={nameRef}
            placeholder="name@example.com"
            required
            autoFocus
          />
          <label htmlFor="inputName">Nombre </label>
        </div>
        <div className="form-floating mb-3 w-75">
          <input
            type="text"
            ref={apellidoRef}
            id="inputDescription"
            className="form-control "
            placeholder="Esto es un placeholder"
            required
          />
          <label htmlFor="inputDescription">Apellido</label>
        </div>
        <div className="form-floating mb-3 w-75">
          <input
            type="email"
            ref={emailRef}
            id="inputDescription"
            className="form-control "
            placeholder="Esto es un placeholder"
            required
          />
          <label htmlFor="inputDescription">Email</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block mt-2 mb-2"
        >
          Añadir Nuevo Contacto
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
