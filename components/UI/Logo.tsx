import React from 'react';
import Styles from '../../styles/components/layout/Main';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Styles.Logo>P</Styles.Logo>
    </Link>
  );
};

export default Logo;
