import React from 'react';



import ItemCard from '../ItemCard/ItemCard.component';
import Title from '../Title/Title.component';
import './DigitalService.scss';
import DigitalServiceCard from './DigitalServiceCard/DigitalServiceCard.component';
import data from './data';
import { nanoid } from 'nanoid';


const title = 'Digital Services Tailored to Elevate Your Brand';
const DigitalService = () => {
  return (
    <section className="dig_service">
      <div className="dig_service_container">
        <Title
          title={title}
          amount={2}
          color='YELLOW'
        />
        <ul className="dig_service_list">
          {data.map((item) =>
            item.picture ? (
              <ItemCard data={item} key={nanoid()}/>
            ) : (
              <DigitalServiceCard data={item} key={nanoid()}/>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default DigitalService;