import React from 'react';
import PropTypes from 'prop-types';


export default function Button(props) {
  return (
    <div className='btnContainer'>
      <a type='button' href={props.link}className={props.buttonClass}>{props.buttonText}</a>
    </div>
  );
}

Button.defaultProps = {
  buttonClass: 'btn',
  buttonText: 'Buy Now',
  link: 'https://google.com',
};

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

