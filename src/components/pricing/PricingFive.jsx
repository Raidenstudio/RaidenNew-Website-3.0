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
    background: "#ff2759",
    paddingLeft: "10px",
  },
  {
    icon: "86",
    icon2: "159",
    packName: "BlockChain",
    features: [
      "Raiden has expertise in the development of decentralized applications with blockchain technology. Enabling trust with safe, clear, and verified data transactions over a global network.",
    ],
    price: "29.99",
    trialText: "up to 7 user + 1.99 per user",
    activeClass: "active",
    background: "black",
    paddingLeft: "0",
  },
];

const PricingFive = () => {
  return (
    <div className="row d-flex align-items-start justify-content-center">
      {PricingContent.map((val, i) => (
        <div style={{ padding: "0" }} className="col-md-6" key={i}>
          <Tilt>
            <div style={{ backgroundColor: val.background, marginRight: val.paddingLeft }} className={`pr-table-wrapper ${val.activeClass}`}>
              {/* <img
                src={`images/icon/${val.icon}.svg`}
                alt="icon"
                className="icon"
              /> */}
              {/* <img
                src={`images/shape/${val.icon2}.svg`}
                className="popular-badge"
                alt="shape"
              /> */}
              <div className="pack-name font-raleway fw-bold">{val.packName}</div>
              <ul className="pr-feature">
                {val.features.map((list, i) => (
                  <p key={i}>{list}</p>
                ))}
              </ul>
              {/* <Link
                to="/signup"
                className="trial-button hover-reverse-gr-bg-one gr-bg-one"
              >
                {" "}
                Sign up
              </Link> */}
            </div>
            {/* /.pr-table-wrapper */}
          </Tilt>
        </div>
      ))}
      <a
        href="#"
        className="theme-btn-nine w-auto mt-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hire Developer
      </a>
    </div>
  );
};

export default PricingFive;
