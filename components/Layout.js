import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Logo from './Logo';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>WFP x Testimonial Tree</title>
        <meta name='description' content='Real estate, redefined' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='wrapper'>
        <div className='nav__inner'>
          <div className='nav__logo'>
            <Logo />
          </div>
          <div className='nav__menu'>
            <div className='nav__item'>
              <Link href='/five'>5</Link>
            </div>
            <div className='nav__item'>
              <Link href='/stars'>Stars</Link>
            </div>
            <div className='nav__item'>
              <Link href='/pic1'>P1</Link>
            </div>
            <div className='nav__item'>
              <Link href='/pic3'>P3</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className='main__wrapper'>
        <div className='main__container'>
          <div className='main__header'>
            [Agent Name/ Team Name] Testimonials
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
