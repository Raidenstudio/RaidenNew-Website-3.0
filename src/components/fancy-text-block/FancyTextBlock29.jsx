import React from "react";
import FancyFeatureTewentyEight from "../features/FancyFeatureTewentyEight";
import FancyFeatureThirtyOne from "../features/FancyFeatureThirtyOne";
import icon149 from '../../assets/images/icon/149.png';
import icon150 from '../../assets/images/icon/150.svg.png';
import icon151 from '../../assets/images/icon/151.svg.png';
import icon152 from '../../assets/images/icon/152.svg.png';


const FancyTextBlock29 = ({featureList}) => {
   const featuresContent = [
    {
      icon: icon149,
      title: "360° Blockchain Integration",
      
      delayAnimation: "",
    },
    {
      icon: icon150,
      title: "Flexible Architecture",
      
      delayAnimation: "100",
    },
    {
      icon: icon151,
      title: "Agile and Lean Projects",
      
      delayAnimation: "200",
    },
    {
      icon: icon152,
      title: "Research and Excellence",
      
      delayAnimation: "200",
    },
  ];
  return (
    <div className="container">
      <div className="block-style-thirty bottom-border pb-80 mb-170 md-pb-40 md-mb-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="text-block md-pb-60">
              <div className="title-style-nine mb-60 md-mb-40">
                <h2>Broad Growth in Security and Collaboration</h2>
              </div>

              <ul className="feature-list-one">
                {featureList.map((list, i) => (
                  <li key={i}>
                    <img
                      src={`images/icon/${list.icon}.svg`}
                      alt="icon"
                      className="icon"
                    />
                    <strong>{list.title}</strong>
                    <span>{list.description}</span>
                  </li>
                ))}
              </ul>
              {/* End .feature-list-one */}

             
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6">
            <img src="images/assets/screen_35.png" alt="screen" />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="block-style-thirty">
        <div className="row">
          <div className="col-xl-5 col-lg-6 order-lg-last">
            <div className="text-block md-pb-60">
              
              <div className="title-style-nine mb-45 md-mb-30">
                <h2>Why Raiden’s Development Services</h2>
              </div>
              <p>
               Raiden provides secure, tailored blockchain solutions that support your company's objectives.
              </p>
              <ul className="feature-list-two">
                <li>
                  We provide dApps, smart contracts, and private blockchain networks.
                </li>
                <li>
                  We value speed, accuracy, and purposeful development.
                </li>
                <li>End-to-end solutions grounded in transparency, innovation, and trust.</li>
              </ul>
              
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6 order-lg-first">
            <img src="images/assets/screen_36.png" alt="screen" />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="mt-80 pb-100 md-pb-80 bottom-border">
        <FancyFeatureTewentyEight  featuresContent={featuresContent}/>
      </div>

      {/* <div className="block-style-thirty mt-150 md-mt-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="text-block md-pb-60">
              
              <div className="title-style-nine mb-45">
                <h2>Development Process</h2>
              </div>
              <p className="pb-30">
                Feel free to choose from our huge selection of templates,
                customize easily, and create a stunning website for your
                customers
              </p>
              <a href="#" className="theme-btn-thirteen">
                See all Template
              </a>
            </div>
            {/* <!-- /.text-block --> 
          </div>
          <div className="col-xl-7 col-lg-6">
            <img src="images/assets/screen_37.png" alt="screen" />
          </div>
        </div>
       </div> */}
      {/* <!-- /.block-style-thirty --> */}

      {/* <div className="mt-30">
        <FancyFeatureThirtyOne />
      </div> */}
    </div>
  );
};

export default FancyTextBlock29;
