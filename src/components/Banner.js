import React from 'react';

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner-logo'>
          <img src= '../assets/logo-white.png'></img>
      </div>
      <div>
          <img src='../assets/mobile-banner.png'></img>
          <h1>Learning Anatomy made Simple</h1>
          <h2>Stop wasting hours upon hours trying to learn Anatomy. There is an easier way.</h2>
          <h4>
          Audiomed is a learning system designed to teach you anatomy faster, saving you time and energy.
          With over 250 anatomy mnemonic recordings, it's the smarter way to learn.
          </h4>
      </div>
    </div>
  );
}
