import React, { useEffect, useRef } from 'react';
import './Home.css';
import MainHome from "./MainHome";
import Countdown from "./Countdown";
import Itenary from "./Itenary";
import Slider from "./SliderHome";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import bgsong from '../Media/song.mp3';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Home = () => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    const audioRef = React.useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            // Add any other Locomotive Scroll options here
        });

        return () => {
            scroll.destroy(); // Clean up the Locomotive Scroll instance
        };
    }, []);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="Home" data-scroll-container ref={scrollRef}>
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
