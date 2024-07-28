import classNames from 'classnames';
import React from 'react';

import { CardData } from '../../../types/card.type';
import './DigitalServiceCard.scss';

interface DigitalServiceCardProps {
  data: CardData;
  darkTheme?: boolean;
}
const DigitalServiceCard: React.FC<DigitalServiceCardProps> = ({
  data,
  darkTheme = false,
}) => {
  return (
    <li className={classNames('digi_card', { digi_card_dark: darkTheme })}>
      <div className="digi_card_icon">
        <img
          src={data.icon}
          alt="card icon"
        />
      </div>
      <h3>{data.title}</h3>
      <p className="digi_card_text">{data.text}</p>
    </li>
  );
};

export default DigitalServiceCard;
