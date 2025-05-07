import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyTextBlock21 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="row align-items-center">
        <div
          className="col-lg-6 col-md-7 m-auto"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-meta">
            <img src="images/media/img_72.png" alt="media" className="m-auto" />
            <img
              src="images/shape/138.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
        </div>
        {/* End .col */}

        <div
          className="col-xl-5 col-lg-6 ms-auto"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="text-wrapper md-pt-50">
            <a className="fancybox" onClick={() => setOpen(true)}>
              <img src="images/icon/71.svg" alt="icon" className="icon" />
            </a>

            <div className="client-info">
            WHY CHOOSE RAIDEN?
            </div>
            <p>
            Raiden, a proactive development company that bridges the virtual and real worlds, can help you unlock the metaverse's potential by creating engaging digital spaces with limitless opportunities for significant interaction.
            </p>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}
      </div>

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

export default FancyTextBlock21;
