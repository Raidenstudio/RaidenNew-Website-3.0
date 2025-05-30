import React from "react";

// const FeatureContent = [
//   {
//     icon: "84",
//     title: "Planning",
//     subTitle: "Strategically mapping all critical elements — from design and development to execution — before project initiation to ensure a seamless launch.",
//     hoverText: "Strategically mapping all critical elements — from design and development to execution — before project initiation to ensure a seamless launch.",
//   },
//   {
//     icon: "84",
//     title: "Wireframing",
//     subTitle: "Creating a strong project plan and framework that incorporates market integration, token minting, blockchain, and other elements.",
//     hoverText: "Creating a strong project plan and framework that incorporates market integration, token minting, blockchain, and other elements.",
//   },
//   {
//     icon: "84",
//     title: "UI/UX",
//     subTitle: "An approach that highlights user-centric interaction, usability, and aesthetic design as the three main pillars of successful NFT platform development.",
//     hoverText: "An approach that highlights user-centric interaction, usability, and aesthetic design as the three main pillars of successful NFT platform development.",
//   },
//   {
//     icon: "84",
//     title: "Development",
//     subTitle: "By building on core essentials, we streamline NFT development and empower projects to realize measurable success.",
//     hoverText: "By building on core essentials, we streamline NFT development and empower projects to realize measurable success.",
//   },
//   {
//     icon: "84",
//     title: "Product Integrity",
//     subTitle: "Executing rigorous quality analysis and comprehensive testing to deliver a bug-free NFT application with zero coding errors.",
//     hoverText: "Executing rigorous quality analysis and comprehensive testing to deliver a bug-free NFT application with zero coding errors.",
//   },
//   {
//     icon: "84",
//     title: "Setting Up for Launch",
//     subTitle: "We ensure the launch of your NFT project on all significant platforms, establishing a connection with users and opening up revenue streams.",
//     hoverText: "We ensure the launch of your NFT project on all significant platforms, establishing a connection with users and opening up revenue streams.",
//   }
// ];

const FancyFeatureTwelve = ({ FeatureContent, fontColor }) => {
  return (
    <div className="row justify-content-center pt-50 md-pt-20">
      {FeatureContent.map((val, i) => (
        <div className="col-lg-6 col-md-6" key={i}>
          <div className="block-style-seventeen mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={`${val.icon}`} alt="icon" />
            </div>
            <div className="static-text">
              <h3
                className={`font-raleway ${
                  fontColor ? fontColor : "text-white"
                }`}
              >
                {val.title}
              </h3>
              {val.subTitle ? (
                <p
                  className={fontColor ? fontColor : "text-white"}
                  style={{ opacity: 0.7 }}
                >
                  {val.subTitle}
                </p>
              ) : (
                <>
                  <li >{val.li}</li>
                  <li >{val.li2}</li>
                  <li >{val.li3}</li>
                  <li >{val.li4}</li>
                </>
              )}
            </div>
            {
              val.subTitle ?
              <div className="hover-text">  {val.subTitle}
          </div> :
            <div className="hover-text">   <li >{val.li}</li>
                  <li >{val.li2}</li>
                  <li >{val.li3}</li>
                  <li >{val.li4}</li>
                  
                  </div>
        }
          </div>
          {/* /.block-style-seventeen */}
        </div>
      ))}
    </div>
    //   End .row
  );
};

export default FancyFeatureTwelve;
