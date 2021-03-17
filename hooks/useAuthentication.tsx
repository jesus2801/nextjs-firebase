import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useAuthentication = () => {
  const [userAuthenticate, setUserAuthenticate]: any = useState(null);

  useEffect(() => {
    const unSuscribe = firebase.auth.onAuthStateChanged(async user => {
      if (user) {
        return setUserAuthenticate(user);
      } else {
        return setUserAuthenticate(null);
      }
    });
    return () => unSuscribe();
  }, []);

  return userAuthenticate;
};

export default useAuthentication;
