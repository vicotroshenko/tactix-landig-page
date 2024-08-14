import classNames from 'classnames';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import './AccordionItem.scss';

type AccordionType = {
  title: string;
  text: string;
};
interface AccordionProps {
  item: AccordionType;
}
const AccordionItem: React.FC<AccordionProps> = ({ item }) => {
  const [active, setActive] = useState(false);

  const handleButtonClick = () => setActive((prev) => !prev);
  return (
    <li
      className="accordion"
      onClick={handleButtonClick}
    >
      <h2>
        <p>{item.title}</p>
        <div className="accordion_title_icon">
          <FaPlus />
        </div>
      </h2>
      <div
        className={classNames('accordion_text', {
          accordion_text_active: active,
        })}
        data-testid="accordion_text"
      >
        <div>{item.text}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
