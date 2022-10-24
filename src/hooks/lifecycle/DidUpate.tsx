/**Ejemplo de DidUpdate con clase funcional y con componente funcional */

import React, { Component, useEffect } from 'react'

export class DidUpate extends Component {

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("Se ha actualizado el componente, mensaje desde COMPONENTDIDUPDATE")
    }
  render() {
    return (
      <div>DidUpate</div>
    )
  }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("Se ha actualizado el componente, mensaje desde USEEFFECT")
    })
    
  return (
    <div>DidUpdateHook</div>
  )
}

