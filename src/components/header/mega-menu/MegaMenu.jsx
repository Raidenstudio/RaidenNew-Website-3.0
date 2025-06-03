import React from "react";
import { Link } from "react-router-dom";

//   {
//     img: "home01",
//     routerPath: "/",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Event Organizer",
//   },
//   {
//     img: "home02",
//     routerPath: "/doc-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Doc Landing",
//   },
//   {
//     img: "home03",
//     routerPath: "/project-management",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Project Management",
//   },
//   {
//     img: "home04",
//     routerPath: "/customer-support",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Customer Support",
//   },
//   {
//     img: "home05",
//     routerPath: "/product-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Product Landing",
//   },
//   {
//     img: "home06",
//     routerPath: "/product-landing-dark",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Product Landing Dark",
//   },
//   {
//     img: "home07",
//     routerPath: "/note-taking-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Not Taking Landing",
//   },
//   {
//     img: "home08",
//     routerPath: "/video-editor-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Video Editor Landing",
//   },
//   {
//     img: "home10",
//     routerPath: "/appointment-scheduling",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Appointment Scheduling",
//   },
//   {
//     img: "home11",
//     routerPath: "/mobile-app-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Mobile App Landing",
//   },
//   {
//     img: "home12",
//     routerPath: "/doc-signature",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Doc Signature",
//   },
//   {
//     img: "home13",
//     routerPath: "/website-builder",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Website Builder",
//   },
//   {
//     img: "home14",
//     routerPath: "/form-survey-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Form Survey",
//   },
//   {
//     img: "home16",
//     routerPath: "/vr-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "VR Landing",
//   },
//   {
//     img: "home15",
//     routerPath: "/e-commerce",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "E-commerce",
//   },
//   {
//     img: "home09",
//     routerPath: "/coming-soon",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//     title: "Coming Soon",
//   },
// ];

const BlockChain = [
  {
    name: "Blockchain Game",
    routerPath: "/blockchain-game-development-company",
  },
  {
    name: "Metaverse",
    routerPath: "/metaverse-development",
  },
  {
    name: "Web3",
    routerPath: "/web3-development",
  },
  {
    name: "NFT",
    routerPath: "/nft-development-company",
  },
  {
    name: "Blockchain",
    routerPath: "/blockchain-development"
  },
  {
    name: "De-Fi",
    routerPath: "/de-fi-development"
  },
];

const AboutUs = [
  {
    name: "AR Services",
    routerPath: "/augmented-reality-ar-development-company",
  },
  {
    name: "VR Services",
    routerPath: "/augmented-reality-vr-development-company",
  },
];

const ContactUS = [
  {
    name: "Mobile Game Development",
    routerPath: "/mobile-game-development"
  },
  {
    name: "Unity Game Development",
    routerPath: "/unity-game-development"
  },
  {
    name: "Unreal Development",
    routerPath: "/unreal-development"
  },
  {
    name: "MMORPG Game Development",
    routerPath: "/mmorpg-game-development"
  },
  {
    name: "P2E Game Development",
    routerPath: "/p2e-game-develpment"
  },
  {
    name: "Web3 Game Development",
    routerPath: "/web3-game-develpment"
  }
];
const Team = [
  {
    name: "Team Version 01",
    routerPath: "/team-1",
  },
  {
    name: "Team Version 02",
    routerPath: "/team-2",
  },
  {
    name: "Team Version 03",
    routerPath: "/team-3",
  },
  {
    name: "Team Version 04",
    routerPath: "/team-4",
  },
  {
    name: "Team Version 05",
    routerPath: "/team-5",
  },
  {
    name: "Team Version 06",
    routerPath: "/team-6",
  },
  {
    name: "Team Details",
    routerPath: "/team-details-v1",
  },
  {
    name: "Team Details Slider",
    routerPath: "/team-details-v2",
  },
];

const Services = [
  {
    name: "RaidenVerse",
    routerPath: "/raiden-verse",
  },
  {
    name: "RaidenSimX",
    routerPath: "/raiden-simx",
  },
  {
    name: "RaidenCogni+",
    routerPath: "/raiden-cogni",
  },
  {
    name: "RaidenArcviz",
    routerPath: "/raiden-arcviz",
  }
];
const Miscellaneous = [
  {
    name: "Clash of Empires",
    routerPath: "/clash-empire",
  },
  {
    name: "Virtual Vegas",
    routerPath: "/case-study",
  },
  {
    name: "Metaverse Royale",
    routerPath: "/case-study",
  }
];
const Portfolio = [
  {
    name: "Blog",
    routerPath: "/blog",
  },
  {
    name: "Case Study",
    routerPath: "/case-study",
  }
];
const Blogs = [
  {
    name: "Blog Version 01",
    routerPath: "/blog-v1",
  },
  {
    name: "Blog Version 02",
    routerPath: "/blog-v2",
  },
  {
    name: "Blog Version 03",
    routerPath: "/blog-v3",
  },
  {
    name: "Blog Version 04",
    routerPath: "/blog-v4",
  },
  {
    name: "Blog Version 05",
    routerPath: "/blog-v5",
  },
  {
    name: "Blog Version 06",
    routerPath: "/blog-v6",
  },
  {
    name: "About Us",
    routerPath: "/about-cs",
  },
  
  {
    name: "Blog Details",
    routerPath: "/blog-details",
  },
];
const Docs = [
  {
    name: "Full Width",
    routerPath: "/doc-full-width",
  },
  {
    name: "Full Width Banner",
    routerPath: "/doc-full-width-banner",
  },
  {
    name: "Doc Box",
    routerPath: "doc-box",
  },
  {
    name: "Doc Box With Banner",
    routerPath: "/doc-box-with-banner",
  },
  {
    name: "Changelog ***",
    routerPath: "/changelog",
  },
];

const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown position-static active">
        <Link className="nav-link" >
          Home
        </Link>
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Services
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              BlockChain
            </a>
            <ul className="dropdown-menu">
              {BlockChain.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              XR
            </a>
            <ul className="dropdown-menu">
              {AboutUs.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Game
            </a>
            <ul className="dropdown-menu">
              {ContactUS.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Team
            </a>
            <ul className="dropdown-menu">
              {Team.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link className="dropdown-item" to="/faq">
              {" "}
              FAQ
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/faq-details">
              {" "}
              Faq Details
            </Link>
          </li> */}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Products
        </a>

        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              XR
            </a>
            <ul className="dropdown-menu">
              {Services.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Game
            </a>
            <ul className="dropdown-menu">
              {Miscellaneous.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Resourses
        </a>
        <ul className="dropdown-menu">
          {Portfolio.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Company
        </a>
        <ul className="dropdown-menu">
          {Blogs.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Docs
        </a> */}
      {/* <ul className="dropdown-menu">
          {Docs.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul> */}
      {/* /.dropdown-menu */}
      {/* </li> */}
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
