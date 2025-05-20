import React from "react";
import { Link } from "react-router-dom";
import Header from "../e-commerce/Header";
import CallToActionThree from "../call-to-action/CallToActionThree";
import FooterTwo from "../footer/FooterTwo";
import CopyRightTwo from "../footer/CopyRightTwo";

const HeroBannerTwelve = () => {
  return (
      <div className="main-page-wrapper">
      <Header/>
    <div className="hero-banner-twelve lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
            <h1 className="hero-heading font-gordita" data-aos="fade-up">
              Unveiling{" "}
              <span style={{ color: "#FF006B" }}>Blockchain</span>{" "}
              with Transparency and Innovation
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              You own the data and set the rules; we develop the secure, dependable code that brings it to life.
            </p>
          </div>
        </div>

        <div className="screen-holder" data-aos="fade-up">
          {/* </div> <!-- /.screen-holder --> */}
        </div>
        
          
        
      </div>
    </div>
    </div>
    // /.hero-banner-twelve
  );
};

export default HeroBannerTwelve;
