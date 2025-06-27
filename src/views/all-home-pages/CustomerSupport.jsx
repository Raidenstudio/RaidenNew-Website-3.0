import React, { useState } from "react";
import { Helmet } from "react-helmet";

import FeatureFour from "../../components/features/FeatureFour";
import Testimonial from "../../components/testimonial/Testimonial";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";

import Profile1 from "../../assets/images/assets/Profile 1.png";
import Profile2 from "../../assets/images/assets/Profile 2.png";
import Profile3 from "../../assets/images/assets/Profile 3.png";
import Profile4 from "../../assets/images/assets/Profile 4.png";

import HeaderThree from "../../components/header/HeaderThree";

import AppImage from "../../assets/Home/Game-creation/AppDeveloped.svg";
import CLIENTS from "../../assets/Home/Game-creation/CLIENTS.svg";
import PROJECTS from "../../assets/Home/Game-creation/PROJECTS.svg";
import TeamMembers from "../../assets/Home/Game-creation/TeamMembers.svg";
import YearsImage from "../../assets/Home/Game-creation/YearsofExperience.svg";
import countries from "../../assets/Home/Game-creation/Countries.svg";

import PricingFive from "../../components/pricing/PricingFive";
import BlockMetaData from "../../components/fancy-text-block/BlockMetaData";
import LatestProduct from "../../components/vr-landing/LatestProduct";
import PortfolioDemo2 from "../../components/portfolio/PortfolioDemo2";

import reacts from "../../assets/Prgm-Icon/React.png";
import ethereum from "../../assets/Prgm-Icon/Ethereum.png";
import flutter from "../../assets/Prgm-Icon/Flutter.png.svg";
import mean from "../../assets/Prgm-Icon/Mean.png";
import mern from "../../assets/Prgm-Icon/Mern.png";
import solana from "../../assets/Prgm-Icon/Solana.png";
import unre1 from "../../assets/Prgm-Icon/Unreal-1.png";
import unre2 from "../../assets/Prgm-Icon/Unreal.png";
import TestimonialSix from "../../components/testimonial/TestimonialSix";
import BlogStyle5 from "../../components/blog/BlogStyle5";
import SignUp from "../inner-pages/features/miscellaneous/SignUp";

