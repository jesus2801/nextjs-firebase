import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

import Layout from '../components/layout/Layout';

import helpers from '../functions/index';
import useValidate from '../hooks/useValidate';

import { LoginState } from '../interfaces/states';
import validateLogin from '../validation/validateLogin';
import FirebaseContext from '../firebase/context';

import Styles from '../styles/components/out/Forms';
import ContinueButtons from '../components/UI/ContinueButtons';
import FormInput from '../components/UI/FormInput';
import { AppCtx } from '../interfaces';

const Login = () => {
  //routings hook
  const Router = useRouter();

  const { firebase }: AppCtx = useContext(FirebaseContext);

  //initial state of component
  const INIT_STATE: LoginState = {
    mail: '',
    password: '',
  };

  //use the validate hook
  const {
    values,
    errors,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidate(INIT_STATE, validateLogin, loginUser);

  //when user submit form
  useEffect(() => {
    const errs: Array<any> = Object.values(errors);
    if (errs.length > 0) {
      Swal.fire('Error!', errs[0], 'error');
    }
  }, [submitForm]);

  // destructuring values of state
  const { mail, password } = values;

  //after success validation
  async function loginUser(): Promise<void> {
    try {
      //login user
      helpers.handleLoading(true);
      await firebase.login(mail, password);
      helpers.handleLoading(false);

      //success login
      Router.push('/');
    } catch (e) {
      //failed login
      helpers.handleLoading(false);
      Swal.fire('Error!', e.message, 'error');
    }
  }

  async function loginWithGoogle(): Promise<void> {
    try {
      await firebase.signInGoogle();
      //success login
      Router.push('/');
    } catch (e) {
      Swal.fire('Error!', e.message, 'error');
    }
  }

  async function loginWithFacebook(): Promise<void> {
    try {
      await firebase.signInFacebook();
      //success login
      Router.push('/');
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
          googleFn={loginWithGoogle}
          facebookFn={loginWithFacebook}
        />

        <Styles.Submit type="submit" onClick={helpers.createRipple}>
          Signup
        </Styles.Submit>
      </Styles.Form>
    </Layout>
  );
};

export default Login;
