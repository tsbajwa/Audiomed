import React from 'react';
import PropTypes from 'prop-types';


export default function IconParagraph(props) {
  return (
    <div>
      <div>
        {props.icon}
        {props.heading}
      </div>
      <div>
        {props.paragraph}
      </div>
    </div>
  );
}

IconParagraph.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
