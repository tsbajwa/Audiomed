import React from 'react';

const modules = ['Skeletal', 'Alimentary', 'Kidney-Urine', 'Integumental', 'Endocrine', 'Cardiovascular', 'Reproductive', 'Pulmonary', 'Nervous', 'Muscle', 'Miscellaneous', 'Lymphoid'];

export default function Module() {
  return (
      <div>
        <h4>Twelve Comphrensive Modules</h4>
        <p>Audiomed comes in 12 modules covering all aspects of anatomy.</p>
        <div className=''>
          {modules.map(module =>
            (
              <div key={module}>
                <img src= {`../assets/${module}.png`}></img>
                <p>{module}</p>
              </div>
            ))}
        </div>
      </div>
  );
}
