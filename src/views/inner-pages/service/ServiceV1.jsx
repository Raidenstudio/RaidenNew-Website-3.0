import React from "react";
import { Helmet } from "react-helmet";
import HeaderTwo from "../../../components/header/HeaderTwo";
import FancyVideoFive from "../../../components/video/FancyVideoFive";
import CounterThree from "../../../components/counter/CounterThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FeatureSixV2 from "../../../components/features/FeatureSixV2";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FancyFeatureThirtyThree from "../../../components/features/FancyFeatureThirtyThree";
import FancyFeatureThirtyFour from "../../../components/features/FancyFeatureThirtyFour";

const ServiceV1 = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Service Version 1 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderTwo />
      {/* End Header */}

      {/* 	=============================================
            Fancy Hero Three
        ============================================== */}
      <div className="fancy-hero-three">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 m-auto">
              <h1 className="heading">
  <span style={{ fontSize: "0.8em" }}>
    Forging the Playable Realities on the Bedrock of
  </span>{" "}
  <span style={{ fontSize: "1.2em", color: "#000", fontWeight: "bold" }}>
    Blockchain
  </span>
</h1>
                <p className="sub-heading">
                Strap in - your adventurous game journey begins, where code extends life and blockchain locks it in.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper  */}
      </div>
      {/* /.fancy-hero-three */}

      {/*   =============================================
        Fancy Text block Eleven
    ==============================================  */}
      <div className="fancy-text-block-eleven mt-200 md-mt-100">
        <div className="container">
          <FancyVideoFive />

          <div className="mt-70">
            <div className="container">
              <FancyFeatureThirtyThree />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-eleven */}

      {/* =============================================
            Fancy Feature Six
        ============================================== */}
      <div className="fancy-feature-six mt-140 md-mt-70">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="shapes shape-five"></div>
          <img
            src="images/shape/51.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <div className="container">
            <div className="title-style-two text-center mb-85 md-mb-40">
              <h2>
                <span>
                The Game Creation Approach
                </span>
              </h2>
              <div className="sub-text mt-15">
              Our five years of experience developing blockchain solutions and continuously refining our process to keep up with this evolving technology.
              </div>
            </div>
            {/* End .title */}
            <FeatureSixV2 />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-six */}

      {/* =====================================================
            Fancy Text block Twelve
        ===================================================== */}
      <div className="fancy-feature-thirtyOne pt-120  md-pt-80 md-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-style-four text-center pb-50 md-pb-20">
                <h2>Blockchain game development services</h2>
              </div>
            </div>
          </div>
          {/* End .row */}
          <FancyFeatureThirtyFour />
        </div>
      </div>
      {/* <!-- /.fancy-text-block-twelve --> */}

      {/* =====================================================
            Counter With Icon One
        ===================================================== */}
      <div className="counter-with-icon-one md-pt-70">
        <div className="container">
          <CounterThree />
        </div>
      </div>
      {/* /.counter-with-icon-one */}

      {/* =====================================================
        Fancy Short Banner Three
        ===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* =====================================================
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

export default ServiceV1;
