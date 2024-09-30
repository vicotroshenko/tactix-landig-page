import { nanoid } from 'nanoid';
import React from 'react';

import AnimatedContainer from '../AnimatedContainer/AnimatedContainer.component';
import Title from '../Title/Title.component';
import './Voices.scss';
import VoicesCard from './VoicesCard/VoicesCard.component';
import data from './data';

const title = 'Voices of Success from Our Satisfied Clients';
const Voices = () => {
  return (
    <section
      className="voices"
      id="FAQ"
    >
      <AnimatedContainer>
        <div className="voices_container">
          <Title
            title={title}
            amount={4}
            color="GREY"
          />
          <ul className="voices_list">
            {data.map((item) => (
              <VoicesCard
                item={item}
                key={nanoid()}
              />
            ))}
          </ul>
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default Voices;
