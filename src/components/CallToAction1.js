import React from 'react';
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
