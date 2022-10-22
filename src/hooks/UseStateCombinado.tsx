import { useState, useRef, useEffect } from "react";
/**Ejemplo de uso de :
 * - UseState
 * - UseRef
 * - UseEffect
 */

const UseStateCombinado = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  /**Creación de una referencia con useRef para asociar una variable
   * con un elemente del DOM del componente HTML
   */
  const miRef = useRef<HTMLHeadingElement>(null);

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 1);
  }
  function modificarMiRef(){
    miRef.current!.innerText = 'otro texto';
  }
  /**
   * Utilizando UseEffect
   */
  //Este useEffect se ejecutaría siempre que haya cambios
//   useEffect(() => {
//     console.log("Cambio en el estado del componente");
//     console.log("Mostrando referencia a elemento del DOM :", miRef)
  
//   })

  useEffect(() => {
    console.log("Cambio en el estado del CONTADOR1");
     console.log("Mostrando referencia a elemento del DOM :", miRef)
  }, [contador1])
  useEffect(() => {
    console.log("Cambio en el estado del CONTADOR2");
     console.log("Mostrando referencia a elemento del DOM :", miRef)
  }, [contador2])
  
  

  return (
    <div className="ejemplo2">
      <div>UseStateCombinado</div>
      <div>
        <h2>Contadores</h2>
        <p>Contador 1 -- {contador1}</p>
        <p>Contador 2 -- {contador2}</p>

        <h4 ref={miRef}>Ejemplo del elemento referencido</h4>
      </div>
      <div>
        <h2>Botones para cambiar los contadores</h2>
        <button onClick={incrementar1}>Contador 1</button>
        <button onClick={incrementar2}>Contador 2</button>
        <button onClick={modificarMiRef}>Cambiar MIREF</button>
      </div>
    </div>
  );
};

export default UseStateCombinado;
