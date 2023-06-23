import React from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

const RegisterPage = () => {
  const { name, email, password1, password2, handlerChange, onSubmit, resetForm, isValidEmail } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={handlerChange}
          value={name}
          name="name"
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es requerido</span>}
        <input
          onChange={handlerChange}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
          className={`${ !isValidEmail(email)  && 'has-error'}`}
        />
        { !isValidEmail(email)  && <span>Email no es valido</span>}
        <input
          onChange={handlerChange}
          value={password1}
          name="password1"
          type="password"
          placeholder="password"
        />
        { password1.trim().length <= 0 && <span>Este campo es requerido</span>}
        { password1.trim().length <6  && password1.trim().length > 0 && <span>Debe tener 6 caracteres</span>}
        <input
          onChange={handlerChange}
          value={password2}
          name="password2"
          type="password"
          placeholder="repeat password"
        />
        { password1.trim().length <= 0 && <span>Este campo es requerido</span>}
        { password2.trim().length > 0 && password1 !== password2 && <span>las contraseñas debende ser iguales</span>}

        <button type="submit"> Sent </button>
        <button onClick={resetForm}> Reset Form </button>
      </form>
    </div>
  );
};

export default RegisterPage;
