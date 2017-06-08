import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';

const info = [
  {
    icon: <FaBeer />,
    heading: 'Learn anytime, anywhere',
    paragraph: 'Memorizing anatomy requires repetition so you need to train regularly. Audiomed makes it easier to learn on the go. Our program works on all devices so you can practice  whenever you have a moment.',
  },
  {
    icon: <FaBeer />,
    heading: 'Learn faster',
    paragraph: 'Spend fewer hours studying. Our system is based on proven learning methodologies.  We have combined Mnemonics, audio and multi sensory learning to ensure you learn more effeciently. Further information can be found here.',
  },
  {
    icon: <FaBeer />,
    heading: 'Everything you need',
    paragraph: 'Audiomed is broken into 12  modules for easier learning and allows you to easily track your progress. With over 250 mnemonics in Audiomed all your anatomy study needs are covered.',
  },
];


export default function Benefit() {
  return (
    <div>
      <ul>
        {info.map((value, index) => (
            <li key={index}>
              <div>{value.icon}{value.heading}</div>
              <div>{value.paragraph}</div>
            </li>
          ))}
      </ul>
      <div>
        <img src='../assets/smiling-doctor.png'></img>
      </div>
    </div>
  );
}

