import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <div className='btnContainer'>
      <Link to={props.buttonLink} type='button'className={props.buttonClass}>{props.buttonText}</Link>
    </div>
  );
}

Button.defaultProps = {
  buttonClass: 'btn',
  buttonText: 'Buy Now',
  buttonLink: '/updating',
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

