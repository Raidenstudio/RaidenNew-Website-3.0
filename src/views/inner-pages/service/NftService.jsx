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
import CounterFive from "../../../components/counter/CounterFive";
import FancyFeatureSeventeen from "../../../components/features/FancyFeatureSeventeen";
import FancyFeatureTewentySeven from "../../../components/features/FancyFeatureTewentySeven";
import FancyFeatureTewentyNine from "../../../components/features/FancyFeatureTewentyNine";
import FancyFeatureTwelve from "../../../components/features/FancyFeatureTwelve";

const NftService = () => {
    return (
        <div className="main-page-wrapper p0">
            <Helmet>
                <title>Service Version 1 || Deski-Saas & Software React Template</title>
            </Helmet>
            {/* End Page SEO Content */}

            <Header />
            {/* End Header */}

            {/* 	=============================================
            Fancy Hero Three
        ============================================== */}
            <div className="fancy-hero-three mb-150">
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
                                    <span style={{ fontSize: "0.8em", whiteSpace: "nowrap" }}>
                                        Exploring{" "}
                                        <span style={{ fontSize: "1em", color: "#000", fontWeight: "bold" }}>
                                            NFTs{" "}
                                        </span>
                                        Business
                                        <br />
                                        Potential
                                    </span>
                                </h1>
                                <p className="sub-heading">
                                    Develops clear chain of ownership with innovation on various fields allover.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.bg-wrapper  */}
            </div>
            {/* /.fancy-hero-three */}

            <CounterFive />


            <div className="fancy-feature-seventeen mt-150 md-mt-90" id="product">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="title-style-twelve text-center mb-70 md-mb-20">
                            <div className="row">
                                <div className="col-xl-10 col-lg-11 m-auto">
                                    <h2>
                                        <span>
                                            NFTs Business Evolution in the Digital Economy
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <FancyFeatureSeventeen />
                        </div>
                    </div>
                </div>
                {/* /.bg-wrapper */}
            </div>

            <div
                className="fancy-feature-twentySeven lg-container pt-120  md-pt-60"
                id="product"
            >
                <div className="container">
                    <div className="title-style-twelve text-center mb-70 md-mb-20">
                        <div className="row">
                            <div className="col-xl-10 col-lg-11 m-auto">
                                <div className="upper-title">Working Process</div>
                                <h2>
                                    <span>
                                        Our Expertise{" "}
                                        <img
                                            src="images/shape/line-shape-13.svg"
                                            alt="line-shape"
                                        />
                                    </span>
                                </h2>
                                <p className="mt-40 md-mt-30">
                                    Together with useful notifications, collaboration insights,
                                    and improvement tips – it’s time for your documents to start
                                    working for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <FancyFeatureTewentySeven />
                </div>
            </div>


            <div className="fancy-feature-twelve pt-250 md-pt-50" id="about">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                                <div className="title-style-six text-center">
                                    <h2>
                                        Check why you <span>Should</span> Choose us
                                    </h2>
                                </div>
                                {/* /.title-style-six */}
                            </div>
                        </div>
                        {/* End .row */}
                        <FancyFeatureTwelve />
                    </div>
                </div>
                {/* /.bg-wrapper */}
                <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
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

export default NftService;
