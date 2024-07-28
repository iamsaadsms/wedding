import React, { useEffect, useRef } from 'react';

const PetalAnimation = () => {
  const canvasRef = useRef(null);
  const TOTAL = 100;
  const petalArray = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petalImg = new Image();
    petalImg.src = 'https://djjjk9bjm164h.cloudfront.net/petal.png';

    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach(petal => petal.animate());
      animationFrameId = window.requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', touchHandler);
    window.addEventListener('touchmove', touchHandler);

    let mouseX = 0;
    function touchHandler(e) {
      if (e.clientX !== undefined) {
        mouseX = e.clientX / window.innerWidth;
      } else if (e.touches && e.touches[0]) {
        mouseX = e.touches[0].clientX / window.innerWidth;
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        this.w = 25 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();

        this.xSpeed = 0.75;
        this.ySpeed = 0.5;
        this.flipSpeed = Math.random() * 0.03;
      }

      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.x = -petalImg.width;
          this.y = (Math.random() * canvas.height * 2) - canvas.height;
          this.xSpeed = 1.5 + Math.random() * 2;
          this.ySpeed = 1 + Math.random() * 1;
          this.flip = Math.random();
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)),
          this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
        );
      }

      animate() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.flip += this.flipSpeed;
        this.draw();
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', touchHandler);
      window.removeEventListener('touchmove', touchHandler);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', backgroundColor: 'rgba(134, 131, 131, 0.4)', height: '100vh', position: 'absolute', top:'0vh' }} />;
};

export default PetalAnimation;
