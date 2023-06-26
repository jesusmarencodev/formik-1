import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikComponents = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(10, "Debe de tener 10 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Email no tiene un formato valido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input {...getFieldProps("email")} type="email" />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit"> Sent </button>
        <button> Reset Form </button>
      </form>
    </div>
  );
};

export default FormikComponents;
