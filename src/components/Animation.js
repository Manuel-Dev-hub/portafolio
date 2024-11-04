// src/components/Animation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/animation.json';

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Animation;
