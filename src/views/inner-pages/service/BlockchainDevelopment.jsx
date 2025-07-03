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
       <div className="fancy-feature-twentyTwo   " id="product ">
        <div className="  bg-black pb-5 pt-60">
          <div className="title-style-ten hero-banner-below container org-div  ">
            <div className="row align-items-start">
              <div className="col-lg-7 ">
                <h2
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                 Organizational Excellence with Blockchain Security
                </h2>
              </div>
              <div className="col-lg-5">
                <p
                  style={{ color: "white" }}
                  className="md-pt-20 mb-4 mt-3 font-raleway"
                >
                  Our blockchain is built by mission-driven developers solving real-world problems through digital innovation. Whether you're a business, creator, or privacy enthusiast, our platform delivers secure digital ownership and direct global connections.

                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-style-three lg-container  ">
        <div className=" bg-black">
          <div className=" container bottom-border">
            <CounterSix />
          </div>
        </div>
      </div>
      <div
        className="fancy-feature-seventeen  lg-container  "
        id="feature"
      >
     

        {/* =============================================
            Fancy Feature Twenty Nine
        ==============================================  */}
        <div
          className="fancy-feature-twentyNine lg-container "
          id="p-tour"
        >
          <FancyTextBlock29 featureList={featureList} />
        </div>
        {/* =============================================
            Fancy Feature Thirty
        ==============================================  */}
        <div className="fancy-feature-thirty mt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-9 m-auto">
                <div className="title-style-thirteen text-center mb-60">
                  {/* <div className="upper-title">Others Features</div> */}
                  <h2>Our
                    {" "}
                    Development
                    <span>
                      {" "}Process{" "}
                      {/* <img
                        src="images/shape/line-shape-14.svg"
                        alt="line shape"
                      /> */}
                    </span>

                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="container">
              <FancyFeatureThirtyTwo featuresContent={featuresContentblockchain} />
            </div>
            
          </div>
          {/* <!-- /.wrapper --> */}
        </div>
        {/* <!-- /.fancy-feature-thirty --> */}
        <div className="fancy-short-banner-three mt-100 md-mt-100">
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