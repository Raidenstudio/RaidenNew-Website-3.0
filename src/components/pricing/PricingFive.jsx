import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const PricingContent = [
  {
    icon: "85",
    packName: "Game Development",
    features: [
      "Building virtual realms enabling digital asset ownership, play-to-earn models that empower players, and transparent in-game economies. We provide innovative and versatile experiences on platforms, from idea to stunning visuals."
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
      "Our core expertise lies in the development of decentralized applications utilizing blockchain technology. It's a key technology that enables safe, transparent, and verifiable data sharing and transactions over a global network, radically changing the way we establish trust in the digital age.",
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
