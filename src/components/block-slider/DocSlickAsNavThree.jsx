import React, { useState } from "react";
import Slider from "react-slick";

export default function DocSlickAsNavThree({ navContent }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Text Navigation Slider */}
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slick-nav-custom"
      >
        {navContent.map((item, index) => (
          <div className="d-flex item_content" key={index}>
            <div className="icon d-flex align-items-center justify-content-center">
              <img src="images/icon/81.svg" alt="icon" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </Slider>

      {/* Image Content Slider */}
      <div className="position-relative">
        <Slider
          className="slick-nav-none carousel-inner"
          asNavFor={nav2}
          fade={true}
          speed={600}
          ref={(slider1) => setNav1(slider1)}
        >
          {navContent.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item.image} alt="feature" />
            </div>
          ))}
        </Slider>

        {/* Decorative Shapes */}
        <img
          src="images/shape/152.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/153.png"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
    </>
  );
}
