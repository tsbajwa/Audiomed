import React from 'react';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Benefit from './Benefit';
import Demo from './Demo';
import Module from './Module';

export default function App() {
  return (
    <div className ='container'>
      <Banner />
      <CallToAction
      text='Made by doctors, for health professionals and students'
      />
      <Benefit />
      <Demo />
      <Module />
    </div>
  );
}