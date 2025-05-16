import React from "react";

const featuresContent = [
  {
    bgColor: "#F7EDFF",
    icon: "166",
    title: "Opportunities & Consulting",
    descriptions:
      "Blockchain consulting unlocks business potential; we validate projects, conduct extensive research, and analyze relevant blockchain platforms.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#D8FFF1",
    icon: "167",
    title: "Prototype & Use Case",
    descriptions:
      "We develop intuitive user experiences based on real-world blockchain use cases, including user flows, technical specifications, and system architecture.",
    link: "#",
    dealyAnimation: "100",
  },
  {
    bgColor: "#E6FBFF",
    icon: "168",
    title: "Blockchain Development",
    descriptions:
      "From concept to deployment, we create scalable, enterprise-grade decentralized applications that shorten time to market and increase ROI.",
    link: "#",
    dealyAnimation: "",
  },
  {
    bgColor: "#FFEBDB",
    icon: "169",
    title: "Deployment",
    descriptions:
      "Along with pre-launch testing of smart contracts and dApps, we manage full-stack deployment, with front/backend configuration, node validation, and blockchain network setup.",
    link: "#",
    dealyAnimation: "100",
  },
  {
    bgColor: "#FFEBDB",
    icon: "169",
    title: "Maintenance",
    descriptions:
      "Ongoing support covering system upgrades, releases, and issue resolution to ensure smooth, uninterrupted operations.",
    link: "#",
    dealyAnimation: "100",
  },
  {
    bgColor: "#FFEBDB",
    icon: "169",
    title: "Migration & Smart Contract Updates",
    descriptions:
      " We provide seamless protocol migration and smart contract updates to ensure system continuity and zero downtime.",
    link: "#",
    dealyAnimation: "100",
  },
  
];

const FancyFeatureThirtyTwo = () => {
  return (
    <div className="row">
      {featuresContent.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex bg-white " style={{maxHeight:"230px"}}>
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: item.bgColor }}
            >
              <img src={`images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyTwo;
