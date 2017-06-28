import React from 'react';
import test from '../utils/api';

class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    test();
    //console.log('Thanks, we will be in touch once the updated material launches');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

module.exports = Updating;
