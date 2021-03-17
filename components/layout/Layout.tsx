import React from 'react';
import Header from './Header';
import Helmet from 'react-helmet';

const Layout = (props: any) => {
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
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
