import React from "react";
import { Link } from "react-router-dom";

const CallToActionTwo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title">
          <h6>Subscribe Now</h6>
          <h2>Subscriber to our Newsletter</h2>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="form-wrapper">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Email address" />
            <button>Subscribe</button>
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

export default CallToActionTwo;
