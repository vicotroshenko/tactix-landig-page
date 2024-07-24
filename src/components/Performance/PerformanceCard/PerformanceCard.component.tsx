import React from 'react';

import './PerformanceCard.scss';

type PerformanceData = {
  info?: string;
  title: string;
  text: string;
  icon?: string;
};
interface PerformanceCardProps {
  item: PerformanceData;
}
const PerformanceCard: React.FC<PerformanceCardProps> = ({ item }) => {
  return (
    <li className="performance_card">
      <div className="performance_card_top">
        <p>{item.info}</p>
      </div>
      <div className="performance_card_bottom">
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </li>
  );
};

export default PerformanceCard;
