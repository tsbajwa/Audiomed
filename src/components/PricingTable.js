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
  );
}

