import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const PricingContent = [
  {
    icon: "85",
    packName: "Game Development",
    features: [
      "Enter the next era of gaming with our expertise in game development. Our legitimate digital worlds allow for transparent in-game economies, play-to-earn models that empower players, and true digital asset ownership (NFTs). From conception to stunning visuals, Raiden offers creative, secure, and expandable experiences across various platforms."
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
    <div className="row align-items-start">
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
              <div className="pack-name">{val.packName}</div>
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
    </div>
  );
};

export default PricingFive;
