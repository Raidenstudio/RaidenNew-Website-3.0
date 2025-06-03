import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SignUpForm from "../../../../components/contact/form/SignUpForm";

const SignUp = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Sign Up || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-gordita">
            We have a “strategic” plan its <br /> called doing things.
          </h3>
          <div className="illustration-holder">
            <img
              src="images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper  */}

        <div className="form-wrapper">
          {/* End d-flex */}
          <div className="mt-30">
            <h2>Get a Free Quote Today</h2>
            <p className="header-info pt-30 pb-50">
              Please fill out the quick form and we will be in touch with lightening speed.
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
