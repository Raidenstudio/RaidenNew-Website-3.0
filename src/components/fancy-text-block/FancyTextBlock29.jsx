import React from "react";
import FancyFeatureTewentyEight from "../features/FancyFeatureTewentyEight";
import FancyFeatureThirtyOne from "../features/FancyFeatureThirtyOne";
import icon149 from '../../assets/images/icon/149.png';
import icon150 from '../../assets/images/icon/150.svg.png';
import icon151 from '../../assets/images/icon/151.svg.png';
import icon152 from '../../assets/images/icon/152.svg.png';
import FancyFeatureSeventeen from "../features/FancyFeatureSeventeen";


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
  
  const FeaturesContent = [
    {
      img: "94",
      title: "Web3",
      desc: `Enhance your business level with blockchain-powered techniques that provide digital ownership of your entire data.`,
    },
    {
      img: "95",
      title: "Public Blockchain",
      desc: 'We enable your business to thrive in the decentralized era by providing a secure, immutable digital ledger that serves as a backbone for innovative Web3.',
    },
    {
      img: "96",
      title: "Private blockchain",
      desc: 'We provide the critical governance and privacy for sensitive business operations while delivering the core benefits of distributed ledger technology.'
    },
    {
      img: "97",
      title: "Cryptocurrency",
      desc: 'Integrating crypto is a strategic move to broaden your market reach, improve efficiency, and connect with a diverse customer base. Raiden makes it possible.'
    },
    {
      img: "98",
      title: "DEX",
      desc:'Raiden specializes in developing and incorporating DEX solutions. Empowering decentralized finance by offering unparalleled control, transparency, and security '
    },
    {
      img: "99",
      title: "Crypto wallet",
      desc: `A crypto wallet is more than a place to hold funds; it's your personal portal for digital ownership and interaction. Businesses can securely manage their digital assets.`
    },
    {
      img: "95",
      title: "NFT Marketplace",
      desc: `Enabling businesses and creators to explore revenue streams and build communities in the digital ownership economy, leading the way in innovation for unique digital assets.`
    },
    {
      img: "96",
      title: "Smart Contract",
      desc: `Incorporate smart contracts directly into your operations. We embed these self-executing, secure agreements, transparency, and trust into your digital process`,
    },
    {
      img: "97",
      title: "DAPP",
      desc: `We provide skilled services for creating and integrating DApps that provide incredible security, transparency, and user accessibility to your digital platform.`
    },
  ];
  return (
      <div className="bg-light">
   

   <div className=" bg-white pt-100">
          <div className='container'>
            
          <div className=" row ">
            <div className="col-lg-10 m-auto">
              <div className="title-style-thirteen text-center mb-100">
                
                <h2 className=' text-center'>
                  {" "}
                  Trailblazing  Your
                  <span>
                    {" "}Blockchain Journey
                    {/* <img
                      src="images/shape/line-shape-14.svg"
                      alt="line shape"
                      /> */}
                  </span>
                </h2>
              </div>
            </div>
          </div>
                      </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className=" bg-white ">
          <div className='container'>

          <div className="bottom-border pb-100">
            <div className="row ">
              <FancyFeatureSeventeen FeaturesContent={FeaturesContent} />
            </div>
          </div>
          </div>
        </div>








      {/* <!-- /.block-style-thirty --> */}
    
<div className="bg-black">

      <div className="mt-80 py-5 bottom-border container ">
        <FancyFeatureTewentyEight  featuresContent={featuresContent}/>
      </div>
</div>

  </div>
  );
};

export default FancyTextBlock29;
