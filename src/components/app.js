import React from 'react';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Benefit from './Benefit';
import Demo from './Demo';
import Module from './Module';
import FAQ from './FAQ';
import Testimonial from './Testimonial';
import PricingTable from './PricingTable';
import Footer from './Footer';

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
      <PricingTable />
      <Testimonial />
      <FAQ />
      <CallToAction
      text='Get 10 free mnemonics delivered straight to your inbox'
      buttonText='Get Sample'
      />
      <Footer />
    </div>
  );
}
