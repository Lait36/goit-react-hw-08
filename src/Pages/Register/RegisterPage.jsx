import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import css from "./RegisterPage.module.css";
import * as Yup from "yup";
import { register } from "../../redux/Auth/operations";

export default function Navigation() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 letters")
      .max(30, "Maximum 30 letters")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <div className={css.container}>
          <div className={css.input}>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" autoComplete="off" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div className={css.input}>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" autoComplete="off" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className={css.input}>
            <label htmlFor="password">Password</label>
            <Field type="text" name="password" autoComplete="off" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className={css.button}>
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
