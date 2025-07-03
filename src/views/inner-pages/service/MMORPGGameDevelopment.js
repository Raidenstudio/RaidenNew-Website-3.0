import React, { useState } from 'react'
import DocSlickAsNavTwo from '../../../components/block-slider/DocSlickAsNavTwo'
import FancyFeatureNinteen from '../../../components/features/FancyFeatureNinteen'
import DocEditorTabs from '../../../components/block-slider/DocEditorTabs';
import FancyFeatureTwelve from '../../../components/features/FancyFeatureTwelve';

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
import DocSlickAsNavThree from '../../../components/block-slider/DocSlickAsNavThree';
import CallToActionThree from '../../../components/call-to-action/CallToActionThree';
import FooterTwo from '../../../components/footer/FooterTwo';
import CopyRightTwo from '../../../components/footer/CopyRightTwo';
import HeaderThree from '../../../components/header/HeaderThree';




const featureContent_service = [

    {
        delayAnimation: "0",
        colorOfBorder: "#8F6BF6",
        icon: icon1,
        title: "Conceptualization and Design",
        description: "From your initial ideas to a fully realized game world with detailed environments and compelling narratives perfect for bringing your first MMORPG to life."
    },
    {
        delayAnimation: "50",
        colorOfBorder: "#FF5C5C",
        icon: icon2,
        title: "Game Development",
        description: "Building immersive and lively games centered around a seamless player experience."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#FF5C5C",
        icon: icon3,
        title: "Multiplayer Integration",
        description: "You can create active online communities by providing players with exciting and reliable multiplayer features."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#63EAA9",
        icon: icon4,
        title: "Content Expansion",
        description: "Delivering regular updates, expansions, and new features to maintain player excitement and longevity."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#5BE2FF",
        icon: icon5,
        title: "Monetization Strategies",
        description: "Creating equitable revenue models that improve the main gaming experience rather than detract from it."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#FF56EE",
        icon: icon6,
        title: "Community Management",
        description: "We cultivate a positive player experience through dedicated support, interactive events, and open communication."
    }

];


const tabListContent = [
    {
        img: "img_81",
        // innerText: "Track Human faces",
        title: "Immersive Experience",
        description: `Blur the line between reality and fantasy by weaving grounded, relatable elements into your fantastical worlds, where every player's choice dynamically shapes the evolving narrative.`,
    },
    {
        img: "img_92",
        // innerText: "keyframing experience",
        title: "Global Reach",
        description: `Foster meaningful connections with gamers worldwide, beyond geographic and cultural limits.
`,
    },
    {
        img: "img_93",
        // innerText: "Audio track down",
        title: "Revenue Potential",
        description: `Encourage long-term revenue generation without sacrificing the gaming experience.`,
    },
    {
        img: "img_94",
        // innerText: "Take the color",
        title: "Community Building",
        description: `Create something greater than the game by bringing players together via a common passion.`,
    },
    {
        img: "img_95",
        // innerText: "Edit videos at up to 4K",
        title: "Continuous Evolution",
        description: `Keep your game competitive with consistent updates and engaging expansions that drive player return.`,
    },
    {
        img: "img_95",
        // innerText: "Edit videos at up to 4K",
        title: "Brand Recognition",
        description: `Create outstanding MMORPG experiences to position your brand as a leader in the gaming industry.`,
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
        title: "Discovery",
        subTitle: "We engage deeply with your team to fully grasp your goals and vision, guaranteeing realistic and attainable outcomes.",
    },
    {
        icon: icon14,
        title: "Planning",
        subTitle: "The entire development process is guided by a thorough plan that outlines the project's scope, important milestones, and launch objectives.",
    },
    {
        icon: icon15,
        title: "Development",
        subTitle: "Our developers bring your world to life by incorporating feedback and delivering quality at every turn, whether for PC or MMORPG in mobiles.",
    },
    {
        icon: icon16,
        title: "Testing & Refinement",
        subTitle: "Every system is thoroughly tested to find and address problems and provide a flawless and well-designed gaming experience.",
    },
    {
        icon: icon18,
        title: "Launch & Support",
        subTitle: "We ensure a seamless game launch and keep offering committed support to optimize efficiency and player happiness.",
    },
    {
        icon: icon18,
        title: "Launch & Support",
        subTitle: "We ensure a seamless game launch and keep offering committed support to optimize efficiency and player happiness.",
    }
];

const navContent = [
    {
        title: "Proven Expertise",
        image: "images/assets/screen_07.png",
    },
    {
        title: "Innovative by Design",
        image: "images/assets/screen_08.png",
    },
    {
        title: "Client-Centered Collaboration",
        image: "images/assets/screen_09.png",
    },
    {
        title: "End-to-End Support",
        image: "images/assets/screen_07.png", // optional reuse
    },
];

const MMORPGGameDevelopment = () => {
    //slider configure
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    console.log(nav1);
    console.log(nav2);

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

            <div className="container">
                <div className="row">
                    <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
                        <h1 style={{ fontSize: "74px", fontStyle: "Raleway", color: "white" }} className="hero-heading" data-aos="fade-up">
                            An
                             MMORPG's Crafting Journey
                            
                            From Pixels to Kingdoms
                        </h1>
                        <p
                            style={{ opacity: 0.8 }}
                            className="font-gordita hero-sub-heading"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Transforming raw ideas into immersive worlds, where pixels evolve into thriving kingdoms through innovation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="fancy-feature-nineteen pb-180 pt-180 md-pt-100 bg-white" id="effect">

                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-9 col-lg-11 m-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="title-style-eight text-center mb-80 md-mb-40">
                                <h2>MMORPG Creation Services</h2>
                            </div>
                        </div>
                    </div>
                    <FancyFeatureNinteen featureContent={featureContent_service} />
                </div>
            </div>

            <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
                            <div className="title-style-six text-center">
                                <h2 className='text-white'>
                                    Why Choose <span>Raiden</span>
                                </h2>
                                <p className="text-xs text-white">
                                    Raiden builds scalable, immersive MMORPGs perfect for your first MMORPG launch or expanding into MMORPGs in mobiles.
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

            <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 m-auto">
                            <div
                                className="title-style-eight text-center"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h2 class="text-black">
                                    MMORPG Development
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

            <div className="fancy-feature-twelve pb-180 pt-250 md-pt-50 bg-black" id="about">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                                <div className="title-style-six text-center">
                                    <h2 className='text-white'>
                                        MMORPG Game Development Process
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
    )
}

export default MMORPGGameDevelopment