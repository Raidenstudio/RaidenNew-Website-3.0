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
        title: "Concept, Design & storyboarding",
        description: "We take your rough game ideas and turn them into a compelling narrative that will resonate with your target audience."
    },
    {
        delayAnimation: "50",
        colorOfBorder: "#FF5C5C",
        icon: icon2,
        title: "Blockchain Integration",
        description: "Building a blockchain-based shield for your game to ensure safe assets and an open in-game experience."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#FF5C5C",
        icon: icon3,
        title: "Smart Contract Development",
        description: "Maintained a specially designed smart contract for secure and equitable game mechanics."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#63EAA9",
        icon: icon4,
        title: "Game Development",
        description: "Utilizing the updated tools and technologies, we keep building your P2E game to make you feel lively with stunning visuals and architecture."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#5BE2FF",
        icon: icon5,
        title: "Monetization Strategies",
        description: "Experience engagement that brings both excitement and earnings with stunning visuals while tapping into rewarding revenue streams."
    },
    {
        delayAnimation: "150",
        colorOfBorder: "#FF56EE",
        icon: icon6,
        title: "Community building and Marketing",
        description: "Utilizing influencer partnerships, effective engagement campaigns, and strategic marketing to create a vibrant community around the game."
    }

];


const tabListContent = [
    {
        img: "img_81",
        // innerText: "Track Human faces",
        title: "Engaging Gameplay",
        description: `P2E games provide rewarding and engaging experiences that entice players to return for more.`,
    },
    {
        img: "img_92",
        // innerText: "keyframing experience",
        title: "Financial Freedom",
        description: `Players can pursue financial independence and explore new opportunities by earning real rewards in-game.`,
    },
    {
        img: "img_93",
        // innerText: "Audio track down",
        title: "Community Building",
        description: `P2E games that use blockchain technology guarantee safe and transparent transactions, building developer and player trust.`,
    },
    {
        img: "img_94",
        // innerText: "Take the color",
        title: "Transparency and Trust",
        description: `We prioritize player trust and transparency by using blockchain to secure all transactions, as well as other features.`,
    },
    {
        img: "img_95",
        // innerText: "Edit videos at up to 4K",
        title: "Innovation in Gaming",
        description: `Our approach combines futuristic technologies with classic gaming to create a distinctive and innovative gaming experience.`,
    },
    {
        img: "img_95",
        // innerText: "Edit videos at up to 4K",
        title: "Diverse Opportunities",
        description: `Our ecosystem offers a variety of revenue streams catered to each kind of player, from asset trading to in-game feature unlocking.`,
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
        title: "Vision & Blueprint",
        subTitle: "We begin by carefully outlining the essential game mechanics and features that will make your concept a reality after thoroughly understanding your goals, objectives, and vision.",
    },
    {
        icon: icon14,
        title: "Secure Blockchain Integration",
        subTitle: "Ensuring safe asset ownership and an open, reliable economy for all players, we create a blockchain specifically for your game.",
    },
    {
        icon: icon15,
        title: "Interactive Prototyping",
        subTitle: "Make use of interactive prototypes to see your design in action. We improve the experience in response to user input, guaranteeing a polished and captivating end result.",
    },
    {
        icon: icon16,
        title: "Scalable & Robust Architecture",
        subTitle: "Our experience creates a flexible and effective infrastructure. As your game develops, stability and fluid performance are guaranteed because we design for excellence.",
    },
    {
        icon: icon18,
        title: "Agile Development & Continuous Improvement",
        subTitle: "Our philosophy is agile: create, learn, and get better quickly. We make constant adjustments based on your feedback and data-driven analytics to provide the greatest possible gaming experience.",
    },
    {
        icon: icon18,
        title: "Launch & Support",
        subTitle: "We ensure a seamless game launch and keep offering committed support to optimize efficiency and player happiness.",
    }
];

const navContent = [
    {
        title: "Proven Track Record",
        image: "images/assets/screen_07.png",
    },
    {
        title: "Holistic Approach",
        image: "images/assets/screen_08.png",
    },
    {
        title: "Transparent Communication",
        image: "images/assets/screen_09.png",
    },
    {
        title: "Client-Centric Solutions",
        image: "images/assets/screen_07.png", // optional reuse
    },
];

const P2eGameDevelopment = () => {
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

            {/* banner */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
                        <h1 style={{ fontSize: "74px", fontStyle: "Raleway", color: "white" }} className="hero-heading" data-aos="fade-up">
                            Gaming Innovation
                            <br />
                            where your passion pays
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


            {/* services */}
            <div className="fancy-feature-nineteen pb-180 pt-180 md-pt-100 bg-white" id="effect">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-9 col-lg-11 m-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="title-style-eight text-center mb-80 md-mb-40">
                                <h2>Play to Earn Experience</h2>
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
                                <h2 className='text-white'>
                                    Why <span>Raiden's P2E</span>
                                </h2>
                                <p className="text-xs text-white">
                                    Play-to-Earn (P2E) is a gaming model in which players actively participate in the game and reach in-game objectives or milestones to earn real-world rewards.
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
            <div className="fancy-feature-twelve pb-180 pt-250 md-pt-50 bg-black" id="about">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                                <div className="title-style-six text-center">
                                    <h2 className='text-white'>
                                        Game Development, Crafted to Your Vision
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
                                <h2>
                                    Elevate Your Gaming Experience
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

export default P2eGameDevelopment