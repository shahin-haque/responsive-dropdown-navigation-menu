import Head from 'next/head';
import React from 'react';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <title> Responsive Dropdown Navigation | Frontend Mentor </title>
      </Head>
      <NavBar />
    </>
  );
};

export default Layout;
