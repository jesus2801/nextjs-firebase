import React, { useContext } from 'react';
import { FirebaseContext } from '../firebase';
import { FirebaseCtx } from '../interfaces';
import Login from '../pages/login';

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const { user }: FirebaseCtx = useContext(FirebaseContext);
    if (!user) {
      return <Login />;
    }

    return <Component {...props} />;
  };
  return Auth;
};

export default withAuth;
