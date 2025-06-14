import React from "react";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const FooterThree = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-lg-4 col-12 footer-about-widget">
        <a
          href="index-doc.html"
          className="logo"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <img src="images/logo/deski_01.svg" alt="" />
        </a>
      </div>
      {/* /.about-widget */}

      <div
        className="col-lg-2 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <h5 className="footer-title">Services</h5>
        <ul>
          <li>
            <Link to="/blog-details">Web Design</Link>
          </li>
          <li>
            <Link to="/blog-details">Development</Link>
          </li>
          <li>
            <Link to="/blog-details">Wordpress</Link>
          </li>
          <li>
            <Link to="/blog-details">Online Marketing</Link>
          </li>
          <li>
            <Link to="/blog-details">Content</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div
        className="col-lg-2 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="footer-title">About us</h5>
        <ul>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/faq-details">Faq Details</Link>
          </li>
          <li>
            <Link to="/team-6">Team</Link>
          </li>
          <li>
            <Link to="/pricing-cs">Plan & Pricing</Link>
          </li>
          <li>
            <Link to="/blog-5">News</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div
        className="col-lg-3 col-md-4 address-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title">Contact Info</h5>
        <p className="font-gordita">
          432 Melbourne Stadium Market <br />
          Melbourne , Australia
        </p>
        <ul className="info">
          <li>
            <a href="mailto:ib-themes21@gmail.com">deskisupportinc@gmail.com</a>
          </li>
          <li>
            <a href="Tel: 7614123224" className="mobile-num">
              +761 412 3224
            </a>
          </li>
        </ul>
        {/* End ul */}
        <ul className="social-icon d-flex pt-15">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/*  /.footer-list  */}
    </div>
    //    /.row
  );
};

export default FooterThree;
