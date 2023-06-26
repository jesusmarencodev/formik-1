import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  name: string;
  placeholder?: string;
  label: string;
  type?: "text" | "email" | "password";
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class" />
    </>
  );
};

export default MyTextInput;
