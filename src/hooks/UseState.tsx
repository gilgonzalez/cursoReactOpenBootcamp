/** Ejemplo de uso del hook UseState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook, y además, poder modificarlo */

import { useState } from "react";

type Persona = {
  nombre: string;
  email: string;
};

const EjemploUseState = () => {
  //Valor inicial del contador
  const valorInicial = 0;

  //Valor inicial de un objeto
  const personaInicial: Persona = {
    nombre: "Gil",
    email: "fragilgon@gmail.com",
  };

  /**Ahora vamos a utilizar el useState para hacer cambios en el estado inicial de ambas
   * variables
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**Metodos para cambiar el estado de contador y persona */

  /**
   * Función para actualizar el estado privado que tiene el contador   AUMENTAR
   */
  function incrementarContador() {
    setContador(contador + 1);
  }
  /**
   * Funcion para actualizar el estado de perona MODIFICAR
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Pepe",
      email: "pepe@gmail.com",
    });
  }
  return (
    <div className="ejemplo1">
      <h2>Esto es un ejemplo de uso del Use State</h2>
      <div>
        <p>
          Contador: <span>{contador}</span>
        </p>
      </div>
      <div>
        <h3>Datos de Persona</h3>
        <p>Nombre: {persona.nombre}</p>
        <p>Email: {persona.email}</p>
      </div>
      {/**Bloque de botones para realizar actualizaciones */}
      <div>
        <h3>Actualizadores</h3>
        <button onClick={incrementarContador}>Incrementar</button>
        <button onClick={actualizarPersona}>Cambiar persona</button>
      </div>
    </div>
  );
};

export default EjemploUseState;
