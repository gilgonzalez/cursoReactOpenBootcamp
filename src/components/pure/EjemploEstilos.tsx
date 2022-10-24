/**Ejemplo de defición de estilos en constantes */

import { useState } from "react";

const loggedStyle = {
  color: "green",
  backgroundColor: "blanchedalmond",
  borderRadius: "20px",
  width: "fit-content",
  padding: "20px",
};
const unloggedStyle = {
  color: "red",
  fontWeight: "bolder",
  textDecoration: "underline",
  backgroundColor: "black",
  borderRadius: "20px",
  width: "fit-content",
  padding: "20px",
};

interface Props {
    name : string
}

const EjemploEstilos = ({name}:Props) => {
  const [logged, setLogged] = useState(false);

  function handleLog() {
    setLogged(!logged);
  }

  const loggeado = <p>Hola {name}</p>;
  const noLoggeado = <p>Pulsa "login" para conectarte</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      <h3>Estado de conexión del usuario</h3>
      {logged ? loggeado : noLoggeado}
      <button onClick={handleLog}>{logged ? "Desconetar" : "Conectar"}</button>
    </div>
  );
};

export default EjemploEstilos;
