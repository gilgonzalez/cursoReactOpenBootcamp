import { NIVELES, Task } from "../../models/task.class";
import * as Yup from "yup";
import { Field, Form, Formik, FormikProps } from "formik";
import ErrorMessageCustom from "../pure/ErrorMessage";
import "./form.css";

interface Props {
  add: (task: Task) => void;
  length: number;
}
const taskScheme = Yup.object().shape({
  name: Yup.string()
    .min(3, "Task name too short")
    .max(20, "Task name too long")
    .required(),
  description: Yup.string()
    .min(3, "Description too short")
    .max(50, "Desciption too long")
    .required(),
  level: Yup.string().oneOf([
    NIVELES.BLOQUEANTE,
    NIVELES.NORMAL,
    NIVELES.URGENTE,
  ]),
});

const TaskFormik = ({ add, length }: Props) => {
  const initialTaskInfo: Task = {
    name: "",
    description: "",
    completed: false,
    level: NIVELES.NORMAL,
  };
  function addTask(values: Task) {
    const newTask = new Task(
      values.name,
      values.description,
      values.completed,
      values.level
    );
    console.log(newTask);
    add(newTask);
  }
  return (
    <div>
      <Formik
        initialValues={initialTaskInfo}
        onSubmit={addTask}
        validationSchema={taskScheme}
      >
        {(props: FormikProps<Task>) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;
          return (
            <Form>
              <div className="form-outline formik-task flex-fill mt-4 d-flex justify-content-center align-items-center flex-column">
                <h3 className="mb-4 text-center">Formulario para añadir nuevas tareas</h3>
                <div className="form-floating mb-3 w-75">
                  <Field
                    type="text"
                    name="name"
                    className=" formik-input form-control"
                    id="inputName"
                    placeholder="name@example.com"
                    required
                  />
                <label htmlFor="inputName">Nombre de la tarea</label>
                {errors.name && touched.name && (
                  <ErrorMessageCustom error={errors.name} />
                )}
                </div>
                <div className="form-floating mb-3 w-75">
                  <Field
                    type="text"
                    name="description"
                    id="inputDescription"
                    className="form-control "
                    placeholder="Esto es un placeholder"
                    required
                  />
                  {errors.description && touched.description && (
                    <ErrorMessageCustom error={errors.description} />
                  )}
                  <label htmlFor="inputDescription">
                    Descripción de la tarea
                  </label>
                </div>
                <div className="form-floating w-75 ">
                  <select
                    aria-label="Floating label select example"
                    className={`form-control`}
                    name="level"
                    id="selectLevel"
                    onChange={handleChange}
                    defaultValue={NIVELES.NORMAL}
                  >
                    <option className="select-normal" value={NIVELES.NORMAL}>
                      NORMAL
                    </option>
                    <option
                      className="select-blocking"
                      value={NIVELES.BLOQUEANTE}
                    >
                      BLOQUING
                    </option>
                    <option className="select-urgent" value={NIVELES.URGENTE}>
                      URGENT
                    </option>
                  </select>

                  <label htmlFor="selectLevel" className="sr-only">
                    Priority
                  </label>
                </div>
                {errors.level && touched.level && (
                  <ErrorMessageCustom error={errors.level} />
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-2 mb-2"
                >
                  {length === 0 ? "Create your first Task" : "Add new Task"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TaskFormik;
