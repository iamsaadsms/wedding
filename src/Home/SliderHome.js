import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderHome.css";
import GradientComponent from "../Common/GradientComponent";

const SliderHome = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    draggable: false,
    beforeChange: () => {
      const slickList = document.querySelector(".slick-list");
      if (slickList) {
        slickList.classList.add("do-transition");
      }
    },
    afterChange: () => {
      const slickList = document.querySelector(".slick-list");
      if (slickList) {
        slickList.classList.remove("do-transition");
      }
    }
  };

  return (
    <div className="slider-container">
            <GradientComponent />
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1446770145316-10a05382c470?dpr=1&auto=format&fit=crop&w=900&h=450&q=80&cs=tinysrgb&crop="
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=1&auto=format&fit=crop&w=900&h=450&q=80&cs=tinysrgb&crop="
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1477420086945-b99c643e8a3d?dpr=1&auto=format&fit=crop&w=900&h=450&q=80&cs=tinysrgb&crop="
            alt=""
          />
        </div>
      </Slider>

    </div>
  );
};

export default SliderHome;
