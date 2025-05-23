import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import { Link } from "react-router-dom";
import TeamThree from "../../../../components/team/TeamThree";

const Team3 = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Team V3 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/*  =============================================
				Fancy Hero One
			============================================== */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <h2 className="font-gordita">We’ve Most Talented Team Members</h2>
            </div>
            <div className="col-xl-9 col-lg-11 m-auto">
              <p className="font-gordita">
                With deski, get all kind of business solution to start your
                journey
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

      {/* =====================================================
				Team Section One
			===================================================== */}
      <div className="team-section-one">
        <div className="container">
          <TeamThree />
        </div>
      </div>
      {/* /.team-section-one */}

      {/* =====================================================
           	Fancy Short Banner Eleven
        ===================================================== */}
      <div className="fancy-short-banner-eleven bg-color mt-70 mb-50 md-mb-20 md-mt-30">
        <div className="container">
          <div className="clearfix">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <h2
                  className="font-gordita"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Want to be a part of our talented team?
                </h2>
                <Link
                  className="theme-btn-one btn-lg mt-50 md-mt-30"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  to="/contact-cs"
                >
                  SEND YOUR CV
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <img
          src="images/shape/212.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/213.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* /.fancy-short-banner-eleven */}

      {/* 	=====================================================
            Footer Style One
        ===================================================== */}
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

export default Team3;
