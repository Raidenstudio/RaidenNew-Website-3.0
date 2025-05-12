import React from "react";

const featuresContent = [
  {
    icon: "144",
    title: "Expert NFT Consulting",
    desc: "An expert-led process will help you launch your blockchain project with confidence and clarity.",
    delayAnimation: "",
  },
  {
    icon: "145",
    title: "Scalable NFT Solutions",
    desc: "Secure smart contracts and end-to-end NFT solutions for any kind of business.",
    delayAnimation: "100",
  },
  {
    icon: "146",
    title: "Custom NFT Development",
    desc: "Power your firm with custom NFTs via DNFT, from art to marketplaces and lending platforms.",
    delayAnimation: "200",
  }
];


const FancyFeatureTewentySeven = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentySeven">
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentySeven */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentySeven;
