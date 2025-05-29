import React, { useState } from 'react'
import DocSlickAsNavTwo from '../../../components/block-slider/DocSlickAsNavTwo'
import FancyFeatureNinteen from '../../../components/features/FancyFeatureNinteen'
import DocEditorTabs from '../../../components/block-slider/DocEditorTabs';
import FancyFeatureTwelve from '../../../components/features/FancyFeatureTwelve';

//slider
import Slider from "react-slick";

//icons
import icon1 from "../../../assets/Unity-development-services/Game-development.png";
import icon2 from "../../../assets/Unity-development-services/VR-solutions.png";
import icon3 from "../../../assets/Unity-development-services/Interactive-simulations.png";
import icon4 from "../../../assets/Unity-development-services/UX-design.png";
import icon5 from "../../../assets/Unity-development-services/Multi-Platform-deployment.png";
import icon6 from "../../../assets/Unity-development-services/Maintenance&support.png";
import icon7 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Post-Launch Partnership.png";
import icon8 from "../../../assets/Unity-Development-Process/Design-Prototype.png";
import icon9 from "../../../assets/Unity-Development-Process/Development-Testing.png";
import icon10 from "../../../assets/Unity-Development-Process/Deployment-Optimization.png";
import icon11 from "../../../assets/Unity-Development-Process/Maintenance-Updates.png";
// import icon12 from "../../../assets/Unity-Development-Process/";
import icon13 from "../../../assets/Benefits-of-Choosing-Unity/Immersive-experiences.png";
import icon14 from "../../../assets/Benefits-of-Choosing-Unity/scalability.png";
import icon15 from "../../../assets/Benefits-of-Choosing-Unity/Cross-Platform Compatibility.png";
import icon16 from "../../../assets/Benefits-of-Choosing-Unity/Enhanced-learning.png";
import icon17 from "../../../assets/Benefits-of-Choosing-Unity/Competitive-edge.png";
import icon18 from "../../../assets/Benefits-of-Choosing-Unity/cost-effectiveness.png";
import { Helmet } from 'react-helmet';
import HeaderThree from '../../../components/header/HeaderThree';
import CallToActionThree from '../../../components/call-to-action/CallToActionThree';
import FooterTwo from '../../../components/footer/FooterTwo';
import CopyRightTwo from '../../../components/footer/CopyRightTwo';
import icon19 from '../../../assets/Why-Raiden’s-Unity-Game-Arena/Proven-Track-Record.png'
import icon20 from '../../../assets/Why-Raiden’s-Unity-Game-Arena/Collaborative-Approach.png'
import icon21 from '../../../assets/Why-Raiden’s-Unity-Game-Arena/Innovative-Solutions.png'
import icon22 from '../../../assets/Why-Raiden’s-Unity-Game-Arena/Timely-Delivery.png'
import icon31 from '../../../assets/Unity-Development-Process/Discovery-Planning.png'
import { TabList } from 'react-tabs';



const featureContent = [

  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: icon1,
    title: "Game Development",
    description: "Making your game ideas a reality with the help of the robust Unity game maker platform."
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: icon2,
    title: "AR/VR Solutions",
    description: "Creating a high-quality AR/VR experience that blurs the line between the digital and physical world."
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: icon3,
    title: "Interactive Simulations",
    description: "A dynamic space created to safely simulate user scenarios, gameplay mechanics, and real-time decision-making."
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: icon4,
    title: "UI/UX Design",
    description: "Creating visually stunning and functionally smooth design that ensures every user journey is simple, enjoyable, and impactful."
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: icon5,
    title: "Multi-Platform Deployment",
    description: "Strategic deployment of applications across multiple platforms like web, mobile, desktop, and consoles for maximum reach and engagement."
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    icon: icon6,
    title: "Maintenance & Support",
    description: "Our services continue even after post-launch for maintenance, upgrades, and running the project hassle-free."
  },

];

const tabListContent = [
  {
    img: icon31,
    // innerText: "Track Human faces",
    title: "Discovery & Planning",
    description: `Identifying your goals, requirements, and target outcomes to create a strategic roadmap that sets the foundation for a successful project.`,
  },
  {
    img: icon8,
    // innerText: "keyframing experience",
    title: "Design & Prototype",
    description: `Translating ideas into high-fidelity designs and interactive prototypes that ensure alignment between vision, usability, and functionality.`,
  },
  {
    img: icon9,
    // innerText: "Audio track down",
    title: "Development & Testing",
    description: `Building a project that is extensively tested at every stage of development to ensure optimal quality and functionality.`,
  },
  {
    img: icon10,
    // innerText: "Take the color",
    title: "Deployment & Optimization",
    description: `The next stage is to test the deployment on multiple platforms before delivery and adjust its functionality for a lasting real-world experience.`,
  },
  {
    img: icon11,
    // innerText: "Edit videos at up to 4K",
    title: "Maintenance & Updates",
    description: `Ensure the product's long-term viability through post-const tabList`
   },
  ];
  const tabList = [
 { iconOne: icon31, iconTwo: icon31 },
 { iconOne: icon8, iconTwo: icon8 },
 { iconOne: icon9, iconTwo: icon9 },
 { iconOne: icon10, iconTwo: icon10 },
 { iconOne: icon11, iconTwo: icon11 },
//  { iconOne: icon12, iconTwo: icon12 },
  ]

