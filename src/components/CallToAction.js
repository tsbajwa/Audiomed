import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function CallToAction(props) {
  return (
    <div className='callToAction'>
      {props.text}
      <Button />
    </div>
  );
}

CallToAction.defaultProps = {
  text: 'Please insert some call to Action Text',
};
CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
};
