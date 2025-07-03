import React, { useState } from "react";
import DocSlickAsNavTwo from "../../../components/block-slider/DocSlickAsNavTwo";
import FancyFeatureNinteen from "../../../components/features/FancyFeatureNinteen";
import DocEditorTabs from "../../../components/block-slider/DocEditorTabs";
import FancyFeatureTwelve from "../../../components/features/FancyFeatureTwelve";

//slider
import Slider from "react-slick";

//icons
import icon1 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Concept to creation.png";
import icon2 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Smarter Development.png";
import icon3 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Design.png";
import icon4 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Cross-Platform.png";
import icon5 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Trustworthy.png";
import icon6 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Post-Launch Partnership.png";
import icon7 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Post-Launch Partnership.png";
import icon8 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/blueprint.png";
import icon9 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Building Your Game.png";
import icon10 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Testing Every Detail.png";
import icon11 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Launching and Improving.png";
import icon12 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Launching and Improving-1.png";
import icon13 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Engagement.png";
import icon14 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Brand Building.png";
import icon15 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Monetization Opportunities.png";
import icon16 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Audience Reach.png";
import icon17 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Customer Retention.png";
import icon18 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/innovation.png";
import Header from "../../../components/e-commerce/Header";
import DocSlickAsNavThree from "../../../components/block-slider/DocSlickAsNavThree";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import HeaderThree from "../../../components/header/HeaderThree";

const featureContent_service = [
  {
    delayAnimation: "0",
    colorOfBorder: "#8F6BF6",
    icon: icon1,
    title: "Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly to guarantee safe gameplay, ownership verification, and a reliable gaming environment.",
  },
  {
    delayAnimation: "50",
    colorOfBorder: "#FF5C5C",
    icon: icon2,
    title: "Smart Contract Development",
    description:
      "Smart contracts that regulate in-game activities and transactions can help your game become more automated and transparent.",
  },
  {
    delayAnimation: "100",
    colorOfBorder: "#63EAA9",
    icon: icon3,
    title: "Decentralized in-game economies",
    description:
      "Create player-driven economies that allow users to produce, exchange, and possess assets, increasing long-term value and user engagement.",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#5BE2FF",
    icon: icon4,
    title: "NFT integration",
    description:
      "By enabling players to own, trade, and profit from exclusive in-game items, non-fungible tokens (NFTs) can improve gameplay.",
  },
  {
    delayAnimation: "200",
    colorOfBorder: "#FF56EE",
    icon: icon5,
    title: "Multiplayer Functionalities",
    description:
      "Use decentralized networking protocols to link players worldwide and provide safe, smooth, and real-time multiplayer experiences.",
  },
  {
    delayAnimation: "250",
    colorOfBorder: "#F9A826",
    icon: icon6,
    title: "Blockchain Performance Optimization",
    description:
      "Make your game compatible with a variety of blockchains and protocols to guarantee cross-platform scalability and performance.",
  },
];

const tabListContent = [
  {
    img: "img_81",
    title: "Consultation & Planning",
    description: `Understanding your vision, goals, and target audience is essential for bringing your game concept to life.`,
  },
  {
    img: "img_92",
    title: "Concept & Design",
    description: `Looking ahead, every aspect of the game will be thoroughly tested to ensure a seamless, bug-free experience and peak performance across all platforms.`,
  },
  {
    img: "img_93",
    title: "Development & Integration",
    description: `We begin development, bringing your game to life by incorporating cutting-edge technologies and fleshing out all features.`,
  },
  {
    img: "img_94",
    title: "Testing & Optimization",
    description: `The game is thoroughly tested and improved in every way to guarantee a flawless, bug-free experience and optimal performance on all platforms.`,
  },
  {
    img: "img_95",
    title: "Launch and Support",
    description: `We manage your game's launch and provide continuing assistance and necessary updates to ensure its long-term success.`,
  },
];

