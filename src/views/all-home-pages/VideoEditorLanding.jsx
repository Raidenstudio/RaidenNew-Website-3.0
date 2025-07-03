import { React } from "react";
import { Helmet } from "react-helmet";
import DocEditorTabs from "../../components/block-slider/DocEditorTabs";
import FacnyVideoTwo from "../../components/video/FacnyVideoTwo";
import FacnyVideoThree from "../../components/video/FacnyVideoThree";
import Header from "../../components/e-commerce/Header";
import FancyDEFIServices from "../../components/features/FancyDEFIServices";
import CallToActionThree from "../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";
import HeaderThree from "../../components/header/HeaderThree";

const tabListContent = [
  {
    img: "img_81",
    // innerText: "Track Human faces",
    title: "Defi Token Development",
    description: `We take pride in reminding you that we are the leading DeFi token development company, skilled and visionary in creating and deploying DeFi tokens.`,
  },
  {
    img: "img_92",
    // innerText: "keyframing experience",
    title: "Defi staking development",
    description: `Our future-loaded expertise team forwards DeFi staking software for boasting extensive features and robust functionality. We offer you unbiased consulting for clients exploring opportunities in the DeFi space.`,
  },
  {
    img: "img_93",
    // innerText: "Audio track down",
    title: "Defi lending and borrowing development",
    description: `Lending and borrowing stay facile in these blockchain DeFi, also with utmost security and reliability. We are adept, unique solution providers who equally provide top-tier benefits and functionalities.`,
  },
  {
    img: "img_94",
    // innerText: "Take the color",
    title: "Defi yield farming development",
    description: `Locking or lending is feasible with our end-to-end encrypted DeFi yield farming development. We ensure it is secure by providing security audits, UI/UX design, smart contract creation, and continuous technical support.`,
  },
  {
    img: "img_95",
    // innerText: "Edit videos at up to 4K",
    title: "Defi Crowdfunding Development",
    description: `We collaborate on all technical elements necessary to establish a strong DeFi crowdfunding platform, guaranteeing an effective solution.`,
  },
  {
    img: "img_96",
    // innerText: "Remove unwanted noise",
    title: "Defi smart contract development",
    description: `Create and deploy the self-executing platform with DeFi smart contracts. These contracts facilitate the execution and validation of crypto transactions, settlements, and agreements independently, without needing third-party participation.`,
  },
  {
    img: "img_97",
    // innerText: "Layer multiple video clips",
    title: "Defi Wallet development",
    description: `You possess both the key and lock, allowing you to fully manage your wallet with privacy, security, and convenient DeFi wallets.`,
  },
  {
    img: "img_96",
    // innerText: "Remove unwanted noise",
    title: "Defi Insurance Platform",
    description: `We are a pioneer in the creation of DeFi insurance protocols, revolutionizing decentralized insurance. We build a reliable, open-source, and transparent platform for DeFi insurance.`,
  },
  {
    img: "img_97",
    // innerText: "Layer multiple video clips",
    title: "Defi Lottery System Development",
    description: `Leveraging blockchain decentralization, immutability, and smart contract automation, we give space for lotteries, ensuring a trustworthy source without any flaws.`,
  },
];

const tabList = [
  { iconOne: "105", iconTwo: "105-c" },
  { iconOne: "106", iconTwo: "106-c" },
  { iconOne: "107", iconTwo: "107-c" },
  { iconOne: "108", iconTwo: "108-c" },
  { iconOne: "109", iconTwo: "109-c" },
  { iconOne: "110", iconTwo: "110-c" },
  { iconOne: "111", iconTwo: "111-c" },
  { iconOne: "110", iconTwo: "110-c" },
  { iconOne: "111", iconTwo: "111-c" },
];


