import React from 'react';


const youtube = [
  {
    source: 'https://www.youtube.com/embed/_NeJ3Kg6OUo',
    key: 'NeJ3Kg6OUo',
  },
  {
    source: 'https://www.youtube.com/embed/_NeJ3Kg6OUo',
    key: '123123',
  },
  {
    source: 'https://www.youtube.com/embed/_NeJ3Kg6OUo',
    key: 'fdgdgdf',
  },
];

export default function Demo() {
  return (
    <div className='demo'>
      <div>
        <h4>A glimpse of what you get</h4>
      </div>
      <div>
       {youtube.map(value => <iframe className ='youtube' src={value.source} key={value.key}></iframe>)}
      </div>
    </div>
  );
}
