import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import MyTextInput from "../components/MyTextInput";
import MySelect from "../components/MySelect";
import MyCheckBox from "../components/MyCheckBox";

const FormikAbstraction = () => {
  return (
    <div>
      <h1>FormikAbstraction</h1>

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
            <MyTextInput
              name={"firstName"}
              label={"First Name"}
              placeholder="First Name"
            />
            <MyTextInput
              name={"lastName"}
              label={"Last Name"}
              placeholder="Last Name"
            />
            <MyTextInput name={"email"} label={"Email"} placeholder="Email" />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-junior</option>
            </MySelect>
            <MyCheckBox name="terms" label="Terms & conditions" />
            <button type="submit"> Sent </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstraction;
