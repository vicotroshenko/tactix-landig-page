import React from 'react';

import './InnovationTitle.scss';

const title = 'Innovation and Expertise at the Heart of Everything We Do';
const InnovationTitle = () => {
  const divideText = (text: string, position: number) => {
    return {
      cut: text.split(' ').slice(0, position).join(' '),
      rest: text
        .split(' ')
        .slice(position, text.length - 1)
        .join(' '),
    };
  };

  const dividedTitle = divideText(title, 3);
  return (
    <div className="inn_title">
      <h2>
        <span className="inn_title_colorized">{dividedTitle.cut}</span>
				{' '}
        <span>{dividedTitle.rest}</span>
      </h2>
      <p>
        At our core, we blend innovation and expertise to fuel every project,
        striving to pioneer digital solutions that redefine success.
      </p>
    </div>
  );
};

export default InnovationTitle;
