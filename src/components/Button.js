import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class Button extends React.Component {

  handleClick = (e) => {
    ReactGA.event({
      category: 'Button',
      action: `${this.props.btnText}`,
      label: this.props.label ? `${this.props.label}` : 'Generic' ,
    })
  }

  render() {
    return (
    <div className='btnContainer'>
      <Link to={this.props.buttonLink} type='button'className={this.props.buttonClass} onClick={this.handleClick}>{this.props.btnText}</Link>
    </div>
    )
  }
}

Button.defaultProps = {
  buttonClass: 'btn',
  btnText: 'Buy Now',
  buttonLink: '/updating',
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  btnText: PropTypes.string,
  buttonLink: PropTypes.string,
};

