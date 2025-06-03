import React, { useState } from "react";
import { Helmet } from "react-helmet";
import HeaderTwo from "../../components/header/HeaderTwo";
import HeroBannerTwo from "../../components/hero-banner/HeroBannerTwo";
import FeatureFour from "../../components/features/FeatureFour";
import Faq from "../../components/faq/Faq";
import CounterThree from "../../components/counter/CounterThree";
import AboutTwo from "../../components/about/AboutTwo";
import Social from "../../components/social/Social";
import Testimonial from "../../components/testimonial/Testimonial";
import CallToActionThree from "../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";
import Choose from "../../assets/images/assets/Home page (1).png";
import Chatbot from "../../assets/images/assets/Group 6.png";
import Chat from "../../assets/images/assets/Group 7.png";
import Profile1 from "../../assets/images/assets/Profile 1.png";
import Profile2 from "../../assets/images/assets/Profile 2.png";
import Profile3 from "../../assets/images/assets/Profile 3.png";
import Profile4 from "../../assets/images/assets/Profile 4.png";
import Profile5 from "../../assets/images/assets/Profile 5.png";
import Header from "../../components/e-commerce/Header";
import HeaderThree from "../../components/header/HeaderThree";
import Portfolio from "../../components/portfolio/Portfolio";
import Tilt from "react-parallax-tilt";
import AppImage from "../../assets/Home/App-Developed.png"
import CLIENTS from "../../assets/Home/CLIENTS.png"
import PROJECTS from "../../assets/Home/PROJECTS.png"
import TeamMembers from "../../assets/Home/Team-Members.png"
import YearsImage from "../../assets/Home/Years-of-Experience.png"
import PricingFive from "../../components/pricing/PricingFive";
import BlockMetaData from "../../components/fancy-text-block/BlockMetaData";
import LatestProduct from "../../components/vr-landing/LatestProduct";
import MobileAppScreenSlider from "../../components/portfolio/MobileAppScreenSlider";
import MobileAppPortfolio from "../../components/portfolio/MobileAppPortfolio";
import PortfolioDemo2 from "../../components/portfolio/PortfolioDemo2";

