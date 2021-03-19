import React from 'react';
import firebase from './firebase';
import FirebaseContext from './context';
import useAuthentication from '../hooks/useAuthentication';
import { NextComponentType, NextPageContext } from 'next';

const UseAppContext: NextComponentType<NextPageContext> = ({
  children,
}) => {
  const user = useAuthentication();

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default UseAppContext;
