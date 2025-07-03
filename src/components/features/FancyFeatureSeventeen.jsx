import React from "react";


const FancyFeatureSeventeen = ({FeaturesContent}) => {

  console.log(FeaturesContent);
  

  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6  py-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta  shadow-lg rounded-1" >
            <div className="icon d-flex align-items-end" >
              <img src={`images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h4 className="">{val.title}</h4>
            <p className="">{val.desc}</p>
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeatureSeventeen;
