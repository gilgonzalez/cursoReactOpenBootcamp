
import { Task } from "../../models/task.class";

interface Props {
  task: Task;
}

const TaskComponent = ({ task }: Props) => {
  return (
    <div className={`card-task ${task.completed? 'completed':'undone'}`}>
      <h2> {task.name}</h2>
      <hr />
      <h3>{task.description}</h3>
      <h4>{task.level}</h4>
      <h5>
        This task is : {task.completed ? 'Completed': 'Uncompleted'}
      </h5>
      <h1 className={`${task.completed ? 'done': 'nodone'}`}>
      {
        task.completed ? 'Tarea completada': 'Tarea incompleta'
      }
      </h1>
    </div>
  );
};

export default TaskComponent;