const CustomerSupport = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const blockchainServices = [
    {
      buttonHeading: "Blockchain Development",
      cards: [
        {
          heading: "Private Blockchain Development",
          subheading:
            "We utilize blockchain technology to create specialized, highly secure data protection that supports your business enterprise's growth with pertinent solutions.",
        },
        {
          heading: "Public Blockchain Development",
          subheading:
            "Developed on a public blockchain for decentralized control, our dApps and smart contracts are launched and maintained by an engaged community and end-to-end solutions.",
        },
        {
          heading: "Blockchain Consulting Services",
          subheading:
            "We deliver strategic planning, workable studies for profitable workshops, and training for a blockchain advancement that efficiently empowers your company. ",
        },
        {
          heading: "Hyperledger Development",
          subheading:
            "We create and implement chains for hyperledger fabric that offer customized hyperledger solutions for an effective implementation by forming blockchain consortiums.",
        },
      ],
    },
    {
      buttonHeading: "Crypto Development",
      cards: [
        {
          heading: "Cryptocurrency creation",
          subheading:
            "Crypto are designed and developed on the basis of blockchain and consensus technology like Proof of Work (POW) and Proof of Stake (POS) for delivering top-tier security and integrated solutions.",
        },
        {
          heading: "Cryptocurrency Exchange ",
          subheading:
            "We build a secure, seamless crypto trading experience with centralized and decentralized exchange platforms for optimal liquidity, security, and streamlined performance.",
        },
        {
          heading: "White Label Crypto Exchange",
          subheading:
            "Our white-label crypto exchange solutions provide rapid deployment, full brand customization, regulatory compliance, and advanced margin/futures trading for instant market entry.",
        },
        {
          heading: "Smart Contract Development",
          subheading:
            "We develop and deploy smart contracts with integrated security audits to ensure reliability and legal compliance while automating and safeguarding business processes.",
        },
      ],
    },
    {
      buttonHeading: "Audit Services",
      cards: [
        {
          heading: "Smart Contract Audits",
          subheading:
            "Evaluating smart contract code thoroughly for security flaws and producing regular reports that highlight threats and provide workable fixes for optimum security and performance.",
        },
        {
          heading: "Compliance Audits",
          subheading:
            "Conducting audits on a regular basis to confirm regulatory standards and compliance gaps, and providing practical suggestions to guarantee blockchain solutions.",
        },
        {
          heading: "Performance Audits",
          subheading:
            "We enhance speed and scalability, address inefficiencies, and compare our results to industry norms to maintain blockchain performance at its best.",
        },
        {
          heading: "Security Audits",
          subheading:
            "We provide thorough security audits and penetration testing to find and fix infrastructure flaws and improve your defenses against online attacks.",
        },
      ],
    },
    {
      buttonHeading: "Arbitrage Trading Platform ",
      cards: [
        {
          heading: "Arbitrage Platform Development",
          subheading:
            "Uses HFT and advanced algorithms to take advantage of changes in crypto prices, and develops distinctive arbitrage platforms with intuitive user interfaces for optimal trading outcomes.",
        },
        {
          heading: "Exchange Integration Services",
          subheading:
            "Our secure, real-time trading tools optimize liquidity and protect user data and API keys by integrating exchanges with robust APIs and multiple connectivity.",
        },
        {
          heading: "Risk Management ",
          subheading:
            "We offer automated systems that manage arbitrage trading risks, ensure regulatory compliance, and optimize strategies with real time monitoring and portfolio diversification.",
        },
        {
          heading: "Performance Analytics ",
          subheading:
            "With its advanced analytics, customized ROI reports, and effective data visualization tools, Raiden helps you deliver and report on in-depth insights with profitable trading strategies.",
        },
      ],
    },
    {
      buttonHeading: "Cryptocurrency Taxation",
      cards: [
        {
          heading: "Tax Compliance and Reporting",
          subheading:
            "Accurate filing services and professional regulatory advice ensure crypto tax compliance in both domestic and foreign jurisdictions.",
        },
        {
          heading: "Tax Calculation ",
          subheading:
            "We maintain accurate records of all transactions and crypto tax computations to ensure uninterrupted tax filing and efficient management of gains, losses, and taxable amounts.",
        },
        {
          heading: "Audit Support ",
          subheading:
            "We assist in audit preparation and represent audits and disputes with tax authorities in order to guarantee compliance and offer a positive resolution.",
        },
        {
          heading: "Tax Planning and Optimization",
          subheading:
            "We strategically manage tax and compliance during transactions while maintaining the portfolio frequency of optimizing outcomes and minimizing liabilities.",
        },
      ],
    },
    {
      buttonHeading: "NFT Services",
      cards: [
        {
          heading: "NFT Marketplace Development",
          subheading:
            "Our user-friendly interfaces and safe smart contracts create an uninterrupted environment for minting, purchasing, and selling NFTs.",
        },
        {
          heading: "NFT Consultation and Strategy",
          subheading:
            "Raiden has expertise in providing complete protection for the NFT ecosystem by consulting, developing strategies, conducting market research, and providing legal advice.",
        },
        {
          heading: "NFT Token Development",
          subheading:
            "We ensure reliable functionality and vulnerability protection while maintaining the development of encrypted tokens with minting management.",
        },
        {
          heading: "NFT Integration and Support",
          subheading:
            "With the help of our expert technical support, effective marketing strategies, execution, and maximized reach and impact, your NFT integration is likely to be successful.",
        },
      ],
    },
  ];

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

      {/* hero banner */}

      <>
        <Helmet>
          <title>
            Appointment Scheduling || Deski-Saas & Software React Template
          </title>
        </Helmet>
        {/* End Page SEO Content */}
        <div className="container	">
          <div
            className=" min-vh-90 "
            style={{
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Left Content */}
            <div className="  mb-md-0">
              <div className="coming-soon-content font-raleway">
                <h1 className="text-center" data-aos="fade-up">
                  Ingenuity Unbound Reimagined Digital World.
                </h1>
                <p className="font-gordita text-center mt-3">
                  One pixel, one line of code at a time—where creativity ignites
                  innovation.
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
          </div>
        </div>
      </>

      {/* below hero banner */}

      <div className="fancy-feature-twentyTwo     " id="product ">
        <div className="bg-second-section-grandient py-5 px-5">
          <div className="title-style-ten hero-banner-below ">
            <div className="row align-items-start">
              <div className="col-lg-7">
                <h2
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  Unified Tech Solution Fuels Your Whole Digital Experience
                </h2>
              </div>
              <div className="col-lg-5">
                <p
                  style={{ color: "white" }}
                  className="md-pt-20 mb-4 mt-3 font-raleway"
                >
                  The enigma behind digital evolution since 2022. We pull out
                  all the stops for multi-platform solutions, ensuring your
                  development journey is an intriguing ride from concept to
                  completion.
                </p>
                <div
                  className="d-flex justify-content-center "
                  style={{ marginLeft: "-60px" }}
                >
                  <a
                    href="#"
                    className="theme-btn-nine theme-btn-nine-bg-gradient"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service */}

      <div className="fancy-feature-four ">
        <div className="bg-wrapper">
          <div className="container">
            <div className="title-style-two text-center mb-100 md-mb-50">
              <div className="row ">
                <div className="col-xl-8 col-lg-9 col-md-10 m-auto font-raleway">
                  <h2 style={{ fontSize: "40px" }}>
                    <span style={{ display: "block", whiteSpace: "nowrap" }}>
                      We unlock a meaningful
                    </span>
                    <span style={{ display: "block" }}>experience. </span>
                  </h2>
                </div>

                {/* End .col */}
              </div>
            </div>
            {/* End .title */}

            <div className="inner-content">
              <FeatureFour />
            </div>
            {/* End .inner-content */}
          </div>
        </div>
      </div>

      {/*  */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      <div
        id="pricing"
        className="pricing-section-five mb-75 mt-75 sm-mt-100 sm-mb-75 "
      >
        <div className="container">
          <div className="row align-items-start flex-row">
            <div className="col-lg-6 d-flex flex-wrap">
              <div className="custom-logo-design col-lg-4">
                <img src={YearsImage} alt="logo" />
                <h4>10+</h4>
                <h5>Experience</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={TeamMembers} alt="logo" />
                <h4>50+</h4>
                <h5>Team Members</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={AppImage} alt="logo" />
                <h4>50+</h4>
                <h5>App Developed</h5>
              </div>
              <div className="custom-logo-design col-lg-4   mt-4 ">
                <img src={CLIENTS} alt="logo" />
                <h4>25+</h4>
                <h5>Clients</h5>
              </div>
              <div className="custom-logo-design col-lg-4  mt-4   ">
                <img src={PROJECTS} alt="logo" />
                <h4>25+</h4>
                <h5>Projects</h5>
              </div>
              <div className="custom-logo-design col-lg-4 mt-4 ">
                <img src={countries} alt="logo" />
                <h4>25+</h4>
                <h5>Countries </h5>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-table-area-five md-mt-60">
                <PricingFive />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="fancy-feature-twentyTwo   mb-100  py-5  ps-48 pe-48"
        id="product"
        style={{ backgroundColor: "black" }}
      >
        <div className=" px-5">
          <div className="title-style-ten hero-banner-below   md-mb-20">
            <div className="row align-items-start">
              <div className="col-lg-7">
                <h2 style={{ color: "white" }} className="font-raleway fw-bold">
                  Boosting Business Progress <br /> With Smart Solutions
                </h2>
              </div>
              <div className="col-lg-5  ">
                <h5
                  className="md-pt-20 mb-4 lh-base  font-raleway"
                  style={{
                    marginTop: "17px",
                    color: "white",
                    fontSize: "22px",
                  }}
                >
                  With the expertise of a prominent development company, you may
                  receive robust software solutions, modernize systems, and rely
                  on cutting-edge technology for growth opportunities.
                </h5>
                <div
                  className="d-flex justify-content-center "
                  style={{ marginLeft: "-60px" }}
                >
                  <a href="#" className="theme-btn-nine ">
                    Explore Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new actice components */}
      <div className="container  " id="product">
        <div className="row align-items-center d-flex">
          {/* Left - Buttons */}
          <div
            className="col-md-4  bg-black p-4 rounded"
            style={{ background: "#F5C835" }}
          >
            <h3 className="mb-4 text-bold card-title-heading">
              Raiden’s Tech Advancements with Innovation
            </h3>
            <div className="d-flex flex-column gap-2">
              {blockchainServices.map((service, index) => (
                <button
                  key={index}
                  className={` ${
                    activeIndex === index
                      ? "theme-btn-nine1"
                      : "theme-btn-nine-no-bg"
                  } text-start`}
                  onClick={() => setActiveIndex(index)}
                >
                  {service.buttonHeading}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div className="col-md-8 h-100 ">
            <div className="row row-cols-1 row-cols-md-2 gy-4 ">
              {blockchainServices[activeIndex].cards.map((card, i) => (
                <div className="col " key={i} style={{ marginTop: "30px" }}>
                  <div className="card card-body-div h-100 border-0">
                    <div className="card-body " style={{ height: "286px" }}>
                      <h5
                        className="card-title"
                        style={{ background: "#F5C835" }}
                      >
                        {" "}
                        {card.heading}
                      </h5>
                      <p className="card-text">{card.subheading}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Raiden */}

      <div className="mt-100 mb-100 md-pb-100">
        <div className="text-center">
          {/* <div className="feature-img-area"></div> */}
        </div>
        <div className="block-style-one ">
          <h2
            className="text-center fw-bold mb-70"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Why Choose Raiden?
          </h2>
          <div className="container">
            <div className="d-lg-flex justify-content-between inner-container">
              <BlockMetaData />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.block-style-one */}
      </div>

      {/* Technology Stack */}

      <div
        className="px-5 pb-100 pt-80"
        id="tech-stack "
        style={{ background: "#F8F8F8" }}
      >
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-5 mb-4">
            <h2
              className="fw-bold"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Our Technology Stack
            </h2>
            <p className="mt-3 text-muted">
              We use cutting-edge technologies to deliver high-quality,
              scalable, and efficient solutions. Our stack includes the latest
              frameworks and platforms trusted by the industry.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-7">
            <div className="row m-0 ">
              {/* Loop this card for 8 items */}
              {[
                { icon: reacts, title: "React.js" },
                { icon: ethereum, title: "Ethereum" },
                { icon: flutter, title: "Flutter" },
                { icon: mean, title: "Mern" },
                { icon: mern, title: "Mean" },
                { icon: solana, title: "Solana" },
                { icon: unre1, title: "Unity" },
                { icon: unre2, title: "Unreal" },
              ].map((stack, index) => (
                <div
                  key={index}
                  className="col-md-3 "
                  style={{ marginTop: "27px" }}
                >
                  <div className="border rounded p-3 h-100 d-flex align-items-center flex-column gap-3  shadow-sm bg-white">
                    <img
                      style={{ width: "50%" }}
                      className="fs-2"
                      src={stack.icon}
                    ></img>
                    <h5 className="mb-0">{stack.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="fancy-feature-thirtySix lg-container pb-100 pt-100 md-pb-60 bg-white"
        id="product"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="title-style-eleven md-mb-40 text-lg-left">
                <h2 className="text-black" style={{ fontSize: "40px" }}>
                  Our Core Strengths and Services
                </h2>
                <p className="mt-3">
                  Our core strengths and strategies reward you with quality
                  success by combining blockchain services, client
                  recommendations, and optimistic solutions that assist you in
                  reaching your objectives.
                </p>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="product_slider_one vr-landing-slider">
                <LatestProduct />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/* /.fancy-text-block-seven */}

      {/* development expertise */}
      <div className="fancy-portfolio-one pt-28 pb-100 md-py-150 " id="product">
        <div className="container">
          <div className="title-style-six">
            <h2 className="text-center fw-bold" style={{ fontSize: "40px" }}>
              Maximize Your Projects with <br />
              <span className="text-decoration-none text-dark">
                {" "}
                Our Experience
              </span>
            </h2>
          </div>

          <div className="portfolioSliderOne arrow-top-right pt-50 md-pt-30 ">
            <PortfolioDemo2 />
          </div>
        </div>
      </div>

      <div
        className="fancy-feature-twentyTwo  mt-100 md-mt-100 bg-dark  py-5 "
        style={{ backgroundColor: "#FDFCFA" }}
        id="product"
      >
        <div className="px-5">
          <div className="title-style-ten hero-banner-below  mb-40 md-mb-20">
            <div className="row align-items-start">
              <div className="col-lg-7 mt-4">
                <h2 className="font-raleway fw-bold text-white ">
                  Next-Level Gaming, <br /> access VR and Blockchain
 
                </h2>
              </div>
              <div className="col-lg-5 mt-4">
                <p
                  className="md-pt-20 mt-3 text-white font-raleway "
                  style={{ fontSize: 22 }}
                >
                  Dive into a Realm of Cutting-Edge Entertainment with Our
                  Exciting Gaming, VR, and Blockchain Solutions. Unleash the
                  innovation, and let's forge the future of play and engagement
                  together today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="client-feedback-slider-six pb-60 md-pb-100" id="feedback">
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-12"></div>
            </div>
          </div>
          <div className="clientSliderSix arrow-middle-center-demo">
            <TestimonialSix />
          </div>
        </div>
        {/* /.inner-container */}
      </div>

      {/* Client Feedback */}
      <div className="client-feedback-slider-one pt-50 pb-100 md-pb-80">
        <div className="shapes-holder">
          <img src="images/shape/39.svg" alt="shape" />
          <img src={Profile1} alt="shape" className="shapes shape-one" />
          <img src={Profile2} alt="shape" className="cp-img-one" />
          <img src={Profile3} alt="shape" className="cp-img-two" />
          <img src={Profile4} alt="shape" className="cp-img-three" />

          <div className="title-style-two">
            <h2 className="mt-140">
              Hear <br />
              From Our <br />
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

      {/* blog */}

      <div className="feature-blog-four  blog-page-bg ">
        <h2
          className="text-center fw-bold mb-120 font-rail text-white"
          style={{ fontFamily: "Raleway" }}
        >
          Our Latest Blogs
        </h2>
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <BlogStyle5 />
          </div>
          <div className="w-100 d-flex justify-content-center">
            <a
              href="#"
              className="theme-btn-nine font-raleway"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              More Blogs
            </a>
          </div>
          {/* End .row */}
        </div>
      </div>

      {/* contact us */}

      <SignUp />

      {/* Footer Style Two */}
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

export default CustomerSupport;
