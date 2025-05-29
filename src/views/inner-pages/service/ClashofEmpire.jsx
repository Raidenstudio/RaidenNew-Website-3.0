import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import BlogStyle1 from "../../../components/blog/BlogStyle1";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import FancyFeatureTewentyTwo from "../../../components/features/FancyFeatureTewentyTwo";
import Smart from "../../../assets/images/assets/Smart Contract Development.png";
import Dapp from "../../../assets/images/assets/DApp Development.png"
import Chain from "../../../assets/images/assets/blockchain Integration.png"
import NFT from "../../../assets/images/assets/NFT Platforms & Marketplaces.png"
import Contract from "../../../assets/images/assets/Custom Tokenomics Design.png"

const ClashofEmpire = () => {
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
      {/* /.fancy-hero-one */}
      <div className="row justify-content-center">
        <FancyFeatureTewentyTwo FeatureContent={FeatureContent} />
      </div>
      {/* =====================================================
            Feature Blog One
        ===================================================== */}
   <div className="row justify-content-center mt-35 md-mt-20">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDealy}
          key={i}
        >
          <div className="block-style-fifteen mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <img src={val.icon} alt="icon" />
            </div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
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
