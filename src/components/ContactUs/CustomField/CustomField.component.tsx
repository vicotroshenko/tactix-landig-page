import React from 'react';

import './CustomField.scss';

interface CustomFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'id'
  > {
  label?: string;
  errors?: { [x: string]: string };
  touched?: { [x: string]: boolean };
}

const CustomField: React.FC<CustomFieldProps> = ({
  name = '',
  label,
  errors,
  touched,
  ...props
}) => {
  return (
    <>
      <div className="custom_field">
        <input
          {...props}
          name={name}
          id={name}
        />
        <label htmlFor={name}>{label}</label>
        <span></span>
      </div>
      {errors?.[name] && touched?.[name] && (
        <p
          className="error"
          data-testid={name}
        >
          {errors?.[name]}
        </p>
      )}
    </>
  );
};

export default CustomField;
