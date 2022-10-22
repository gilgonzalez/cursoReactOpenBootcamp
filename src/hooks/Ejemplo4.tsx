/**Ejemplo para entender el uso de props.children */

import React from 'react'

interface Props {
    nombre: string;
    children : JSX.Element | JSX.Element[]
}

const Ejemplo4 = (props : Props) => {
  return (
    <div className="ejemplo4">
        <h1>Ejemplo de Children Props</h1>
        <h2>
            Nombre: {props.nombre}
        </h2>
        {/**props.children renderizará por defecto
         * aquelllo que se encuentre entre las etiquetas de apertura y cierre
         * de este componente desde el componente de orden superior
         */}
         {props.children}
    </div>
  )
}

export default Ejemplo4