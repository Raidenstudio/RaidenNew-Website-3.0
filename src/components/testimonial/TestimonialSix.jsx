import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo from "../../assets/Home/demo.jpg";
import cogni from "../../assets//raiden-verse/Raidencogni.svg"
import simx from "../../assets/raiden-verse/RaidenSimX.svg"
import arcviz from "../../assets//raiden-verse/RaidenARCVIZ.svg"
import verse from "../../assets/raiden-verse/RaidenVerse.svg"

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
    centerPadding: "5px",
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
          <div className="feedback-wrapper pb-4">
            <img className="w-100 h-100 object-fit-cover" src={val.img} alt="screen" />
          </div>
          {/* End .feedback-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
