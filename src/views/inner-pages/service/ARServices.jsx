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

const ARServices = () => {
    return (
        <div className="main-page-wrapper p0">
            <Helmet>
                <title>Service Version 1 || Deski-Saas & Software React Template</title>
            </Helmet>
            {/* End Page SEO Content */}

            <HeaderThree />
            {/* End Header */}

            {/* 	=============================================
            Fancy Hero Three
        ============================================== */}
            <div className="fancy-hero-three">
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
                                    <span style={{ fontSize: "74px", whiteSpace: "nowrap" }}>
                                        Orchestrating Transformative
                                    </span>{" "}
                                    <span style={{ fontSize: "74px", color: "#000", fontWeight: "700" }}>
                                        <br /> AR Solutions
                                    </span>
                                </h1>
                                <p className="sub-heading">
                                    Bring your ideas to life with audio and visual components. Revolutionizing your business processes by providing significant solutions.
                                    Elevate your business with immersive solutions that set new industry standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.bg-wrapper  */}
            </div>
            {/* /.fancy-hero-three */}

            {/* =============================================
            Fancy Feature Twenty Three
        ==============================================  */}
            <div className="fancy-feature-twentyThree pt-170 md-pt-100" id="feature">
                <div className="container">
                    <div
                        className="title-style-nine text-center pb-180 md-pb-100"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {/* <h6>Our Features</h6> */}
                        <h2>
                            Burgeoning Beyond Boundaries with
                            <br /> Future-laden {" "}
                            <span>
                                AR Services <img src="images/shape/192.svg" alt="shape" />
                            </span>
                        </h2>
                        {/* <p>
                            Our online booking software allows you to schedule your client’s
                            appointments easily & efficiently.
                        </p> */}
                    </div>
                    {/* End title */}

                    <div className="block-style-twentyThree">
                        <div className="row d-flex align-items-center">
                            <div
                                className="col-lg-6 order-lg-last ms-auto"
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                <div className="screen-container ms-auto">
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#69FF9C" }}
                                    ></div>
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#FFF170" }}
                                    ></div>
                                    <img
                                        src={service1}
                                        alt=""
                                        className="shapes shape-one"
                                    />
                                </div>
                                {/* /.screen-container */}
                            </div>
                            <div
                                className="col-lg-5 order-lg-first"
                                data-aos="fade-right"
                                data-aos-duration="1200"
                            >
                                <div className="text-wrapper">
                                    {/* <h6>Custom AR App Development
                                    </h6> */}
                                    <h3 className="title">Custom AR App Development
                                    </h3>
                                    <p>
                                        Advanced web and mobile applications powered by AR digital and tangible environs to elevate user engagement.
                                    </p>
                                </div>
                                {/*  /.text-wrapper */}
                            </div>
                        </div>
                    </div>
                    {/* /.block-style-twentyThree */}

                    <div className="block-style-twentyThree">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div
                                    className="screen-container me-auto"
                                    data-aos="fade-right"
                                    data-aos-duration="1200"
                                >
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#FFDE69" }}
                                    ></div>
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#FF77D9" }}
                                    ></div>
                                    <img
                                        src={service2}
                                        alt="screen"
                                        className="shapes shape-two"
                                    />
                                </div>
                                {/* /.screen-container */}
                            </div>
                            <div
                                className="col-lg-5 ms-auto"
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                <div className="text-wrapper">
                                    {/* <h6>WORKFLOW MANAGEMENT</h6> */}
                                    <h3 className="title">AR Game development</h3>
                                    <p>
                                        A lively moment with high-quality AR visuals, dynamic models, and high-level game development services.
                                    </p>
                                </div>
                                {/* /.text-wrapper */}
                            </div>
                        </div>
                    </div>
                    {/* /.block-style-twentyThree */}

                    <div className="block-style-twentyThree">
                        <div className="row d-flex align-items-center">
                            <div
                                className="col-lg-6 order-lg-last ms-auto"
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                <div className="screen-container ms-auto">
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#00F0FF" }}
                                    ></div>
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#FC6BFF" }}
                                    ></div>
                                    <img
                                        src={service3}
                                        alt="screen"
                                        className="shapes shape-three"
                                    />
                                </div>
                                {/* /.screen-container */}
                            </div>
                            <div
                                className="col-lg-5 order-lg-first"
                                data-aos="fade-right"
                                data-aos-duration="1200"
                            >
                                <div className="text-wrapper">
                                    {/* <h6>ON-DEMAND SCHEDULING</h6> */}
                                    <h3 className="title">
                                        Web AR development
                                    </h3>
                                    <p>
                                        Web AR combines 3D models and augmented reality to showcase assets online.

                                    </p>
                                </div>
                                {/* /.text-wrapper */}
                            </div>
                        </div>
                    </div>
                    {/* /.block-style-twentyThree */}

                    <div className="block-style-twentyThree">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div
                                    className="screen-container me-auto"
                                    data-aos="fade-right"
                                    data-aos-duration="1200"
                                >
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#FFDE69" }}
                                    ></div>
                                    <div
                                        className="oval-shape"
                                        style={{ background: "#FF77D9" }}
                                    ></div>
                                    <img
                                        src={service4}
                                        alt="screen"
                                        className="shapes shape-two"
                                    />
                                </div>
                                {/* /.screen-container */}
                            </div>
                            <div
                                className="col-lg-5 ms-auto"
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                <div className="text-wrapper">
                                    {/* <h6>WORKFLOW MANAGEMENT</h6> */}
                                    <h3 className="title">3D Design and Development
                                    </h3>
                                    <p>
                                        Dynamic 2D/3D visuals offer a unique, real-time experience across platforms.
                                    </p>
                                </div>
                                {/* /.text-wrapper */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fancy-feature-twentyFour pt-140 md-pt-60" id="service">
                <div className="container">
                    <div className="title-style-nine text-center">
                        <h6>Indutries Include</h6>
                        <h2>
                            Strategic Advantages of AR through Bespoke{" "}
                            <span>
                                Application Development <img src="images/shape/194.svg" alt="shape" />
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="bg-wrapper mt-100 md-mt-80">
                    <a
                        href="#feedback"
                        className="click-scroll-button scroll-target d-flex justify-content-center"
                    >
                        <img src="images/shape/200.svg" alt="shape" />
                    </a>
                    <div className="container">
                        <FancyFeatureTewentyFour />
                    </div>
                    <img
                        src="images/shape/195.svg"
                        alt="shape"
                        className="shapes shape-one"
                    />
                    <img
                        src="images/shape/196.svg"
                        alt="shape"
                        className="shapes shape-two"
                    />
                    <img
                        src="images/shape/197.svg"
                        alt="shape"
                        className="shapes shape-three"
                    />
                    <img
                        src="images/shape/198.svg"
                        alt="shape"
                        className="shapes shape-four"
                    />
                    <img
                        src="images/shape/199.svg"
                        alt="shape"
                        className="shapes shape-five"
                    />
                </div>
                {/* /.bg-wrapper */}
            </div>


            <div className="pt-140 md-pt-60 pb-140 md-pb-60" id="template">
                <div className="container">
                    <div
                        className="title-style-eight text-center mb-80 md-mb-30"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <h2>Industries We Empower</h2>
                        <p>Quick and easy to customize. No experience required.</p>
                    </div>
                </div>

                <div className="lg-container">
                    <div className="container">
                        <VideoGallery />

                        <div
                            className="text-center mt-70"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            {/* <a href="#" className="theme-btn-nine">
                                Start Building
                            </a> */}
                        </div>
                    </div>
                </div>
                {/* /.lg-container */}
            </div>

            <div className="useable-tools-section bg-color mb-50">
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
                <div className="container">
                    <h6 className="font-gordita">Integrates with your tools</h6>
                    <h2>
                        Deski ties into your existing tools, services, & workflow. Get
                        notifications or create a Story with others tools.
                    </h2>

                    <SocialTwo />
                </div>
                {/* /.container */}
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

export default ARServices;
