import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Table(props) {
  return (
    <div className='table'>
      <ul>
        <li>{props.title}</li>
        <li>
          <div className ='image'>
            <img src={props.img}></img>
          </div>
        </li>
        <li className='price'>{props.price}</li>
        {props.info.map((info, index) => (<li key ={index}>{info}</li>))}
        <Button
        link={props.link}/>
      </ul>
    </div>
  );
}

Table.propTypes = {
  title: PropTypes.string,
  img: PropTypes.any,
  info: PropTypes.array,
  price: PropTypes.string,
};

Table.defaultProps = {
  title: 'Titlee',
  img: '../assets/basic-bundle.png',
  info: ['item1', 'info2', 'Soon'],
  price: '$39',
};
