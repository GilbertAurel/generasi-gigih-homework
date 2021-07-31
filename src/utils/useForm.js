import { useState } from 'react';

export function useForm(initialValues) {
  const [value, setValues] = useState(initialValues);

  const changeHandler = (e) => setValues({ ...value, [e.target.name]: e.target.value });

  const resetForm = (newValue) => setValues(newValue);

  return [value, changeHandler, resetForm];
}
