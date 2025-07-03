import React from "react";
import GameLogic from "../../assets/images/assets/Smart Contract Game Logic.svg";
import Framework from "../../assets/images/assets/Cross-Platform Asset.svg";
import Tech from "../../assets/images/assets/hugeicons_blockchain-02.svg";

const featuresContent = [
  {
    icon: Framework,
    title: "Smart Contract Game Logic",
    desc: `On-chain gameplay via smart contracts for transparent, tamper-proof gaming.`,
    delayAnimation: "",
  },
  {
    icon: GameLogic,
    title: "Cross-Platform Framework",
    desc: `Our setup boosts asset mobility and player value in blockchain games.`,
    delayAnimation: "100",
  },
  {
    icon: Tech,
    title: "Blockchain secured",
    desc: `Making gaming adventure accessible and secure with blockchain technology.`,
    delayAnimation: "200",
  },
];

const FancyFeatureThirtyThree = () => {
  return (
    <div className="row text-center pb-100">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-thirtyThree pe-lg-5 mt-40 bg-white shadow-lg  p-4 rounded-2">
            {val.icon && (
              <div className="icon">
                <img src={val.icon} alt="icon" />
              </div>
            )}
            <h3 className="title text-center">
              <span>{val.title}</span>
            </h3>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyThree;
