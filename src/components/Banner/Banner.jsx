import React from 'react';
import './Banner.scss';

const Banner = ({ imageUrl, height, text }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})`, height: height }}>
      <div className="banner-text">
        {text}
      </div>
    </div>
  );
};

export default Banner;
