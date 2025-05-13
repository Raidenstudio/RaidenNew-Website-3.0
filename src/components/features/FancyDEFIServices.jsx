import React from "react";
import HTML from "../../assets/images/assets/html.png";
import CSS from "../../assets/images/assets/CSS.png";
import Monogo from "../../assets/images/assets/MongoDB.png";
import Node from "../../assets/images/assets/nodejs.png";
import WEB from "../../assets/images/assets/websocket 1.png";
import Rust from "../../assets/images/assets/Rust.png";
import Reactw from "../../assets/images/assets/React.png";
import Solidity from "../../assets/images/assets/Solidity.png";
import Webb from "../../assets/images/assets/Web3.png";


const featureContent = [

  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: HTML,
    title: "Highly Protected",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: CSS,
    title: "Interoperability"    ,
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: Reactw,
    title: "100% Transparent",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: Reactw,
    title: "Automation",
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: Webb,
    title: "Easily Accessible",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    icon: WEB,
    title: "Anonymous Transactions",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: Rust,
    title: "Unhidden Protocols",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: Solidity,
    title: "Smart Contract Implementation",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: Node,
    title: "Multilevel SSL security",
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: Monogo,
    title: "End-to-end encryption",
  },
 
];

const FancyDEFIServices = () => {
  return (
    <div className="row">
      {featureContent.map((val, i) => (
        <div
          className="col-lg-6"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div
            className="block-style-nineteen"
            style={{ borderLeftColor: val.colorOfBorder }}
          >
            <div className="d-flex align-items-center">
              <img
                src={val.icon}
                alt="icon"
                style={{ width: "50px", height: "50px", objectFit: "contain", marginRight: "15px" }}
              />
              <div className="text">
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            </div>
          </div>
          {/* /.block-style-nineteen */}
        </div>
      ))}

      {/* End .col */}
    </div>
  );
};

export default FancyDEFIServices;
