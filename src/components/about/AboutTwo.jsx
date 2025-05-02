import React from "react";
import { Link } from "react-router-dom";
import Steve from "../../assets/images/assets/Frame 12.png";

const AboutTwo = () => {
  return (
    <div className="row">
      <div
        className="col-lg-5 col-md-6 col-sm-10"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <div className="img-holder">
          <img
            src={Steve}
            alt="shape"
            className="shapes shape-six"
            style={{height: "450px"}}
          />
        </div>
        {/* img-holder */}
      </div>
      {/* End .col */}

      <div
        className="col-xl-6 col-lg-7 ms-auto"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <div className="quote-wrapper pt-60">
          <img src="images/icon/26.svg" alt="icon" className="icon" />
          <blockquote className="font-rubik">
          Great things in business are never done by one person they are done by a team of people.
          </blockquote>
          <h5>
           - STEVE JOBS
          </h5>
          {/* <Link to="/about-cs" className="theme-btn-two mt-45 md-mt-30">
            {" "}
            Learn More
          </Link> */}
        </div>
        {/* /.quote-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default AboutTwo;
