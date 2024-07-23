import classNames from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';

import './InnovationCard.scss';

type InnovationData = {
  icon?: string;
  title: string;
  text?: string;
  picture: string | string[];
};

interface InnovationCardProps {
  data: InnovationData;
}
const InnovationCard: React.FC<InnovationCardProps> = ({ data }) => {
  return (
    <li className="inn_card">
      <div>
        {data.icon && (
          <div className="inn_card_icon">
            <img
              src={data.icon}
              alt="rocket"
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

export default InnovationCard;
