import React from "react";
import Blockchain from "../../assets/images/icon/2025.svg";
import NFT from "../../assets/images/icon/2024.svg";
import AI from "../../assets/images/icon/2023.svg";

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
];

const FeatureFour = () => {
  return (
    <div className="text-center">
      <div className="row justify-content-center">
        {FeatureContent.map((val, i) => (
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

      {/* Read More Button */}
     {/* Read More Button */}
<div className="mt-5 d-flex justify-content-center">
  <button
    style={{
      width: "286px",
      height: "60px",
      backgroundColor: "#FFB840",
      borderRadius: "10px",
      border: "none",
      color: "#fff", // White text
      fontWeight: "600",
      fontSize: "18px",
    }}
  >
    View More
  </button>
</div>

    </div>
  );
};

export default FeatureFour;
