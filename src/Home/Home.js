import React, { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import './Home.css';
import MainHome from "./MainHome";
import Countdown from "./Countdown";
import Itenary from "./Itenary";
import bgsong from '../Media/song.mp3';

const Home = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    const handleToggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="Home" >
            <audio ref={audioRef} src={bgsong} loop />
            <MainHome />
            <Countdown />
            <Itenary />
            <div className="audio-icon" onClick={handleToggleAudio}>
                {isPlaying ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
            </div>
        </div>
    );
}

export default Home;
