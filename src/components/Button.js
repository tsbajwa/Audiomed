import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class Button extends React.Component {

handleClick = (e) => {
  ReactGA.event({
    category: 'Button',
    action: `${this.props.buttonText}`
  })
}

  render() {
    return (
      <div className='btnContainer'>
      <Link to={this.props.buttonLink} type='button'className={this.props.buttonClass} onClick={this.handleClick}>{this.props.buttonText}</Link>
    </div>
    )
  }
}

Button.defaultProps = {
  buttonClass: 'btn',
  buttonText: 'Buy Now',
  buttonLink: '/updating',
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

