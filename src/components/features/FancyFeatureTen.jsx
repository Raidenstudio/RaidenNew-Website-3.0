import React from "react";
import { Link } from "react-router-dom";

const FeaturesContent = [
  {
    bgColor: "#FFEBDB",
    icon: "68",
    title: "Metaverse Application Development",
    desc: `With AR, VR, blockchain, creating, user engagement, security, and API integration. 
`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: "67",
    title: "Metaverse 3D Space Development",
    desc: `Dynamic 3D design and deploy AI avatars for personalized identity experiences.`,
    dataDealy: "100",
  },
  {
    bgColor: "#F7EDFF",
    icon: "70",
    title: "Metaverse Game Development",
    desc: `Conquering the whole world of innovation and thrilling lively experiences.`,
    dataDealy: "200",
  },
  {
    bgColor: "#FFEBDB",
    icon: "68",
    title: "Metaverse Application Development",
    desc: `With AR, VR, blockchain, creating, user engagement, security, and API integration. 
`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: "67",
    title: "Metaverse Real Estate Development",
    desc: `Build your digital space with blockchain before building your physical space.`,
    dataDealy: "100",
  },
  {
    bgColor: "#F7EDFF",
    icon: "70",
    title: "Metaverse social media app development",
    desc: `Creating decentralised social existence with intensifying XR and AI. `,
    dataDealy: "200",
  },
];

const FancyFeatureTen = () => {
  return (
    <div className="row justify-content-center mt-35 md-mt-20">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDealy}
          key={i}
        >
          <div className="block-style-fifteen mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTen;
