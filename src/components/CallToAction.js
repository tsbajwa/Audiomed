import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class CallToAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <div className='callToAction'>
        <h3>{this.state.text}</h3>
        <Button />
      </div>
    );
  }
}
CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
};
CallToAction.defaultProps = {
  text: 'Default Call to Action Text',
};

export default CallToAction;
