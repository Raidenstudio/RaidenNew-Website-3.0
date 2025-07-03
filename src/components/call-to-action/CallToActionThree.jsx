import React from "react";
import { Link } from "react-router-dom";

const CallToActionThree = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title-style-one">
          <h6 className="font-gordita text-white" style={{ color: "#f96f60",fontSize:18 }}>
            Start your free consultation.
          </h6>
          <h2 className="text-white" style={{fontSize:40}}>New here?Get your free consultation now.</h2>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="form-wrapper">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Email address" />
            <button>Submit</button>
          </form>
          {/* End form */}
          <p className="font-gordita">
            Already a member? <Link to="login">Sign in.</Link>
          </p>
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToActionThree;
