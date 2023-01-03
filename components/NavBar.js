import Link from 'next/link';
import React from 'react';
import ToggleMenu from './ToggleMenu';
import logo from '../public/logo.svg';
import Image from 'next/image';
import FeaturesLinks from './FeaturesLinks';
import CompanyLinks from './CompanyLinks';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <Image className="logo" src={logo} alt="logo" />
      </Link>
      <ToggleMenu />
      <div className="menu-wrapper">
        <ul className="links-wrapper">
          <FeaturesLinks />
          <CompanyLinks />
          <li className="link">
            <Link href="/careers">Careers</Link>
          </li>
          <li className="link">
            <Link href="/about">About</Link>
          </li>
          <li className="link login">
            <Link href="/login">Login</Link>
          </li>
          <li className="link btn register">
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
