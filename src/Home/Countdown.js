import React, { useEffect, useState, useRef } from 'react';
import './Countdown.css';
import ParticleCanvas from '../Common/ParticleCanvas';
import Firework from '../Common/Firework';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const countdownRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => {
      if (countdownRef.current) {
        observer.unobserve(countdownRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime(),
        distance = countDown - now;

      if (distance < 0) {
        setIsBirthday(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="container" ref={countdownRef}>
      <h1 id="headline">"Countdown to The Event</h1>
      {!isBirthday && (
        <div id="countdown">
          <ul>
            <li><span id="days">{timeLeft.days}</span>days</li>
            <li><span id="hours">{timeLeft.hours}</span>Hours</li>
            <li><span id="minutes">{timeLeft.minutes}</span>Minutes</li>
            <li><span id="seconds">{timeLeft.seconds}</span>Seconds</li>
          </ul>
        </div>
      )}
      {isBirthday && (
        <div id="content" className="emoji">
          <span role="img" aria-label="party">🥳</span>
          <span role="img" aria-label="tada">🎉</span>
          <span role="img" aria-label="cake">🎂</span>
        </div>
      )}
      <ParticleCanvas />
      <Firework />
    </div>
  );
};

export default Countdown;