const VideoEditorLanding = () => {
  // For header select menu
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title>
          Video Editor Landing || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderThree />
      {/* End Header Landing Editor */}

      {/* 	=============================================
				Theme Hero Banner
			==============================================  */}
      <div className="hero-banner-ten min-h-100vh">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
              <h1
                className="hero-heading"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Global Connoisseurs of DeFi Technology
              </h1>
              <p
                className="hero-sub-heading"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Advances within the DeFi realm to provide an uninterrupted experience.
              </p>
            </div>
          </div>
          {/* End .row */}
          <div>

          </div>
        </div>
        {/* End .container */}

        {/* <div className="icon-box-one">
          <img src="images/logo/logo-39.png" alt="icon" />
        </div>
        <div className="icon-box-two">
          <img src="images/logo/logo-40.png" alt="icon" />
        </div>
        <div className="icon-box-three">
          <img src="images/logo/logo-41.png" alt="icon" />
        </div>
        <div className="icon-box-four">
          <img src="images/logo/logo-42.png" alt="icon" />
        </div>
        <div className="icon-box-five">
          <img src="images/logo/logo-43.png" alt="icon" />
        </div>
        <div className="icon-box-six">
          <img src="images/logo/logo-44.png" alt="icon" />
        </div>
        <div className="icon-box-seven">
          <img src="images/logo/logo-45.png" alt="icon" />
        </div>
        <div className="icon-box-eight">
          <img src="images/logo/logo-46.png" alt="icon" />
        </div> */}
      </div>

      {/* 		=============================================
				Fancy Feature Eighteen
			==============================================  */}
      <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div
                className="title-style-eight text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h2>
                  Strategic DeFi Implementation Solutions
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
        <DocEditorTabs tabListContent={tabListContent} tabList={tabList} />

        <img src="images/shape/175.svg" alt="" className="shapes shape-right" />
        <img src="images/shape/176.svg" alt="" className="shapes shape-left" />
      </div>
      {/* /.fancy-feature-eighteen */}

      {/* 	=============================================
				Fancy Feature Nineteen
			==============================================  */}

      <div className="fancy-feature-twenty mt-225 md-mt-150">
        <div className="container">
          <div className="block-style-twenty">
            <FacnyVideoTwo />
          </div>
          {/* /.block-style-twenty */}
          {/* /.block-style-twenty */}
        </div>
      </div>
      <div className="fancy-feature-nineteen pt-180 md-pt-100" id="effect">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-9 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-80 md-mb-40">
                <h2>Cardinal Merits of our DeFi Development Company                </h2>
                <p>
                  Explore advanced video editing features that only
                  professionals have access to!
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <FancyDEFIServices />
        </div>
      </div>
      {/* /.fancy-feature-nineteen */}

      {/* 	=============================================
				Fancy Feature Twenty
			==============================================  */}
      <div className="fancy-feature-twenty mt-225 md-mt-150">
        <div className="container">
          {/* /.block-style-twenty */}

          <div className="block-style-twenty mt-170 md-mt-120">
            <FacnyVideoThree />
          </div>
          {/* /.block-style-twenty */}
        </div>
      </div>
      {/* /.fancy-feature-twenty */}

      {/* 	=====================================================
				Fancy Feature Twenty One
			===================================================== */}
      {/* <div className="fancy-feature-twentyOne mt-200 md-mt-100" id="template">
        <div className="container">
          <div
            className="title-style-eight text-center mb-80 md-mb-30"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>Industries We Empower</h2>
            <p>Quick and easy to customize. No experience required.</p>
          </div>
        </div>

        <div className="lg-container">
          <div className="container">
            <VideoGallery />

            <div
              className="text-center mt-70"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <a href="#" className="theme-btn-nine">
                Start Building
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-twentyOne */}

      {/* =====================================================
				Client Feedback Slider Six
			===================================================== */}
      {/* <div
        className="client-feedback-slider-six pt-170 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-7 col-lg-9 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-eight text-center">
                  <h6>FEEDBACK</h6>
                  <h2>Trusted by millions of creators.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="clientSliderSix">
            <TestimonialSeven />
          </div>
        </div>
      </div> */}

      {/* 	=====================================================
				Fancy Short Banner Nine
			===================================================== */}
      {/* <div className="fancy-short-banner-nine mt-170 md-mt-80">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-8 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-seven text-center">
                <h2>200k+ Customers have our deski.Try it now!</h2>
                <p>Try it risk free — we don’t charge cancellation fees.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div
              className={
                click1 ? "dropdown download-btn show" : "dropdown download-btn"
              }
            >
              <button
                className="dropdown-toggle"
                onClick={handleClick1}
                type="button"
              >
                Get Deski app
              </button>
              <div className={click1 ? "dropdown-menu  show" : "dropdown-menu"}>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#"
                  onClick={handleClick1}
                >
                  <img src="images/icon/103.svg" alt="icon" />
                  <span>IOS & Android</span>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#"
                  onClick={handleClick1}
                >
                  <img src="images/icon/104.svg" alt="icon" />
                  <span>Mac & Windows</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/shape/177.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/178.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div> */}

      {/* =====================================================
				Footer Style Seven
			===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
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
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default VideoEditorLanding;
