import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isFadedOut, setIsFadedOut] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        showTime();
      }
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showTime = () => {
    setIsCurtainOpen(true);
    setIsExpanded(true);
    setIsFadedOut(true);
    setTimeout(() => {
      onFinish();
    }, 4000);
  };

  return (
    <div>
      <div id="starter" className={isFadedOut ? 'fade-out' : ''} onClick={showTime}>
        Press Enter
      </div>
      <div id="scene" className={isExpanded ? 'expand' : ''}>
        <div id="curtain" className={isCurtainOpen ? 'open' : ''}>
          <div className="left"></div>
          <div className="right"></div>
          <h1>WELCOME!</h1>
        </div>
        <div className="ground"></div>
      </div>
    </div>
  );
};

export default Preloader;
