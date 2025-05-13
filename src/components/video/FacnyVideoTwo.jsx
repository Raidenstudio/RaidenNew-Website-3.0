import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FacnyVideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="mcvqOUtcAJg"
        onClose={() => setOpen(false)}
      />

      <div className="row align-items-center">
        <div
          className="col-lg-6 order-lg-last"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="text-wrapper ps-5">
            <h6>SERVICES</h6>
            <h3 className="title">Backup your financial future with DeFi
            </h3>
            <p>
            Explore the changing financial terrain and discover new opportunities. Our specialized DeFi development services promote innovation, increase financial accessibility, and boost your business. Together, let us shape the future of finance.
            </p>
          </div>
          {/* /.text-wrapper */}
        </div>
        <div
          className="col-lg-6 col-md-8 m-auto order-lg-first"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img src="images/media/img_82.png" alt="media" className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default FacnyVideoTwo;
