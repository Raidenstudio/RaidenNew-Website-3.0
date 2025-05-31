import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import BlogStyle1 from "../../../components/blog/BlogStyle1";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import FancyFeatureTewentyTwo from "../../../components/features/FancyFeatureTewentyTwo";
import Smart from "../../../assets/images/assets/Smart Contract Development.png";
import Dapp from "../../../assets/images/assets/DApp Development.png";
import Chain from "../../../assets/images/assets/blockchain Integration.png";
import NFT from "../../../assets/images/assets/NFT Platforms & Marketplaces.png";
import Contract from "../../../assets/images/assets/Custom Tokenomics Design.png";
import FancyFeatureTwelve from "../../../components/features/FancyFeatureTwelve";
import FancyFeatureTen from "../../../components/features/FancyFeatureTen";

const ClashofEmpire = () => {
  const FeatureContents = [
    {
      title: "Technical Innovation",
      li: "Cross- platform compatibility",
      li2: "Scalable Architecture",
      li3: "Real time Multiplayer Support",
      li4: "Monetization Options",
    },
    {
      title: "Reports and Security",
      li: "Analytics and Reporting.",
      li2: "Security and Compliance",
      li3: "API Integration.",
      li4: "Customization",
    },
  ];

  const FeaturesContent = [
    {
      bgColor: "#BCFFCB",
      icon: Smart,
      title: "Guild Halls",
      desc: `Create and improve guild halls to add features, bonuses, and buffs that improve teamwork.`,
      dataDealy: "0",
    },
    {
      bgColor: "#E0F8F8",
      icon: Dapp,
      title: "Power Heroes",
      desc: `From brave knights and crafty sorcerers, you can choose from them . Watch how they shift the balance in your favor when you send them into combat.`,
      dataDealy: "100",
    },
    {
      bgColor: "#F7EDFF",
      icon: Chain,
      title: "Progressive Gameplay",
      desc: `To strengthen your kingdom and gain an advantage, unlock new technology, upgrade buildings, and research spells.`,
      dataDealy: "200",
    },
    {
      bgColor: "#FFEBDB",
      icon: NFT,
      title: "Global Competition",
      desc: `Compete in tournaments and international events to test your abilities and earn prestige and rewards.
`,
      dataDealy: "0",
    },

    {
      bgColor: "#FFB5BC",
      icon: Contract,
      title: "Epic Battles ",
      desc: `Leading your armies, using strong spells, and seeing your forces unite in epic battles are all part of the experience`,
      dataDealy: "100",
    },
    {
      bgColor: "#FFB5BC",
      icon: Contract,
      title: "Forging Alliances ",
      desc: `Attack, share, and strategize with friends to defeat rival kingdoms and win the entire tournament.`,
      dataDealy: "100",
    },
  ];

  const FeatureContent = [
    {
      icon: "121",
      title: "White Label Solutions",
      subTitle: `Creates complete brand ownership by customizing every element to produce a gaming experience that reflects your uniqueness.`,
      bgColor: "#FF4A8B",
    },
    {
      icon: "122",
      title: "Flexible Licensing Options",
      subTitle: `We offer a variety of licensing options to suit your needs and budget. Tell us what you need, and we will find the best solution.`,
      bgColor: "#6D49FF",
    },
    {
      icon: "123",
      title: "Comprehensive Support",
      subTitle: `Guaranteeing success at every stage of game development, from design to efficient marketing and monetization techniques.`,
      bgColor: "#FFB951",
    },
    {
      icon: "121",
      title: "Player profiles and customization",
      subTitle: `Power up your players unique identity and achievements with customized avatars, titles, badges..`,
      bgColor: "#FF4A8B",
    },
    {
      icon: "122",
      title: "Guilds and Alliances",
      subTitle: `Assemble powerful guilds and alliances around players to plan attacks, share the resources, and defeat the enemy together.`,
      bgColor: "#6D49FF",
    },
    {
      icon: "123",
      title: "Leaderboards and Rankings",
      subTitle: `Stay ahead on the global leaderboard where everyone can witness your incredible skills and achievements.`,
      bgColor: "#FFB951",
    },
  ];

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Blog V1 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}
      <Header />
      {/* End Header */}

      {/* 	=============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <h2 className="font-gilroy-bold">
                Check our company inside story
              </h2>
            </div>
            <div className="col-lg-9 m-auto">
              <p className="font-gordita">
                You will find here our company news and latest update
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>

    <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                  Emphasis on {" "}
                  <span>
                    Features <img src="images/shape/191.svg" alt="shape" />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTewentyTwo FeatureContent={FeatureContent} />
          </div>
        </div>
      </div>

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
               <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                In game   {" "}
                  <span>
                    Experience <img src="images/shape/191.svg" alt="shape" />
                  </span>
                </h2>
              </div>
            </div>
          </div>

        
        </div>
      </div>
        <FancyFeatureTen FeaturesContent={FeaturesContent}  />
    


            <div className="fancy-feature-twelve pt-250 md-pt-50 pb-250 md-pb-50 bg-black text-white" id="about">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                                <div className="title-style-six text-center">
                                    <h2 className="text-white">
                                        Under the <span>Hood</span>
                                    </h2>
                                </div>
                                {/* /.title-style-six */}
                            </div>
                        </div>
                        {/* End .row */}
                        <FancyFeatureTwelve FeatureContent={FeatureContents} fontColor="text-white" />
                    </div>
                </div>
                {/* /.bg-wrapper */}
                <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
            </div>

      {/* /.feature-blog-one */}

      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default ClashofEmpire;
