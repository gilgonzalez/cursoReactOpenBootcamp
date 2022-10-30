import React, { useEffect, useState } from "react";
import TaskForm from "../forms/TaskForm";
import TaskComponent from "../pure/taskComponent";
import { NIVELES, Task } from "../../models/task.class";
import './prueba.css'
import Spinner from "../pure/Spinner";
import TaskFormik from "../forms/TaskFormik";

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

    setTimeout(()=>{
      setLoading(false);
    },3000)

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
  function addTask(task: Task) {
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }
  function tableTask(){
    return (
      <table className="table table-hover table-bordered border-dark  ">
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
            {/**.filter((task:Task)=>task.completed ===true) */}
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
    )
  }
  /**PARA RENDERIZAR UN COMPONENTE COMO UNA FUNCION ANONIMA HAY QUE UTILIZAR EL TAG */
  const TableTasks = ()=> {
    return (
      <table className="table table-hover table-bordered border-dark  ">
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
            {/**.filter((task:Task)=>task.completed ===true) */}
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
    )
  }
  //backgroundRepeat:'space', backgroundImage:'url(https://www.freeiconspng.com/uploads/pikachu-png-icon-6.png)'
  const EmptyTaskList = ()=> {
    return (
      <div >
        <h3>There is no elements in the task list</h3>
        <div className='prueba'>
          <div className='prueba-blur mb-1'>
            <h6>Estoy usando backdrop filter blur</h6>
          </div>
          <div className='prueba-invert mt-2'>
            <h6>Estoy usando backdrop filter invert</h6>
          </div>
          <div className='prueba-sepia mt-2'>
            <h6>Estoy usando backdrop filter contraste</h6>
          </div>

        </div>
      </div>
    )
  }
  return (
    <div className="row ">
      <div className="taskList d-flex flex-column justify-content-start col-12 col-sm-12 col-md-6 col-lg-6">
       <h1>Listado de Tareas</h1>
        {tasks.length === 0 || loading ? (<>
          <Spinner/>
          <EmptyTaskList/>
        </>
        ) : <TableTasks/> }
      </div>
      <div
        className="col-12 col-sm-12 col-md-5 col-lg-5 ms-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TaskFormik add={addTask} length={tasks.length}/>
      </div>
        {/* <TaskForm add={addTask} length={tasks.length} /> */}
    </div>
  );
};

export default TaskList;
