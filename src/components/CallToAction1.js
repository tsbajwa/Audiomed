import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function CallToAction1(props) {
  return (
    <div className='callToAction'>
      {props.text}
      <Button />
    </div>
  );
}

CallToAction1.defaultProps = {
  text: 'Please insert some call to Action Text',
};
CallToAction1.propTypes = {
  text: PropTypes.string.isRequired,
};
