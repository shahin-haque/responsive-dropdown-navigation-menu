import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import desktop from '../public/image-hero-desktop.png';
import mobile from '../public/image-hero-mobile.png';
import client from '../public/client-databiz.svg';
import audiophile from '../public/client-audiophile.svg';
import maker from '../public/client-maker.svg';
import meet from '../public/client-meet.svg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="bg">
        <Image src={mobile} alt="img" />
      </div>
      <div className="info">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn-primary heroBtn">Learn more</button>

        <div className="clients">
          <Image src={client} alt="img" />
          <Image src={audiophile} alt="img" />
          <Image src={maker} alt="img" />
          <Image src={meet} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
