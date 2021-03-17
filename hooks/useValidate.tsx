import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const useValidate = (
  initState: any,
  validate: Function,
  fn: Function
) => {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const haveErrors: boolean = Object.keys(errors).length !== 0;
      if (!haveErrors) {
        // funtion that is executed in component
        fn();
      }
      setSubmitForm(false);
    }
  }, [submitForm]);

  //
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  //when user submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setSubmitForm(true);
  };

  return {
    values,
    errors,
    submitForm,
    handleSubmit,
    handleChange,
  };
};

export default useValidate;
