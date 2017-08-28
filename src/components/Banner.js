import React from 'react';
import logoWhite from '../assets/logo-white.png';
import mobileBanner from '../assets/mobile-banner.png';
import banner from '../assets/banner.png';

export default function Banner() {
  return (
    <div className='banner'>
      <div>
          <img src={logoWhite} alt='Audiomed logo'></img>
      </div>
      <div className='banner-info'>
        <div className='banner-img-container'>
          <img className='banner-mob-img' src={mobileBanner} alt='Course material'></img>
          <img className='banner-img' src={banner} alt='Course material'></img>
        </div>
        <div className='banner-text'>
          <h1>Learning Anatomy made Simple</h1>
          <h2>Stop wasting hours upon hours trying to learn Anatomy. There is an easier way.</h2>
          <h5>
          Audiomed is a learning system designed to teach you anatomy faster, saving you time and energy.
          With over 250 anatomy mnemonic recordings, it&apos;s the smarter way to learn.
          </h5>
        </div>
      </div>
    </div>
  );
}
