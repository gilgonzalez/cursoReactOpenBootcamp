import React from "react";
import { useState, useContext } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext({
    token: '',
    sesion: 0
});

const Componente1 = () => {
    const state = useContext(miContexto)
  return (
    <div className="ejemplo3">
        <h1>
            El token es : {state.token}
        </h1>
        {/**Aquí tendríamos al componente 2 */}
        <Componente2></Componente2>
    </div>
  ); 
};


const Componente2 = () => {
    const state = useContext(miContexto);
  return (
    <div>
        <h2>
            La sesión es : {state.sesion}
        </h2>
    </div>
  )
}

const UseStateUseContext = () => {

    const estadoInicial = {
        token : '12354654',
        sesion: 0
    }

    //Vamos a crear el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSesionData({
            token:'jtsdwa3423',
            sesion: sesionData.sesion + 1 
        })
    }
  return (
    <miContexto.Provider value = {sesionData}> 
        {/**TODO LO QUE ESTÉ ENVUELTO PUEDE UTILIZAR LOS DATOS DE SESIONDATA */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}

export default UseStateUseContext

