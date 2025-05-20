import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDark from "../../components/header/landing/HeaderLandingDark";
import HeroBannerSix from "../../components/hero-banner/HeroBannerSix";
import DocSlickAsNavTwo from "../../components/block-slider/DocSlickAsNavTwo";
import FancyFeatureTwelve from "../../components/features/FancyFeatureTwelve";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/TestimonialFive";
import PricingFive from "../../components/pricing/PricingFive";
import FooterSix from "../../components/footer/FooterSix";
import Tilt from "react-parallax-tilt";
import Header from "../../components/e-commerce/Header";
import DocEditorTabs from "../../components/block-slider/DocEditorTabs";
import CallToActionThree from "../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";
import FancyFeatureNinteen from "../../components/features/FancyFeatureNinteen";
import DocSlickAsNavThree from "../../components/block-slider/DocSlickAsNavThree";


const ProductLandingDark = () => {
  const featureContent = [

  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    // icon: icon1,
    title: "Game Development",
    description:"We create engaging Unreal Engine games, captivating players from start to finish."
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    // icon: icon2,
    title: "VR & AR",
    description:"Imagine entering the world of your dreams, one that is as realistic and captivating as you can imagine, from concept to interactive reality."
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    // icon: icon3,
    title: "Architectural Visualization",
    description:"Make your blueprints interactive and engaging so you can see every detail before construction ever starts."
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    // icon: icon4,
    title: "Simulation & Training",
    description:"Discover education like never before. Our personalized simulations make training an engaging, practical experience that people remember."
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    // icon: icon5,
    title: "Cinematics & Visual Effects",
    description:"Use Unreal Engine to produce stunning images and mind-blowing effects to bring your story to life."
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    // icon: icon6,
    title: "Custom Unreal Engine Solutions",
    description:"We excel at creating unique Unreal Engine solutions, whether they are tools or specialized applications to address your specific problems."
  },
  
];
  const FeatureContent = [
  {
    icon: "84",
    title: "Live the Vision",
    subTitle: "Enter a world where users can feel the surroundings rather than just see them. We create experiences that stimulate the imagination and senses.",
    hoverText: "Enter a world where users can feel the surroundings rather than just see them. We create experiences that stimulate the imagination and senses.",
  },
  {
    icon: "84",
    title: "Unreal Realism",
    subTitle: "Games created with Unreal Engine offer hyper-realistic visuals, bringing projects to life with cinematic quality and unmatched precision.",
    hoverText: "Games created with Unreal Engine offer hyper-realistic visuals, bringing projects to life with cinematic quality and unmatched precision.",
  },
  {
    icon: "84",
    title: "Enhanced Training ",
    subTitle: "Learning and training become more engaging and understandable with real-time visual interactions.",
    hoverText: "Learning and training become more engaging and understandable with real-time visual interactions.",
  },
  {
    icon: "84",
    title: "Competitive Advantage",
    subTitle: "Make use of Unreal Engine's strength and adaptability to develop innovative solutions that will shape the future.",
    hoverText: "Make use of Unreal Engine's strength and adaptability to develop innovative solutions that will shape the future.",
  },
  {
    icon: "84",
    title: "Scalability and Flexibility",
    subTitle: "The extensible architecture of Unreal Engine enables teams to scale projects and integrate new features while maintaining workflow.",
    hoverText: "The extensible architecture of Unreal Engine enables teams to scale projects and integrate new features while maintaining workflow.",
  },
  {
    icon: "84",
    title: "Future-proof Technology",
    subTitle: "Modern technology and ongoing improvements from Unreal Engine guarantee that your projects remain competitive both now and in the future.",
    hoverText: "Modern technology and ongoing improvements from Unreal Engine guarantee that your projects remain competitive both now and in the future.",
  }
];

const tabList = [
  { iconOne: "105", iconTwo: "105-c" },
  { iconOne: "106", iconTwo: "106-c" },
  { iconOne: "107", iconTwo: "107-c" },
  { iconOne: "108", iconTwo: "108-c" },
  { iconOne: "109", iconTwo: "109-c" },
];

