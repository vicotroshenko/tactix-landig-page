import { nanoid } from 'nanoid';
import React from 'react';

import data from './data';
import './Innovation.scss';
import InnovationCard from './InnovationCard/InnovationCard.component';
import InnovationTitle from './InnovationTitle/InnovationTitle.component';

const Innovation = () => {
  return (
    <section className="inn">
      <div className="inn_container">
        <InnovationTitle/>
        <ul className='inn_list'>
          {data.map((item) => (
            <InnovationCard
              data={item}
              key={nanoid()}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Innovation;
