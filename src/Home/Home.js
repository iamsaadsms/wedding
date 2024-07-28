import React, { useState, useRef, useEffect } from "react";
import './Home.css';
import MainHome from "./MainHome";
import Countdown from "./Countdown";
import Itenary from "./Itenary";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import bgsong from '../Media/song.mp3';
import Slider from "./SliderHome";

const Home = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="Home">
            <MainHome />
            <Countdown />
            <Itenary />
            <audio ref={audioRef} src={bgsong} autoPlay loop />
            <div className="audio-icon" onClick={(e) => {e.stopPropagation(); togglePlayPause();}}>
                {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
            </div>
            <Slider />
        </div>
    );
}

export default Home;
