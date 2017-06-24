import React from 'react';
import Table from './Table';

const tableInfo = [
  {
    title: 'Basic',
    img: '../assets/basic-bundle.png',
    price: '$37',
    info: ['Audio Course', 'Instant access', 'High quality mp3', 'Ongoing support'],
  },
  {
    title: 'Essential',
    img: '../assets/essential-bundle.png',
    price: '$57',
    info: ['Learning optimization guide', 'Lifetime updates', 'Audio course and Book', 'Instant Access', 'Over 250 mnemonics', 'Ongoing support', 'Printable flash cards'],
  },
  {
    title: 'Deluxe',
    img: '../assets/deluxe-bundle.png',
    price: '$157',
    info: ['Audio and Book', '6 physical cd package', 'Ongoing support', 'Express mail'],
  },
];

export default function PricingTable() {
  return (
    <div className='pricing-table-container'>
      <div className='pricing-table-heading'>
        <h3>You're seconds away from accessing Audiomed</h3>
        <h4>Select the package thats right for you</h4>
      </div>
      <div className ='pricing-table'>
      {tableInfo.map(details =>
        (
          <Table
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

