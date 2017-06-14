import React from 'react';

const modules = ['Skeletal', 'Alimentary', 'Kidney-Urine', 'Integumental', 'Endocrine', 'Cardiovascular', 'Reproductive', 'Pulmonary', 'Nervous', 'Muscle', 'Miscellaneous', 'Lymphoid'];

export default function Module() {
  return (
      <div className='module'>
        <h4>Twelve Comphrensive Modules</h4>
        <div className='module-container'>
          {modules.map(module =>
            (
              <div key={module} className='module-single'>
                <img src= {`../assets/${module}.png`}></img>
                <p>{module}</p>
              </div>
            ))}
        </div>
      </div>
  );
}
