import TaskComponent from "../components/pure/taskComponent";
import { NIVELES, Task } from "../models/task.class";

const TaskList = () => {
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
  return (
    <div className="taskList">
      <h1>These are all your tasks:</h1>
      <TaskComponent task={defaultTask} />
      <TaskComponent task={anotherTask} />
    </div>
  );
};

export default TaskList;
