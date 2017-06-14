import React from 'react';

export default function Quote(props) {
  return (
    <div>
      <p>{props.quote}</p>
      <p>{props.author}</p>
    </div>
  );
}
