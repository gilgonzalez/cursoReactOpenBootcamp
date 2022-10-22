import ContactoComponent from './container/contactoComponent'
import TaskList from './container/task_list'
import './index.css'
import { Contacto } from './models/contacto.class'




function App() {


  return (
    <div className='App'>
      <ContactoComponent/>
      <hr />
      <TaskList/>

    </div>
  )
}

export default App
