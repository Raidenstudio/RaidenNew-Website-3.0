import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Blockchain from "../../assets/images/assets/blockchain.svg";

const FancyVideoFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      /> */}
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-last">
          <div className="text-wrapper pt-0">
            <div className="title-style-two mb-35 md-mb-20">
              <h2>
                <span style={{whiteSpace: "nowrap"}}>
                Blockchain Gaming {" "}
                  <img src="images/shape/line-shape-5.svg" alt="icon" style={{width: "90%", left: "0px", marginBottom:"13px",}}/>
                </span>
                Excellence              </h2>
            </div>
            {/* <!-- /.title-style-two --> */}
            <p>
            We are pioneers in blockchain gaming, merging technical and artistic vision to create groundbreaking digital experiences.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 order-lg-first">
          <div >
            <img className="w-100" src={Blockchain} alt="media" />
            <div
              onClick={() => setOpen(true)}
              className="fancybox video-button d-flex align-items-center justify-content-center"
            >
            </div>
          </div>
          {/* <!-- /.video-box --> */}
        </div>
      </div>
    </>
  );
};

export default FancyVideoFive;
