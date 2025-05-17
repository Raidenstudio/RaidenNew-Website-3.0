import React from 'react'
import DocSlickAsNavTwo from '../../../components/block-slider/DocSlickAsNavTwo'
import FancyFeatureNinteen from '../../../components/features/FancyFeatureNinteen'

import icon1 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Concept to creation.png";
import icon2 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Smarter Development.png";
import icon3 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Design.png";
import icon4 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Cross-Platform.png";
import icon5 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Trustworthy.png";
import icon6 from "../../../assets/images/assets/GameDevelopment/Elevate your vision with game-changing services/Post-Launch Partnership.png";
import icon7 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Post-Launch Partnership.png";
import icon8 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/blueprint.png";
import icon9 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Building Your Game.png";
import icon10 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Testing Every Detail.png";
import icon11 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Launching and Improving.png";
import icon12 from "../../../assets/images/assets/GameDevelopment/Bringing Your Game to Life -The Process/Launching and Improving-1.png";
import icon13 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Engagement.png";
import icon14 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Brand Building.png";
import icon15 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Monetization Opportunities.png";
import icon16 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Audience Reach.png";
import icon17 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/Customer Retention.png";
import icon18 from "../../../assets/images/assets/GameDevelopment/The Power Behind Play/innovation.png";









import DocEditorTabs from '../../../components/block-slider/DocEditorTabs';
import FancyFeatureTwelve from '../../../components/features/FancyFeatureTwelve';

const featureContent = [

  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: icon1,
    title: "Concept to creation",
    description:"Our intelligent, captivating game concepts enthrall players with compelling plots, lovable characters, and realistic environments."
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: icon2,
    title: "Smarter Development",
    description:"Our code is clean, scalable, and optimized for smooth gameplay and high visual fidelity, with no compromises."
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: icon3,
    title: "Design That Clicks",
    description:"UI/UX that is more than just functional; it is also intuitive, attractive, and addictive. Every single tap, swipe, and scroll feels natural."
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: icon4,
    title: "Cross-Platform Ready",
    description:"Play your game on any mobile screen. We build for iOS, Android, and beyond, ensuring maximum reach without compromise."
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: icon5,
    title: "Trustworthy Quality",
    description:"Before your game is released to the public, extensive testing guarantees stability, speed, and fluid gameplay for a fun and frustration-free experience."
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    icon: icon6,
    title: "Post-Launch Partnership",
    description:"We continue to support you after release, providing updates, fixes, and enhancements to keep your game competitive and engaging."
  },
  
];

const tabListContent = [
  {
    img: "img_81",
    // innerText: "Track Human faces",
    title: "Discovery",
    description: `We start with you, your imaginative ideas, what you need to achieve, and the uniqueness you want to create. This allows us to spot opportunities and challenges early on.`,
  },
  {
    img: "img_92",
    // innerText: "keyframing experience",
    title: "Creating a blueprint",
    description: `The strategic framework we create then describes the main concept, visual aesthetic, milestones, and release date of your game.`,
  },
  {
    img: "img_93",
    // innerText: "Audio track down",
    title: "Building Your Game",
    description: `Our team gets to turn your ideas into reality, focusing on smooth gameplay, eye-catching design, and a great player experience.`,
  },
  {
    img: "img_94",
    // innerText: "Take the color",
    title: "Testing Every Detail",
    description: `We thoroughly test your game to identify any issues and ensure that it works flawlessly across all devices.`,
  },
  {
    img: "img_95",
    // innerText: "Edit videos at up to 4K",
    title: "Launching and Improving",
    description: `When your game goes live, we monitor its performance and make changes to keep players interested and returning for more.`,
  },
  {
    img: "img_96",
    // innerText: "Remove unwanted noise",
    title: "Supporting the long run",
    description: `Our assistance does not end at launch; we are here to assist with updates, fixes, and improvements as your game evolves.`,
  },
  
];

