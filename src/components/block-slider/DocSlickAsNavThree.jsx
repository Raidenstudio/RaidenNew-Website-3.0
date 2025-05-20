import React, { useState } from "react";
import Slider from "react-slick";

export default function DocSlickAsNavThree() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();


  console.log(nav1);
  console.log(nav2);
  
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
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slick-nav-custom "
      >
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src="images/icon/81.svg" alt="icon" />
          </div>
          <p>
            Expert <br/> Craftsmanship 

            
          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src="images/icon/81.svg" alt="icon" />
          </div>
          <p>
          Innovation
          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src="images/icon/81.svg" alt="icon" />
          </div>
          <p>
            Quality Assurance

          </p>
        </div>
        {/* /.d-flex */}
        <div className="d-flex item_content">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src="images/icon/81.svg" alt="icon" />
          </div>
          <p>
       Client Satisfaction

          </p>
        </div>
      </Slider>
      {/* Bottom text slide */}

      <div className="position-relative">
        <Slider
          className="slick-nav-none carousel-inner"
          asNavFor={nav2}
          fade={true}
          speed={600}
          ref={(slider1) => setNav1(slider1)}
        >
          <div className="carousel-item">
            <img src="images/assets/screen_07.png" alt="feature" />
          </div>
          <div className="carousel-item">
            <img src="images/assets/screen_08.png" alt="feature" />
          </div>
          <div className="carousel-item">
            <img src="images/assets/screen_09.png" alt="feature" />
          </div>
        </Slider>
        {/* Top Image slide */}
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
