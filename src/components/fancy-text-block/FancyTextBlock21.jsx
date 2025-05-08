import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "../../assets/images/shape/138.svg";
 
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
              src={Image}
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
 
            <div className="client-info text-start">
            WHY CHOOSE RAIDEN
            </div>
            <p className="text-start">
            Raiden gestalts the digital worlds that effortlessly blend the <span style={{textDecoration: "none"}}>virtual</span> and <span style={{textDecoration: "none"}}>real</span> dimensions.</p>          </div>
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