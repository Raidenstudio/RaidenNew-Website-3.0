import React from "react";

const FeaturesContent = [
  {
    img: "94",
    title: "Non-Fungible Token",
    desc: `Have a reliable token conversion process for your physical and digital assets, and trade them on the NFT Marketplace to increase your trading opportunities.`,
  },
  {
    img: "95",
    title: "NFT Marketplace",
    desc: `Establishing your marketplace's user interface and back-end system to enable NFT trading with smooth end-to-end encryption.`,
  },
  {
    img: "96",
    title: "Web3 Wallet Integration",
    desc: `Future-proofed through innovative crypto wallet integration. Seamlessly connect across diverse blockchains, applying the latest features.`,
  },
  {
    img: "97",
    title: "Smart Contract Development",
    desc: `Customize and configure your own marketplace, adopting Raiden's NFT features and experience to ensure efficient trading.`,
  },
  {
    img: "98",
    title: "Cross-Chain NFT Platform Development",
    desc: `NFTs are created using multi-token wallet systems, cross-chain transactions, and blockchain network interoperability.`,
  },
  {
    img: "99",
    title: "NFT Game Development",
    desc: `Raiden handles the development of full-cycle NFT games, creating a game platform with tradable and collectible non-fungible tokens.`,
  },
  {
    img: "95",
    title: "NFT Art Gallery",
    desc: `Utilize Raiden's design expertise to create an influential NFT art gallery that will guarantee your tokenized art captures attention.`,
  },
  {
    img: "96",
    title: "NFT Streaming Platform",
    desc: `Empower creators with Raiden's NFT multimedia platform. Tokenize and generate your audio podcast, music, video, and even live concerts.`,
  },
  {
    img: "97",
    title: "NFT Aggregator Development",
    desc: `With the blockchain expertise and standard NFT, we cut through the difficulties and make sure you receive it in time.`,
  },
];

const FancyFeatureSeventeen = () => {
  return (
    <>
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <img src={`images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
        </div>
        // .block-meta
      ))}
    </>
  );
};

export default FancyFeatureSeventeen;
