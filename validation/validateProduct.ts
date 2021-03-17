import { ProductState } from '../interfaces/states';
import validate from '../functions/validate';

export default function validateLogin(values: ProductState) {
  let errors: any = {};

  //validate fields
  if (values.name.trim() === '') {
    errors.name = 'Please the name is required';
  }

  if (values.company.trim() === '') {
    errors.company = 'Please the company is required';
  }

  if (values.url.trim() === '') {
    errors.url = 'Please the URL is required';
  } else if (!validate.isURL(values.url)) {
    errors.url = 'Please enter a valid URL';
  }

  if (values.description.trim() === '') {
    errors.description = 'Please the description is required';
  }

  if (values.price <= 0) {
    errors.price = 'Please the price is required';
  }

  if (values.category.trim() === '') {
    errors.category = 'Please the category is required';
  }

  return errors;
}
