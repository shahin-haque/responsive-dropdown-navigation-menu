import Link from 'next/link';
import React from 'react';
import ToggleMenu from './ToggleMenu';
import logo from '../public/logo.svg';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <Image className="logo" src={logo} alt="logo" />
      </Link>
      <div className="menu-wrapper">
        <ToggleMenu />
        <ul className="links-wrapper">
          <li className="link">
            Features
            <Link href="/features"></Link>
          </li>
          <li className="link">
            Company
            <Link href="/company"></Link>
          </li>
          <li className="link">
            <Link href="/careers">Careers</Link>
          </li>
          <li className="link">
            <Link href="/about">About</Link>
          </li>
          <li className="link login">
            <Link href="/login">Login</Link>
          </li>
          <li className="link btn">
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

// Features;
// Company;
// Careers;
// About;

// Login;
// Register;
