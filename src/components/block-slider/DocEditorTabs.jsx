import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// const tabList = [
//   { iconOne: "105", iconTwo: "105-c" },
//   { iconOne: "106", iconTwo: "106-c" },
//   { iconOne: "107", iconTwo: "107-c" },
//   { iconOne: "108", iconTwo: "108-c" },
//   { iconOne: "109", iconTwo: "109-c" },
//   { iconOne: "110", iconTwo: "110-c" },
//   { iconOne: "111", iconTwo: "111-c" },
//   { iconOne: "110", iconTwo: "110-c" },
//   { iconOne: "111", iconTwo: "111-c" },
// ];

// const tabListContent = [
//   {
//     img: "img_81",
//     // innerText: "Track Human faces",
//     title: "Defi Token Development",
//     description: `We take pride in reminding you that we are the leading DeFi token development company, skilled and visionary in creating and deploying DeFi tokens.`,
//   },
//   {
//     img: "img_92",
//     // innerText: "keyframing experience",
//     title: "Defi staking development",
//     description: `Our future-loaded expertise team forwards DeFi staking software for boasting extensive features and robust functionality. We offer you unbiased consulting for clients exploring opportunities in the DeFi space.`,
//   },
//   {
//     img: "img_93",
//     // innerText: "Audio track down",
//     title: "Defi lending and borrowing development",
//     description: `Lending and borrowing stay facile in these blockchain DeFi, also with utmost security and reliability. We are adept, unique solution providers who equally provide top-tier benefits and functionalities.`,
//   },
//   {
//     img: "img_94",
//     // innerText: "Take the color",
//     title: "Defi yield farming development",
//     description: `Locking or lending is feasible with our end-to-end encrypted DeFi yield farming development. We ensure it is secure by providing security audits, UI/UX design, smart contract creation, and continuous technical support.`,
//   },
//   {
//     img: "img_95",
//     // innerText: "Edit videos at up to 4K",
//     title: "Defi Crowdfunding Development",
//     description: `We collaborate on all technical elements necessary to establish a strong DeFi crowdfunding platform, guaranteeing an effective solution.`,
//   },
//   {
//     img: "img_96",
//     // innerText: "Remove unwanted noise",
//     title: "Defi smart contract development",
//     description: `Create and deploy the self-executing platform with DeFi smart contracts. These contracts facilitate the execution and validation of crypto transactions, settlements, and agreements independently, without needing third-party participation.`,
//   },
//   {
//     img: "img_97",
//     // innerText: "Layer multiple video clips",
//     title: "Defi Wallet development",
//     description: `You possess both the key and lock, allowing you to fully manage your wallet with privacy, security, and convenient DeFi wallets.`,
//   },
//   {
//     img: "img_96",
//     // innerText: "Remove unwanted noise",
//     title: "Defi Insurance Platform",
//     description: `We are a pioneer in the creation of DeFi insurance protocols, revolutionizing decentralized insurance. We build a reliable, open-source, and transparent platform for DeFi insurance.`,
//   },
//   {
//     img: "img_97",
//     // innerText: "Layer multiple video clips",
//     title: "Defi Lottery System Development",
//     description: `Leveraging blockchain decentralization, immutability, and smart contract automation, we give space for lotteries, ensuring a trustworthy source without any flaws.`,
//   },
// ];

const DocEditorTabs = ({tabListContent, tabList}) => {
  return (
    <>
      <Tabs>
        <TabList>
          {tabList.map((img, i) => (
            <Tab key={i}>
              <div className="nav-link d-flex align-items-center justify-content-center">
                <img
                  src={`${img.iconOne}`}
                  alt="icon"
                  className="current tran3s"
                />
                <img
                  src={`${img.iconTwo}`}
                  alt="icon"
                  className="hover tran3s"
                />
              </div>
            </Tab>
          ))}
        </TabList>

        <div className="mt-60 sm-mt-40 tab-content">
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="row no-gutters align-items-center">
                <div className="col-md-6">
                  <div className="img-holder">
                    <img
                      src={`images/media/${tabContent.img}.png`}
                      alt="media"
                    />
                    <div className="ripple-box d-flex align-items-center justify-content-center">
                      <p>{tabContent.innerText}</p>
                    </div>
                  </div>{" "}
                  {/* /.img-holder */}
                </div>
                <div className="col-md-6">
                  <div className="text-wrapper">
                    <h4 class="text-black">{tabContent.title}</h4>
                    <p>{tabContent.description}</p>
                  </div>{" "}
                  {/* /.text-wrapper */}
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
        {/* /.pricing-table-area-six */}
      </Tabs>
    </>
  );
};

export default DocEditorTabs;
