import React, { useState } from "react";
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
import Tilt from "react-parallax-tilt";
import AppImage from "../../assets/Home/App-Developed.png";
import CLIENTS from "../../assets/Home/CLIENTS.png";
import PROJECTS from "../../assets/Home/PROJECTS.png";
import TeamMembers from "../../assets/Home/Team-Members.png";
import YearsImage from "../../assets/Home/Years-of-Experience.png";
import PricingFive from "../../components/pricing/PricingFive";
import BlockMetaData from "../../components/fancy-text-block/BlockMetaData";
import LatestProduct from "../../components/vr-landing/LatestProduct";
import MobileAppScreenSlider from "../../components/portfolio/MobileAppScreenSlider";
import MobileAppPortfolio from "../../components/portfolio/MobileAppPortfolio";
import PortfolioDemo2 from "../../components/portfolio/PortfolioDemo2";

import reacts from "../../assets/Prgm-Icon/React.png";
import ethereum from "../../assets/Prgm-Icon/Ethereum.png";
import flutter from "../../assets/Prgm-Icon/Flutter.png";
import mean from "../../assets/Prgm-Icon/Mean.png";
import mern from "../../assets/Prgm-Icon/Mern.png";
import solana from "../../assets/Prgm-Icon/Solana.png";
import unre1 from "../../assets/Prgm-Icon/Unreal-1.png";
import unre2 from "../../assets/Prgm-Icon/Unreal.png";
import TestimonialSix from "../../components/testimonial/TestimonialSix";
import BlogStyle5 from "../../components/blog/BlogStyle5";
import SignUp from "../inner-pages/features/miscellaneous/SignUp";

import automotiveImg from "../../assets/Home/Industries/Automobile.png";
import hospitalityImg from "../../assets/Home/Industries/Hospitality.png";
import consumerGoodsImg from "../../assets/Home/Industries/Consumer-Goods.png";
import educationImg from "../../assets/Home/Industries/Education.png";
import gamingImg from "../../assets/Home/Industries/Gaming.png";
import healthcareImg from "../../assets/Home/Industries/Health-care.png";
import aviationImg from "../../assets/Home/Industries/Aviation.png";
import manufacturingImg from "../../assets/Home/Industries/Manufacturing.png";
import realEstateImg from "../../assets/Home/Industries/Real-Estate.png";
import tourismImg from "../../assets/Home/Industries/Tourism.png";

import industry1 from "../../assets/Home/Manufacturing/concept.png";
import industry2 from "../../assets/Home/Manufacturing/tactics.png";
import industry3 from "../../assets/Home/Manufacturing/Point.png";
import industry4 from "../../assets/Home/Manufacturing/Execute.png";
import industry5 from "../../assets/Home/Manufacturing/Assessment.png";
import industry6 from "../../assets/Home/Manufacturing/Setting.png";

