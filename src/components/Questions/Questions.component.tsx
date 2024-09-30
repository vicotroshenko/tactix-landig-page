import { nanoid } from 'nanoid';
import React from 'react';

import AnimatedContainer from '../AnimatedContainer/AnimatedContainer.component';
import Title from '../Title/Title.component';
import AccordionItem from './AccordionItem/AccordionItem.component';
import './Questions.scss';
import data from './data';

const title = 'Your Burning Questions Answered';

const Questions = () => {
  return (
    <section className="questions">
      <AnimatedContainer>
        <div className="questions_container">
          <Title
            title={title}
            amount={2}
            color="GREY"
          />
          <ul className="questions_list">
            {data.map((item) => (
              <AccordionItem
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

export default Questions;