const tabList = [
  { iconOne: icon7, iconTwo: icon7 },
  { iconOne: icon8, iconTwo: icon8 },
  { iconOne: icon9, iconTwo: icon9 },
  { iconOne: icon10, iconTwo: icon10 },
  { iconOne: icon11, iconTwo: icon11 },
  { iconOne: icon12, iconTwo: icon12 },
];

const FeatureContent = [
  {
    icon: icon13,
    title: "Enhanced Player Ownership",
    subTitle:
      "Giving players actual control over in-game items will allow you to reward their dedication, time, and money with real benefits.",
  },
  {
    icon: icon14,
    title: "Increased Monetization Opportunities",
    subTitle:
      "Use player-driven economies, in-game purchases, and NFTs to generate new revenue streams that are advantageous to both developers and players.",
  },
  {
    icon: icon15,
    title: "Community Engagement",
    subTitle:
      "Enable players to play, cooperate, and make money in a reliable ecosystem by encouraging safe and engaged community involvement.",
  },
  {
    icon: icon16,
    title: "Trust and Transparency",
    subTitle:
      "Blockchain can be used to guarantee secure data, transparent transactions, and unchangeable records that foster long-term player trust.",
  },
  {
    icon: icon17,
    title: "Innovative Gameplay Mechanics",
    subTitle:
      "Rethink the way games are played by using player-driven narratives and smart contracts to create decentralized, dynamic experiences.",
  },
  {
    icon: icon18,
    title: "Future Proofing",
    subTitle:
      "Position your game at the forefront of the market with innovative technology that will change as gaming does.",
  },
];

const navContent = [
  {
    title: "Industry Pioneer",
    image: "images/assets/screen_07.png",
  },
  {
    title: "Proven Track record",
    image: "images/assets/screen_08.png",
  },
  {
    title: "Security and Transparency",
    image: "images/assets/screen_09.png",
  },
  {
    title: "Ongoing assistance",
    image: "images/assets/screen_07.png", // optional reuse
  },
];

const WebGameDevelopment = () => {
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
    <div className="hero-banner-twelve lg-container" id="home">
      <HeaderThree />

      {/* banner */}
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
            <h1
              style={{ fontSize: "74px", fontStyle: "Raleway", color: "white" }}
              className="hero-heading"
              data-aos="fade-up"
            >
              Leading the Evolution of <br /> Gaming Through Web3
            </h1>
            <p
              style={{ opacity: 0.8 }}
              className="font-gordita hero-sub-heading"
            >
              Transforming raw ideas into immersive worlds, where pixels evolve
              into thriving kingdoms through innovation.
            </p>
          </div>
        </div>
      </div>

      {/* services */}
      <div
        className="fancy-feature-nineteen pb-180 pt-180 md-pt-100 bg-white"
        id="effect"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-9 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-80 md-mb-40">
                <h2>Web3 Game Development Services</h2>
              </div>
            </div>
          </div>
          <FancyFeatureNinteen featureContent={featureContent_service} />
        </div>
      </div>

      {/* why choose raiden */}
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
              <div className="title-style-six text-center">
                <h2 className="text-white">
                  Why Raiden's <span> Web3 Game </span>
                </h2>
                <p className="text-xs text-white">
                  Reliable proficiency in Web3 game development fueled by
                  creativity, safety, and track records of accomplishment.
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>

          <div className="sldier-wrapper  mt-30 md-mt-50">
            <DocSlickAsNavThree navContent={navContent} />
          </div>
          {/* /.sldier-wrapper  */}
        </div>
      </div>

      {/* Development Process */}
      <div
        className="fancy-feature-twelve pb-180 pt-250 md-pt-50 bg-black"
        id="about"
      >
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2 className="text-white">Web3 Game Development</h2>
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

      {/* why choose raiden */}
      <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div
                className="title-style-eight text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h2>Web3 Game Development Process</h2>
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

export default WebGameDevelopment;
