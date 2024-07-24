import React from 'react';

import './Title.scss';

interface TitleProps {
  title: string;
  underTitle?: string;
  amount?: number;
}

const Title: React.FC<TitleProps> = ({
  title,
  underTitle,
  amount = 3,
}) => {
  const divideText = (text: string, position: number) => {
    return {
      cut: text.split(' ').slice(0, position).join(' '),
      rest: text
        .split(' ')
        .slice(position, text.length - 1)
        .join(' '),
    };
  };

  const dividedTitle = divideText(title, amount);
  return (
    <div className="inn_title">
      <h2>
        <span className="title_first_color">{dividedTitle.cut}</span>{' '}
        <span>{dividedTitle.rest}</span>
      </h2>
      {underTitle && <p>{underTitle}</p>}
    </div>
  );
};

export default Title;
