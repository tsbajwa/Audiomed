import React from 'react';


class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ email: event.target.value });
  }
  /*eslint-disable */
  handleSubmit(event) {         
    event.preventDefault();
    alert('Thanks, we will be in touch once the updated material launches');  
  }
  /*eslint-enable */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

module.exports = Updating;
