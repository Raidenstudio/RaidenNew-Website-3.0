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

const RaidenCogni = () => {

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
    const FeatureContent = [
  {
    icon: "121",
    title: "Join Attention",
    subTitle: `Cultivate joint attention for social interactions on shared activities or objects, and build connections`,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Imitation",
    subTitle: `Mimics, expressions, and actions to improve your social learning and communication skills.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Street Crossing",
    subTitle: `Cross the street safely and confidently by mastering traffic awareness, crosswalk navigation, and pedestrian signals.`,
    bgColor: "#FFB951",
  },
  {
    icon: "121",
    title: "School Hallway",
    subTitle: `Congestive corridors involve being aware of your surroundings, following navigation rules, and interacting socially.`,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Hallway Small Talk",
    subTitle: `Encourage small talk and brief interactions to connect with teachers and peers using effective conversational strategies.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Gestures",
    subTitle: `Learn gestures to express ideas and emotions nonverbally.`,
    bgColor: "#FFB951",
  },
  {
    icon: "121",
    title: "Cafeteria Social Skills",
    subTitle: `Boost your public speaking in cafeterias with inclusive behavior and good table manners.`,
    bgColor: "#FF4A8B",
  },
  {
    icon: "122",
    title: "Mindful Thinking",
    subTitle: `A productive mind boosts self-awareness and confidence. Explore mindful practices for resilience and focus.`,
    bgColor: "#6D49FF",
  },
  {
    icon: "123",
    title: "Classroom Social",
    subTitle: `Cultivate classroom skills like active listening and collaboration for better learning and success.`,
    bgColor: "#FFB951",
  },
];
    

    const keyfeature = [
        {
        name:'Immersive VR Environment',
        description:'We encourage you to engage in adventurous interaction, rather than simply following instructions, in a safe environment where you can practice various social situations.',
        name2:'Customized Training Modules',
        description2:'Our training modules cover everything from basic social interactions to engaging communication strategies that can be customized to meet specific goals and abilities.',

        name3:'Realistic Social Scenarios ',
        description3:'Engage with the everyday routines, such as conversation initiation, facial expression interpretation, and social cue navigation, to help users improve their skills with these interactive scenarios.',
       
        name4:'User-Friendly Interface',
        description4:'With a user-friendly interface, we are able to provide every required skill level, intuitive controls, and clear instructions that are compatible with independent learning and exploration.',

        name5:'Supportive Community',
        description5:'Connect and engage across the community of users and professionals for autism advocacy, sharing experiences, exchanging tips, and celebrating milestones.',

        name6:'Data-Driven Progress Tracking',
        description6:'Our integrated data tracking tools offer valuable insights into user performance, facilitating focused intervention and ongoing enhancement.'

        
        }
   
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
  title: "Enriching with RaidenCOGNI+: Autism Training in VR",
  description: `RaidenCOGNI+ improves people's lives by providing immersive VR autism training in a safe environment.`,
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
                                <h2>WHY
                                    <br />
                                    Raiden Cogni+ </h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="md-pt-20">
                                COGNI+ is an innovative virtual reality (VR) Autism Training Solution designed to help people with autism spectrum disorder (ASD) better understand and manage their condition. Our training sessions are engaging and realistic thanks to the use of virtual reality technology. This allows you to develop behavioral responses, social interactions, and communication skills in a controlled environment.

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
                                <h2>What
                                    <br />
                                   COGNI+ Benefits </h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="md-pt-20">
                                  The Virtual Reality (VR) Autism Training Solution from COGNI+ welcomes the future by enabling people with ASD to participate and benefit from training. We put them in a world where they can practice social skills, communication abilities, and behavioral responses less frequently. This allows them to develop critical life skills in a controlled environment.


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

export default RaidenCogni;
