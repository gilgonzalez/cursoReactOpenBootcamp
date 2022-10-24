import { useEffect } from "react";

export default function ExampleCycleLife() {
  useEffect(() => {
    console.log("El componente se acaba de montar");

    // const intervalId = setInterval(() => {
    //     document.title = new Date().toDateString();
    //   console.log("Actualización del componente");
    // }, 5000);
    return () => {
      console.log("El componente se va a destruir");
      document.title = 'Tiempo detenido'
      //clearInterval(intervalId);
    };
  }, []);

  return (
     <div className="ejemplo-life-cycle">
    ExampleCycleLife
    </div>
);
}
