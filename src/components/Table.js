import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Table(props) {
  return (
    <div className={`table table-${props.title}`}>
      <ul>
        <li className='title'>{props.title}</li>
        <li>
          <div className ='image'>
            <img src={props.img} alt='Buy now'></img>
          </div>
        </li>
        <li className='price'>{props.price}</li>
        {props.info.map((info, index) => (
          <li key={index} className='info'>{info}</li>
        ))}
        <li className='info'>
          <Button
            link={props.link}
            label={props.price}
            />
        </li>
      </ul>
    </div>
  );
}

Table.propTypes = {
  title: PropTypes.string,
  img: PropTypes.any,
  info: PropTypes.array,
  price: PropTypes.string,
  link: PropTypes.string,
};
