import { React } from "react";
import Modal from "react-modal";
import Header from "../../../components/e-commerce/Header";
import FancyFeatureTen from "../../../components/features/FancyFeatureTen";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FancyFeatureNinteen from "../../../components/features/FancyFeatureNinteen";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FancyFeatureTewentySix from "../../../components/features/FancyFeatureTewentySix";
import FancyTextBlock21 from './../../../components/fancy-text-block/FancyTextBlock21';
import SocialThree from "../../../components/social/SocialThree";
import HTML from "../../../assets/images/assets/html.png";
import CSS from "../../../assets/images/assets/CSS.png";
import Monogo from "../../../assets/images/assets/MongoDB.png";
import Node from "../../../assets/images/assets/nodejs.png";
import WEB from "../../../assets/images/assets/websocket 1.png";
import Rust from "../../../assets/images/assets/Rust.png";
import Reactw from "../../../assets/images/assets/React.png";
import Solidity from "../../../assets/images/assets/Solidity.png";
import Webb from "../../../assets/images/assets/Web3.png";
import serviceBack from "../../../assets/images/assets/metaverse/Both.svg"
import HeaderThree from "../../../components/header/HeaderThree";

const featureContent = [

  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: HTML,
    title: "HTML",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: CSS,
    title: "CSS",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: Reactw,
    title: "React",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: Reactw,
    title: "React Native",
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: Webb,
    title: "Weeks",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    icon: WEB,
    title: "Websocket",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: Rust,
    title: "Rust",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: Solidity,
    title: "Solidity",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: Node,
    title: "Node.js",
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: Monogo,
    title: "MongoDB",
  },

];


Modal.setAppElement("#root");



const ServiceV4 = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderThree />

      <div className="hero-banner-five">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 col-md-10 m-auto">
              <h1
                className="font-raleway hero-heading"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Cultivate Enduring Engagement through{" "}
                <span style={{ textDecoration: "none" }}>Metaverse</span>
              </h1>
              <p
                className="hero-sub-heading"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Captivating avatars for your riveting 3D adventures that support
                your enduring metaverse.
              </p>
            </div>
          </div>
        </div>

        <div className="partner-section-one mt-170 md-mt-90 pb-120 md-pb-80 ">
          <div className="container">
            <div className="position-relative">
              <img src={serviceBack} />
              <div style={{ width: "40%", textAlign: "center", margin: "auto", position: "absolute", top: "54%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h3 className="font-raleway" style={{ fontWeight: "600" }}>Industries We Serve{" "}</h3>
                <p className="sub-text pt-30 pb-30 text-center">
                  With technical knowledge and creative solutions to tackle particular business problems, we produce outcomes across a range of industries.
                </p>
              </div>
            </div>

          </div>
        </div>

        <img src="images/shape/133.svg" alt="shape" className="shapes shape-one" />
        <img src="images/shape/134.svg" alt="shape" className="shapes shape-two" />
        <img src="images/shape/135.svg" alt="shape" className="shapes shape-three" />
        <img src="images/shape/136.svg" alt="shape" className="shapes shape-four" />

        <div className="partner-slider-two mt-110 md-mt-80">
          <div className="container">
            <div className="partnerSliderTwo">
              {/* Placeholder for slider (e.g. BrandTwo) */}
            </div>
          </div>
        </div>

        <div className="fancy-feature-ten md-pt-70" id="features">
          <div className="bg-wrapper">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="title-style-six">
                    <h2>
                      Dream. Create. Explore with {" "}
                      <span style={{ textDecoration: "none" }}> Metaverse </span>
                    </h2>
                  </div>
                </div>
                <div
                  className="col-lg-5 col-md-6"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <p className="sub-text pt-30 pb-30 text-start">
                    Explore endless possibilities, let your imagination run wild, and build your world. Your adventure begins now.
                  </p>
                </div>
              </div>
              <FancyFeatureTen />
            </div>
            <img
              src="images/shape/137.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
        </div>
        <div className="fancy-text-block-twentyOne pt-170 md-pt-100 font-gordita" id="about">
          <div className="container">
            <FancyTextBlock21 />
          </div>
        </div>

        <div class="fancy-feature-twentySix lg-container pt-160 md-pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 m-auto" data-aos="fade-up">
                <div className="title-style-twelve text-center pb-80 md-pb-30">
                  <div className="upper-title">Development Stories</div>
                  <h2>
                    Architecting the Metaverse: <br />
                    <span>
                      Our Development Process.
                      <img
                        src="images/shape/line-shape-13.svg"
                        alt="shape"
                      />
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <FancyFeatureTewentySix /></div></div>

        <div className="fancy-feature-nineteen pt-180 md-pt-100 " id="effect">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-9 col-lg-11 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-eight text-center mb-80 md-mb-40">
                  <h2>Metaverse Development</h2>
                  <p>Blockchain Front-end and Back-end</p>
                </div>
              </div>
            </div>
            <FancyFeatureNinteen featureContent={featureContent} />
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
    </div >
  );
};

export default ServiceV4;