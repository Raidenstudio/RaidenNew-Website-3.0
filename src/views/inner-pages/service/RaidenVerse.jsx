import React from "react";
import { Helmet } from "react-helmet";
import FancyVideoFive from "../../../components/video/FancyVideoFive";
import CounterThree from "../../../components/counter/CounterThree";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FeatureSixV2 from "../../../components/features/FeatureSixV2";
import CallToActionThree from "../../../components/call-to-action/CallToActionThree";
import FancyFeatureThirtyThree from "../../../components/features/FancyFeatureThirtyThree";
import FancyFeatureThirtyFour from "../../../components/features/FancyFeatureThirtyFour";
import Header from "../../../components/e-commerce/Header";
import FancyFeatureTewentyFour from "../../../components/features/FancyFeatureTewentyFour";
import VideoGallery from "../../../components/video/VideoGallery";
import SocialTwo from "../../../components/social/SocialTwo";
import service4 from "../../../assets/images/assets/ARservice/3D Design and Development.png";
import service2 from "../../../assets/images/assets/ARservice/AR Game development.png";
import service1 from "../../../assets/images/assets/ARservice/Custom AR development.png";
import service3 from "../../../assets/images/assets/ARservice/Web AR development.png";
import HeaderThree from "../../../components/header/HeaderThree";
import HeroBannerEight from "../../../components/hero-banner/HeroBannerEight";
import Features from "../../../components/form-survey-landing/Features";
import Features2 from "../../../components/form-survey-landing/Feature2";
import FancyTextBlockThree from "../../../components/fancy-text-block/FancyTextBlockThree";
import FancyFeatureTewentyThree from "../../../components/features/FancyFeatureTewentyThree";
import FancyVideoOne from "../../../components/video/FancyVideoOne";
import AboutTabs from "../../../components/block-slider/AboutTabs";
import FancyFeatureTewentNine from "../../../components/features/FancyFeatureTewentyNine";
import FancyFeatureThirtyTwo from "../../../components/features/FancyFeatureThirtyTwo";
import Features3 from "../../../components/form-survey-landing/Feature3";
import FancyBlock from "../../../components/e-commerce/FancyBlock";
import FancyFeatureTwelve from "../../../components/features/FancyFeatureTwelve";

