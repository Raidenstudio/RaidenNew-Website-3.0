import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo from "../../assets/Home/demo.jpg";
import cogni from "../../assets/Home/product/RaidenCogni+.png"
import simx from "../../assets/Home/product/RaidenSimX.png"
import arcviz from "../../assets/Home/product/Raiden ARCVIZ.png"
import verse from "../../assets/Home/product/RaidenVerse.png"

export default function TestimonialSix() {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      img: verse,
    },
    {
      img: arcviz,
    },
    {
      img: simx,
    },
    {
      img: cogni,
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="feedback-wrapper">
            <img className="w-100 h-100 object-fit-cover" src={val.img} alt="screen" />
          </div>
          {/* End .feedback-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
