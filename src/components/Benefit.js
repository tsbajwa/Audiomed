import React from 'react';
import FaBook from 'react-icons/lib/fa/book';
import FalocationArrow from 'react-icons/lib/fa/location-arrow';
import FaFastForward from 'react-icons/lib/fa/fast-forward';
import smilingDoctor from '../assets/smiling-doctor.png';

const info = [
  {
    icon: <FalocationArrow className='icon'/>,
    heading: 'Learn anytime, anywhere',
    paragraph: 'Memorizing anatomy requires repetition so you need to train regularly. Audiomed makes it easier to learn on the go. Our program works on all devices so you can practice  whenever you have a moment.',
  },
  {
    icon: <FaFastForward className='icon'/>,
    heading: 'Learn faster',
    paragraph: 'Spend fewer hours studying. Our system is based on proven learning methodologies.  We have combined mnemonics, audio and multi sensory learning to ensure you learn more effeciently.',
  },
  {
    icon: <FaBook className='icon'/>,
    heading: 'Everything you need',
    paragraph: 'Audiomed is broken into 12  modules for easier learning and allows you to easily track your progress. With over 250 mnemonics all your anatomy study needs are covered.',
  },
];


export default function Benefit() {
  return (
    <div className='benefit'>
      <div className='benefit-list'>
        <ul>
          {info.map((value, index) => (
              <li key={index}>
                <div className='benefit-text'>
                  <h3>{value.icon} {value.heading}</h3>
                  <p>{value.paragraph}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='img-container'>
        <img src={smilingDoctor} alt='smiling doctor'></img>
      </div>
    </div>
  );
}

