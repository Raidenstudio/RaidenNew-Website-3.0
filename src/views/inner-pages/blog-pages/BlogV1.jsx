import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import BlogStyle1 from "../../../components/blog/BlogStyle1";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";

const BlogV1 = () => {
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

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="feature-blog-one blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <BlogStyle1 />
          </div>
          {/* End .row */}
          <div
            className="text-center mt-30 md-mt-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            <a href="#" className="theme-btn-one">
              Show More
            </a>
          </div>
        </div>
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

export default BlogV1;
