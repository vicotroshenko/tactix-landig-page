import classNames from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';

import { CardData } from '../../types/card.type';
import './ItemCard.scss';

interface InnovationCardProps {
  data: CardData;
}
const ItemCard: React.FC<InnovationCardProps> = ({ data }) => {
  return (
    <li className="inn_card">
      <div>
        {data.icon && (
          <div className="inn_card_icon">
            <img
              src={data.icon}
              alt="card icon"
            />
          </div>
        )}
        <div className="inn_card_text">
          <h3>{data.title}</h3>
          {data.text && <p>{data.text}</p>}
        </div>
      </div>
      <div
        className={classNames({
          inn_card_set_images: Array.isArray(data.picture),
        })}
      >
        {!Array.isArray(data.picture) ? (
          <div className="inn_card_image">
            <img
              src={data.picture}
              alt="card demonstration"
            />
          </div>
        ) : (
          data.picture.map((item) => (
            <div key={nanoid()}>
              <img
                src={item}
                alt="card demonstration"
              />
            </div>
          ))
        )}
      </div>
    </li>
  );
};

export default ItemCard;
