import { nanoid } from 'nanoid';
import React from 'react';

import Title from '../Title/Title.component';
import AccordionItem from './AccordionItem/AccordionItem.component';
import './Questions.scss';
import data from './data';

const title = 'Your Burning Questions Answered';
const Questions = () => {
  return (
    <section className="questions">
      <div className="questions_container">
        <Title
          title={title}
          amount={2}
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
    </section>
  );
};

export default Questions;
