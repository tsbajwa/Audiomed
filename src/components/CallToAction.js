import React, { Component } from 'react';


class CallToAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hey hey buddies',
    };
  }
  render() {
    return (
      <div className='callToAction'>
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default CallToAction;
