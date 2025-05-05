import React from "react";
import { Link } from "react-router-dom";
import Design from "../../assets/images/assets/Blockchain architecture.svg";
import Tokenization from "../../assets/images/assets/Asset tokenization.svg";
import Offchain from "../../assets/images/assets/Off-chain solution.svg";
import Protocol from "../../assets/images/assets/Protocol implementation.svg";
import Gameplay from "../../assets/images/assets/decentralized (1).svg";
import Implementation from "../../assets/images/assets/interoperability.svg";

const FeatureContent = [
  {
    icon: Design,
    meta: "Blockchain architecture design",
    subTitle: `Secure, immutable smart contracts enable automated, transparent, decentralized applications.`,
    dataDelay: "0",
  },
  {
    icon: Tokenization,
    meta: "Asset tokenization",
    subTitle: `Validates your ownership and transfer abilities for gaming assets, NFTs, and fungible tokens.`,
    dataDelay: "100",
  },
  {
    icon: Protocol,
    meta: "Protocol implementation",
    subTitle: `Supplying unique protocols to integrate blockchain technology and facilitate game interaction.`,
    dataDelay: "0",
  },
  {
    icon: Gameplay,
    meta: "Decentralized gameplay logic",
    subTitle: `Utilizes blockchain for accurate execution of game rules and assets, promoting player control and security.`,
    dataDelay: "100",
  },
  {
    icon: Offchain,
    meta: "Off-chain solution integration",
    subTitle: `Adds a database to improve stability and growth while preserving safe network communication.`,
    dataDelay: "0",
  },
  {
    icon: Implementation,
    meta: "Interoperability setup",
    subTitle: `Enabling various blockchain networks to work together by allowing assets and data to flow across platforms.`,
    dataDelay: "100",
  },
];

const FeatureSixV2 = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <Link  className="block-style-five">
            <div className="icon">
              <img src={val.icon} alt="icon" />
            </div>
            <h6 className="title">
              <span>{val.meta}</span>
            </h6>
            <p>{val.subTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureSixV2;
