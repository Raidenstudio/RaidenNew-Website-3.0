import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Blockchain from "../../assets/images/assets/blockchain.svg";

const FancyVideoFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      
      <div className="row align-items-center justify-content-between pt-100">
        <div className="col-lg-6 col-md-12 order-lg-last">
          <div className="text-wrapper pt-0">
            <div className="title-style-two mb-35 md-mb-20">
              <h2 className="">
                <span style={{whiteSpace: "nowrap"}}>
                Blockchain Gaming {" "}
                  {/* <img src="images/shape/line-shape-5.svg" alt="icon" style={{width: "90%", left: "0px", marginBottom:"13px",}}/> */}
                </span> <br />
                Excellence              </h2>
            </div>
            {/* <!-- /.title-style-two --> */}
            <p className="">
            We are pioneers in blockchain gaming, merging technical and artistic vision to create groundbreaking digital experiences.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 order-lg-first">
          <div >
            <img className="w-100 h-70" style={{height:500}} src={Blockchain} alt="media" />
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
