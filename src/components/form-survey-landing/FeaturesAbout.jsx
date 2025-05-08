import React from "react";

const FeaturesAbout = () => {
  return (
    <div className="row align-items-center">
      <div
        className="col-xl-5 col-lg-6 ms-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="title-style-fourteen">
          <div className="upper-title">Ready to Start Your Web3 Development Journey?          </div>
          <h2>Together, let us create something incredible!
          </h2>
        </div>
        <div className="tag-line pb-10">
        Get in touch today for a free consultation and discover how our web3 development expertise can transform your business.        </div>
      </div>
      <div
        className="col-lg-6 order-lg-first text-center text-lg-left"
        data-aos="fade-right"
      >
        <div className="illustration-holder-two d-inline-block ps-4 ps-md-5 md-mt-90">
          <img src="images/assets/screen_38.png" alt="" className="w-100" />
          <img
            src="images/assets/screen_38.1.png"
            alt=""
            className="shapes shape-one"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAbout;
