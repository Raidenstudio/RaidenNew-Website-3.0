import React from "react";
import { Link } from "react-router-dom";
import Header from "../e-commerce/Header";
import CallToActionThree from "../call-to-action/CallToActionThree";
import FooterTwo from "../footer/FooterTwo";
import CopyRightTwo from "../footer/CopyRightTwo";
import HeaderThree from "../header/HeaderThree";

const HeroBannerTwelve = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderThree />

      <div className="hero-banner-twelve lg-container bg-white" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
              <h1 className="hero-heading font-gordita text-black" data-aos="fade-up">
                Unveiling{" "}
                <span style={{ color: "" }}>Blockchain</span>{" "}
                with Innovation
              </h1>
              <p
                className="hero-sub-heading text-black"
              >
                we develop the secure, dependable code that brings it to life.
              </p>
            </div>
          </div>

          {/* <div className="screen-holder" data-aos="fade-up"> */}
            {/* </div> <!-- /.screen-holder --> */}
          </div>



        {/* </div> */}
      </div>
    </div>
    // /.hero-banner-twelve
  );
};

export default HeroBannerTwelve;
