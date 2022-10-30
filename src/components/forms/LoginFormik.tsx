import { Formik, Field, Form, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Credentials {
  email: string;
  password: string;
}


const loginScheme = Yup.object().shape({
  email: Yup.string()
    .email("email format is invalid")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials: Credentials = {
    email: "",
    password: "",
  };
  const onSubmit = async (values: Credentials) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
  };

  

  return (
    <div>
      <Formik
        initialValues={initialCredentials}
        onSubmit={onSubmit}
        validationSchema={loginScheme}
      >
        {/**OBTENIENDO PROPIEDADES DE FORMIK */}

        {(props: FormikProps<Credentials>) => {
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
              <div
                style={{ height: "200px" }}
                className="d-flex justify-content-between align-items-stretch flex-column"
              >
                <div className="form-floating ">
                  <Field
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                {errors.email && touched.email && (
                  <>
                    <div className="error">
                      <p>{errors.email}</p>
                    </div>
                    <ErrorMessage name={"email"}></ErrorMessage>
                  </>
                )}
                <div className="form-floating">
                  <Field
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {errors.password && touched.password && (
                  <>
                    <div className="error">
                      <p>{errors.password}</p>
                    </div>
                    <ErrorMessage name={"email"}></ErrorMessage>
                  </>
                )}
                <button className="btn btn-outline-primary w-25" type="submit">
                  Submit
                </button>
              </div>
              {isSubmitting && <p>Your datas are being submitting</p>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
