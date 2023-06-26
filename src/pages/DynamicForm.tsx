import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";

import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if(!input.validations) continue;

  let schema = Yup.string();
  
  for (const rule of input.validations) {
    if(rule.type ==='required') {
      schema = schema.required('This field is required');
    }
    if(rule.type ==='minLength') {
      schema = schema.min((rule as any).value || 1, `a minimum of ${(rule as any).value || 2} characters is required`);
    }
    if(rule.type ==='email') {
      schema = schema.email('check the email format');
    }
  }

  requiredFields[input.name] = schema;

  
}

const validationSchema = Yup.object({...requiredFields});



export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {

              if(type ==='input' || type ==='password' || type ==='email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }else if(type==='select'){
                return(
                  <MySelect key={name} label={label} name={name}>
                    <option value="" >Select an option</option>
                    {options?.map((opt)=>(
                      <option key={opt.id} value={opt.id} >{opt.label}</option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(` Type ${type} isn't supported`)
            })}

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
