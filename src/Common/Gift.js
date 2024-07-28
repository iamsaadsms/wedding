import React, { useState, useEffect } from 'react';
import './Gift.css';

function Gift() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 1) {
      const icons = document.querySelectorAll(".icons .row span");
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.opacity = 1;
          icon.style.transform = "translateY(0) translateX(0)";
        }, 100 * index);
      });
      setTimeout(() => {
        setStep(2);
      }, 1000);
    }
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        setStep(3);
      }, 1000);
    }
  }, [step]);

  useEffect(() => {
    if (step === 3) {
      setTimeout(() => {
        setStep(4);
      }, 200);
    }
  }, [step]);

  const handleClick = () => {
    setStep(1);
  };

  return (
    <div className={`merrywrap step-${step}`}>
      <canvas id="canvas"></canvas>
      <div className="giftbox" onClick={handleClick}>
        <div className="cover">
          <div></div>
        </div>
        <div className="box"></div>
      </div>
      <div className="icons">
        <div className="row">
          <span>I</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <span>A</span>
          <span>R</span>
          <span>Y</span>
        </div>
      </div>
    </div>
  );
}

export default Gift;
