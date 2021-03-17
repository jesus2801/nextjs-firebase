import { LoginState } from '../interfaces/states';
import validate from '../functions/validate';

export default function validateLogin(values: LoginState) {
  let errors: any = {};

  if (values.mail.trim() === '') {
    errors.mail = 'Please the Email is required';
  } else if (!validate.isEmail(values.mail)) {
    errors.mail = 'Please enter a valid email';
  }

  if (values.password.trim() === '') {
    errors.password = 'Please the password is required';
  } else if (values.password.trim().length < 6) {
    errors.password =
      'Please the password has to be 6 or more characters';
  }

  return errors;
}