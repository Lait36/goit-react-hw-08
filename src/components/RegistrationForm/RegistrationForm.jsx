import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
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
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" autoComplete="off" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" autoComplete="off" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="text" name="password" autoComplete="off" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
}
