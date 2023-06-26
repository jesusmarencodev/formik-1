import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  name: string;
  label: string;
  [x: string]: any;
}

export const MyCheckBox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class" />
{/*       {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};

export default MyCheckBox;
