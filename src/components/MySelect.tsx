import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select  {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class" />
    </>
  );
};

export default MySelect;