const FeatureContent = [
  {
    icon: icon13,
    title: "Immersive Experiences",
    subTitle: "Create immersive experiences that use Unity to inspire, engage, and connect with users.",
    hoverText: "Create immersive experiences that use Unity to inspire, engage, and connect with users.",
  },
  {
    icon: icon14,
    title: "Scalability",
    subTitle: "With Unity, you can make sure that your product is made for both the present and the future.",
    hoverText: "With Unity, you can make sure that your product is made for both the present and the future.",
  },
  {
    icon: icon15,
    title: "Cross-Platform Compatibility",
    subTitle: "One solution, every device delivers unified functionality and flawless design across platforms to maximize your reach and efficiency.",
    hoverText: "One solution, every device delivers unified functionality and flawless design across platforms to maximize your reach and efficiency.",
  },
  {
    icon: icon16,
    title: "Enhanced learning",
    subTitle: "The digital world enables you to reach more clearly with visual learning on education and training, powered by Unity.",
    hoverText: "The digital world enables you to reach more clearly with visual learning on education and training, powered by Unity.",
  },
  {
    icon: icon17,
    title: "Competitive Edge",
    subTitle: "A king doesn't need any competition; likewise, Raiden's unity solution provides you with a competition-free zone.",
    hoverText: "A king doesn't need any competition; likewise, Raiden's unity solution provides you with a competition-free zone.",
  },
  {
    icon: icon18,
    title: "Cost-effectiveness",
    subTitle: "Designation for effective quality solutions with efficient cost. ",
    hoverText: "Designation for effective quality solutions with efficient cost. ",
  }
];

const UnityGameDevelopment = () => {
  //slider configure
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();



  var settings = {
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Service Version 1 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderThree />
      <div className="hero-banner-twelve lg-container" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
              <h1 style={{ fontSize: "70px", fontStyle: "Raleway", color: "white" }} className="hero-heading" data-aos="fade-up">
                Embark on{" "}
                <span style={{ color: "#FF006B" }}>Unity Game</span>{" "}
                <br />
                Adventures
              </h1>
              <p
                style={{ opacity: 0.8 }}
                className="font-gordita hero-sub-heading"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Bringing stories to screens—mobile game development driven by imagination and fun.
              </p>
            </div>
          </div>
        </div>

        {/*=============================================
		   Fancy Feature Twelve
	    ==============================================  */}
        <div className="fancy-feature-twelve pb-250 md-pb-50 pt-250 md-pt-50 bg-black" id="about">
          <div className="bg-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                  <div className="title-style-six text-center">
                    <h2 className='text-white'>
                      Benefits of Choosing Unity for Your Project
                    </h2>
                  </div>
                  {/* /.title-style-six */}
                </div>
              </div>
              {/* End .row */}
              <FancyFeatureTwelve FeatureContent={FeatureContent} />
            </div>
          </div>
          {/* /.bg-wrapper */}
          <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
        </div>
        {/*  /.fancy-feature-twelve */}

        <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
                <div className="title-style-six text-center">
                  <h2 className='text-white '>
                    Why Raiden’s <br /> <span> Unity Game Arena</span>
                  </h2>
                  <p className="text-xs">
                    Combines innovation, collaboration, and expertise to create unique experiences across platforms.
                  </p>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* slider-wrapper */}
            <div className="sldier-wrapper  mt-30 md-mt-50">
              <Slider
                {...settings}
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                swipeToSlide={true}
                focusOnSelect={true}
                className="slick-nav-custom "
              >
                <div className="d-flex item_content">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img src="images/icon/81.svg" alt="icon" />
                  </div>
                  <p>
                    Proven Track <br /> Record
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex item_content">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img src="images/icon/81.svg" alt="icon" />
                  </div>
                  <p>
                    Collaborative <br /> Approach
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex item_content">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img src="images/icon/81.svg" alt="icon" />
                  </div>
                  <p>
                    Innovative <br /> Solutions
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex item_content">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img src="images/icon/81.svg" alt="icon" />
                  </div>
                  <p>
                    Timely <br /> Delivery
                  </p>
                </div>
              </Slider>
              {/* Bottom text slide */}

              <div className="position-relative">
                <Slider
                  className="slick-nav-none carousel-inner"
                  asNavFor={nav2}
                  fade={true}
                  speed={600}
                  ref={(slider1) => setNav1(slider1)}
                >
                  <div className="carousel-item">
                    <img src={icon19} alt="feature" />
                  </div>
                  <div className="carousel-item">
                    <img src={icon20} alt="feature" />
                  </div>
                  <div className="carousel-item">
                    <img src={icon21} alt="feature" />
                  </div>
                    <div className="carousel-item">
                    <img src={icon22} alt="feature" />
                  </div>
                </Slider>
                {/* Top Image slide */}
                <img
                  src="images/shape/152.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/153.png"
                  alt="shape"
                  className="shapes shape-two"
                />
              </div>
            </div>
            {/* /.sldier-wrapper  */}
          </div>
        </div>
        <div className="fancy-feature-nineteen pt-180 md-pt-100 bg-white" id="effect">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-9 col-lg-11 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-eight text-center mb-80 md-mb-40">
                  <h2>Unity Development Services</h2>

                </div>
              </div>
            </div>
            <FancyFeatureNinteen featureContent={featureContent} />
          </div>
          {/* 		=============================================
				Fancy Feature Eighteen
			==============================================  */}
          <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 m-auto">
                  <div
                    className="title-style-eight text-center"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <h2>
                      Unity Development Process
                    </h2>
                    {/* <p>
                  Rotate, merge, trim, split, crop and flip videos with a modern
                  & simple ui
                </p> */}
                  </div>
                </div>
              </div>

              {/* Nav tabs */}
            </div>
            {/* End .container */}
            <DocEditorTabs tabListContent={tabListContent} tabList={tabList} />

            <img src="images/shape/175.svg" alt="" className="shapes shape-right" />
            <img src="images/shape/176.svg" alt="" className="shapes shape-left" />
          </div>



        </div>
      </div>





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

    </div>
  )
}

export default UnityGameDevelopment