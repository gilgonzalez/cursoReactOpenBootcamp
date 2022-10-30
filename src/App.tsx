import TaskList from "./components/container/task_list";
import "./index.css";
import OptionalRender from "./components/pure/OptionalRender";
import RegisterFormik from "./components/forms/RegisterFormik";

function App() {
  return (
    <div className="App">
      {/* <ExampleCycleLife/>
      <hr />
      <UseState/>
      <hr />
      <UseStateCombinado/>
      <hr />
      <UseStateUseContext/>
      <hr />
      <Ejemplo4 nombre='Francisco Javier Gil'  > 
        <h3>Este es un children H3</h3>
        <p>Este es un children parrafo</p>
        <div>
          <h4>Esto es otro children h4 dentro de un DIV</h4>
        </div>
      </Ejemplo4>
       
      {/* <EjemploEstilos name='Gil'/> */}
      {/* <ContactoComponent />  */}
      <TaskList />
      {/* <FatherExample/> */}
      <hr />
      <OptionalRender />
      <hr />

      <hr />
      {/* <LoginFormik/> */}
      <RegisterFormik/>
      {/* <ContenedorLupa/>  */}
    </div>
  );
}

export default App;
