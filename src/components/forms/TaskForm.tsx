import { useRef } from "react";
import { NIVELES, Task } from "../../models/task.class";
import './form.css'

interface Props {
  add: (task: Task) => void;
}

const TaskForm = ({ add }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const levelRef = useRef<HTMLSelectElement>(null);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const level = levelRef.current!.value as NIVELES;
    const newTask = new Task(
      nameRef.current!.value,
      descriptionRef.current!.value,
      false,
      level
    );
    add(newTask);
    nameRef.current!.value = "";
    descriptionRef.current!.value = "";
  }
  return (
    <form
      onSubmit={addTask}
      className="w-75 d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill mt-4 d-flex justify-content-center align-items-center flex-column">
      <h3 className='mb-4'>Formulario para añadir nuevas tareas</h3>
        <div className="form-floating mb-3 w-75">
          <input
            type="text"
            className="form-control"
            id="inputName"
            ref={nameRef}
            placeholder="name@example.com"
            required
            autoFocus
          />
          <label htmlFor="inputName">Nombre de la tarea</label>
        </div>
        <div className="form-floating mb-3 w-75">
          <input
            type="text"
            ref={descriptionRef}
            id="inputDescription"
            className="form-control "
            placeholder="Esto es un placeholder"
            required
          />
          <label htmlFor="inputDescription">Descripción de la tarea</label>
        </div>
        <div className='form-floating w-75'>
          <select
            aria-label="Floating label select example"
            className="form-select"
            name=""
            id="selectLevel"
            ref={levelRef}
            defaultValue={NIVELES.NORMAL}
          >
            <option selected value={NIVELES.NORMAL}>NORMAL</option>
            <option value={NIVELES.BLOQUEANTE}>BLOQUING</option>
            <option value={NIVELES.URGENTE}>URGENT</option>
          </select>

          <label htmlFor="selectLevel" className="sr-only">
            Priority
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block mt-2 mb-2">Add New Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
