import React from "react";
import { Helmet } from "react-helmet";
import Pricing from "../../components/form-survey-landing/Pricing";
import Features from "../../components/form-survey-landing/Features";
import FeaturesAbout from "../../components/form-survey-landing/FeaturesAbout";
import HowWorks from "../../components/form-survey-landing/HowWorks";
import Portfolio from "../../components/form-survey-landing/Portfolio";
import Social from "../../components/form-survey-landing/Social";
import Testimonial from "../../components/form-survey-landing/Testimonial";
import HeroBannerThirteen from "../../components/form-survey-landing/HeroBannerThirteen";
import Blog from "../../components/form-survey-landing/Blog";
import CallToAction from "../../components/form-survey-landing/CallToAction";
import Footer from "../../components/form-survey-landing/Footer";
import Header from "../../components/e-commerce/Header";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";
import CallToActionThree from "../../components/call-to-action/CallToActionThree";
import Webservices from "../../components/features/Webservices";
import Technologies from "./Techonologies";
import HeaderThree from "../../components/header/HeaderThree";

const FormSurveyLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
          Form Survey Landing || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderThree />

      <HeroBannerThirteen />
      {/* End Hero banner */}

      {/* <!-- 
        =============================================
            Fancy Feature Thirty Four
        ============================================== 
        --> */}
      <div className="fancy-feature-thirtyFour mt-150 md-mt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12  m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven text-center mb-70 md-mb-10">
                <div className="upper-title font-raleway">Why Choose Raiden ?                </div>
                <h2>
                  We simplify hard chains and deliver you real-world solutions with tangible value.
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <HowWorks />
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}

      {/* <!-- 
        =============================================
            Block Style Thirty Six
        ============================================== 
        --> */}
      <div
        className="block-style-thirtySix lg-container pt-225 md-pt-120"
        id="feature"
      >
        <div className="container">
          <Features />
        </div>
      </div>

      <div className="fancy-feature-ten md-pt-70" id="features">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div
                className="col-md-12 text-center"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="title-style-six">
                  <h2>
                    Our Web3 Development Services
                  </h2>
                </div>
              </div>
            </div>
            <Webservices />
          </div>
          <img
            src="images/shape/137.svg"
            alt="shape"
            className="shapes shape-one"
          />
        </div>
      </div>
      <div
        className="block-style-thirtySix lg-container pt-225 md-pt-120"
        id="feature"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 order-lg-first" data-aos="fade-right">
              <div className="ps-lg-5">
                <div className="title-style-fourteen">
                  <h2 className="mb-20">Our Web3 Development Process
                  </h2>
                </div>
                <ul className="list-item">
                  <li><span style={{ color: "#745DFA" }}>Consultation - </span>We start by understanding your vision, challenges, and objectives</li>
                  <li><span style={{ color: "#745DFA" }}>Concept Design -</span> Our team creates technical architecture and product specifications

                  </li>
                  <li><span style={{ color: "#745DFA" }}>Development -</span> Iterative building with regular check-ins and demonstrations
                  </li>
                  <li><span style={{ color: "#745DFA" }}>Testing & Auditing - </span>Multiple levels of testing and security review
                  </li>
                  <li><span style={{ color: "#745DFA" }}>Deployment</span> Smooth launch across your target blockchain networks</li>
                  <li><span style={{ color: "#745DFA" }}>Ongoing Support -</span> Continued optimization, updates, and scaling assistance
                  </li>
                </ul>
              </div>
            </div>
            {/* Emd .col */}

            <div
              className="col-xl-6 col-lg-5 text-center text-lg-right order-lg-last"
              data-aos="fade-left"
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
        </div>
      </div>

      {/* <!-- /.block-style-thirtySix --> */}

      {/* <!-- 
        =============================================
            Fancy Feature Thirty Five
        ============================================== 
        --> */}
      {/* <div
        className="fancy-feature-thirtyFive position-relative lg-container pt-225 md-pt-120"
        id="product"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="block-style-thirtySix">
                <div className="title-style-fourteen">
                  <div className="upper-title">TEMPLATE LIBRARY</div>
                  <h2>Ton of Built in Library.</h2>
                </div>
                <div className="tag-line">
                  Template library help you to create your won style.
                </div>
              </div>
              {/* <!-- /.block-style-thirtySix --> */}
      {/* </div>
          </div> */}
      {/* </div> */}
      {/* <div className="slider-wrapper">
          <div className="portfolio_slider_two survey-slider">
            <Portfolio />
          </div> */}
      {/* <!-- /.portfolio_slider_two --> */}
      {/* </div> */}
      {/* <!-- /.slider-wrapper --> */}
      {/* </div> */}
      {/* <!-- /.fancy-feature-thirtyFive --> */}

      {/* <!-- 
        =============================================
            Block Style Thirty Six
        ============================================== 
        --> */}
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <FeaturesAbout />
        </div>
      </div>
      {/* <!-- /.block-style-thirtySix --> */}

      {/* <!--
        =====================================================
            Integrated Apps
        =====================================================
        --> */}
      {/* <div className="integrated-apps pt-180 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div
                className="title-style-fourteen text-center mb-70 md-mb-50"
                data-aos="fade-up"
              >
                <div className="upper-title">INTEGRATION</div>
                <h2>Integrate with 120+ apps & boost your workfrlow.</h2>
              </div>
            </div>
            <div className="col-xl-8 m-auto">
              <Social />
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- /.integrated-apps --> */}

      {/* <!--
        =====================================================
            Client Feedback Slider Eight
        =====================================================
        --> */}
      {/* <div
        className=" lg-container pt-180 md-pt-110"
        data-aos="fade-up"
        id="feedback"
      > */}
      {/* <div className="client-feedback-slider-eight">
          <div className="container">
            <div className="main-content position-relative">
              <div className="clientSliderSeven">
                <Testimonial />
              </div>
            </div> */}
      {/* <!-- /.main-content --> */}
      {/* </div>
        </div>
      </div> */}
      {/* <!-- /.client-feedback-slider-eight --> */}

      {/* <!--
        =====================================================
            Pricing Section Nine
        =====================================================
        --> */}
      {/* <div
        className="pricing-section-nine lg-container pt-150 md-pt-110"
        id="pricing"
      >
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <div className="upper-title">PRICING</div>
            <h2>Pick your plan or create</h2>
          </div>

          <div className="row justify-content-center">
            <Pricing />
          </div>
        </div>
      </div> */}
      {/* <!-- /.pricing-section-nine --> */}

      {/* <!--
        =====================================================
            Feature Blog Five
        =====================================================
        --> */}
      {/* <div className="feature-blog-five lg-container mt-160 md-pt-120">
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <h2>Inside Story</h2>
            <p className="mt-25 md-mt-10">
              Automatically send people to the next stage of the journey{" "}
            </p>
          </div>

          <div className="row">
            <Blog />
          </div>
        </div>
      </div> */}
      {/* <!-- /.feature-blog-five --> */}

      {/* <div className="fancy-short-banner-fifteen mt-150 md-mt-80">
        <CallToAction />
      </div> */}
      {/* // <!-- /.fancy-short-banner-fifteen --> */}

      {/* <!--
        =====================================================
            Footer Style Nine
        =====================================================
        --> */}

      <div className="fancy-feature-nineteen pt-180 md-pt-100" id="effect">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-9 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-80 md-mb-40">
                <h2>Technologies We Use</h2>
              </div>
            </div>
          </div>
          <Technologies />
        </div>
      </div>

      <div className="fancy-short-banner-three mt-200 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
        </div>
      </div>

      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormSurveyLanding;
