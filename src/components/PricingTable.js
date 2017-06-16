import React from 'react';
import Table from './Table';

const tableInfo = [
  {
    title: 'Basic',
    image: '../assets/basic-bundle.png',
    price: '$37',
    info: ['info'],
  },
  {
    title: 'Essential',
    image: '../assets/essential-bundle.png',
    price: '$57',
    info: ['info'],
  },
  {
    title: 'Deluxe',
    image: '../assets/deluxe-bundle.png',
    price: '$97',
    info: ['moreinfo', 'line two'],
  },
];

export default function PricingTable() {
  return (
    <div className ='pricing-table'>
     {tableInfo.map(details =>
      (
        <Table
        title={details.title}
        image={details.title}
        price={details.price}
        info={details.info}
        />
      ),
     )}
    </div>
  );
}

