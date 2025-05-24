import React from "react";
import { Helmet } from "react-helmet";
import HeaderTwo from "../../components/header/HeaderTwo";
import HeroBannerTwo from "../../components/hero-banner/HeroBannerTwo";
import FeatureFour from "../../components/features/FeatureFour";
import Faq from "../../components/faq/Faq";
import CounterThree from "../../components/counter/CounterThree";
import AboutTwo from "../../components/about/AboutTwo";
import Social from "../../components/social/Social";
import Testimonial from "../../components/testimonial/Testimonial";
import CallToActionThree from "../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";
import Choose from "../../assets/images/assets/Home page (1).png";
import Chatbot from "../../assets/images/assets/Group 6.png";
import Chat from "../../assets/images/assets/Group 7.png";
import Profile1 from "../../assets/images/assets/Profile 1.png";
import Profile2 from "../../assets/images/assets/Profile 2.png";
import Profile3 from "../../assets/images/assets/Profile 3.png";
import Profile4 from "../../assets/images/assets/Profile 4.png";
import Profile5 from "../../assets/images/assets/Profile 5.png";
import Header from "../../components/e-commerce/Header";
import HeaderThree from "../../components/header/HeaderThree";
import Portfolio from "../../components/portfolio/Portfolio";

const CustomerSupport = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Customer Support || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderThree />
      {/* End HeaderTwo Variation Three */}

      {/* =============================================
			Hero Banner Two
		  ============================================== */}
      <HeroBannerTwo />
      {/* End HeroBannerTwo */}

      {/* =============================================
				Fancy Feature Four
		  ============================================== */}
      <div className="fancy-feature-four mt-20">
        <div className="bg-wrapper">
          <img
            src="images/shape/18.svg"
            alt="shape"
            className="shapes shape-right"
          />
          <img
            src="images/shape/19.svg"
            alt="shape"
            className="shapes shape-left"
          />
          <div className="container">
            <div className="title-style-two text-center mb-100 md-mb-50">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-md-10 m-auto font-raleway">
                  <h2>
                    <span style={{ display: "block", whiteSpace: "nowrap" }}>
                      We unlock a meaningful
                    </span>
                    <span style={{ display: "block" }}>
                      experience.{" "}
                      <img src="images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                  </h2>
                </div>

                {/* End .col */}
              </div>
            </div>
            {/* End .title */}

            <div className="inner-content">
              <img
                src="images/shape/20.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/shape/21.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <FeatureFour />
            </div>
            {/* End .inner-content */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-four */}

      {/* 
     =============================================
				Fancy Text Block Six
		============================================== */}
      <div className="fancy-text-block-six mt-250 md-mt-130">
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-three mb-35">
                <h2>
                  <span>
                    3 Main Reason to{" "}
                    <img src="images/shape/line-shape-3.svg" alt="shape" />
                  </span>
                  Choose Raiden.
                </h2>
              </div>
              {/* End title */}
              <Faq />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div
          className="img-meta-container position-absolute -top-2"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <img src={Choose} alt="feature" />
          <img
            src="images/shape/22.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/23.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/24.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/25.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/26.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <img
            src="images/shape/27.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <img
            src="images/shape/28.svg"
            alt="shape"
            className="shapes shape-seven"
          />
        </div>
      </div>
      {/* /.fancy-text-block-six  */}

      {/* <div className="counter-with-icon-one pt-200 md-pt-80">
        <div className="container">
          <CounterThree />
        </div>
      </div> */}
      {/* /.counter-with-icon-one */}

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-seven mt-150 md-mt-100">
        <div className="bg-wrapper">
          <img
            src="images/shape/29.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/30.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/31.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/32.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/33.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <AboutTwo />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-text-block-seven */}


      <div className="fancy-portfolio-one pb-180 md-pb-100 pt-180 md-pt-100" id="product">
        <div className="container">
          <div className="title-style-six">
            <h2>
              Our <span>Products</span>
            </h2>
          </div>
        </div>

        <div className="portfolioSliderOne arrow-top-right pt-120 md-pt-70">
          <Portfolio />
        </div>
      </div>


      {/* 	=====================================================
				Client Feedback Slider One
			===================================================== */}
      <div className="client-feedback-slider-one pt-50 pb-170 md-pb-80">
        <div className="shapes-holder">
          <img src="images/shape/39.svg" alt="shape" />
          <img
            src={Profile1}
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src={Profile2}
            alt="shape"
            className="cp-img-one"
          />
          <img
            src={Profile3}
            alt="shape"
            className="cp-img-two"
          />
          <img
            src={Profile4}
            alt="shape"
            className="cp-img-three"
          />
          <img
            src={Profile5}
            alt="shape"
            className="cp-img-four"
          />
          <div className="title-style-two">
            <h2>
              Hear <br />
              From Our  <br />
              Clients.
            </h2>
          </div>
        </div>
        {/* /.shapes-holder */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-auto">
              <div className="feedback-meta">
                <div className="watermark font-gilroy-bold">Feedback</div>
                <img src="images/icon/30.svg" alt="shape" className="icon" />
                <div className="clientSliderOne">
                  <Testimonial />
                </div>
              </div>
              {/* /.feedback-meta */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.client-feedback-slider-one */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-100 md-mt-40">
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
