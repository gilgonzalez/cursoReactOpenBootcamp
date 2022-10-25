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
  height: "500px",
};

const TaskList = () => {
  //Estado inicial del componente
  const [tasks, setTasks] = useState([defaultTask, anotherTask,thirdTask]);
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

  return (
    <div className="taskList col-12">
      <h1>Task App</h1>
      <div className="card me-4">
        {/**CARD HEADER */}
        <div className="card-header p-3 d-flex justify-content-center">
          <h5>Your TaskList</h5>
        </div>
        {/**CARD BODY */}
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={bodyCard}
        >
          <table className="table table-hover table-bordered border-dark">
            <thead className="table-dark">
              <tr>
                <th scope="col" >Title</th>
                <th scope="col" >Description</th>
                <th scope="col" >Priority</th>
                <th scope="col" >Actions</th>
              </tr>
            </thead>
            <tbody>
              {/**TODO: ITERAR SOBRE UNA LISTA DE TAREAS */}
              {tasks.map((task: Task, index) => (
                <TaskComponent task={task} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
