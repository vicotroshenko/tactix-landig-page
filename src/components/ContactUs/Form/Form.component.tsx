import { useFormik } from 'formik';
import React from 'react';

import PrimaryButton from '../../PrimaryButton/PrimaryButton.component';
import CustomField from '../CustomField/CustomField.component';
import './Form.scss';
import initialValues, { InitialKey } from './initialValues';
import validationSchema from './validation';

interface FormProps {
  onSubmit: (values: typeof initialValues) => void;
}
const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form
      className="contact_us_form"
      onSubmit={formik.handleSubmit}
    >
      <div role="group">
        <p className="contact_us_form_title">Let’s Get Started</p>
        <p className="contact_us_form_text">
          Provide us with some details and let's begin transforming your
          business together!
        </p>
        <CustomField
          type="text"
          name={InitialKey.FULL_NAME}
          placeholder=" "
          label="full name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          errors={formik.errors}
          touched={formik.touched}
        />
        <CustomField
          type="email"
          name={InitialKey.EMAIL}
          placeholder=" "
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errors={formik.errors}
          touched={formik.touched}
        />
        <CustomField
          type="text"
          name="message"
          placeholder="How can we help you?"
          value={formik.values.message}
          onChange={formik.handleChange}
          errors={formik.errors}
          touched={formik.touched}
        />
        <PrimaryButton
          outline="green"
          type="submit"
          style={{ width: 192, height: 62, margin: '24px 0 0 0' }}
        >
          Send a Message
        </PrimaryButton>
      </div>
    </form>
  );
};

export default Form;
