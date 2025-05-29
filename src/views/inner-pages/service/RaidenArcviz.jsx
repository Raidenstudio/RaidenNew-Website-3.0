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
import service4 from "../../../assets/images/assets/ARservice/3D Design and Development.png"
import service2 from "../../../assets/images/assets/ARservice/AR Game development.png"
import service1 from "../../../assets/images/assets/ARservice/Custom AR development.png"
import service3 from "../../../assets/images/assets/ARservice/Web AR development.png"
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
import FancyFeatureTewentyTwo from "../../../components/features/FancyFeatureTewentyTwo";

const RaidenArcviz = () => {
        const FeatureContent = [
  {
    icon: "121",
    title: "Enhanced Visualization",
    subTitle: `Creating powerful, realistic architectural visualizations. `,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Improved Decision Making",
    subTitle: `Choose from our personalized options to create your real-time design.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Cost and Time Savings",
    subTitle: `Save cost, time, and the need for physical staging and in-person property viewings.`,
    bgColor: "#FFB951",
  },
  {
    icon: "121",
    title: "Wider Reach",
    subTitle: `Our VR creation impresses clients and potential customers, which also boosts engagement.`,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Streamlined Transactions",
    subTitle: `Virtual reality commerce has made real estate transactions, such as buying and selling, easier.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Enhanced Communication",
    subTitle: `Our innovative virtual tours and digital twin technology allow you to connect precisely with project stakeholders.`,
    bgColor: "#FFB951",
  },
  {
    icon: "121",
    title: "Increased Tenant Satisfaction",
    subTitle: `Virtual tours and instructions help tenants gain a comprehensive understanding of their rental property.`,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Accelerated Design Process",
    subTitle: `Equip with Virtual tools and gear up the design process with realtime analytics and collaborative architecture.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Competitive Advantage",
    subTitle: `Keep ahead of the competition by offering the experience in a creative and futuristic manner.`,
    bgColor: "#FFB951",
  },
];

      const benefits = [
        {
            name:'Empowerment',
            value:' Become the best version of yourself by continuously adjusting to social situations while feeling empowered and capable.',
            name2:' social skills',
            value2:' Strengthen your public speaking abilities by continuously practicing in our controlled environment.',
            name3:'Reduced Anxiety',
            value3:'Using techniques for gradual exposure and desensitization, you can overcome your anxiety related to uncomfortable social situations.'
        }
    ]
    

    const keyfeature = [
        {
        name:'Immersive Architectural Visualization',
        description:'Go beyond just imagining; visualize and feel through your eye view of your 2D architectural design.',
        name2:'Interactive Design Customization',
        description2:' Architecture is perfectly structured right from initial material selections to lighting configurations. Providing different options and making you visually explore your complete choices.',

        name5:' Pre-Construction Visualization ',
        description5:'Raiden creates VR and 3D models before construction starts, detecting and resolving possible problems to save time, avoid expensive mistakes and misinterpretations, and lower risks. ',
       
        name4:'Engage Marketing Solutions',
        description4:' Draw in prospective customers and investors by using virtual reality to showcase models and encourage interaction through immersive experiences.', }
   
]

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
        }
    ];


    const heroContent = {
  title: "Raiden ARCVIZ: Revolutionizing Real Estate & Architecture ",
  description: `VR-powered architecture and real estate that provides immersive visualization, interactive design, and effective pre-construction and marketing.`,
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
                <HeroBannerEight  heroContent={heroContent}/>
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
                                <h2>Need for 
                                    <br />
                                    Raiden ARCVIZ </h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="md-pt-20">
Architecting your projects with the enhanced, future focused innovation Virtual Reality (VR) technology. With its modern hardware and software, Raiden offers creative services and high-quality solutions to meet all real estate and architectural needs.
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
                            <FancyTextBlockThree keyfeature={keyfeature[0]}  />
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
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h2>WHO IS
                                    <br />
                                  RaidenARCVIZ </h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="md-pt-20">
                   Employing virtual reality (VR) technology to revolutionize the architecture and real estate sectors with passionate experts who are advancing traditional design and visualization methods and opening the door for a futuristic approach.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works  */}
            

            {/* Who Stands to Gain  */}
            <div className="fancy-text-block-twenty">
                <img
                    src="images/shape/124.svg"
                    alt="shape"
                    className="shapes shape-one"
                />
                <img
                    src="images/shape/125.svg"
                    alt="shape"
                    className="shapes shape-two"
                />
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-5"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                        >
                            {/* <div className="client-info font-rubik">
                                <span>How It Works </span>
                            </div> */}
                            <div className="title-style-five">
                                <h2>
                                    <span>Benefits of </span>
                                    <br />COGNI+ 
                                </h2>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 ms-auto"
                            data-aos="fade-left"
                            data-aos-duration="1200"
                        >
                            <AboutTabs benefits={benefits[0]} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Raiden's Core  */}
            


            {/* Raiden's Core  */}
            <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                  One Platform. For any{" "}
                  <span>
                    business <img src="images/shape/191.svg" alt="shape" />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTewentyTwo FeatureContent={FeatureContent} />
          </div>
        </div>
      </div>


            <div className="fancy-short-banner-three mt-200 md-mt-150">
                <div className="container">
                    <div className="bg-wrapper">
                        <CallToActionThree />
                    </div>
                </div>
            </div>

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

export default RaidenArcviz;
