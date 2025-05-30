import React from "react";
import Video from "../../elements/Video";
import BrandFive from "../../components/brand/BrandFive";


const HeroBannerEight = ({heroContent}) => {
  return (
    <div className="hero-banner-eight mt-180">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <h1 className="hero-heading" data-aos="fade-up">
              {heroContent.title}
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {heroContent.description}
            </p>
            <a
              href="#"
              className="theme-btn-nine"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {heroContent.buttonText}
            </a>
          </div>
        </div>

        <div className="video-wrapper">
          <Video />
        </div>
        {/* /.video-wrapper */}
      </div>

      {/* /.partner-slider-two */}
      {/* <img
        src="images/shape/173.svg"
        alt="shape"
        className="shapes shape-right"
      />
      <img
        src="images/shape/174.svg"
        alt="shape"
        className="shapes shape-left"
      /> */}
    </div>
    //   /.hero-banner-eight
  );
};

export default HeroBannerEight;
