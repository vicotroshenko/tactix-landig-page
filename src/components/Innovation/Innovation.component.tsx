import { nanoid } from 'nanoid';
import React from 'react';

import AnimatedContainer from '../AnimatedContainer/AnimatedContainer.component';
import InnovationCard from '../ItemCard/ItemCard.component';
import Title from '../Title/Title.component';
import './Innovation.scss';
import data from './data';

const title = 'Innovation and Expertise at the Heart of Everything We Do';
const text =
  'At our core, we blend innovation and expertise to fuel every project, striving to pioneer digital solutions that redefine success.';

const Innovation = () => {
  return (
    <section
      className="inn"
      id="about"
    >
      <AnimatedContainer>
        <div className="inn_container">
          <Title
            title={title}
            underTitle={text}
            amount={3}
            color="GREEN"
          />
          <ul className="inn_list">
            {data.map((item) => (
              <InnovationCard
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

export default Innovation;
