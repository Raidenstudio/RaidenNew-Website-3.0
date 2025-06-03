import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import industry1 from "../../assets/Home/industry.jpg";
import industry2 from "../../assets/Home/industry2.jpg";
import industry3 from "../../assets/Home/industry.jpg";
import industry4 from "../../assets/Home/industry2.jpg";

const PortfolioImages = [
  {
    id: "01",
    image: industry1,
    title: "Food Delivery App",
    desc: "Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands",
  },
  {
    id: "02",

    image: industry2,
    title: "Fitness Tracker",
    desc: "Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands",
  },
  {
    id: "03",

    image: industry3,
    title: "E-commerce Platform",
    desc: "Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands",
  },
  {
    id: "04",

    image: industry4,
    title: "Learning App",
    desc: "Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands",
  },
];

const MobileAppPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="mobile-app-portfolio-wrapper ">
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }} >Our Mobile App Portfolio</h2>
        <p className="text-muted mb-5">
          Explore our beautifully designed and highly functional mobile apps crafted for various industries.
        </p>
      </div>

      <Slider {...settings}>
        {PortfolioImages.map((val, i) => (
          <div className="item" key={i}>
            <div
              className={`img-holder ${i === activeIndex ? "active" : ""}`}
              style={{
                backgroundImage: i === activeIndex ? `url(${val.image})` : "none",
              }}
            >
              <div className="overlay-content px-4 py-5">
                <h4 className={`title-text mb-4 fw-bold ${i === activeIndex ? "text-white" : "text-dark"}`}  >
                  {val.id}
                </h4>
                <h4 className={`title-text mb-4 fw-bold ${i === activeIndex ? "text-white" : "text-dark"}`} style={{ fontFamily: 'Raleway, sans-serif',font:'bold' }}>
                  {val.title}
                </h4>
                <p className={`desc-text ${i === activeIndex ? "text-white" : "text-dark"}`}>
                  {val.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileAppPortfolio;
