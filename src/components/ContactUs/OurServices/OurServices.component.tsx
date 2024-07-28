import React from 'react';

import './OurServices.scss';

interface OurServicesProps {
  icon: string;
  text1: string;
  text2: string;
}

const OurServices: React.FC<OurServicesProps> = ({ icon, text1, text2 }) => {
  return (
    <li className="our_serv_card">
      <div className="our_serv_card_icon">
        <img
          src={icon}
          alt="icon of service"
        />
      </div>
      <div className="our_serv_card_text">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </li>
  );
};

export default OurServices;