const CustomerSupport = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const PortfolioSteps1 = [
    {
      id: "01",
      title: "The Concept",
      desc: "Our expertise and attention to detail enable us to meticulously plan, shape, and transform your idea into a successful solution.",
      image: industry1,
    },
    {
      image: industry2,
      id: "02",
      title: "The Tactics",
      desc: "Establishing clear, milestone-driven project timelines and selecting the most qualified team are made easier by your goals.",
    },
    {
      image: industry3,
      id: "03",
      title: "Point of Origin",
      desc: "We transform wireframe designs and preliminary concepts into a responsive prototype that offers a clear picture of the final user interface.",
    },
    {
      image: industry4,
      id: "04",
      title: "Execute",
      desc: "Create your project with Raiden's suitable tools and technology by utilizing the project score, timeline, and many other features.",
    },
    {
      image: industry5,
      id: "05",
      title: "Assessment",
      desc: "Products are tested using both the best manual and the most sophisticated automated testing methods to ensure they are thoroughly inspected and free of errors.",
    },
    {
      image: industry6,
      id: "06",
      title: "Setting Up",
      desc: "We guarantee timely delivery of your desired quality while considering all of your suggestions and ideas.",
    },
  ];

  const PortfolioSteps = [
    {
      id: "01",
      image: automotiveImg,
      title: "Automotive",
      desc: "We are collaborating with the automotive sector to develop smarter, safer, and more fashionable transportation options.",
    },
    {
      id: "02",
      image: hospitalityImg,
      title: "Hospitality",
      desc: "Ensure your guests are satisfied and your business runs smoothly. Our goals are to enhance your service and make those incredible experiences even better.",
    },
    {
      id: "03",
      image: consumerGoodsImg,
      title: "Consumer Goods",
      desc: "We're transforming the way that products are conceived, produced, and consumed by bringing brands and customers together through efficient production and engaging interaction.",
    },
    {
      id: "04",
      image: educationImg,
      title: "Education",
      desc: "We change classrooms and study techniques to make them more interesting and accessible for all students, regardless of where they learn or how they learn it. Learning should be fun.",
    },
    {
      id: "05",
      image: gamingImg,
      title: "Gaming",
      desc: "Get ready for the next epic adventure with us. We are creating incredible, immersive worlds and rock-solid platforms that will redefine what it means to be fun.",
    },
    {
      id: "06",
      image: healthcareImg,
      title: "Health care",
      desc: "Improving healthcare for all is something we are passionate about. We facilitate medical progress, simplify care, and assist clinics and hospitals with operations management.",
    },
    {
      id: "07",
      image: aviationImg,
      title: "Aviation",
      desc: "We assist airlines and aerospace businesses in streamlining everything from training to maintenance, guaranteeing effective and safe travel.",
    },
    {
      id: "08",
      image: manufacturingImg,
      title: "Manufacturing",
      desc: "We're updating factories for the modern era. Develop more productive manufacturing lines that enable companies to achieve remarkable outcomes with a smaller amount of working capital.",
    },
    {
      id: "09",
      image: realEstateImg,
      title: "Real Estate",
      desc: "We're making it simpler to manage procedures, visualize properties, and locate precisely what you're looking for, making every step more transparent.",
    },
    {
      id: "10",
      image: tourismImg,
      title: "Tourism",
      desc: "Helping people travel the world is something we love. We simplify planning and create memorable experiences for both tourists and the establishments that host them.",
    },
  ];
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
            "Cryptocurrencies are designed and developed on the basis of blockchain and consensus technology like Proof of Work (POW) and Proof of Stake (POS) for delivering top-tier security and integrated solutions.",
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
            "Uses HFT and advanced algorithms to take advantage of changes in cryptocurrency prices, and develops distinctive arbitrage platforms with intuitive user interfaces for optimal trading outcomes.",
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
        <div className="container py-5 	">
          <div className="row d-flex align-items-center justify-content-between min-vh-100">
            {/* Left Content */}
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="coming-soon-content font-raleway">
                <h1 className="text-start" data-aos="fade-up">
                  Ingenuity Unbound: Reimagined Digital World.
                </h1>
                <p className="font-gordita text-start mt-3">
                  One pixel, one line of code at a time—where creativity ignites
                  innovation.
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="col-md-6" style={{ display: "contents" }}>
              <div
                style={{ maxWidth: "500px" }}
                className="p-4 rounded-4 shadow bg-white"
              >
                <h4 className="mb-4 text-center fw-bold">
                  Book Free Consultation
                </h4>
                <form>
                  <div className="mb-3">
                    <label
                      style={{ fontSize: "16px" }}
                      className="form-label m-0"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      style={{ fontSize: "16px" }}
                      className="form-label m-0"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      style={{ fontSize: "16px" }}
                      className="form-label m-0"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      style={{ fontSize: "16px" }}
                      className="form-label m-0"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your message or description"
                    ></textarea>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="acceptTerms"
                    />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      I accept the terms and conditions
                    </label>
                  </div>
                  <a
                    type="submit"
                    className="theme-btn-nine w-100"
                    // data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Contact Us
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* below hero banner */}

      <div
        className="fancy-feature-twentyTwo mpt-200  md-mt-80 sm-pt-100 "
        id="product " 
      >
        <div className=" bg-light pb-130 pt-130 px-5">
          <div className="title-style-ten hero-banner-below  mb-40 md-mb-20">
            <div className="row align-items-start">
              <div className="col-lg-7">
                <h2 style={{ fontFamily: "Raleway" }}>
                  Leading Software Development, IT Consulting, and Mobile
                  Application Development Firm, Creating Intelligent Solutions
                  for a Smarter World.
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20 mb-4">
                  Established in 2022, Raiden is a top software development, web
                  development, and mobile app company that assists multinational
                  corporations with their digital transformation. As a true
                  technology partner, Raiden assists companies of all sizes in.
                </p>
                <a
                  href="#"
                  className="theme-btn-nine"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service */}

      <div className="fancy-feature-four ">
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

      {/*  */}

      {/* <div className="fancy-feature-fourteen mt-150 mb-150 pt-80 md-mt-80 md-mb-80">
        <div className="container">
          <div className="row fancy-feature-fourteen-card-div" >
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="title-style-six">
                <h6 style={{ color: "#FF2759", fontSize: "15px" }}>
                  Integrategration
                </h6>
                <h2>
                  Connect App <br /> with the <span>Software</span> you use.
                </h2>
                <p className="text-xs pe-5 me-5">
                  Lorem ipsum dolor on adipisci elit io quis sed do eiusmod tem.
                </p>
              </div>

            </div>

            <div className="col-lg-5">
              <div className="right-side md-mt-60">
                <div className="row">
                  <div className="col-md-4">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={YearsImage} alt="logo" />
                        <h4>10+</h4>
                        <h5>Years of Experience</h5>
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={TeamMembers} alt="logo" />
                        <h4>50+</h4>
                        <h5>Team Members</h5>
                      </div>
                    </Tilt>
                  </div>

                  <div className="col-md-4">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={AppImage} alt="logo" />
                        <h4>50+</h4>
                        <h5>App Developed</h5>
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={CLIENTS} alt="logo" />
                        <h4>25+</h4>
                        <h5>CLIENTS</h5>
                      </div>
                    </Tilt>
                  </div>


                  <div className="col-md-4">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={PROJECTS} alt="logo" />
                        <h4>25+</h4>
                        <h5>PROJECTS</h5>
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={AppImage} alt="logo" />
                        <h4>25+</h4>
                        <h5>Countries Served</h5>
                      </div>
                    </Tilt>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      <div
        id="pricing"
        className="pricing-section-five mb-75 mt-150 sm-mt-100 sm-mb-75 "
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
                <img src={YearsImage} alt="logo" />
                <h4>25+</h4>
                <h5>Countries </h5>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-table-area-five md-mt-60">
                {/* <img
                  src="images/icon/88.png"
                  alt="icon"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/160.png"
                  alt="shape"
                  className="shapes shape-two"
                /> */}
                <PricingFive />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="fancy-feature-twentyTwo   mb-85  pt-130 pb-130  ps-48 pe-48"
        id="product" style={{ backgroundColor: '#FFFFF1' }} 
      >
        <div className=" px-5">
          <div className="title-style-ten hero-banner-below  mb-40 md-mb-20">
            <div className="row align-items-start">
              <div className="col-lg-7">
                <h2 className="font-raleway fw-bold">
                  Boosting Business Progress With Smart Solutions
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20 mb-4">
                  With the expertise of a prominent development company, you may
                  receive robust software solutions, modernize systems, and rely
                  on cutting-edge technology for growth opportunities.
                </p>
                <a
                  href="#"
                  className="theme-btn-nine"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Explore Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new actice components */}
      <div className="container mt-80 " id="product">
        <div className="row align-items-center">
          {/* Left - Buttons */}
          <div className="col-md-4  bg-black p-4 rounded">
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
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {blockchainServices[activeIndex].cards.map((card, i) => (
                <div className="col" key={i}>
                  <div className="card card-body-div h-100 border-0">
                    <div className="card-body">
                      <h5 className="card-title">{card.heading}</h5>
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

      <div className="fancy-feature-one pb-150 md-pb-100">
        <div className="text-center">
          {/* <div className="feature-img-area"></div> */}
        </div>
        <div className="block-style-one ">
          <h2
            className="text-center fw-bold mb-120"
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

      <div className="container pb-150" id="tech-stack pt-4">
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
            <div className="row g-4">
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
                <div key={index} className="col-md-3">
                  <div className="border rounded p-3 h-100 d-flex align-items-center flex-column gap-3 shadow-sm bg-white">
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
        className="fancy-feature-thirtySix lg-container pb-150 md-pt-120 md-pb-60 bg-white"
        id="product"
      >
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven md-mb-40 text-lg-left">
                <h2 className="text-black" style={{ fontSize: "40px" }}>
                  Our Core Strengths and Services
                </h2>
                <p>
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

      <div className="">
        <div className="container">
          <div className="app-preview-slider-one arrow-middle-center ">
           <div className="text-center mb-xl-5">
        <h2 className="fw-bold mb-xxl-5" style={{ fontFamily: 'Raleway, sans-serif' }} >Our Development Approach From <br /> Ideology to Launch</h2>
        {/* <p className="text-muted mb-5">
          Explore our beautifully designed and highly functional mobile apps crafted for various industries.
        </p> */}
      </div>

            <MobileAppPortfolio PortfolioSteps={PortfolioSteps1} />
          </div>
        </div>
        {/* End .container */}
      </div>

      {/*  */}
      {/* <div className="fancy-text-block-seven mt-150 md-mt-100">
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
      </div> */}
      {/* /.fancy-text-block-seven */}

      {/* development expertise */}
      <div
        className="fancy-portfolio-one pt-150 pb-150 md-py-150 "
        id="product"
      >
        <div className="container">
          <div className="title-style-six">
            <h2 className="text-center fw-bold">
              Maximize Your Projects with <span> Our Experience</span>
            </h2>
          </div>

          <div className="portfolioSliderOne arrow-top-right pt-50 md-pt-30">
            <PortfolioDemo2 />
          </div>
        </div>
      </div>

      {/* industry */}

      <div className="app-screen-preview-two mb-150 md-mb-100">
        <div className="container">
          <div className="title-style-eleven text-center mb-120 md-mb-70">
            <h2 className="mb-3">
              Discover the industries that our <br />
              solutions transform
            </h2>
            <p>
              Raiden’s solutions support creativity, growth, and productivity,
              transforming industries and allowing businesses to thrive.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="app-preview-slider-one arrow-middle-center ">
            <MobileAppPortfolio PortfolioSteps={PortfolioSteps} />
          </div>
        </div>
        {/* /.app-preview-slider-two */}
      </div>

      {/*  */}

      <div
        className="fancy-feature-twentyTwo  mt-150 md-mt-100   py-5 " style={{ backgroundColor: '#FDFCFA' }}
        id="product"
      >
        <div className="container">
          <div className="title-style-ten hero-banner-below  mb-40 md-mb-20">
            <div className="row align-items-start">
                <h3 className="font-raleway fw-bold pb-5  text-center" style={{fontSize:58}}>
                  {" "}
                  Our Products
                </h3>
              <div className="col-lg-7 mt-4">
                <h2 className="font-raleway fw-bold">
                  Next-Level Gaming,VR and Blockchain Innovations!
                </h2>
              </div>
              <div className="col-lg-5 mt-4">
                <p className="md-pt-20 mb-4 ">
                  Dive into a Realm of Cutting-Edge Entertainment with Our
                  Exciting Gaming, VR, and Blockchain Solutions. Unleash
                  Innovation Today!
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="client-feedback-slider-six pb-150 md-pb-100"
        id="feedback"
      >
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
      <div className="client-feedback-slider-one pt-50 pb-150 md-pb-80">
        <div className="shapes-holder">
          <img src="images/shape/39.svg" alt="shape" />
          <img src={Profile1} alt="shape" className="shapes shape-one" />
          <img src={Profile2} alt="shape" className="cp-img-one" />
          <img src={Profile3} alt="shape" className="cp-img-two" />
          <img src={Profile4} alt="shape" className="cp-img-three" />
          <img src={Profile5} alt="shape" className="cp-img-four" />
          <div className="title-style-two">
            <h2>
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

      <div className="feature-blog-four  blog-page-bg">
        <h2 className="text-center fw-bold mb-120 font-rail" style={{fontFamily: 'Raleway'}}>Our Latest Blogs</h2>
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

      {/* newsletter */}
      {/* <div className="fancy-short-banner-three mt-100 md-mt-40">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
        </div>
      </div> */}

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
