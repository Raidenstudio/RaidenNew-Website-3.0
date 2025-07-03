import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBannerSix = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="row">
        <div className="">
          <h1 
            className="font-raleway hero-heading text-center "
           
          >
            Galaxies of Gameplay <br />  An Unreal Engine Resource
          </h1>
          {/* <p
            className="hero-sub-heading"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
           Game Development
          </p> */}
          {/* <div className="d-sm-flex align-items-center button-group">
            <div
              className="d-flex align-items-center video-button fancybox order-sm-last"
              onClick={() => setOpen(true)}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <img
                src="images/icon/play-circle.svg"
                alt="icon"
                className="icon"
              />
              <span>See Intro Video</span>
            </div>
            <a
              href="#"
              className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one order-sm-first"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src="images/icon/apple.svg" alt="icon" className="icon" />
              <div>
                <span>Download on the</span>
                <strong>App store</strong>
              </div>
            </a>
          </div> */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="FDaF8_5dzzk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default HeroBannerSix;
