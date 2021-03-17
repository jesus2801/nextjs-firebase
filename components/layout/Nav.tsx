import React, { useContext } from 'react';
import Link from 'next/link';
import Styles from '../../styles/components/layout/Header';

import { FirebaseContext } from '../../firebase';

const Nav = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <Styles.Nav>
      <Link href="/">Home</Link>
      <Link href="/popular">Popular</Link>
      {user ? <Link href="/new-product">New Product</Link> : null}
    </Styles.Nav>
  );
};

export default Nav;
