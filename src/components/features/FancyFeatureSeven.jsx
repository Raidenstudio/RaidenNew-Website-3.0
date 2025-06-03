import React from "react";

const FeatureContent = [
  {
    icon: "35",
    meta: "Expertise",
    subTitle: ` Our years of practical experience range from blockchain logic to game mechanics. We Raiden, understand the work and tailor it to your specific requirements.`,
    dataDelay: "0",
  },
  {
    icon: "36",
    meta: "Innovation",
    subTitle: `Innovation is Raiden’s core. Our ability to predict trends, embrace change, and transform ideas into ground-breaking, scalable solutions.`,
    dataDelay: "100",
  },
  {
    icon: "37",
    meta: "Collaboration",
    subTitle: `Teamwork and trust are the foundations of great results. We thoroughly examine your objectives, pay close attention, and collaborate on each stage for a complete solution.,`,
    dataDelay: "300",
  },
];

const FancyFeatureSeven = () => {
  return (
    <>
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-seven">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="feature-info">
              <span>{val.meta}</span>
            </div>
            <p className="font-gordita fs-5">{val.subTitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FancyFeatureSeven;
