import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import firebase from '../firebase/firebase';
import fb from 'firebase';

const useAuthentication = () => {
  const [userAuthenticate, setUserAuthenticate]: [
    null | fb.User,
    Dispatch<SetStateAction<null | fb.User>>
  ] = useState(null) as [
    null | fb.User,
    Dispatch<SetStateAction<null | fb.User>>
  ];

  useEffect(() => {
    const unSuscribe = firebase.auth.onAuthStateChanged(async user => {
      if (user) {
        setUserAuthenticate(user);
        return;
      } else {
        setUserAuthenticate(null);
        return;
      }
    });
    return () => unSuscribe();
  }, []);

  return userAuthenticate;
};

export default useAuthentication;
