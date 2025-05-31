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
import demo from "../../../assets/images/assets/Advantage Marketing.png"
import HeaderThree from "../../../components/header/HeaderThree";
import FancyFeatureTewentyEight from "../../../components/features/FancyFeatureTewentyEight";
import erc721 from '../../../assets/Features-of-NFT/ERC-721-&-1155-Support.png'
import ercint from '../../../assets/Features-of-NFT/ERP-&-CRM-integration.png'
import ercint1 from '../../../assets/Features-of-NFT/ERP-&-CRM-integration-1.png'
import expo from '../../../assets/Features-of-NFT/Export-NFTs.png'
import gasless from '../../../assets/Features-of-NFT/Gasless-Transactions.png'
import global from '../../../assets/Features-of-NFT/Global-Royalty-Standard.png'
import ipfs from '../../../assets/Features-of-NFT/IPFS-NFT-Storage.png'
import multi from '../../../assets/Features-of-NFT/Multi-chain-Compatibility.png'
import nft from  '../../../assets/Features-of-NFT/NFT-MetaData.png'
import payment from '../../../assets/Features-of-NFT/Payment-Gateway-Integration.png'
import store from '../../../assets/Features-of-NFT/Storefront.png'
import token from '../../../assets/Features-of-NFT/Tokenization.png'
import user from '../../../assets/Features-of-NFT/User-management.png'
import wallet from '../../../assets/Features-of-NFT/Wallet-integration.png'


const NftService = () => {

    const FeaturesContent = [
        {
            img: "94",
            title: "Non-Fungible Token",
            desc: `Have a reliable token conversion process for your physical and digital assets, and trade them on the NFT Marketplace to increase your trading opportunities.`,
        },
        {
            img: "95",
            title: "NFT Marketplace",
            desc: `Establishing your marketplace's user interface and back-end system to enable NFT trading with smooth end-to-end encryption.`,
        },
        {
            img: "96",
            title: "Web3 Wallet Integration",
            desc: `Future-proofed through innovative crypto wallet integration. Seamlessly connect across diverse blockchains, applying the latest features.`,
        },
        {
            img: "97",
            title: "Smart Contract Development",
            desc: `Customize and configure your own marketplace, adopting Raiden's NFT features and experience to ensure efficient trading.`,
        },
        {
            img: "98",
            title: "Cross-Chain NFT Platform Development",
            desc: `NFTs are created using multi-token wallet systems, cross-chain transactions, and blockchain network interoperability.`,
        },
        {
            img: "99",
            title: "NFT Game Development",
            desc: `Raiden handles the development of full-cycle NFT games, creating a game platform with tradable and collectible non-fungible tokens.`,
        },
        {
            img: "95",
            title: "NFT Art Gallery",
            desc: `Utilize Raiden's design expertise to create an influential NFT art gallery that will guarantee your tokenized art captures attention.`,
        },
        {
            img: "96",
            title: "NFT Streaming Platform",
            desc: `Empower creators with Raiden's NFT multimedia platform. Tokenize and generate your audio podcast, music, video, and even live concerts.`,
        },
        {
            img: "97",
            title: "NFT Aggregator Development",
            desc: `With the blockchain expertise and standard NFT, we cut through the difficulties and make sure you receive it in time.`,
        },
    ];
    const FeatureContent = [
        {
            icon: demo,
            title: "Planning",
            subTitle: "Strategically mapping all critical elements — from design and development to execution — before project initiation to ensure a seamless launch.",
            hoverText: "Strategically mapping all critical elements — from design and development to execution — before project initiation to ensure a seamless launch.",
        },
        {
            icon: "84",
            title: "Wireframing",
            subTitle: "Creating a strong project plan and framework that incorporates market integration, token minting, blockchain, and other elements.",
            hoverText: "Creating a strong project plan and framework that incorporates market integration, token minting, blockchain, and other elements.",
        },
        {
            icon: "84",
            title: "UI/UX",
            subTitle: "An approach that highlights user-centric interaction, usability, and aesthetic design as the three main pillars of successful NFT platform development.",
            hoverText: "An approach that highlights user-centric interaction, usability, and aesthetic design as the three main pillars of successful NFT platform development.",
        },
        {
            icon: "84",
            title: "Development",
            subTitle: "By building on core essentials, we streamline NFT development and empower projects to realize measurable success.",
            hoverText: "By building on core essentials, we streamline NFT development and empower projects to realize measurable success.",
        },
        {
            icon: "84",
            title: "Product Integrity",
            subTitle: "Executing rigorous quality analysis and comprehensive testing to deliver a bug-free NFT application with zero coding errors.",
            hoverText: "Executing rigorous quality analysis and comprehensive testing to deliver a bug-free NFT application with zero coding errors.",
        },
        {
            icon: "84",
            title: "Setting Up for Launch",
            subTitle: "We ensure the launch of your NFT project on all significant platforms, establishing a connection with users and opening up revenue streams.",
            hoverText: "We ensure the launch of your NFT project on all significant platforms, establishing a connection with users and opening up revenue streams.",
        }
    ];
      const featuresContent = [{
        icon: erc721 ,
        title:'ERC 721 & 1155 Support',
      },
      {
        icon: ercint ,
        title:'ERP & CRM Integration',
      },
      {
        icon: ercint1 ,
        title:'ERP & CRM Integration1',
      },
       {
        icon: expo ,
        title:'Export NTF',
      },
       {
        icon: gasless,
        title:'Gasless Transaction',
      },
       {
        icon: global ,
        title:'Global Royality Standard',
      },
       {
        icon: ipfs ,
        title:'IPFS NFT Storage',
      },
          {
        icon: multi ,
        title:'Multi Chain Compatibility',
      },
          {
        icon: nft ,
        title:'NTF MetaData ',
      },
          {
        icon: payment ,
        title:'Payment Gateway Integration',
      },
          {
        icon: store ,
        title:'Storefront',
      },
      {
        icon: token ,
        title:'Tokenization',
      },
      {
        icon: user ,
        title:'User Management',
      },
       {
        icon: wallet ,
        title:'Wallet Integration',
      },
    
    
    ]

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
                            <FancyFeatureSeventeen FeaturesContent={FeaturesContent} />
                        </div>
                    </div>
                </div>
            
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
                        <FancyFeatureTwelve FeatureContent={FeatureContent} fontColor="text-black" />
                    </div>
                </div>
                {/* /.bg-wrapper */}
                <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
            </div>
            <FancyFeatureTewentyEight  featuresContent={featuresContent} color="card rounded shadow custom-transition" />



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
