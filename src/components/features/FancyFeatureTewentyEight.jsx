import React from "react";

const featuresContent = [
  {
    icon: "149",
    title: "360° Blockchain Integration",
    
    delayAnimation: "",
  },
  {
    icon: "150",
    title: "Flexible Architecture",
    
    delayAnimation: "100",
  },
  {
    icon: "151",
    title: "Agile and Lean Projects",
    
    delayAnimation: "200",
  },
  {
    icon: "151",
    title: "Research and Excellence",
    
    delayAnimation: "200",
  },
];

const FancyFeatureTewentyEight = () => {
  return (
    <div className="row justify-content-between">
      {featuresContent.map((val, i) => (
        <div
          className="col-xl-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentyEight text-center   mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{width:"100%"}}>
              <h4 style={{width:"70%"}}>{val.title}</h4>
            </div>
            
          </div>
          {/* /.block-style-twentyEight */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentyEight;
