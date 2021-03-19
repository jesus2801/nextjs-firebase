import React, { useContext } from 'react';
import Link from 'next/link';
import FirebaseContext from '../../firebase/context';

import Search from '../UI/Search';
import Nav from './Nav';
import helpers from '../../functions/index';

import Styles from '../../styles/components/layout/Header';

const Header = () => {
  const { firebase, user } = useContext(FirebaseContext);

  return (
    <Styles.Header id="header" className="ocult">
      <Search />
      <Nav />
      <Styles.Buttons>
        {user ? (
          <>
            <p>Hello {user.displayName} </p>
            <button
              type="button"
              onClick={e => {
                helpers.createRipple(e);
                firebase.signOff();
              }}
            >
              Sign Off
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button
                type="button"
                onClick={helpers.createRipple}
                className="button-auth first"
              >
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button
                type="button"
                onClick={helpers.createRipple}
                className="button-auth first"
              >
                Signup
              </button>
            </Link>
          </>
        )}
      </Styles.Buttons>
    </Styles.Header>
  );
};

export default Header;
