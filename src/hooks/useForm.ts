import { useState } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const resetForm = () =>{
    setFormData(initState);
  }

  return {
    ...formData,
    handlerChange,
    onSubmit,
    resetForm,
  };
};
