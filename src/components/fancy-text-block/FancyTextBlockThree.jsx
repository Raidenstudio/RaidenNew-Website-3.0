import React from "react";

const FancyTextBlockThree = ({ keyfeature }) => {
  return (
    <div className="row no-gutters">
      <div className="col-lg-6">
        <div className="feature-content light-bg">
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="images/icon/07.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>{keyfeature.name} </h4>
              <p>{keyfeature.description} </p>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.feature-list */}
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="images/icon/08.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>{keyfeature.name2}</h4>
              <p>{keyfeature.description2}</p>
            </div>
            {/* /.text-meta */}
          </div>
          {
            keyfeature.name3 && (
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="images/icon/08.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4> {keyfeature.name3}</h4>
              <p>{keyfeature.description3} </p>
            </div>
            {/* /.text-meta */}
          </div>
            )
          }
          {/* /.feature-list  */}
        </div>
        {/* /.feature-content */}
      </div>
      <div className="col-lg-6">
        <div className="feature-content dark-bg">
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="images/icon/07.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>{keyfeature.name4}</h4>
              <p>{keyfeature.description4} </p>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.feature-list */}
          <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="images/icon/08.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>{keyfeature.name5} </h4>
              <p>{keyfeature.description5}</p>
            </div>
            {/* /.text-meta */}
          </div>
      
          {
            keyfeature.name6 && (
                  <div
            className="feature-list d-flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="images/icon/08.svg" alt="icon" />
            </div>
            <div className="text-meta">
              <h4>{keyfeature.name6}</h4>
              <p>{keyfeature.description6}</p>
            </div>
            {/* /.text-meta */}
          </div>
            )
          }
          {/* /.feature-list  */}
        </div>{" "}
        {/* /.feature-content */}
      </div>
    </div>
  );
};

export default FancyTextBlockThree;
