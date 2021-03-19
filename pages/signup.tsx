import React, { useEffect, useContext } from 'react';
import Router from 'next/router';
import Swal from 'sweetalert2';

import Layout from '../components/layout/Layout';

import helpers from '../functions/index';
import useValidate from '../hooks/useValidate';

import { SignupState } from '../interfaces/states';
import validateSignup from '../validation/validateSignup';
import FirebaseContext from '../firebase/context';

import Styles from '../styles/components/out/Forms';
import ContinueButtons from '../components/UI/ContinueButtons';
import FormInput from '../components/UI/FormInput';
import { AppCtx } from '../interfaces';

const Signup = () => {
  //initial state of component
  const INIT_STATE: SignupState = {
    name: '',
    mail: '',
    password: '',
  };

  const { firebase }: AppCtx = useContext(FirebaseContext);

  //use the validate hook
  const {
    values,
    errors,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidate(INIT_STATE, validateSignup, createAccount);

  //when user submit form
  useEffect(() => {
    const errs: Array<any> = Object.values(errors);
    if (errs.length > 0) {
      Swal.fire('Error!', errs[0], 'error');
    }
  }, [submitForm]);

  // destructuring values of state
  const { name, mail, password } = values;

  //after success validation
  async function createAccount(): Promise<void> {
    try {
      //register user
      helpers.handleLoading(true);
      await firebase.register(name, mail, password);
      helpers.handleLoading(false);

      //success register
      helpers.successRegister(Router);
    } catch (e) {
      //failed register
      helpers.handleLoading(false);
      Swal.fire('Error!', e.message, 'error');
    }
  }

  async function registerWithGoogle(): Promise<void> {
    try {
      await firebase.signInGoogle();
      //success register
      helpers.successRegister(Router);
    } catch (e) {
      Swal.fire('Error!', e.message, 'error');
    }
  }

  async function registerWithFacebook(): Promise<void> {
    try {
      await firebase.signInFacebook();
      //success register
      helpers.successRegister(Router);
    } catch (e) {
      Swal.fire('Error!', e.message, 'error');
    }
  }

  //the html that is render on user screen
  return (
    <Layout>
      <Styles.Form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <FormInput
          name="name"
          label="Name"
          handleChange={handleChange}
          type="text"
          value={name}
        />

        <FormInput
          name="mail"
          label="Email"
          handleChange={handleChange}
          type="text"
          value={mail}
        />

        <FormInput
          name="password"
          label="Password"
          handleChange={handleChange}
          type="password"
          value={password}
        />

        <ContinueButtons
          googleFn={registerWithGoogle}
          facebookFn={registerWithFacebook}
        />

        <Styles.Submit type="submit" onClick={helpers.createRipple}>
          Signup
        </Styles.Submit>
      </Styles.Form>
    </Layout>
  );
};

export default Signup;
