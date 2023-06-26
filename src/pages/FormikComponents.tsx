import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>FormikComponents</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opcion no esta permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component="span" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component="span" name="lastName" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage component="span" name="email" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-junior</option>
            </Field>
            <ErrorMessage component="span" name="jobType" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage component="span" name="terms" />

            <button type="submit"> Sent </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
