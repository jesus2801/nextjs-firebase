import React, { useContext } from 'react';
import FirebaseContext from '../firebase/context';
import { AppCtx } from '../interfaces';
import Login from '../pages/login';

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const { user }: AppCtx = useContext(FirebaseContext);
    if (!user) {
      return <Login />;
    }

    return <Component {...props} />;
  };
  return Auth;
};

export default withAuth;
