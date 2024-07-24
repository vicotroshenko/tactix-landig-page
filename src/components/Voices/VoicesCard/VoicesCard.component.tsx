import React from 'react';



import './VoicesCard.scss';


type CardType = {
  name: string;
  position: string;
  review: string;
};

interface VoicesCardProps {
  item: CardType;
}

const VoicesCard: React.FC<VoicesCardProps> = ({ item }) => {
	const generateColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li className="voices_card">
      <div className="voices_card_container">
        <div className="voices_card_circle" style={{ backgroundColor: generateColor()}}></div>
        <div className="voices_card_info">
          <h4>{item.name}</h4>
          <p>{item.position}</p>
        </div>
      </div>
      <p className="voices_card_review">{item.review}</p>
    </li>
  );
};

export default VoicesCard;