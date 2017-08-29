import React from 'react';

const modules = ['Skeletal', 'Alimentary', 'Renal', 'Integumental', 'Endocrine', 'Cardiovascular', 'Reproductive', 'Pulmonary', 'Nervous', 'Muscle', 'Miscellaneous', 'Lymphoid'];

export default function Module() {
  return (
      <div className='module'>
        <h4>Twelve Comphrensive Modules</h4>
        <div className='module-container'>
          {modules.map((module) => {
            const imgUrl = require(`../assets/${module}.png`)
            return (
              <div key={module} className='module-single'>
                <img src={imgUrl} alt={`${module}`}></img>
                <p>{module}</p>
              </div>
            )
          })}
        </div>
      </div>
  );
}