const CustomerSupport = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const blockchainServices = [
    {
      buttonHeading: "Blockchain Development",
      cards: [
        {
          heading: "Private Blockchain Development",
          subheading:
            "We utilize blockchain technology to create specialized, highly secure data protection that supports your business enterprise's growth with pertinent solutions.",
        },
        {
          heading: "Public Blockchain Development",
          subheading:
            "Our dApps, secured smart contracts, and decentralized governance marks with public blockchain. We offer end-to-end solutions for robust performance, and active community participation supports the launch and sustained blockchain network.",
        },
        {
          heading: "Blockchain Consulting Services",
          subheading:
            "Our roadmaps produce strategic planning and workable studies that result in profitable workshops and training to give you a blockchain advancement that efficiently empowers your company.",
        },
        {
          heading: "Hyperledger Development",
          subheading:
            "We create and implement chains for hyperledger fabric that offer customized hyperledger solutions for an effective implementation by forming blockchain consortiums.",
        },
      ],
    },
    {
      buttonHeading: "Crypto Development",
      cards: [
        {
          heading: "Cryptocurrency creation",
          subheading:
            "Cryptocurrencies are designed and developed on the basis of blockchain and consensus technology like Proof of Work (POW) and Proof of Stake (POS) for delivering top-tier security and integrated solutions.",
        },
        {
          heading: "Cryptocurrency Exchange Development",
          subheading:
            "We build a secure, seamless crypto trading experience with centralized and decentralized exchange platforms. This ensures optimal liquidity, security, and performance from login to encrypted transactions.",
        },
        {
          heading: "White Label Crypto Exchange",
          subheading:
            "Our white-label crypto exchange solutions provide rapid deployment, full brand customization, regulatory compliance, and advanced margin/futures trading for instant market entry.",
        },
        {
          heading: "Smart Contract Development",
          subheading:
            "We develop and deploy smart contracts with integrated security audits to ensure reliability and legal compliance while automating and safeguarding business processes.",
        },
      ],
    },
    {
      buttonHeading: "Audit Services",
      cards: [
        {
          heading: "Smart Contract Audits",
          subheading:
            "Evaluating smart contract code thoroughly for security flaws and producing regular reports that highlight threats and provide workable fixes for optimum security and performance.",
        },
        {
          heading: "Compliance Audits",
          subheading:
            "Conducting audits on a regular basis to confirm regulatory standards and compliance gaps, and providing practical suggestions to guarantee blockchain solutions.",
        },
        {
          heading: "Performance Audits",
          subheading:
            "We enhance speed and scalability, address inefficiencies, and compare our results to industry norms to maintain blockchain performance at its best.",
        },
        {
          heading: "Security Audits",
          subheading:
            "We provide thorough security audits and penetration testing to find and fix infrastructure flaws and improve your defenses against online attacks.",
        },
      ],
    },
    {
      buttonHeading: "Arbitrage Trading Platform Development",
      cards: [
        {
          heading: "Arbitrage Platform Development",
          subheading:
            "Uses HFT and advanced algorithms to take advantage of changes in cryptocurrency prices, and develops distinctive arbitrage platforms with intuitive user interfaces for optimal trading outcomes.",
        },
        {
          heading: "Exchange Integration Services",
          subheading:
            "Our secure, real-time trading tools optimize liquidity and protect user data and API keys by integrating exchanges with robust APIs and multiple connectivity.",
        },
        {
          heading: "Risk Management and Compliance",
          subheading:
            "We offer automated systems that manage arbitrage trading risks, ensure regulatory compliance, and optimize strategies with real time monitoring and portfolio diversification.",
        },
        {
          heading: "Performance Analytics and Reporting",
          subheading:
            "With its advanced analytics, customized ROI reports, and effective data visualization tools, Raiden helps you deliver and report on in-depth insights with profitable trading strategies.",
        },
      ],
    },
    {
      buttonHeading: "Cryptocurrency Taxation",
      cards: [
        {
          heading: "Tax Compliance and Reporting",
          subheading:
            "Accurate filing services and professional regulatory advice ensure crypto tax compliance in both domestic and foreign jurisdictions.",
        },
        {
          heading: "Tax Calculation and Record Keeping",
          subheading:
            "We maintain accurate records of all transactions and crypto tax computations to ensure uninterrupted tax filing and efficient management of gains, losses, and taxable amounts.",
        },
        {
          heading: "Audit Support and Representation",
          subheading:
            "We assist in audit preparation and represent audits and disputes with tax authorities in order to guarantee compliance and offer a positive resolution.",
        },
        {
          heading: "Tax Planning and Optimization",
          subheading:
            "We strategically manage tax and compliance during transactions while maintaining the portfolio frequency of optimizing outcomes and minimizing liabilities.",
        },
      ],
    },
    {
      buttonHeading: "NFT Services",
      cards: [
        {
          heading: "NFT Marketplace Development",
          subheading:
            "Our user-friendly interfaces and safe smart contracts create an uninterrupted environment for minting, purchasing, and selling NFTs.",
        },
        {
          heading: "NFT Consultation and Strategy",
          subheading:
            "Raiden has expertise in providing complete protection for the NFT ecosystem by consulting, developing strategies, conducting market research, and providing legal advice.",
        },
        {
          heading: "NFT Token Development",
          subheading:
            "We ensure reliable functionality and vulnerability protection while maintaining the development of encrypted tokens with minting management.",
        },
        {
          heading: "NFT Integration and Support",
          subheading:
            "With the help of our expert technical support, effective marketing strategies, execution, and maximized reach and impact, your NFT integration is likely to be successful.",
        },
      ],
    },
  ];


  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Customer Support || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderThree />

      {/* hero banner */}

      <HeroBannerTwo />

      {/* below hero banner */}

      <div
        className="fancy-feature-twentyTwo mpt-200 pt-130 md-mt-80 sm-pt-100"
        id="product"
      >
        <div className="container">
          <div className="title-style-ten hero-banner-below  mb-40 md-mb-20">
            <div className="row align-items-start">
              <div className="col-lg-7">
                <h2>
                  Leading Software Development, IT Consulting, and Mobile Application Development Firm, Creating Intelligent Solutions for a Smarter World.
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20 mb-4">
                  Established in 2022, Raiden is a top software development, web development, and mobile app company that assists multinational corporations with their digital transformation. As a true technology partner, Raiden assists companies of all sizes in.
                </p>
                <a
                  href="#"
                  className="theme-btn-nine"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* service */}

      <div className="fancy-feature-four mt-20">
        <div className="bg-wrapper">
          <img
            src="images/shape/18.svg"
            alt="shape"
            className="shapes shape-right"
          />
          <img
            src="images/shape/19.svg"
            alt="shape"
            className="shapes shape-left"
          />
          <div className="container">
            <div className="title-style-two text-center mb-100 md-mb-50">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-md-10 m-auto font-raleway">
                  <h2>
                    <span style={{ display: "block", whiteSpace: "nowrap" }}>
                      We unlock a meaningful
                    </span>
                    <span style={{ display: "block" }}>
                      experience.{" "}
                      <img src="images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                  </h2>
                </div>

                {/* End .col */}
              </div>
            </div>
            {/* End .title */}

            <div className="inner-content">
              <img
                src="images/shape/20.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/shape/21.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <FeatureFour />
            </div>
            {/* End .inner-content */}
          </div>
        </div>
      </div>



      {/*  */}

      {/* <div className="fancy-feature-fourteen mt-150 mb-150 pt-80 md-mt-80 md-mb-80">
        <div className="container">
          <div className="row fancy-feature-fourteen-card-div" >
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

            <div className="col-lg-5">
              <div className="right-side md-mt-60">
                <div className="row">
                  <div className="col-md-4">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={YearsImage} alt="logo" />
                        <h4>10+</h4>
                        <h5>Years of Experience</h5>
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={TeamMembers} alt="logo" />
                        <h4>50+</h4>
                        <h5>Team Members</h5>
                      </div>
                    </Tilt>
                  </div>

                  <div className="col-md-4">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={AppImage} alt="logo" />
                        <h4>50+</h4>
                        <h5>App Developed</h5>
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={CLIENTS} alt="logo" />
                        <h4>25+</h4>
                        <h5>CLIENTS</h5>
                      </div>
                    </Tilt>
                  </div>


                  <div className="col-md-4">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={PROJECTS} alt="logo" />
                        <h4>25+</h4>
                        <h5>PROJECTS</h5>
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src={AppImage} alt="logo" />
                        <h4>25+</h4>
                        <h5>Countries Served</h5>
                      </div>
                    </Tilt>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      <div
        className="pricing-section-five  pt-250 md-mt-150 sm-mt-80 md-pt-80"
        id="pricing"
      >
        <div className="container">
          <div className="row align-items-start flex-row">
            <div className="col-lg-6 d-flex flex-wrap">
              <div className="custom-logo-design col-lg-4">
                <img src={YearsImage} alt="logo" />
                <h4>10+</h4>
                <h5>Years of Experience</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={TeamMembers} alt="logo" />
                <h4>50+</h4>
                <h5>Team Members</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={AppImage} alt="logo" />
                <h4>50+</h4>
                <h5>App Developed</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={CLIENTS} alt="logo" />
                <h4>25+</h4>
                <h5>CLIENTS</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={PROJECTS} alt="logo" />
                <h4>25+</h4>
                <h5>PROJECTS</h5>
              </div>
              <div className="custom-logo-design col-lg-4">
                <img src={YearsImage} alt="logo" />
                <h4>25+</h4>
                <h5>Countries Served</h5>
              </div>
            </div>


            <div className="col-lg-6">
              <div className="pricing-table-area-five md-mt-60">
                {/* <img
                  src="images/icon/88.png"
                  alt="icon"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/160.png"
                  alt="shape"
                  className="shapes shape-two"
                /> */}
                <PricingFive />
              </div>

            </div>

          </div>

        </div>
      </div>



      {/*  */}

      <div
        className="fancy-feature-twentyTwo mpt-200 pt-130 md-mt-80 sm-pt-100 pb-130 sm-pb-100"
        id="product"
      >
        <div className="container">
          <div className="title-style-ten hero-banner-below  mb-40 md-mb-20">
            <div className="row align-items-start">
              <div className="col-lg-7">
                <h2>
                  Boosting Business Progress With Smart Solutions
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20 mb-4">
                  With the expertise of a prominent development company, you may receive robust software solutions, modernize systems, and rely on cutting-edge technology for growth opportunities.
                </p>
                <a
                  href="#"
                  className="theme-btn-nine"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Explore Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new actice components */}
      <div className="container my-5" id="product">
        <div className="row align-items-center">
          {/* Left - Buttons */}
          <div className="col-md-4 mb-4 bg-black p-4 rounded">
            <h3 className="mb-4 text-bold card-title-heading">Empowering innovation : Raiden Lab's cutting-edge Technology solutions</h3>
            <div className="d-flex flex-column gap-2">
              {blockchainServices.map((service, index) => (
                <button
                  key={index}
                  className={` ${activeIndex === index ? 'theme-btn-nine1' : 'theme-btn-nine-no-bg'
                    } text-start`}
                  onClick={() => setActiveIndex(index)}
                >
                  {service.buttonHeading}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {blockchainServices[activeIndex].cards.map((card, i) => (
                <div className="col" key={i}>
                  <div className="card card-body-div h-100 border-0">
                    <div className="card-body">
                      <h5 className="card-title">{card.heading}</h5>
                      <p className="card-text">{card.subheading}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Why Choose Raiden */}

      <div className="fancy-feature-one pb-150 md-pb-80">
        <div className="text-center">
          <div className="feature-img-area">
          </div>
        </div>
        <div className="block-style-one">
          <h2 className="text-center fw-bold mb-120">Why Choose Raiden?</h2>
          <div className="container">
            <div className="d-lg-flex justify-content-between inner-container">
              <BlockMetaData />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.block-style-one */}
      </div>



      {/* Technology Stack */}

      <div className="container py-5" id="tech-stack">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-5 mb-4">
            <h2 className="fw-bold">Our Technology Stack</h2>
            <p className="mt-3 text-muted">
              We use cutting-edge technologies to deliver high-quality, scalable, and efficient solutions.
              Our stack includes the latest frameworks and platforms trusted by the industry.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-7">
            <div className="row g-4">
              {/* Loop this card for 8 items */}
              {[
                { icon: "🟦", title: "React.js" },
                { icon: "🟨", title: "Node.js" },
                { icon: "🟥", title: "MongoDB" },
                { icon: "🟩", title: "Express.js" },
                { icon: "⚙️", title: "Docker" },
                { icon: "☁️", title: "AWS" },
                { icon: "🔒", title: "Firebase" },
                { icon: "⚛️", title: "Next.js" },
              ].map((stack, index) => (
                <div key={index} className="col-md-3">
                  <div className="border rounded p-3 h-100 d-flex align-items-center flex-column gap-3 shadow-sm bg-white">
                    <div className="fs-2">{stack.icon}</div>
                    <h5 className="mb-0">{stack.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/*  */}

      <div
        className="fancy-feature-thirtySix lg-container pt-170 pb-110 md-pt-120 md-pb-60 bg-white"
        id="product"
      >
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven md-mb-40 text-lg-left">
                <h2 className="text-black" style={{ fontSize: "40px" }}>Delivering Excellence to Transform Businesses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio, voluptatum ex magni omnis in fugit quia qui totam corporis aspernatur, a repellat nisi ea ab incidunt dolorem quam praesentium?
                </p>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="product_slider_one vr-landing-slider">
                <LatestProduct />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="app-screen-preview-one">
        <div className="container">
          <div className="app-preview-slider-one arrow-middle-center ">
            <MobileAppPortfolio />
          </div>
        </div>
        {/* End .container */}
      </div>


      {/*  */}
      {/* <div className="fancy-text-block-seven mt-150 md-mt-100">
        <div className="bg-wrapper">
          <img
            src="images/shape/29.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/30.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/31.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/32.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/33.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <AboutTwo />
          </div>
        </div>
      </div> */}
      {/* /.fancy-text-block-seven */}


      <div className="fancy-portfolio-one pb-180 md-pb-100 pt-180 md-pt-100" id="product">
        <div className="container">
          <div className="title-style-six">
            <h2>
              Our <span>Products</span>
            </h2>
          </div>
        </div>

        <div className="portfolioSliderOne arrow-top-right pt-120 md-pt-70">
          <PortfolioDemo2 />
        </div>
      </div>


      {/* 	=====================================================
				Client Feedback Slider One
			===================================================== */}
      <div className="client-feedback-slider-one pt-50 pb-170 md-pb-80">
        <div className="shapes-holder">
          <img src="images/shape/39.svg" alt="shape" />
          <img
            src={Profile1}
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src={Profile2}
            alt="shape"
            className="cp-img-one"
          />
          <img
            src={Profile3}
            alt="shape"
            className="cp-img-two"
          />
          <img
            src={Profile4}
            alt="shape"
            className="cp-img-three"
          />
          <img
            src={Profile5}
            alt="shape"
            className="cp-img-four"
          />
          <div className="title-style-two">
            <h2>
              Hear <br />
              From Our  <br />
              Clients.
            </h2>
          </div>
        </div>
        {/* /.shapes-holder */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-auto">
              <div className="feedback-meta">
                <div className="watermark font-gilroy-bold">Feedback</div>
                <img src="images/icon/30.svg" alt="shape" className="icon" />
                <div className="clientSliderOne">
                  <Testimonial />
                </div>
              </div>
              {/* /.feedback-meta */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.client-feedback-slider-one */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-100 md-mt-40">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div >
  );
};

export default CustomerSupport;
