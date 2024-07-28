import React, { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const audioRef = useRef(new Audio("http://soundjax.com/reddo/51715%5Efirework.mp3"));

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const Mouse = {
      x: undefined,
      y: undefined,
    };

    const handleMouseClick = (e) => {
      Mouse.x = e.x;
      Mouse.y = e.y;
      for (let i = 0; i < 500; i++) {
        particlesArray.current.push(new Particle());
      }

      // Toggle audio playback
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    let hue = 360;

    class Particle {
      constructor() {
        this.x = Mouse.x;
        this.y = Mouse.y;
        this.radius = Math.random() * 5 + 1;
        this.color = `hsl(${360 * Math.random()}, 50%, 100%)`;
        this.velocity = {
          r: 3 * Math.random(),
          a: Math.random() * 2 * Math.PI,
        };
        this.shrink = Math.random();
        this.brightness = 100;
        this.saturation = 0;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      }

      update() {
        this.x += this.velocity.r * Math.cos(this.velocity.a);
        this.y += this.velocity.r * Math.sin(this.velocity.a);
        if (this.radius > 1) {
          this.radius -= 0.2;
        }
        this.brightness -= 1;
        this.saturation += 1;
        this.color = `hsl(${hue}, ${this.saturation}%, ${this.brightness}%)`;
      }
    }

    const particleMotion = () => {
      for (let i = 0; i < particlesArray.current.length; i++) {
        particlesArray.current[i].update();
        particlesArray.current[i].draw();
        if (particlesArray.current[i].radius <= 0.1) {
          particlesArray.current.splice(i, 1);
          i--;
        }
      }
    };

    let i = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = "rgba(0,0,0,0.5)";
      c.fillRect(0, 0, window.innerWidth, window.innerHeight);
      particleMotion();
      hue = Math.sin(i * 0.01) * 360;
      i++;
    };

    const init = () => {
      particlesArray.current = [];
    };

    window.addEventListener("click", handleMouseClick);
    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef} style={{ position: "absolute", backgroundColor: "rgba(134, 131, 131, 0.4)", opacity: '0.2', height: "100vh", top: "0vh", overflow: "hidden" }} />;
};

export default ParticleCanvas;
