import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../../assets/images/assets/Frame 16.svg";
import Frame2 from "../../assets/images/assets/Frame 17.svg";
import Frame3 from "../../assets/images/assets/Frame 18.svg";
import Frame4 from "../../assets/images/assets/Frame 19.svg";
import Frame5 from "../../assets/images/assets/Frame 20.svg";
import Frame6 from "../../assets/images/assets/Frame 21.svg";

const featuresContent = [
  {
    icon: Frame2,
    title: "Strategic Conception",
    descriptions:
      "Turning your ideas into actionable strategies through research and innovation, guiding you from concept to execution.",
    dealyAnimation: "",  
  },
  {
    icon: Frame3,
    title: "Smart Contract Development",
    descriptions:
      "Next-gen decentralized applications use robust, smart contracts for control and transparency and harness blockchain confidently",
    dealyAnimation: "100",
  },
  {
    icon: Frame1,
    title: "NFT Networking",
    descriptions:
      "Enabling real asset ownership, linking across platforms, secure asset trading, and player-driven cultures within tactile gaming worlds.",
    dealyAnimation: "",
  },
  {
    icon: Frame4,
    title: "Blockchain Integration",
    descriptions:
      "Offering unique governance, ownership, security, and upfront mechanics for gaming assets in a decentralized setting.",
    dealyAnimation: "100",
  },
  {
    icon: Frame6,
    title: "Multiplayer Functionality",
    descriptions:
      "Our multiplayer functionality elevates gameplay through interaction, teamwork, and competitive engagement, fostering community growth.",
    dealyAnimation: "100",
  },
  {
    icon: Frame5,
    title: "Deployment and Maintenance",
    descriptions:
      "Setting up blockchain game deployment includes smart contract integration, server setup, and wallet support, with bug fixes and transaction monitoring.",
    dealyAnimation: "100",
  },
];

const FancyFeatureThirtyFour = () => {
  return (
    <div className="row">
      {featuresContent.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex ">
            <div
              className="icon d-flex align-items-center justify-content-center "
              // style={{ background: item.bgColor }}
            >
              <img src={item.icon} alt="icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
              {/* <Link to="/service-details" className="tran3s">
                <img src="images/icon/182.svg" alt="icon" />
              </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyFour;
