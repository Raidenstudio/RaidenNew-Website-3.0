import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const FancyFeatureTewentNine = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-lg-6 mt-40" data-aos="fade-up">
          <div
            className="block-style-twentyNine"
            style={{ background: "#623A75" }}
          >
            <div className="logo">
           <h3 style={{color: "grey"}}>Genesis Phase</h3> 
            </div>
            <h3>
              <p style={{lineHeight: "50px"}}> 
              Initially recording the clients needs, researching the industry and ideal project parameter specification.

              </p>
            </h3>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#314B7D" }}
          >
            <div className="logo">
           <h3 style={{color: "grey"}}> Design of UI/UX</h3>
            </div>
            <h3>
              <p style={{lineHeight: "50px"}}>
              Modelizing the surface and inner workings of the project with UI/UX's perfect pitch. 
              </p>
            </h3>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up">
          <div
            className="block-style-twentyNine"
            style={{ background: "#2B4E56" }}
          >
            <div className="logo">
          <h3 style={{color: "grey"}}>  Prototype  </h3>          </div>
            <h3>
              <p style={{lineHeight: "50px"}}>
              Enhancing the pre-original version with the unique touch and consulting feedback to guarantee a flawless featured project.
              </p>
            </h3>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#7A4040" }}
          >
            <div className="logo">
           <h3  style={{color: "grey"}} >Develop Ecosystem</h3>
            </div>
            <h3>
              <p style={{lineHeight: "50px"}}>
              Creating complete developed trading with integrating NFTs, token systems, engaging 3D to facilitate effective user trading. 
              </p>
            </h3>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#623A75" }}
          >
            <div className="logo">
           <h3 style={{color: "grey"}}> Development</h3>
            </div>
            <h3>
              <p style={{lineHeight: "50px"}}>
              Bringing the metaverse to life with code and programming, directly accomplishing your objectives.
              </p>
            </h3>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#314B7D" }}
          >
            <div className="logo">
          <h3 style={{color: "grey"}}>  Testing and Deployment</h3>
            </div>
            <h3>
              <p style={{lineHeight: "50px"}}>
              We test the safety, performance, and functionality of the metaverse project on your chosen platforms.              </p>
            </h3>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default FancyFeatureTewentNine;