const RaidenVerse = () => {
  const benefits = [
    {
      name: "Students",
      value:
        " Give your educational path practical experiences that allow you to apply what you have learned.",
      name2: "Professionals",
      value2:
        "  Develop essential skills that will help you succeed in the dynamic and quickly changing workplace of today.",
      name3: "Organizers",
      value3:
        "Increase workforce competencies by providing hands-on training that promotes continuous improvement and operational excellence.",
    },
  ];
 const FeatureContents = [
    {
      title: "Multiplayer Integration",
      li: "Advanced Networking in Unity/Unreal",
      li2: "Custom Netcode Solution",
      li3: "Cross-platform Multiplayer",
      li4: "Network Optimization	",
    },
    {
      title: "Streaming Services",
      li: "Video streaming in Unity/Unreal",
      li2: "Interactive Streaming ",
      li3: "Performance Optimization",
      li4: "Content Protection",
    },
      {
      title: "Game Engine Expertise",
      li: "Unity Development",
      li2: "Unreal Engine Development ",
      li3: "Cross-Platform Development",
      li4: "Integration with External Services",
    },
  ];

  const keyfeature = [
    {
      name: "Retail Evolution",
      description:
        "Raidenverse has enabled leading retail brands to offer virtual stores that provide revolutionary shopping experiences.",

      name2: "Education Empowerment",
      description2:
        "  Raidenverse transforms knowledge into an experience by establishing immersive environments that remove obstacles to learning within the classroom.",
      name3: "",
      description3:
        " ",

      name4: " Healthcare Revolution",
      description4:
        " Raidenverse's immersive simulations and virtual environments for improved learning and therapy have transformed medical training and patient care in the healthcare industry.",

      name5: "Corporate Collaboration",
      description5:
        "   Our platform makes it possible for distant teams to collaborate easily across different virtual workspaces, establishing Raidenverse as an innovation and collaboration hub for business clients.",

      name6: "",
      description6:
        "  ",
    },
  ];

  const featuresContentmetaverse = [
    {
      bgColor: "#F7EDFF",
      icon: "166",
      title: "Choose Your Path",
      descriptions:
        "Create your own learning path with robust simulations and tailored content that changes to meet your goals.",
      link: "#",
      dealyAnimation: "",
    },
    {
      bgColor: "#D8FFF1",
      icon: "167",
      title: "Learn by Doing",
      descriptions:
        "Enter realistic simulations, investigate interactive settings, and learn by doing rather than merely observing.",
      link: "#",
      dealyAnimation: "100",
    },
    {
      bgColor: "#E6FBFF",
      icon: "168",
      title: "Track your progress",
      descriptions:
        "Track your progress, evaluate your accomplishments, and adjust your learning path for optimal effect.",
      link: "#",
      dealyAnimation: "",
    },
    {
      bgColor: "#FFEBDB",
      icon: "169",
      title: "Receive Personalized Guidance",
      descriptions:
        "Get personalized advice that combines professional knowledge with AI-powered suggestions for optimal learning outcomes.",
      link: "#",
      dealyAnimation: "100",
    },
  ];

  const heroContent = {
    title: "Stepping Ahead with Next-Generation Metaverse Uses",
    description: `Establishing the benchmark for innovative immersive metaverse solutions is essential to creating next-generation metaverse applications.`,
    buttonText: " Download - It’s free",
  };

  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Service Version 1 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderThree />

      {/* banner */}
      <div className="mt-200 md-mt-150">
        <HeroBannerEight heroContent={heroContent} />
      </div>

      {/* WHY RaidenSimX  */}
      <div
        className="fancy-feature-twentyTwo mpt-200 pt-130 md-mt-80 sm-pt-100"
        id="product"
      >
        <div className="container">
          <div className="title-style-ten mb-40 md-mb-20">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2>
                  WHY
                  <br />
                  RaidenVerse
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20">
                  Raidenverse, we're powered by a passion for virtual reality's
                  next frontier. Our team of technologists and creatives uses
                  their extensive knowledge of futuristic technology to innovate
                  in the metaverse, turning bold concepts into engrossing,
                  immersive worlds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feature */}

      {/* Key Features */}
      <div className="fancy-text-block-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <FancyTextBlockThree keyfeature={keyfeature[0]} />
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
      </div>

      {/* What We Do */}
      <div
        className="fancy-feature-twentyTwo mpt-200 pt-130 md-mt-80 sm-pt-100"
        id="product"
      >
        <div className="container">
          <div className="title-style-ten mb-40 md-mb-20">
            <div  className="row align-items-center">
              <div className="col-lg-7">
                <h2>
                  What
                  <br />
                  We Do
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20">
                  Raidenverse's AI-powered metaverse platform is pushing the
                  boundaries of digital technology and changing the way
                  businesses interact with virtual environments by providing
                  captivating, futuristic experiences.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works  */}
         <div
        className="fancy-feature-twentyFive lg-container pt-150 md-pt-100"
        id="features"
      >
        <div className="container">
    
          {/* /.block-style-twentyFive */}

          <div  className="block-style-twentyFive mt-150 md-mt-100">
            <div className="row align-items-center">
              <div
                className="col-xl-7 col-lg-6 col-md-10 m-auto text-center text-lg-right order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container">
                  <img
                    src="images/shape/bg6.svg"
                    alt="shape"
                    className="ms-auto bg-round-shape"
                  />
                  <div className="block-content">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/136.svg" alt="" />
                          </div>
                          <h4>
                            Friendly <br /> user interface
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}

                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/137.svg" alt="" />
                          </div>
                          <h4>
                            SEO <br />
                            Optimization
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/138.svg" alt="" />
                          </div>
                          <h4>
                            Quality & fast <br />
                            support
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}
                    </div>
                  </div>
                  {/*  /.block-content */}
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-xl-5 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper order-lg-first">
                  <h6>
                   
                  </h6>
                  <h3 className="title">Metaverse Game </h3>
                  <p> We develop games for VR/AR, PCs, and consoles. Building strong multiplayer and social features, as well as integrating AI for procedural generation, NPC behavior, and dynamic content, are among our specialties.</p>
                  <ul>
                    <li>Entertainment Industry</li>
                    <li>Brand Engagement</li>
                    <li>Educational Gaming</li>
                  </ul>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}
        </div>
      </div>



            {/* How It Works  */}
         <div
        className="fancy-feature-twentyFive lg-container pt-150 md-pt-100"
        id="features"
      >
        <div className="container">
    
          {/* /.block-style-twentyFive */}

          <div className="block-style-twentyFive mt-150 md-mt-100">
            <div style={{flexDirection:"row-reverse"}} className="row align-items-center">
              <div
                className="col-xl-7 col-lg-6 col-md-10 m-auto text-center text-lg-right order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container">
                  <img
                    src="images/shape/bg6.svg"
                    alt="shape"
                    className="ms-auto bg-round-shape"
                  />
                  <div className="block-content">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/136.svg" alt="" />
                          </div>
                          <h4>
                            Friendly <br /> user interface
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}

                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/137.svg" alt="" />
                          </div>
                          <h4>
                            SEO <br />
                            Optimization
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/138.svg" alt="" />
                          </div>
                          <h4>
                            Quality & fast <br />
                            support
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}
                    </div>
                  </div>
                  {/*  /.block-content */}
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-xl-5 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper order-lg-first">
                  {/* <h6>
                   
                  </h6> */}
                  <h3 className="title">Metaverse Application </h3>
                  <p> We create flexible desktop, mobile, and VR/AR apps. Our skills include using cloud services for collaboration and data, as well as integrating AI features like sentiment analysis, computer vision, and language processing.</p>
                  <ul>
                    <li>Virtual Events</li>
                    <li> Virtual Training</li>
                    <li>Telepresence Solutions</li>
                  </ul>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}
        </div>
      </div>


      {/* How It Works  */}
         <div
        className="fancy-feature-twentyFive lg-container pt-150 md-pt-100"
        id="features"
      >
        <div className="container">
    
          {/* /.block-style-twentyFive */}

          <div className="block-style-twentyFive mt-150 md-mt-100">
            <div className="row align-items-center">
              <div
                className="col-xl-7 col-lg-6 col-md-10 m-auto text-center text-lg-right order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container">
                  <img
                    src="images/shape/bg6.svg"
                    alt="shape"
                    className="ms-auto bg-round-shape"
                  />
                  <div className="block-content">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/136.svg" alt="" />
                          </div>
                          <h4>
                            Friendly <br /> user interface
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}

                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/137.svg" alt="" />
                          </div>
                          <h4>
                            SEO <br />
                            Optimization
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/138.svg" alt="" />
                          </div>
                          <h4>
                            Quality & fast <br />
                            support
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}
                    </div>
                  </div>
                  {/*  /.block-content */}
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-xl-5 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper order-lg-first">
                  
                  <h3 className="title">Digital Twin & Simulation </h3>
                  <p> We use simulation and 3D to create digital copies of real-world objects, settings, and procedures. Real-time virtual testing for operational optimization is made possible by these, which combine IoT, analytics, and AI to provide live, predictive insights.</p>
                  <ul>
                    <li>Manufacturing Optimization</li>
                    <li>Urban Planning</li>
                    <li>Healthcare Simulation </li>
                  </ul>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}
        </div>
      </div>



      {/* How It Works  */}
    


      {/* Who Stands to Gain  */}
    

      {/* Raiden's Core  */}
  

      {/* Raiden's Core  */}
  

    
      {/* footer */}
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
  );
};

export default RaidenVerse;
