/**Ejemplo de clase funcional y componente funcional controlando cuando el componente desaparece */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount(): void {
        console.log("Comportamiento antes de que el componente se destruya, mensaje desde CLASE")
    }
  render() {
    return (
      <div>WillUnmount</div>
    )
  }
}


export const WillUnmountHook = () => {

    useEffect(() => {
      //para replicar el comportamiento del WILLUNMOUNT, en esta parte no es necesario poner nada
    
      return () => {
        /**Aquí estará el comportamiento que se realizará cuando el componente se vaya a destruir */
      }
    }, [])
    

  return (
    <div>WillUnmountHook</div>
  )
}

export default WillUnmountHook
