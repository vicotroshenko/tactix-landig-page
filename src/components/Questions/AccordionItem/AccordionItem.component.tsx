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
      className={classNames('accordion', {
        accordion_hidden: !active,
      })}
    >
      <button
        type="button"
        onClick={handleButtonClick}
      >
        <p>{item.title}</p>
        <div
          className={classNames('accordion_button_icon', {
            accordion_button_icon_active: active,
          })}
        >
          <FaPlus />
        </div>
      </button>
      <div className="accordion_text">{item.text}</div>
    </li>
  );
};

export default AccordionItem;