const tabListContent = [
  {
    img: "img_81",
    // innerText: "Track Human faces",
    title: "Conceptualization and Planning",
    description: `Mapping the needs and putting the technical specifications, features, and gaming mechanics into a concrete plan is the first step.`,
  },
  {
    img: "img_92",
    // innerText: "keyframing experience",
    title: "Pre-production",
    description: `We manage the entire asset flow, accurately and efficiently preparing and integrating 3D content directly into the Unreal Game Engine.`,
  },
  {
    img: "img_93",
    // innerText: "Audio track down",
    title: "Level Design",
    description: `The level editor in Unreal creatively creates all of the game's details, including environments, landscapes, and game levels. `,
  },
  {
    img: "img_94",
    // innerText: "Take the color",
    title: "Gameplay Programming",
    description: `We use blueprints or C++ to bring your game's AI behavior, player control, core mechanics, and interactions to life.`,
  },
  {
    img: "img_95",
    // innerText: "Edit videos at up to 4K",
    title: "User testing",
    description: `We collaborate on all technical elements necessary to establish a strong DeFi crowdfunding platform, guaranteeing an effective solution.`,
  },
];
  return (
    <div className="main-page-wrapper font-gordita dark-style lg-container p0">
      <Helmet>
        <title>
          Product Landing Dark || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header/>
      {/* End HeaderLanding */}

      {/*=============================================
			Theme Hero Banner
		  ==============================================  */}
      <div className="hero-banner-six" id="home">
        <div className="illustration-content">
          <img
            src="images/shape/144.svg"
            alt="shape"
            className="main-img ms-auto"
          />
          <img
            src="images/assets/screen_05.png"
            alt="screen"
            className="screen-one"
          />
          <div className="screen-two">
            <img
              src="images/assets/screen_06.png"
              alt="screen"
              className="ms-auto"
            />
          </div>
          <img
            src="images/shape/145.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/146.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/147.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/148.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/149.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <img
            src="images/shape/150.png"
            alt="shape"
            className="shapes shape-six"
          />
        </div>
        {/* End .illustration-content */}

        <div className="container">
          <HeroBannerSix />
        </div>
        {/* End .container */}
      </div>
      {/* /.hero-banner-six */}

      {/*=============================================
		   Fancy Feature Twelve
	    ==============================================  */}
      {/*  /.fancy-feature-twelve */}

      {/*=============================================
			Fancy Feature Thirteen
		  ==============================================  */}
          <div className="fancy-feature-nineteen pt-80 md-pt-100 bg-white pb-40 mt-40" id="effect">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-9 col-lg-11 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-eight text-center mb-80 md-mb-40">
                  <h2 class="text-black">Unreal Development Services</h2>
                  
                </div>
              </div>
            </div>
            <FancyFeatureNinteen featureContent={featureContent}/>
          </div>
          </div>
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Why with Raiden’s <span>Unreal</span> Development 
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit io sed do eiusmod tempor
                  dsu elit
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>

          <div className="sldier-wrapper  mt-30 md-mt-50">
            <DocSlickAsNavThree />
          </div>
          {/* /.sldier-wrapper  */}
        </div>
      </div>
      {/* /.fancy-feature-thirteen */}

      {/*=====================================================
				Fancy Feature Fourteen
			===================================================== */}
         <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div
                className="title-style-eight text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h2 class="text-black">
             Unreal Development Process
                </h2>
                {/* <p>
                  Rotate, merge, trim, split, crop and flip videos with a modern
                  & simple ui
                </p> */}
              </div>
            </div>
          </div>

          {/* Nav tabs */}
        </div>
        {/* End .container */}
        <DocEditorTabs tabListContent={tabListContent} tabList={tabList}/>

        <img src="images/shape/175.svg" alt="" className="shapes shape-right" />
        <img src="images/shape/176.svg" alt="" className="shapes shape-left" />
      </div>

       <div className="fancy-feature-twelve pt-250 md-pt-50" id="about">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2>
                    {/* Check why you <span>Should</span> Choose us */}
                    Unreal Game Development
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* End .row */}
            <FancyFeatureTwelve FeatureContent={FeatureContent}  />
          </div>
        </div>
   
        <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
      </div>
   
      {/* <div className="fancy-feature-fourteen mt-250 pt-80 md-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="title-style-six">
                <h6 style={{ color: "#FF2759", fontSize: "15px" }}>
                  Integrategration
                </h6>
                <h2>
                  Connect App <br /> with the <span>Software</span> you use.
                </h2>
                <p className="text-xs pe-5 me-5">
                  Lorem ipsum dolor on adipisci elit io quis sed do eiusmod tem.
                </p>
              </div>
    
            </div>

            <div className="col-lg-5 ms-auto">
              <div className="right-side md-mt-60">
                <div className="row">
                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-17.svg" alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-18.svg" alt="logo" />
                      </div>
                    </Tilt>
                  </div>
      

                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta mt-40 d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-19.svg" alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-20.svg" alt="logo" />
                        <img
                          src="images/shape/154.svg"
                          alt="shape"
                          className="shapes shape-one"
                        />
                      </div>
                    </Tilt>
                  </div>
        
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-fourteen */}

      {/*=====================================================
				Fancy Portfolio One
			===================================================== */}
      {/* <div className="fancy-portfolio-one pt-180 md-pt-100" id="product">
        <div className="container">
          <div className="title-style-six">
            <h2>
              Our <span>Portfolio</span>
            </h2>
          </div>
        </div>

        <div className="portfolioSliderOne arrow-top-right pt-120 md-pt-70">
          <Portfolio />
        </div>
      </div> */}
      {/* /.fancy-portfolio-one */}

      {/*=====================================================
			Client Feedback Slider Five
			===================================================== */}
      {/* <div
        className=" client-feedback-slider-five mt-200 md-mt-80"
        id="feedback"
      >
        <div className="client-feedback-slider-fiv">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
                <img
                  src="images/icon/84.svg"
                  alt="icon"
                  className="icon m-auto"
                />
                <div className="title-style-six text-center mt-25">
                  <h2>
                    Check what’s <span>Customer </span>say about us.
                  </h2>
                </div>
    
              </div>
            </div>

            <div className="row">
              <div className="col-xl-7 col-lg-10 m-auto">
                <div className="custom-icon-slick-arrow clientSliderFive mt-80 md-mt-50">
                  <Testimonial />
                </div>

                <img
                  src="images/shape/156.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/157.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
                <img
                  src="images/shape/158.svg"
                  alt="shape"
                  className="shapes shape-three"
                />
              </div>
            </div>
          </div>
      
          <div className="circle-area">
            <img src="images/shape/155.svg" alt="shape" className="main-img" />
          </div>
        </div>
      </div> */}
      {/* /.client-feedback-slider-three */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      {/* <div
        className="pricing-section-five  pt-250 md-mt-150 sm-mt-80 md-pt-80"
        id="pricing"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last">
              <div className="title-style-six ps-5 md-p0">
                <h6 style={{ fontSize: "15px" }}>Our Pricing</h6>
                <h2>
                  Choose your <span>Product.</span>
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit sed do eiusmod liu.
                </p>
              </div>
          
            </div>
         

            <div className="col-lg-7">
              <div className="pricing-table-area-five md-mt-60">
                <img
                  src="images/icon/88.png"
                  alt="icon"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/160.png"
                  alt="shape"
                  className="shapes shape-two"
                />
                <PricingFive />
              </div>
       
            </div>
     
          </div>

        </div>
      </div> */}


      {/*=====================================================
					Fancy Short Banner Seven
				===================================================== */}
      {/* <div className="fancy-short-banner-seven mt-250 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  love our product? <span>Save $20</span> by grab it today.
                </h2>
              </div>

              <a
                href="#"
                className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one"
              >
                <img src="images/icon/apple.svg" alt="icon" className="icon" />
                <div>
                  <span>Download on the</span>
                  <strong>App store</strong>
                </div>
              </a>
            </div>
       
          </div>
 
          <Tilt>
            <div className="screen-meta">
              <img
                src="images/assets/screen_10.png"
                alt="screen"
                className="m-auto"
              />
              <img
                src="images/shape/165.svg"
                alt="screen"
                className="shapes shape-four"
              />
              <img
                src="images/shape/166.png"
                alt="screen"
                className="shapes shape-five"
              />
            </div>
          </Tilt>
        </div>
 
        <img
          src="images/shape/162.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/163.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/164.svg"
          alt="shape"
          className="shapes shape-three"
        />
      </div> */}
      {/* /.fancy-short-banner-seven */}

      {/*=====================================================
					Footer Style Six
				===================================================== */}
    <div className="fancy-short-banner-three mt-200 md-mt-150">
          <div className="container">
            <div className="bg-wrapper">
              <CallToActionThree/>
            </div>
          </div>
        </div>

        <footer className="theme-footer-two pt-150 md-pt-80">
          <div className="top-footer">
            <div className="container">
              <FooterTwo />
            </div>
          </div>
          <div className="container">
            <div className="bottom-footer-content">
              <CopyRightTwo />
            </div>
          </div>
        </footer>
      {/* /.theme-footer-six */}
    </div>
  );
};

export default ProductLandingDark;
