import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const PricingContent = [
  {
    icon: "85",
    packName: "Game Creation",
    features: [
      "We provide versatile experiences on platforms by creating transparent in-game economies, play-to-earn models, and virtual worlds for digital asset ownership with stunning visuals."
    ],
    price: "59.99",
    trialText: "up to 10 user + 1.99 per user",
    activeClass: "active ",
    background: "gameclass1",
    paddingLeft: "10px",
  },
  {
    icon: "86",
    icon2: "159",
    packName: "Blockchain",
    features: [
      "Raiden has expertise in the development of decentralized applications with blockchain technology. Enabling trust with safe, clear, and verified data transactions over a global network.",
    ],
    price: "29.99",
    trialText: "up to 7 user + 1.99 per user",
    activeClass: "active",
    background: "gameclass2",
    paddingLeft: "0",
  },
];

const PricingFive = () => {
  return (
    <div className="row d-flex align-items-start justify-content-center ">
      {PricingContent.map((val, i) => (
        <div style={{ padding: "0" }} className="col-md-6 " key={i}>
          {/* <Tilt> */}
            <div style={{marginRight: val.paddingLeft }} className={`pr-table-wrapper ${val.activeClass} ${val.background}`}>
            
              <div className="pack-name font-raleway fw-bold"  style={{ color: val.background === "gameclass1" ? "black" : "white" }}>{val.packName}</div>
              <ul className="pr-featu">
                {val.features.map((list, i) => (
                  <p  style={{ color: val.background === "gameclass1" ? "black" : "white" }} key={i}>{list}</p>
                ))}
              </ul>
         
            </div>
         
        </div>
      ))}
      <a
        href="#"
        className="theme-btn-nine w-auto mt-3"
        
      >
        Hire Developer
      </a>
    </div>
  );
};

export default PricingFive;
