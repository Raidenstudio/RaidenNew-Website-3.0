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

const RaidenVerse = () => {

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

    return (
        <div className="main-page-wrapper p0">
            <Helmet>
                <title>Service Version 1 || Deski-Saas & Software React Template</title>
            </Helmet>
            {/* End Page SEO Content */}

            <HeaderThree />

            {/* banner */}
            <div className="mt-200 md-mt-150">
                <HeroBannerEight />
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
                                    RaidenSimX</h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="md-pt-20">
                                    Our team, which is enthusiastic and well-versed in AI, education, and simulation, investigates cutting-edge strategies to revolutionize education and help individuals and institutions thrive in the face of constant change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* feature */}
            <div
                className="block-style-thirtySix lg-container  pb-120 md-pb-120 pt-120 md-pt-120"
                id="feature"
            >
                <div className="container">
                    <Features2 />
                </div>
            </div>

            {/* Key Features */}
            <div className="fancy-text-block-three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-11 m-auto">
                            <FancyTextBlockThree />
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
                                    We Do</h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="md-pt-20">
                                    With AI-powered, realistic simulations adapted by human knowledge, we transform training and enable people and businesses to succeed in any sector.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works  */}
            <div className="fancy-feature-thirty mt-180 md-mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 m-auto">
                            <div className="title-style-thirteen text-center mb-80 md-mb-60">
                                <h2>
                                    {" "}
                                    How It {" "}
                                    <span>
                                        Works{" "}
                                        <img
                                            src="images/shape/line-shape-14.svg"
                                            alt="line shape"
                                        />
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <FancyFeatureThirtyTwo featuresContent={featuresContentmetaverse} />
                    </div>
                    <img
                        src="images/shape/237.svg"
                        alt="shape"
                        className="shapes shape-one"
                    />
                    <img
                        src="images/shape/238.svg"
                        alt="shape"
                        className="shapes shape-two"
                    />
                </div>
                {/* <!-- /.wrapper --> */}
            </div>

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
                                    <span>Who Stands</span>
                                    <br />to Gain
                                </h2>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 ms-auto"
                            data-aos="fade-left"
                            data-aos-duration="1200"
                        >
                            <AboutTabs />
                        </div>
                    </div>
                </div>
            </div>

            {/* Raiden's Core  */}
            <div
                className="block-style-thirtySix lg-container  pb-120 md-pb-120 pt-120 md-pt-120"
                id="feature"
            >
                <div className="container">
                    <Features3 />
                </div>
            </div>


            {/* Raiden's Core  */}
            <div className="fancy-feature-fortyFour lg-container mt-140 lg-mt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 m-auto">
                            <div
                                className="title-style-eleven text-center mb-40 lg-mb-20"
                                data-aos="fade-up"
                            >
                                <h2>Industry Domains</h2>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="row">
                        <FancyBlock />
                    </div>
                </div>
                {/* End .container */}
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

export default RaidenVerse;
