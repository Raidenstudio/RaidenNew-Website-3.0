import React from 'react'
import HeroBannerTwelve from '../../../components/hero-banner/HeroBannerTwelve'
import CounterSix from '../../../components/counter/CounterSix'
import FancyFeatureSeven from '../../../components/features/FancyFeatureSeven'
import FancyFeatureSeventeen from '../../../components/features/FancyFeatureSeventeen'
import FancyTextBlock29 from '../../../components/fancy-text-block/FancyTextBlock29'
import FancyFeatureThirtyTwo from '../../../components/features/FancyFeatureThirtyTwo'
import FooterTwo from '../../../components/footer/FooterTwo'
import CopyRightTwo from '../../../components/footer/CopyRightTwo'
import CallToActionThree from '../../../components/call-to-action/CallToActionThree'

const BlockchainDevelopment = () => {

  const FeaturesContent = [
    {
      img: "94",
      title: "Web3",
      desc: `Blockchain-powered solutions transform your digital experience by giving you total control over your data, identity, and assets with no middlemen, just secure direct communication.`,
    },
    {
      img: "95",
      title: "Public Blockchain",
      desc: `Developing decentralized apps that provide open access to data, transparency, and trust over a global network.`,
    },
    {
      img: "96",
      title: "Private blockchain",
      desc: `Effective consensus processes provide faster transactions, enhanced security, and access restrictions ideal for companies seeking scalability and reliability.`,
    },
    {
      img: "97",
      title: "Cryptocurrency",
      desc: `We assist you in creating digital assets that are effective, secure, and future-proof, whether you are launching a token, coin, or an entire crypto ecosystem.`,
    },
    {
      img: "98",
      title: "DEX",
      desc: `Allow your users to trade cryptocurrency securely with utmost benefit on a custom-built decentralized exchange with no third parties and total control.`,
    },
    {
      img: "99",
      title: "Crypto wallet",
      desc: `Our secure wallets are designed for easy storage and transfers, so you can keep your cryptocurrency safe and accessible.`,
    },
    {
      img: "95",
      title: "NFT Marketplace",
      desc: `We create scalable NFT marketplaces that make it easy to buy, sell, trade, and mint digital assets.`,
    },
    {
      img: "96",
      title: "Smart Contract",
      desc: `Ensuring efficiency and integrity in every interaction through safe and transparent transactions.`,
    },
    {
      img: "97",
      title: "DAPP",
      desc: `Assist you in creating a DApp that offers users complete decentralization and genuine ownership and control.`,
    },
  ];

  const featureList = [
    {
      icon: "157",
      title: "Decentralization",
      description: `Delivers the reliability, scalability, and compliance needed to operate securely without any control.`,
    },
    {
      icon: "158",
      title: "End-to-End Data Security",
      description: `Every transaction is encrypted, traceable, and tamper-proof, ensuring protection from start to finish.`,
    },
    {
      icon: "159",
      title: "Seamless Collaboration",
      description: `Fast, secure peer-to-peer exchange—no borders, no barriers.`,
    },
  ];


  const featuresContentblockchain = [
    {
      bgColor: "#F7EDFF",
      icon: "166",
      title: "Opportunities & Consulting",
      descriptions:
        "Blockchain consulting unlocks business potential; we validate projects, conduct extensive research, and analyze relevant blockchain platforms.",
      link: "#",
      dealyAnimation: "",
    },
    {
      bgColor: "#D8FFF1",
      icon: "167",
      title: "Prototype & Use Case",
      descriptions:
        "We develop intuitive user experiences based on real-world blockchain use cases, including user flows, technical specifications, and system architecture.",
      link: "#",
      dealyAnimation: "100",
    },
    {
      bgColor: "#E6FBFF",
      icon: "168",
      title: "Blockchain Development",
      descriptions:
        "From concept to deployment, we create scalable, enterprise-grade decentralized applications that shorten time to market and increase ROI.",
      link: "#",
      dealyAnimation: "",
    },
    {
      bgColor: "#FFEBDB",
      icon: "169",
      title: "Deployment",
      descriptions:
        "Along with pre-launch testing of smart contracts and dApps, we manage full-stack deployment, with front/backend configuration, node validation, and blockchain network setup.",
      link: "#",
      dealyAnimation: "100",
    },
    {
      bgColor: "#FFEBDB",
      icon: "169",
      title: "Maintenance",
      descriptions:
        "Ongoing support covering system upgrades, releases, and issue resolution to ensure smooth, uninterrupted operations.",
      link: "#",
      dealyAnimation: "100",
    },
    {
      bgColor: "#FFEBDB",
      icon: "169",
      title: "Migration & Smart Contract Updates",
      descriptions:
        " We provide seamless protocol migration and smart contract updates to ensure system continuity and zero downtime.",
      link: "#",
      dealyAnimation: "100",
    },

  ];

  return (
    <div>
      <HeroBannerTwelve />
      <div className="counter-style-three lg-container mt-130">
        <div className="container">
          <div className="bottom-border">
            <CounterSix />
          </div>
        </div>
      </div>
      <div
        className="fancy-feature-seventeen lg-container pt-150 md-pt-90"
        id="feature"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="title-style-thirteen text-center mb-130 md-mb-90">
                <div className="upper-title">Features</div>
                <h2>
                  {" "}
                  Trailblazing Services Powering Your
                  <span>
                    {" "}Blockchain Journey
                    <img
                      src="images/shape/line-shape-14.svg"
                      alt="line shape"
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-border pb-50">
            <div className="row">
              <FancyFeatureSeventeen FeaturesContent={FeaturesContent} />
            </div>
          </div>
        </div>

        {/* =============================================
            Fancy Feature Twenty Nine
        ==============================================  */}
        <div
          className="fancy-feature-twentyNine lg-container pt-150 mt-20 md-pt-70"
          id="p-tour"
        >
          <FancyTextBlock29 featureList={featureList} />
        </div>
        {/* =============================================
            Fancy Feature Thirty
        ==============================================  */}
        <div className="fancy-feature-thirty mt-180 md-mt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-9 m-auto">
                <div className="title-style-thirteen text-center mb-80 md-mb-60">
                  <div className="upper-title">Others Features</div>
                  <h2>
                    {" "}
                    Development
                    <span>
                      {" "}Process{" "}
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
              <FancyFeatureThirtyTwo featuresContent={featuresContentblockchain} />
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
        {/* <!-- /.fancy-feature-thirty --> */}
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
    </div>
  )
}

export default BlockchainDevelopment