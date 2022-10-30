import { role, User } from "../../models/user.class";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FormikProps,
  yupToFormErrors,
} from "formik";
import * as Yup from "yup";
import ErrorMessageCustom from "../pure/ErrorMessage";
import Spinner from "../pure/Spinner";

interface UserValues {
  username: string;
  email: string;
  password: string;
  confirm: string;
  role: number;
}

const RegisterFormik = () => {
  const initialValues : UserValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: 0,
  };

  const registerSchema = Yup.object().shape({
    role: Yup.number().oneOf([role.ADMIN,role.USER]),
    username: Yup.string()
      .min(6, "Username must contain at least 6 characters ")
      .max(12, "Username must be shoter than 12 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password too short"),
    confirm: Yup.string()
      .when("password", {
        is: (value: string) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
      })
      .required("You must confirm the password"),
  });

  const onSubmit = async (values: User) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        {(props: FormikProps<UserValues>) => {
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
                style={{ height: "400px" }}
                className="d-flex justify-content-between align-items-stretch flex-column"
              >
                <div className="form-floating ">
                  <Field
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="nickname"
                    type="text"
                  />
                  <label htmlFor="username">Username</label>
                </div>
                {errors.username && touched.username && (
                    <ErrorMessageCustom error={errors.username}/>
                )}
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
                    <ErrorMessageCustom error={errors.email}/>
                )}
                <div className="form-floating ">
                  <Field
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="*******"
                    type="password"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {errors.password && touched.password && (
                    <ErrorMessageCustom error={errors.password}/>
                )}
                <div className="form-floating ">
                  <Field
                    className="form-control"
                    id="confirmPassword"
                    name="confirm"
                    placeholder="*******"
                    type="password"
                  />
                  <label htmlFor="confirmPassword">Confirm your password</label>
                </div>
                {errors.confirm && touched.confirm && (
                    <ErrorMessageCustom error={errors.confirm}/>
                )}
                <div className="form-floating ">
                  <select
                    aria-label="Floating label select example"
                    className={`form-control`}
                    name="role"
                    id="selectRole"
                    defaultValue={role.USER}
                    onChange={handleChange}
                  >
                    <option value={role.ADMIN}>admin</option>
                    <option value={role.USER}>user</option>
                  </select>
                  <label htmlFor="selectRole" className="sr-only">
                    Roles
                  </label>
                </div>
              <button className="btn btn-outline-primary w-25 mt-3 mb-3" type="submit">
                  Submit
              </button>
              </div>
              {isSubmitting && 
              <div className='mt-2 mb-2'>
              <Spinner />
              <p>Your datas are being submitting</p>
              </div>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
