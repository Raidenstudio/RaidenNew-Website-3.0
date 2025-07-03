import React, { useState } from "react";
import Blockchain from "../../assets/images/icon/2025.svg";
import NFT from "../../assets/images/icon/2024.svg";
import AI from "../../assets/images/icon/2023.svg";
import gamemify from '../../assets/icon-meaningful/Gamefi.svg'
import dapps from '../../assets/icon-meaningful/Dapps.svg'
import metaverse from '../../assets/icon-meaningful/Metaverse.svg'
import web3 from '../../assets/icon-meaningful/Web3-integration.svg'
import vr from '../../assets/icon-meaningful/VR.svg'
import defi from '../../assets/icon-meaningful/Defi.svg'

// Add 6 more items if needed
const FeatureContent = [
  {
    icon: NFT,
    meta: "Blockchain",
    subTitle: `Innovation, ensuring secure, custom software solutions and dynamic solutions across various sectors.`,
    dataDelay: "0",
  },
  {
    icon: AI,
    meta: "AI Development",
    subTitle: `Digital ecosystems that are resilient, supported by cognitive networks, can provide user-friendly experiences.`,
    dataDelay: "100",
  },
  {
    icon: Blockchain,
    meta: "NFT Development",
    subTitle: `NFT token development, which employs smart contracts and decentralized value, converts digital assets into valuable properties.`,
    dataDelay: "300",
  },
  {
    icon: gamemify,
    meta: "GameFi",
    subTitle: `Play-to-earn mechanisms that engage users and reward time spent.`,
    dataDelay: "400",
  },
  {
    icon: metaverse,
    meta: "Metaverse",
    subTitle: `Immersive environments for next-gen social and gaming experiences.`,
    dataDelay: "500",
  },
  {
    icon: web3,
    meta: "Web3 Integration",
    subTitle: `Empowering user ownership and interoperability across platforms.`,
    dataDelay: "600",
  },
  {
    icon: defi,
    meta: "DeFi",
    subTitle: `We build transparent, peer-to-peer, blockchain-based finance that is globally accessible.`,
    dataDelay: "400",
  },
  {
    icon: vr,
    meta: "AR/VR",
    subTitle: `We access VR/AR to engage uniquely and visualize your ideas, bringing them to life exactly as you need `,
    dataDelay: "500",
  },
  {
    icon: Blockchain,
    meta: "Dapps",
    subTitle: `Building ultra-superior DApps for a thriving and secure, decentralized future.`,
    dataDelay: "600",
  },
];

const FeatureFour = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleContent = showAll ? FeatureContent : FeatureContent.slice(0, 3);

  return (
    <div className="text-center">
      <div className="row justify-content-center">
        {visibleContent.map((val, i) => (
          <div
            className="col-lg-4 col-md-6 "
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.dataDelay}
          >
            <div className="block-style-five" style={{backgroundColor:'#F8F8F8'}}>
              <div className="icon">
                <img src={val.icon}  alt="icon" className="text-danger"/>
              </div>
              <h6 className="title ">
                <h3 className="" style={{fontWeight:700}}>{val.meta}</h3>
              </h6>
              <p  className='' style={{fontSize:'18px'}}>{val.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-5 d-flex justify-content-center">
      
        <a href="#" className="theme-btn-nine"  onClick={() => setShowAll(!showAll)}> {showAll ? "View Less" : "View More"} </a>
      </div>
    </div>
  );
};

export default FeatureFour;
