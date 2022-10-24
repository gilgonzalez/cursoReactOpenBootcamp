import { useEffect } from "react";
import { Task } from "../../models/task.class";
import '../../styles/task.scss'

interface Props {
  task: Task;
}

const TaskComponent = ({ task }: Props) => {

  useEffect(() => {
    console.log('Task created')
  
    return () => {
      console.log(`Task ${task.name} is about to be dismounting`)
    }
  }, [task])
  
  return (
    <div className={`card-task ${task.completed? 'completed':'undone'}`}>
      <h2 className='task-name'> {task.name}</h2>

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
