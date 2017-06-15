import React from 'react';
import PropTypes from 'prop-types';

export default function Quote(props) {
  return (
    <div>
      <div className='quote'>
        <p>{props.quote}</p>
        <p className='author'>{props.author}</p>
      </div>
    </div>
  );
}

Quote.defaultProps = {
  quote: 'This is our quote yodsd dsfdsfsdf sdfsdf',
  author: 'Authorname',
};

Quote.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};
