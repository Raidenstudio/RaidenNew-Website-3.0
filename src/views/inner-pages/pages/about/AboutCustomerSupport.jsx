import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderTwo from "../../../../components/header/HeaderTwo";
import CallToActionThree from "../../../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";
import CounterThreeColored from "../../../../components/counter/CounterThreeColored";
import FancyTextBlockTen from "../../../../components/fancy-text-block/FancyTextBlockTen";
import FancyFeatureSeven from "../../../../components/features/FancyFeatureSeven";
import TeamFour from "../../../../components/team/TeamFour";

const CustomerSupport = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          The Powerhouse behind Vision and Innovation
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderTwo />
      {/* End HeaderTwo Variation Three */}

      {/* 	=============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">About Us</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">The Powerhouse behind Vision and Innovation</h1>
                <p className="sub-heading">
                  We create experiences that not only transform but also reinvent through the use of cutting-edge technology and relentless innovation.
                </p>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                {/* <p>Our Story</p> */}
                <h2>RAIDEN  LABS</h2>
              </div>
            </div>
          </div>
          {/* End title-style-two */}

          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                We’re passionate about turning bold ideas into powerful digital experiences. Our extensive  expertise in gaming, virtual reality, augmented reality, and blockchain allows us to create solutions that are not only inventive but also genuinely significant. 
              </p>
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Every project we take on is built on your goals, ensuring that your vision becomes a reality you can trust and grow with.
              </p>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.fancy-text-block-nine */}

      {/* =====================================================
				Counter With Icon One
			===================================================== */}
    
      {/*  /.counter-with-icon-one */}

      {/* 	=============================================
				Fancy Text block Ten
			==============================================  */}
      {/* <div className="fancy-text-block-ten mt-120 md-mt-60">
        <div className="container">
          <FancyTextBlockTen />
        </div>
      </div> */}
      {/* /.fancy-text-block-ten */}

      {/* =====================================================
				Fancy Feature Five
			===================================================== */}
      <div className="fancy-feature-five mt-200 md-mt-100">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <img
            src="images/shape/47.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <div className="title-style-two text-center mb-60 md-mb-40">
              <div className="row">
                <div className="col-xl-8 col-lg-9 m-auto">
                  <p>Our Values</p>
                  <h2> WHY CHOOSE RAIDEN LABS</h2>
                  <div className="sub-text">
                    Deski stand with friendly interface with lots of features
                    that help our team and csutomer to collbarate easily.
                  </div>
                </div>
              </div>
            </div>
            {/* End .title-style-two */}
            <div className="row justify-content-center">
              <FancyFeatureSeven />
            </div>
            {/* End .row */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-five */}

      {/* =====================================================
				Team Section Two
			===================================================== */}

      {/* /.team-section-two */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-225 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CustomerSupport;
