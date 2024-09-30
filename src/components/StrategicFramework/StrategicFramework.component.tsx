import { nanoid } from 'nanoid';
import React from 'react';

import AnimatedContainer from '../AnimatedContainer/AnimatedContainer.component';
import ItemCard from '../ItemCard/ItemCard.component';
import Title from '../Title/Title.component';
import './StrategicFramework.scss';
import data from './data';

const title = 'Our Strategic Framework for Excellence';
const StrategicFramework = () => {
  return (
    <section
      className="strategy"
      id="approach"
    >
      <AnimatedContainer>
        <div className="strategy_container">
          <Title
            title={title}
            amount={3}
            color="BLUE"
          />
          <ul className="strategy_list">
            {data.map((item) => (
              <ItemCard
                data={item}
                key={nanoid()}
              />
            ))}
          </ul>
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default StrategicFramework;
