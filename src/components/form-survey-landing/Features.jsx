import React from "react";

const Features = () => {
  return (
    <div className="row">
      <div className="col-xl-6 col-lg-7 order-lg-last" data-aos="fade-left">
        <div className="ps-lg-5">
          <div className="title-style-fourteen">
            <h2>Our Approach to Web3 Development
            </h2>
          </div>
          <div className="tag-line">
            We build successful Web3 projects by joining hands with technical excellence and practical business value.
          </div>
          <ul className="list-item">
            <li>Understanding your vision and objectives for better consultation</li>
            <li>Aligns blockchain function into your core business goals
            </li>
            <li>Carried out with frequent demos and feedback for improvements</li>
            <li>Across multiple networks and ensuring safety and network compatibility</li>
            <li>No source of technical mysteries throughout the entire journey</li>
          </ul>
        </div>
      </div>
      {/* Emd .col */}

      <div
        className="col-xl-6 col-lg-5 text-center text-lg-left order-lg-first"
        data-aos="fade-right"
      >
        <div className="illustration-holder d-inline-block md-mt-60">
          <img src="images/assets/ils_23.svg" alt="" className="w-100" />
          <img
            src="images/assets/ils_23.1.svg"
            alt=""
            className="shapes shape-one"
          />
          <img
            src="images/assets/ils_23.2.svg"
            alt=""
            className="shapes shape-two"
          />
          <img
            src="images/assets/ils_23.3.svg"
            alt=""
            className="shapes shape-three"
          />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Features;
