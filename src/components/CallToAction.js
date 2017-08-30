import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function CallToAction(props) {
  return (
    <div className='callToAction-container'>
      <div className='callToAction'>
        <h4>{props.text}</h4>
        <Button
          btn={props.buttonClass}
          link={props.link}
          btnText={props.btnText}
        />
      </div>
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
  btnText: PropTypes.string,
  link: PropTypes.string,
};
