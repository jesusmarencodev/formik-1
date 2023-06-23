import React from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

const RegisterPage = () => {
  const { name, email, password1, password2, handlerChange, onSubmit, resetForm } = useForm({
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
        />
        <input
          onChange={handlerChange}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handlerChange}
          value={password1}
          name="password1"
          type="password"
          placeholder="password"
        />
        <input
          onChange={handlerChange}
          value={password2}
          name="password2"
          type="text"
          placeholder="repeat password"
        />

        <button type="submit"> Sent </button>
        <button onClick={resetForm}> Reset Form </button>
      </form>
    </div>
  );
};

export default RegisterPage;
