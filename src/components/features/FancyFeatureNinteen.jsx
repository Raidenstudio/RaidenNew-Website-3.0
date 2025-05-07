import React from "react";

const featureContent = [

  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: "113",
    title: "HTML",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: "114",
    title: "CSS",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: "114",
    title: "React",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: "115",
    title: "React Native",
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: "116",
    title: "Weeks",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    icon: "117",
    title: "Websocket",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: "113",
    title: "Rust",
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: "114",
    title: "Solidity",
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: "115",
    title: "Node.js",
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: "116",
    title: "MongoDB",
  },
 
];

const FancyFeatureNinteen = () => {
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
                src={`images/icon/${val.icon}.svg`}
                alt="icon"
                className="icon"
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

export default FancyFeatureNinteen;
