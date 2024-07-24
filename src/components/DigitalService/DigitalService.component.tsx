import React from 'react';



import ItemCard from '../ItemCard/ItemCard.component';
import Title from '../Title/Title.component';
import './DigitalService.scss';
import DigitalServiceCard from './DigitalServiceCard/DigitalServiceCard.component';
import data from './data';


const title = 'Digital Services Tailored to Elevate Your Brand';
const DigitalService = () => {
  return (
    <section className="dig_service">
      <div className="dig_service_container">
        <Title
          title={title}
          amount={2}
        />
        <ul className="dig_service_list">
          {data.map((item) =>
            item.picture ? (
              <ItemCard data={item} />
            ) : (
              <DigitalServiceCard data={item} />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default DigitalService;