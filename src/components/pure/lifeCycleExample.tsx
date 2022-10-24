/**
 * Ejemplo de componente de tipo clase
 * que dispone de los métodos de ciclo de vida
 */

import React, { Component } from "react";

export default class lifeCycleExample extends Component {
  constructor(props: any) {
    super(props);
    console.log("CONSTRUCTOR: se está construyendo el componente");
  }

  componentWillMount(): void {
    console.log("WILLMOUNT: justo antes del montaje del componente");
  }
  componentDidMount(): void {
    console.log("DIDMOUNT: el componente ya se ha montado");
  }
  componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    console.log(
      "WILLRECEIVEPROPS: se ejecuta en el caso de recibir props nuevas"
    );
  }
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    /**Sirve para controlar si el componente debe actualizarse o no
     * se le ponen una serie de condiciones y devolverá true o false en consecuencia
     */
    return true;
  }
  componentWillUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): void {
    console.log("WILLUPDATE: se ejecuta justo antes de actualizarse");
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("DIDUPDATE: se ejecuta justo después de actulizarse");
  }
  componentWillUnmount(): void {
    console.log("WILLUNMONUNT: se ejecuta justo antes de destruirse");
  }

  render() {
    return (
        <div>
            <h1>
                Ejemplo de los ciclos de vida de un componente
            </h1>
        </div>
    );
  }
}
