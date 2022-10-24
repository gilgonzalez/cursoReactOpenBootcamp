import { useEffect, useState } from "react";
import TaskComponent from "../components/pure/taskComponent";
import { NIVELES, Task } from "../models/task.class";

//Tareas mook 
const defaultTask = new Task(
  "Leer",
  "Leer el libro el caliz de fuego",
  true,
  NIVELES.BLOQUEANTE
);
const anotherTask =  new Task (
  "Escribir",
  "Escribir una redacción sobre el libro que acabo de leer",
  false,
  NIVELES.URGENTE
)

const TaskList = () => {
  //Estado inicial del componente
  const [tasks, setTasks] = useState([defaultTask, anotherTask])

  //Control del ciclo de vida del componente
  useEffect(() => {

    console.log('Task state has been modified')
  
    return () => {
      console.log('TaskList component is about to be dismounting')
    }
  }, [tasks])
  
  
  return (
    <div className="taskList">
      <h1>These are all your tasks:</h1>

      {
        tasks.map((task : Task, index)=>
          <TaskComponent task={task} key={index}/>
        )
      }

    </div>
  );
};

export default TaskList;
