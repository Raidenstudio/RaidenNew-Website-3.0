import React from "react";
import { Link } from "react-router-dom";
import Smart from "../../assets/images/assets/Smart Contract Development.png";
import Dapp from "../../assets/images/assets/DApp Development.png"
import Chain from "../../assets/images/assets/blockchain Integration.png"
import NFT from "../../assets/images/assets/NFT Platforms & Marketplaces.png"
import Contract from "../../assets/images/assets/Custom Tokenomics Design.png"

const FeaturesContent = [
  {
    bgColor: "#BCFFCB",
    icon: Smart,
    title: "Smart Contract Development",
    desc: `Designing and implementing token economies that are aligned with your project's goals and create long-term value for all stakeholders.  
`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: Dapp,
    title: "DApp Development",
    desc: `Intuitive, responsive front-end interfaces that seamlessly integrate with blockchain functionality, making Web3 accessible to all users, regardless of technical proficiency.
`,
    dataDealy: "100",
  },
  {
    bgColor: "#F7EDFF",
    icon: Chain,
    title: "Blockchain Integration",
    desc: `Already have existing systems? 
We will assist you in integrating blockchain technology while minimizing disruption to your current operations and improving safety and security.
`,
    dataDealy: "200",
  },
  {
    bgColor: "#FFEBDB",
    icon: NFT,
    title: "NFT Platforms & Marketplaces",
    desc: `Launch your unique NFT collection or marketplace with customized features that showcase your digital assets exactly as you envision.
`,
    dataDealy: "0",
  },
  {
    bgColor: "#FFB5BC",
    icon: Contract,
    title: "Custom Tokenomics Design",
    desc: `Designing and implementing token economies aligned with your project's goals and create long-term value for all stakeholders.`,
    dataDealy: "100",
  },
 
];

const Webservices = () => {
  return (
    <div className="row justify-content-center mt-35 md-mt-20">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDealy}
          key={i}
        >
          <div className="block-style-fifteen mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <img src={val.icon} alt="icon" />
            </div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default Webservices;
