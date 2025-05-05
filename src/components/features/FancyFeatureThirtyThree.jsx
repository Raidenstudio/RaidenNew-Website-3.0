import React from "react";
import GameLogic from "../../assets/images/assets/Smart Contract Game Logic.svg";
import Framework from "../../assets/images/assets/Cross-Platform Asset.svg";

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
    icon: null, // fallback for no image
    title: "Fast Support",
    desc: `Elit esse cillum dolore eu fugiat nulla pariatur lorem elit`,
    delayAnimation: "200",
  },
];

const FancyFeatureThirtyThree = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-thirtyThree pe-lg-5 mt-40">
            {val.icon && (
              <div className="icon">
                <img src={val.icon} alt="icon" />
              </div>
            )}
            <h3 className="title">
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
