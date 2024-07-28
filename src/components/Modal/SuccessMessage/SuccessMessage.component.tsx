import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

import './SuccessMessage.scss';

const SuccessMessage = () => {
  return (
    <div className="success_modal">
      <div className="success_modal_icon">
        <IoIosCheckmark />
      </div>
      <h2>Your Message Has Been Sent</h2>
      <p>
        You can expect a response within 24 hours. Stay tuned for some fantastic
        news!
      </p>
    </div>
  );
};

export default SuccessMessage;
