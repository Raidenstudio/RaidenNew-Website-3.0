import React from "react";


const FancyFeatureTewentyEight = ({featuresContent,color}) => {
 
  return (
    <div className={`row justify-content-between ${color ? 'row justify-content-center d-flex' : ''} `}>
      {featuresContent.map((val, i) => (
        <div 
        style={{width:color ? "24%" :""}}
          className={`col-xl-3 col-md-4 ${color ? `${color} `: ''}`}
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i} >
        
          <div className="block-style-twentyEight text-center ">
            <div className="icon d-flex justify-content-center align-items-end" >
              <img src={val.icon} style={{width:50}} alt="icon" />
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{width:"100%"}}>
              <h4 style={{width:"70%"}} className="text-white">{val.title}</h4>
            </div>
            
          </div>
          {/* /.block-style-twentyEight */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentyEight;
