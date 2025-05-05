import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar
} from "react-pro-sidebar";

const menuData = {
  home: [
    { name: "Event Organiser", path: "/" },
    { name: "Project Management", path: "/project-management" },
    { name: "Customer Support", path: "/customer-support" },
    { name: "Doc landing", path: "/doc-landing" },
    { name: "Product landing", path: "/product-landing" },
    { name: "Product landing Dark", path: "/product-landing-dark" },
    { name: "Note Taking App landing", path: "/note-taking-landing" },
    { name: "Video Editor Landing", path: "/video-editor-landing" },
    { name: "Appointment Scheduling", path: "/appointment-scheduling" },
    { name: "Mobile App", path: "/mobile-app-landing" },
    { name: "Doc Signature", path: "/doc-signature" },
    { name: "Website Builder", path: "/website-builder" },
    { name: "Form Survey", path: "/form-survey-landing" },
    { name: "VR Landing", path: "/vr-landing" },
    { name: "E-Commerce", path: "/e-commerce" },
    { name: "Coming Soon", path: "/coming-soon" },
  ],
  pages: {
    pricing: [
      { name: "Customer Support", path: "/pricing-cs" },
      { name: "Event Organiser", path: "/pricing-eo" },
      { name: "Project Management", path: "/pricing-pm" },
    ],
    about: [
      { name: "Customer Support", path: "/about-cs" },
      { name: "Event Organiser", path: "/about-eo" },
      { name: "Project Management", path: "/about-pm" },
      { name: "Documentation", path: "/about-doc" },
    ],
    contact: [
      { name: "Custom Support", path: "/contact-cs" },
      { name: "Event Organizer", path: "/contact-eo" },
      { name: "Project Management", path: "/contact-pm" },
      { name: "Documentation", path: "/contact-doc" },
    ],
    team: [
      { name: "Team Version 01", path: "/team-1" },
      { name: "Team Version 02", path: "/team-2" },
      { name: "Team Version 03", path: "/team-3" },
      { name: "Team Version 04", path: "/team-4" },
      { name: "Team Version 05", path: "/team-5" },
      { name: "Team Version 06", path: "/team-6" },
      { name: "Team Details", path: "/team-details-v1" },
      { name: "Team Details Slider", path: "/team-details-v2" },
    ],
    faq: [
      { name: "FAQ", path: "/faq" },
      { name: "FAQ Details", path: "/faq-details" },
    ],
  },
  features: {
    services: [
      { name: "Service Version 01", path: "/service-v1" },
      { name: "Service Version 02", path: "/service-v2" },
      { name: "Service Version 03", path: "/service-v3" },
      { name: "Service Version 04", path: "/service-v4" },
      { name: "Service Details", path: "/service-details" },
    ],
    miscellaneous: [
      { name: "Terms & Condition", path: "/terms-conditions" },
      { name: "Login", path: "/login" },
      { name: "Signup", path: "/signup" },
      { name: "404", path: "/404" },
    ],
    solutions: [
      { name: "Our Solution", path: "/solution-management" },
      { name: "Product Feature", path: "/product-customer-support" },
      { name: "Our Features", path: "/features-customer-support" },
    ],
  },
  portfolio: [
    { name: "Classic Style", path: "/classic-style" },
    { name: "Grid 2 Columns", path: "/grid-two-col" },
    { name: "Grid 3 Columns", path: "/grid-three-col" },
    { name: "Gallery Slider", path: "/gallery-slider" },
    { name: "Grid Single", path: "/grid-single" },
    { name: "Classic Details", path: "/portfolio-details-v1" },
  ],
  blogs: [
    { name: "Blog Version 01", path: "/blog-v1" },
    { name: "Blog Version 02", path: "/blog-v2" },
    { name: "Blog Version 03", path: "/blog-v3" },
    { name: "Blog Version 04", path: "/blog-v4" },
    { name: "Blog Version 05", path: "/blog-v5" },
    { name: "Blog Version 06", path: "/blog-v6" },
    { name: "Blog Details", path: "/blog-details" },
  ],
  docs: [
    { name: "Full Width", path: "/doc-full-width" },
    { name: "Full Width Banner", path: "/doc-full-width-banner" },
    { name: "Doc Box", path: "/doc-box" },
    { name: "Doc Box With Banner", path: "/doc-box-with-banner" },
    { name: "Changelog", path: "/changelog" },
  ],
};

const MegaMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { collapseSidebar } = useProSidebar();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    collapseSidebar();
  };

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <MenuItem key={index} component={<Link to={item.path} />}>
        {item.name}
      </MenuItem>
    ));
  };

  return (
    <div className="mega-menu-wrapper">
      <div className="mega-swicher"></div>
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={toggleMenu}>
          <div className={isOpen ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <Sidebar
        className={isOpen ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
        collapsed={!isOpen}
        onToggle={toggleMenu}
      >
        <div className="logo position-static">
          <Link to="/">
            <img src="/images/logo/deski_07.svg" alt="home-demo" />
          </Link>
        </div>
        <div className="fix-icon text-dark" onClick={toggleMenu}>
          <img src="/images/icon/close-w.svg" alt="close menu" />
        </div>

        <Menu>
          <SubMenu label="Home">
            {renderMenuItems(menuData.home)}
          </SubMenu>

          <SubMenu label="Pages">
            <SubMenu label="Pricing" className="plus alt">
              {renderMenuItems(menuData.pages.pricing)}
            </SubMenu>

            <SubMenu label="About Us" className="plus alt">
              {renderMenuItems(menuData.pages.about)}
            </SubMenu>

            <SubMenu label="Contact Us" className="plus alt">
              {renderMenuItems(menuData.pages.contact)}
            </SubMenu>

            <SubMenu label="Team" className="plus alt">
              {renderMenuItems(menuData.pages.team)}
            </SubMenu>

            {renderMenuItems(menuData.pages.faq)}
          </SubMenu>

          <SubMenu label="Features">
            <SubMenu label="Services" className="plus alt">
              {renderMenuItems(menuData.features.services)}
            </SubMenu>

            <SubMenu label="Miscellaneous" className="plus alt">
              {renderMenuItems(menuData.features.miscellaneous)}
            </SubMenu>

            {renderMenuItems(menuData.features.solutions)}
          </SubMenu>

          <SubMenu label="Portfolio">
            {renderMenuItems(menuData.portfolio)}
          </SubMenu>

          <SubMenu label="Blogs">
            {renderMenuItems(menuData.blogs)}
          </SubMenu>

          <SubMenu label="Docs">
            {renderMenuItems(menuData.docs)}
          </SubMenu>

          <MenuItem component={<Link to="/login" />}>Login</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MegaMenuMobile;