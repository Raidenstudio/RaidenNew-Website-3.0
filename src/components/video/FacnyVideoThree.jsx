import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FacnyVideoThree = () => {
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

      <div className="row align-items-center">
        <div
          className="col-lg-6"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="text-wrapper pe-5">
            <h6>EXPERIENCE</h6>
            <h3 className="title">Why should you entrust Raiden with DeFi?
            </h3>
            <p>
            Our experienced developers possess a profound knowledge of blockchain technology, enabling us to provide our clients with captivating financial solutions that unleash the transformative possibilities of this technology for your DeFi application.
            </p>
          </div>
          {/* /.text-wrapper */}
        </div>
        <div
          className="col-lg-6 col-md-8 m-auto"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img src="images/media/img_83.png" alt="media" className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default FacnyVideoThree;
