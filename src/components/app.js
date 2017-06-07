import React from 'react';
import Banner from './Banner';
import CallToAction1 from './CallToAction1';
import Benefit from './Benefit';

export default function App() {
  return (
    <div className ='container'>
      <Banner />
      <CallToAction1
      text='Made by doctors, for health professionals and students'
      />
      <Benefit />
    </div>
  );
}
