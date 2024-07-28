import { nanoid } from 'nanoid';
import React from 'react';

import ItemCard from '../ItemCard/ItemCard.component';
import Title from '../Title/Title.component';
import './Performance.scss';
import PerformanceCard from './PerformanceCard/PerformanceCard.component';
import data from './data';

const title = 'Dive into Our Performance Metrics';
const Performance = () => {
  return (
    <section className="performance">
      <div className="performance_container">
        <Title
          title={title}
          amount={3}
          color="GREY"
        />
        <ul className="performance_list">
          {data.map((item) =>
            !item.icon ? (
              <PerformanceCard
                item={item}
                key={nanoid()}
              />
            ) : (
              <ItemCard
                data={item}
                key={nanoid()}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Performance;
