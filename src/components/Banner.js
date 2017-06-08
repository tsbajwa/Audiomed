import React from 'react';

export default function Banner() {
  return (
    <div className='container-banner'>
    <div>
        <img src= '../assets/logo-white.png'></img>
    </div>
    <div>
        <img src='../assets/banner.png'></img>
        <h1>Learning Anatomy made Simple</h1>
        <h3>Stop wasting hours upon hours trying to learn Anatomy. There is an easier way.</h3>
        <h4>
        Audiomed is a learning system designed to teach you anatomy faster, saving you time and energy.
        With over 250 anatomy mnemonic recordings, it is the smarter way to learn.
        </h4>
    </div>
    </div>
  );
}