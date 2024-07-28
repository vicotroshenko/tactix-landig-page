import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import './PrimaryLink.scss';

enum LinkStyle {
  black = 'pr_link_black',
  green = 'pr_link_green',
  light_green = 'pr_link_light_green',
}

enum LinkSize {
  small = 'pr_link_12',
  medium = 'pr_link_18',
  large = 'pr_link_20',
}

interface PrimaryLinkProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'href'
  > {
  children: React.ReactNode;
  outline: keyof typeof LinkStyle;
  link: string;
  size: keyof typeof LinkSize;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  children,
  outline,
  link,
  size,
  ...props
}) => {
  const isAnchor = link.slice(0, 1) === '#';
  if (isAnchor) {
    return (
      <a
        href={link}
        {...props}
        className={classNames(LinkStyle[outline], LinkSize[size])}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        to={link}
        {...props}
        className={classNames(LinkStyle[outline], LinkSize[size])}
      >
        {children}
      </Link>
    );
  }
};

export default PrimaryLink;
