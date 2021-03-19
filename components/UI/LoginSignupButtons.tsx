import React from 'react';
import Link from 'next/link';

import helpers from '../../functions/index';

import Styles from '../../styles/components/layout/Header';

const LoginSignupButtons = () => {
  return (
    <Styles.Buttons className="flex-row">
      <Link href="/login">
        <button
          type="button"
          onClick={helpers.createRipple}
          className="button-auth second"
        >
          Login
        </button>
      </Link>

      <Link href="/signup">
        <button
          type="button"
          onClick={helpers.createRipple}
          className="button-auth second"
        >
          Signup
        </button>
      </Link>
    </Styles.Buttons>
  );
};

export default LoginSignupButtons;
