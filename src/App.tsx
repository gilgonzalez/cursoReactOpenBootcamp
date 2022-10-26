import EjemploEstilos from './components/pure/EjemploEstilos';
import ContactoComponent from './container/contactoComponent'
import FatherExample from './container/FatherExample';
import TaskList from './container/task_list'
import Ejemplo4 from './hooks/Ejemplo4';
import ExampleCycleLife from './hooks/lifecycle/ExampleCycleLife';
import UseState from './hooks/UseState';
import UseStateCombinado from './hooks/UseStateCombinado';
import UseStateUseContext from './hooks/UseStateUseContext';
import './index.css'
import { Contacto } from './models/contacto.class'




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
      <ContactoComponent /> 
      <TaskList />
      {/* <FatherExample/> */}
    </div>
  );
}

export default App
