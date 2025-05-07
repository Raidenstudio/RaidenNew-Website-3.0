import React from "react";

const featuresContent = [
  {
    colorBasedClass: "color-variatin-one",
    title: "Genesis Phase",
    subTitle: `Initially recording the clients needs, researching the industry and ideal project parameter specification.`,
    shapeOne: "222",
    shapeTwo: "223",
  },
  {
    colorBasedClass: "color-variatin-two",
    title: "Design of UI/UX",
    subTitle: `Modelizing the surface and inner workings of the project with UI/UX's perfect pitch UI/UX's perfect pitch. `,
    shapeOne: "224",
    shapeTwo: "225",
  },
  {
    colorBasedClass: "color-variatin-two",
    title: "Prototype",
    subTitle: `Enhancing the pre-original version with the unique touch and consulting feedback to guarantee a flawless featured project.`,
    shapeOne: "224",
    shapeTwo: "225",
  },
  {
    colorBasedClass: "color-variatin-one",
    title: "Develop Ecosystem",
    subTitle: `Creating complete developed trading with integrating NFTs, token systems, engaging 3D to facilitate effective user trading. `,
    shapeOne: "222",
    shapeTwo: "223",
  },
  {
    colorBasedClass: "color-variatin-one",
    title: "Development",
    subTitle: `Bringing the metaverse to life with code and programming, directly accomplishing your objectives.`,
    shapeOne: "222",
    shapeTwo: "223",
  },
  {
    colorBasedClass: "color-variatin-two",
    title: "Testing and Deployment",
    subTitle: `We test the safety, performance, and functionality of the metaverse project on your chosen platforms.`,
    shapeOne: "224",
    shapeTwo: "225",
  },
];

const FancyFeatureTewentySix = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div className="col-md-6" data-aos="fade-right" key={i}>
          <div
            className={`block-style-twentySix text-center mb-40 ${val.colorBasedClass}`}
          >
            <h6>{val.title}</h6>
            <h4>{val.subTitle}</h4>
           
            <img
              src={`images/shape/${val.shapeOne}.jpg`}
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src={`images/shape/${val.shapeTwo}.jpg`}
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* .block-style-twentySix */}
        </div>
        // End .col
      ))}
    </div>
  );
};

export default FancyFeatureTewentySix;
