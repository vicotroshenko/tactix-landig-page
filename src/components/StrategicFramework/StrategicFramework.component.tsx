import { nanoid } from 'nanoid';
import React from 'react';

import ItemCard from '../ItemCard/ItemCard.component';
import Title from '../Title/Title.component';
import './StrategicFramework.scss';
import data from './data';

const title = 'Our Strategic Framework for Excellence';
const StrategicFramework = () => {
  return (
    <section className="strategy">
      <div className="strategy_container">
        <Title
          title={title}
          amount={3}
        />
        <ul className='strategy_list'>
          {data.map((item) => (
            <ItemCard
              data={item}
              key={nanoid()}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StrategicFramework;
