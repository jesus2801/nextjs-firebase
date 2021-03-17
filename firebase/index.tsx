import React from 'react';
import firebase from './firebase';
import FirebaseContext from './context';
import useAuthentication from '../hooks/useAuthentication';

export { FirebaseContext };

export const UseAppContext = ({ children }: any) => {
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

export default firebase;
