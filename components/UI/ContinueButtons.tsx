import React from 'react';
import Styles from '../../styles/components/layout/Main';

import helpers from '../../functions/index';

const ContinueButtons  = ({ googleFn, facebookFn }: any) => {
  return (
    <Styles.ContinueButtons>
      <button
        type="button"
        onClick={e => {
          helpers.createRipple(e);
          googleFn();
        }}
      >
        <img src="/static/icons/google.png" alt="Google icon" />
        <p>Continue with Google</p>
      </button>
      <button
        type="button"
        onClick={e => {
          helpers.createRipple(e);
          facebookFn();
        }}
      >
        <img src="/static/icons/facebook.png" alt="Facebook icon" />
        <p>Continue with Facebook</p>
      </button>
    </Styles.ContinueButtons>
  );
};

export default ContinueButtons;
