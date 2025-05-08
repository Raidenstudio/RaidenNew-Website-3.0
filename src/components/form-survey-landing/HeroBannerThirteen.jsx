import React from "react";
import { Link } from "react-router-dom";

const HeroBannerThirteen = () => {
  return (
    // <!--
    // =============================================
    //     Theme Hero Banner
    // ==============================================
    // -->
    <div className="hero-banner-thirteen lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="hero-heading text-center m-0">Transforming Ideas into Decentralized Reality</h1>
            <p className="hero-sub-heading mt-40">
            We revolutionize with a decentralized blockchain, turning your visionary investments into functional, scalable, and secure applications. We build the gap between blockchain innovation and practical implementation for better convenience.
            </p>
            <a href="#" className="theme-btn-fourteen">
             Contact Us
            </a>
          </div>
        </div>

        {/* <div className="screen-holder">
          <img
            src="images/assets/ils_22.svg"
            alt="illustration"
            className="img-meta"
          />
          <img
            src="images/assets/ils_22.1.svg"
            alt="illustration"
            className="shapes shape-one"
          />
          <img
            src="images/assets/ils_22.2.svg"
            alt="illustration"
            className="shapes shape-two"
          />
        </div> */}
        {/* <!-- /.screen-holder --> */}
      </div>
    </div>
    // <!-- /.hero-banner-thirteen -->
  );
};

export default HeroBannerThirteen;
