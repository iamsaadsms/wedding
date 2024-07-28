import React from "react";
import './MainHome.css';
import border from '../Media/border.jpg';
import PetalAnimation from "../Common/PetalAnimation";

const MainHome = () => {
    return(
        <div className="MainHome">
            {/* <img src={border} className="border-home" /> */}
            <PetalAnimation />
        </div>
    )
}

export default MainHome;