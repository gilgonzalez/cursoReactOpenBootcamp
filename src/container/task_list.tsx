import { useEffect, useState } from "react";
import TaskForm from "../components/forms/TaskForm";
import TaskComponent from "../components/pure/taskComponent";
import { NIVELES, Task } from "../models/task.class";

//Tareas mook
const defaultTask = new Task(
  "Leer",
  "Leer el libro el caliz de fuego",
  true,
  NIVELES.BLOQUEANTE
);
const anotherTask = new Task(
  "Escribir",
  "Escribir una redacción sobre el libro que acabo de leer",
  true,
  NIVELES.URGENTE
);
const thirdTask = new Task(
  "Copiar",
  "Copiar toda la mierda de bootstrap",
  false,
  NIVELES.NORMAL
);

const bodyCard = {
  position: "relative" as "relative",
  height: "fit-content",
};

const TaskList = () => {
  //Estado inicial del componente
  const [tasks, setTasks] = useState([defaultTask, anotherTask, thirdTask]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task state has been modified");
    console.log("Cargando los datos");
    setLoading(false);

    return () => {
      console.log("TaskList component is about to be dismounting");
    };
  }, [tasks]);

  function completeTask(task: Task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }
  function deleteTask(task: Task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }
  function addTask(task:Task){
    const tempTask = [...tasks]
    tempTask.push(task)
    setTasks(tempTask)
  }

  return (
    <div className="taskList col-11">
      <h1>Listado de Tareas</h1>
      
        {/**CARD HEADER */}
        
        {/**CARD BODY */}
        
          <table className="table table-hover table-bordered border-dark ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/**TODO: ITERAR SOBRE UNA LISTA DE TAREAS */}
              {tasks.map((task: Task, index) => (
                <TaskComponent
                  task={task}
                  key={index}
                  complete={completeTask}
                  deleteTask={deleteTask}
                />
              ))}
            </tbody>
          </table>
        
      
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <TaskForm add={addTask}/>
      </div>
    </div>
  );
};

export default TaskList;
