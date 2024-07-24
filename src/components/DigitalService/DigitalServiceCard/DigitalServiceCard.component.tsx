import React from 'react';

import { CardData } from '../../../types/card.type';
import './DigitalServiceCard.scss';

interface DigitalServiceCardProps {
  data: CardData;
}
const DigitalServiceCard: React.FC<DigitalServiceCardProps> = ({ data }) => {
  return (
    <li className="dig_card">
      <div className="dig_card_icon">
        <img
          src={data.icon}
          alt="card icon"
        />
      </div>
      <h3>{data.title}</h3>
      <p className='dig_card_text'>{data.text}</p>
    </li>
  );
};

export default DigitalServiceCard;
