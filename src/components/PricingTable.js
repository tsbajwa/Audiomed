import React from 'react';
import Table from './Table';
import basicBundle from '../assets/basic-bundle.png';
import essentialBundle from '../assets/essential-bundle.png';
import deluxeBundle from '../assets/deluxe-bundle.png';

const tableInfo = [
  {
    title: 'Basic',
    img: basicBundle,
    price: '$37',
    info: ['Audio Course', 'Instant access', 'High quality mp3', 'Ongoing support'],
  },
  {
    title: 'Essential',
    img: essentialBundle,
    price: '$57',
    info: ['Learning optimization guide', 'Lifetime updates', 'Audio course and Book', 'Instant Access', 'Over 250 mnemonics', 'Ongoing support', 'Printable flash cards'],
  },
  {
    title: 'Deluxe',
    img: deluxeBundle,
    price: '$157',
    info: ['Audio and Book', '6 physical cd package', 'Ongoing support', 'Express mail'],
  },
];

export default function PricingTable() {
  return (
    <div className='pricing-table-container'>
      <div className='pricing-table-heading'>
        <h3>You&apos;re seconds away from accessing Audiomed</h3>
        <h4>Select the package thats right for you</h4>
      </div>
      <div className='pricing-table'>
        {tableInfo.map((details, index) =>
          (
            <Table
              key={index}
              title={details.title}
              img={details.img}
              price={details.price}
              info={details.info}
            />
          ),
        )}
      </div>
    </div>
  );
}

