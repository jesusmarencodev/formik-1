import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import MyTextInput from "../components/MyTextInput";

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe de tener 3 caracteres o mas")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato valido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput name={"name"} label={"Name"} placeholder=" Name" />
            <MyTextInput name={"email"} label={"Email"} placeholder="j@j.com" type='email' />
            <MyTextInput
              name={"password1"}
              label={"Password"}
              placeholder="******"
            />
            <MyTextInput
              name={"password2"}
              label={"Repita el password"}
              placeholder="******"
            />

            <button type="submit"> Sent </button>
            <button onClick={handleReset}> Reset Form </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
