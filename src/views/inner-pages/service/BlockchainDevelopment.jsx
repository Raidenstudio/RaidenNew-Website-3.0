import React from 'react'
import HeroBannerTwelve from '../../../components/hero-banner/HeroBannerTwelve'
import CounterSix from '../../../components/counter/CounterSix'
import FancyFeatureSeven from '../../../components/features/FancyFeatureSeven'
import FancyFeatureSeventeen from '../../../components/features/FancyFeatureSeventeen'
import FancyTextBlock29 from '../../../components/fancy-text-block/FancyTextBlock29'
import FancyFeatureThirtyTwo from '../../../components/features/FancyFeatureThirtyTwo'

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

  return (
    <div>
        <HeroBannerTwelve/>
        <div className="counter-style-three lg-container mt-130">
            <div className="container">
            <div className="bottom-border">
                <CounterSix/>
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
            <FancyFeatureThirtyTwo />
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

      
      </div>
    </div>
  )
}

export default BlockchainDevelopment