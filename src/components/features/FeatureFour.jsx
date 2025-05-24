import React, { useState } from "react";
import Blockchain from "../../assets/images/icon/2025.svg";
import NFT from "../../assets/images/icon/2024.svg";
import AI from "../../assets/images/icon/2023.svg";

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
    subTitle: `Smart contracts and decentralized value transmission turn digital assets into valuable properties.`,
    dataDelay: "300",
  },
  {
    icon: NFT,
    meta: "GameFi",
    subTitle: `Play-to-earn mechanisms that engage users and reward time spent.`,
    dataDelay: "400",
  },
  {
    icon: AI,
    meta: "Metaverse",
    subTitle: `Immersive environments for next-gen social and gaming experiences.`,
    dataDelay: "500",
  },
  {
    icon: Blockchain,
    meta: "Web3 Integration",
    subTitle: `Empowering user ownership and interoperability across platforms.`,
    dataDelay: "600",
  },
  {
    icon: NFT,
    meta: "GameFi",
    subTitle: `Play-to-earn mechanisms that engage users and reward time spent.`,
    dataDelay: "400",
  },
  {
    icon: AI,
    meta: "Metaverse",
    subTitle: `Immersive environments for next-gen social and gaming experiences.`,
    dataDelay: "500",
  },
  {
    icon: Blockchain,
    meta: "Web3 Integration",
    subTitle: `Empowering user ownership and interoperability across platforms.`,
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
            className="col-lg-4 col-md-6"
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.dataDelay}
          >
            <div className="block-style-five">
              <div className="icon">
                <img src={val.icon} alt="icon" />
              </div>
              <h6 className="title">
                <span>{val.meta}</span>
              </h6>
              <p>{val.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-5 d-flex justify-content-center">
        <button
          style={{
            width: "286px",
            height: "60px",
            backgroundColor: "#FFB840",
            borderRadius: "10px",
            border: "none",
            color: "#fff",
            fontWeight: "600",
            fontSize: "18px",
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default FeatureFour;
