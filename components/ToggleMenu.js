import { useState } from 'react';
import Image from 'next/image';

import iconmenu from '../public/icon-menu.svg';
import iconclosemenu from '../public/icon-close-menu.svg';

const ToggleMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {isNavOpen ? (
        <button
          className="menu-icon"
          aria-controls="Primary-Navigation"
          aria-expanded="true"
        >
          <Image
            onClick={() => setIsNavOpen(!isNavOpen)}
            src={iconclosemenu}
            alt="logo"
          />
        </button>
      ) : (
        <button
          className="menu-icon"
          aria-controls="Primary-Navigation"
          aria-expanded="false"
        >
          <Image
            onClick={() => setIsNavOpen(!isNavOpen)}
            src={iconmenu}
            alt="logo"
          />
        </button>
      )}
    </>
  );
};

export default ToggleMenu;
