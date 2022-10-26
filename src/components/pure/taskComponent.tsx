import { useEffect } from "react";
import { NIVELES, Task } from "../../models/task.class";
import "../../styles/task.scss";

interface Props {
  task: Task;
  complete: (task:Task)=>void,
  deleteTask:(task:Task)=> void
}

const TaskComponent = ({ task, complete, deleteTask }: Props) => {
  useEffect(() => {
    console.log("Task created");

    return () => {
      console.log(`Task ${task.name} is about to be dismounting`);
    };
  }, [task]);

  /**Return a Badge based in the level of the task */
  function taskLevelBadge(){
    switch(task.level){
      case NIVELES.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-info'>{task.level}</span>
          </h6>
        )
      case NIVELES.BLOQUEANTE:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        )
      case NIVELES.URGENTE:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        )
      default:
        break;
    }
  }
  /**Return the toggle depending on the state of the task [completed, pending] */
  function taskIconCompleted(){
    if (task.completed) {
      return (<i onClick={()=>complete(task)} className="bi bi-toggle-on  ms-2 task-action" style={{color:'green', fontWeight:'bold'}}></i>)
    } 
    else 
    {
     return (<i onClick={()=>complete(task)} className="bi bi-toggle-off  ms-2 task-action" style={{color:'grey', fontWeight:'bold'}}></i>)
    }
  }

  return (
    <tr className="fw-normal" >
      <th >
        <span className='ms-1'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span >{task.description}</span>
      </td>
      <td>
        {/**TODO: sustituir por badge */}
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
        {/**TODO: sustituir por iconos */}
        {taskIconCompleted()}
        <i className="bi-trash ms-2 task-action" onClick={()=>deleteTask(task)} style={{color:'tomato', fontSize:'large'}}></i>
      </td>
    </tr>
  );
};

export default TaskComponent;

/**<div className={`card-task ${task.completed? 'completed':'undone'}`}>
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
    </div>*/
