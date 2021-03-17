import React, { useEffect, useState, useContext, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { v4 } from 'uuid';

import Layout from '../components/layout/Layout';
import FormInput from '../components/UI/FormInput';
import FormFileInput from '../components/UI/FormFileInput';

import helpers from '../functions/index';
import useValidate from '../hooks/useValidate';

import { ProductState } from '../interfaces/states';
import { FirebaseCtx, Product } from '../interfaces';

import validateProduct from '../validation/validateProduct';
import { FirebaseContext } from '../firebase';

import Styles from '../styles/components/out/Forms';
import FormTextarea from '../components/UI/FormTextarea';
import validate from '../functions/validate';

const NewProduct = () => {
  //image file state
  const [image, setImage]: any = useState(null);

  //initial state of component
  const INIT_STATE: ProductState = {
    name: '',
    company: '',
    url: '',
    description: '',
    price: 0,
    category: '',
  };

  //state for the next form
  const [next, setNext] = useState(false);

  //firebase context
  const { user, firebase }: FirebaseCtx = useContext(FirebaseContext);

  //routing state
  const Router = useRouter();

  //use the validate hook
  const {
    values,
    errors,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidate(INIT_STATE, validateProduct, createProduct);

  //when user submit form
  useEffect(() => {
    const errs: Array<any> = Object.values(errors);
    if (errs.length > 0) {
      Swal.fire('Error!', errs[0], 'error');
    }
  }, [submitForm]);

  // destructuring values of state
  const { name, company, url, description, price, category } = values;

  useEffect(() => {
    const fieldSets = document.querySelectorAll('form fieldset')!;
    if (next) {
      if (validate.isEmpty(name, company, url)) {
        Swal.fire('Error!', 'Please fill in all fields', 'error');
        setNext(false);
        return;
      }
      if (!validate.isURL(url)) {
        Swal.fire('Error!', 'Please enter a valid URL', 'error');
        setNext(false);
        return;
      }
      if (!image) {
        Swal.fire(
          'Error!',
          'Please the image of your product is required',
          'error'
        );
        setNext(false);
        return;
      }
      fieldSets[0].setAttribute('disabled', 'true');
      fieldSets[1].removeAttribute('disabled');
      return;
    }

    fieldSets[0].removeAttribute('disabled');
    fieldSets[1].setAttribute('disabled', 'true');
  }, [next]);

  //after success validation
  async function createProduct(): Promise<void> {
    try {
      //start loading image
      helpers.handleLoading(true, 'Uploading image');

      // uploading image to firebase
      const response = await firebase.storageRef
        .child('products/' + v4())
        .put(image, {
          contentType: image.type,
        });

      //get image url
      const imageUrl = await response.ref.getDownloadURL();

      // uploading image finished
      helpers.handleLoading(false);
      //start uploading product
      helpers.handleLoading(true, 'Uploading product');

      //TODO: poner este componente en privado
      const newProduct: Product = {
        name,
        company,
        url,
        user: user.uid,
        image: imageUrl,
        description,
        price,
        category,
        votes: 0,
        comments: [],
        created: Date.now(),
        hearts: 0,
      };

      // uploading product to firebase
      await firebase.db.collection('products').add(newProduct);
      helpers.handleLoading(false);

      //success product uploaded
      helpers.productCreated(Router);
    } catch (e) {
      //failed product uploaded
      helpers.handleLoading(false);
      Swal.fire('Error!', e.message, 'error');
    }
  }

  const hadleFileChange = (e: FormEvent<HTMLInputElement>) => {
    const fileText: HTMLParagraphElement = document.getElementById(
      'file-text'
    ) as HTMLParagraphElement;
    const input: HTMLInputElement = e.currentTarget;
    const file: File = input.files![0];

    if (file.size > 3000000) {
      Swal.fire(
        'Error!',
        'Your file has exceeded the maximum allowed limit (3MB)',
        'error'
      );
      fileText.innerText = 'No file selected';
      input.value = '';
      setImage(null);
      return;
    }

    if (!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(file.name)) {
      Swal.fire(
        'Error!',
        'The type of file entered is not allowed',
        'error'
      );
      fileText.innerText = 'No file selected';
      input.value = '';
      setImage(null);
      return;
    }

    fileText.innerText = file.name;
    setImage(file);
  };

  //the html that is render on user screen
  return (
    <Layout>
      <h2>NEW PRODUCT</h2>
      <form onSubmit={handleSubmit}>
        <Styles.FieldSet>
          <legend>About Product Creator</legend>

          <FormInput
            name="name"
            label="Name"
            handleChange={handleChange}
            type="text"
            value={name}
          />

          <FormInput
            name="company"
            label="Company"
            handleChange={handleChange}
            type="text"
            value={company}
          />

          <FormFileInput
            handleChange={hadleFileChange}
            accept="image/*"
          />

          <FormInput
            name="url"
            label="URL"
            handleChange={handleChange}
            type="text"
            value={url}
          />

          <Styles.Submit
            type="button"
            onClick={e => {
              helpers.createRipple(e);
              setNext(true);
            }}
          >
            Next
          </Styles.Submit>
        </Styles.FieldSet>

        <Styles.FieldSet disabled>
          <legend>About Your Product</legend>

          <FormTextarea
            name="description"
            label="Description"
            handleChange={handleChange}
            type="textarea"
            value={description}
          />

          <FormInput
            name="price"
            label="Price"
            handleChange={handleChange}
            type="number"
            value={price}
          />

          <FormInput
            name="category"
            label="Category"
            handleChange={handleChange}
            type="text"
            value={category}
          />

          <Styles.Submit type="submit" onClick={helpers.createRipple}>
            Add Product
          </Styles.Submit>
        </Styles.FieldSet>
      </form>
    </Layout>
  );
};

export default NewProduct;
