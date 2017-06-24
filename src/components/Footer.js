import React from 'react';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-column'>
         <p className='title'>Contact Information</p>
      </div>
      <div className='footer-column'>
        <p className="title">About us</p>
        <p>Audiomed is a company run by doctors, with the intention of helping students and professionals learn in the most effecient and effective way possible. 
          We have devised a program consisting of anatomy mnemonics delivered in audio and other formats, to help you learn faster.</p>
      </div>
      <div className='footer-column'>
        <p className='title'>Community</p>
        <a href='#'>Youtube Channel</a>
      </div>
      <div className='footer-column last'>
        <img src='../assets/logo-white.png'></img>
        <p className='copyright'>Copyright 2017 by Audiomed</p>
      </div>
    </div>
  );
}
