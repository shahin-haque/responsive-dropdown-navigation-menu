import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import arrow from '../public/icon-arrow-down.svg';
const CompanyLinks = () => {
  const [isSecondary, setIsSecondary] = useState(false);

  return (
    <li className="link company">
      <span onClick={() => setIsSecondary(!isSecondary)}>
        Company
        <Image className="arrow" src={arrow} alt="arrow" />
      </span>
      <div
        className={`${
          isSecondary ? 'secondary-links open ' : 'secondary-links'
        }`}
      >
        <Link href="/history">History</Link>
        <Link href="/our-team">Our Team</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </li>
  );
};

export default CompanyLinks;
