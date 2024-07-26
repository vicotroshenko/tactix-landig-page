import { nanoid } from 'nanoid';
import React from 'react';

import formImage from '../../assets/images/jpg/Image.jpg';
import Title from '../Title/Title.component';
import './ContactUs.scss';
import Form from './Form/Form.component';
import OurServices from './OurServices/OurServices.component';
import data from './data';

const title = 'Contact Us to Start Your Transformation';
const ContactUs = () => {
  return (
    <section className="contact_us" id='contact us'>
      <div className="contact_us_container">
        <Title
          title={title}
          amount={2}
          color='WHITE'
        />
        <ul className="contact_us_list">
          {data.map(({ icon, text1, text2 }) => (
            <OurServices
              icon={icon}
              text1={text1}
              text2={text2}
              key={nanoid()}
            />
          ))}
        </ul>
        <div className="contact_us_form_wrapper">
          <Form />
          <div className="contact_us_image">
            <img
              src={formImage}
              alt="a man with laptop "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
