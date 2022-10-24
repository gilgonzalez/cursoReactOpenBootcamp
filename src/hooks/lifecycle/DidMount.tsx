/**Uso del ciclo de vida del método DIDMOUNT */
import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(): void {
        console.log('ComponentDidMount() desde la clase')
    }

  render() {
    return (
      <div>
        <h1>DID MOUNT</h1>
      </div>
    )
  }
}


export const DidMountHook = () => {
    useEffect(() => {
      console.log("Mismo comportamiento que component DidMount, utilizando useEffect")
    }, [])
    

  return (
    <div>
        <h1>DidMount con useEffect</h1>
    </div>
  )
}