const tabList = [
  { iconOne: icon7, iconTwo: icon7 },
  { iconOne: icon8, iconTwo: icon8 },
  { iconOne: icon9, iconTwo: icon9 },
  { iconOne: icon10, iconTwo: icon10 },
  { iconOne: icon11, iconTwo: icon11 },
  { iconOne: icon12, iconTwo: icon12 },

  
  
];

const FeatureContent = [
  {
    icon: icon13,
    title: "Engagement",
    subTitle: "Plugging in the imaginary storyline with a real, playful experience.",
    hoverText: "Plugging in the imaginary storyline with a real, playful experience.",
  },
  {
    icon: icon14,
    title: "Brand Building",
    subTitle: "Be the game changer in the market by creating your unique champion’s perspective.",
    hoverText: "Be the game changer in the market by creating your unique champion’s perspective.",
  },
  {
    icon: icon15,
    title: "Monetization Opportunities",
    subTitle: "Turn your ideas into a reliable source of income by unlocking customized pathways.",
    hoverText: "Turn your ideas into a reliable source of income by unlocking customized pathways.",
  },
  {
    icon: icon16,
    title: "Audience Reach",
    subTitle: "Reach millions of players across multiple platforms, seamlessly connected.",
    hoverText: "Reach millions of players across multiple platforms, seamlessly connected.",
  },
  {
    icon: icon17,
    title: "Customer Retention",
    subTitle: "Keeping players hooked by regularly delivering new content and updates that they enjoy.",
    hoverText: "Keeping players hooked by regularly delivering new content and updates that they enjoy.",
  },
  {
    icon: icon18,
    title: "Innovation ",
    subTitle: "Set the bar high with innovative ideas and high-tech graphics.Our goal is to create top mobile games with best graphics that define the future of play.",
    hoverText: "Set the bar high with innovative ideas and high-tech graphics.Our goal is to create top mobile games with best graphics that define the future of play.",
  }
];




const MobileGameDevelopment = () => {
  return (
     <div className="hero-banner-twelve lg-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
            <h1 style={{fontSize:"70px", fontStyle:"Raleway", color:"white"}} className="hero-heading" data-aos="fade-up">
              Experience{" "}
              <br />
              <span style={{ color: "#FF006B" }}>epic adventures</span>{" "}
              <br />
              with portable freedom.
            </h1>
            <p
              style={{opacity:0.8}}
              className="font-gordita hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Bringing stories to screens—mobile game development driven by imagination and fun.
            </p>
          </div>
        </div>

        
        
          
        
      </div>
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
                    <div className="title-style-six text-center text-nowrap">
                      <h2 className='text-white'>
                        Why Raiden’s<span> Game Zone</span> 
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
                  <DocSlickAsNavTwo  />
                </div>
                {/* /.sldier-wrapper  */}
              </div>
      </div> 
      <div className="fancy-feature-nineteen pt-180 md-pt-100 bg-white" id="effect">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-9 col-lg-11 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-eight text-center mb-80 md-mb-40">
                  <h2>Elevate your vision with game-changing services.</h2>
                  <p>Blockchain Front-end and Back-end</p>
                </div>
              </div>
            </div>
            <FancyFeatureNinteen featureContent={featureContent}/>
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
                Bringing Your Game to Life -The Process
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
      {/* /.fancy-feature-eighteen */}

                 {/*=============================================
		   Fancy Feature Twelve
	    ==============================================  */}
      <div className="fancy-feature-twelve pt-250 md-pt-50 bg-black" id="about">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2 className='text-white'>
                    The Power Behind Play
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* End .row */}
            <FancyFeatureTwelve  FeatureContent ={FeatureContent}/>
          </div>
        </div>
        {/* /.bg-wrapper */}
        <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
      </div>
      {/*  /.fancy-feature-twelve */}




      </div>
    </div>
  )
}

export default MobileGameDevelopment