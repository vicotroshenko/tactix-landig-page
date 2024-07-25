import classNames from 'classnames';
import React from 'react';

import './PrimaryButton.scss';

enum ButtonsStyle {
  black = 'pr_button_black',
  green = 'pr_button_green',
  light_green = 'pr_button_light_green',
}

interface PrimaryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: React.ReactNode;
  outline: keyof typeof ButtonsStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  outline,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(ButtonsStyle[outline])}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
