import { nanoid } from 'nanoid';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import RouteKey from '../../constants/routes.constant';
import DigitalServiceCard from '../DigitalService/DigitalServiceCard/DigitalServiceCard.component';
import PrimaryLink from '../PrimaryLink/PrimaryLink.component';
import './LicensesContent.scss';
import data from './data';

const title = 'Licenses';
const underTitle =
  "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.";
const LicensesContent = () => {
  return (
    <section className="licenses">
      <div className="licenses_container">
        <div className="licenses_title_container">
          <PrimaryLink
            outline="light_green"
            size="small"
            link={RouteKey.MAIN}
          >
            Our Templates
            <FaArrowRight className="hero_link_arrow" />
          </PrimaryLink>
          <h1 className="licenses_title">{title}</h1>
          <p>{underTitle}</p>
        </div>
        <ul className="licenses_list">
          {data.map((item) => (
            <DigitalServiceCard
              data={item}
              key={nanoid()}
              darkTheme={true}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LicensesContent;
