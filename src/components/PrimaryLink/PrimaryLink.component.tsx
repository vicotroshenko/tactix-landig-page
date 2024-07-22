import classNames from 'classnames';
import React from 'react';

import './PrimaryLink.scss';

enum LinkStyle {
  black = 'pr_link_black',
  green = 'pr_link_green',
  light_green = 'pr_link_light_green',
}

interface PrimaryLinkProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> {
  children: React.ReactNode;
  outline: keyof typeof LinkStyle;
  link: string;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  children,
  outline,
  link,
  ...props
}) => {
  return (
    <a
      href={link}
      {...props}
      className={classNames(LinkStyle[outline])}
    >
      {children}
    </a>
  );
};

export default PrimaryLink;
