import React, { useContext } from 'react';
import Header from './Header';
import Helmet from 'react-helmet';
import LoginSignupButtons from '../UI/LoginSignupButtons';

import FirebaseContext from '../../firebase/context';

import Styles from '../../styles/components/layout/Header';
import { AppCtx } from '../../interfaces';

const Layout = (props: any) => {
  const handleHeader = () => {
    document.getElementById('header')!.classList.toggle('ocult');
    document.querySelector('.dark')!.classList.toggle('ocult');
  };

  const { user }: AppCtx = useContext(FirebaseContext);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Product Finder - Next JS, Firebase | Jesús García</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Styles.Dark className="dark ocult"></Styles.Dark>
      <Styles.Bars
        src="/static/icons/menu.png"
        alt="Menu icon"
        className="bars"
        onClick={handleHeader}
      />
      <Header />
      {!user && <LoginSignupButtons />}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
