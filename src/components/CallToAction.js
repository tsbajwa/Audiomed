import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function CallToAction(props) {
  return (
    <div className='callToAction'>
      <h4>{props.text}</h4>
      <Button
      btn={props.buttonClass}
      link={props.link}
      buttonText={props.buttonText}
      />
    </div>
  );
}

CallToAction.defaultProps = {
  text: 'Please insert some call to Action Text',
};
CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
};


CallToAction.propTypes = {
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string,
};
