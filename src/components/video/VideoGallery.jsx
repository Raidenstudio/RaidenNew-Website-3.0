import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import img1 from "../../assets/images/assets/ARservice/Chemicals, Oil & Gas.png"
import img2 from "../../assets/images/assets/ARservice/Games.png"
import img3 from "../../assets/images/assets/ARservice/Defense & Aviation.png"
import img4 from "../../assets/images/assets/ARservice/[onlinejsonformatter.com]-engineer-controls-robotic-arms-by-augmented-reality-industry-technology_31965-9203-large 1.png"
import img5 from "../../assets/images/assets/ARservice/Healthcare.png"
import img6 from "../../assets/images/assets/ARservice/Real Estate.png"

const VideoGalleryContent = [
  {
    img: img1,
    text1: "Chemicals, Oil &",
    text2: "Gas",
    animationDelay: "",
  },
  {
    img: img2,
    text1: "Games",
    text2: "",
    animationDelay: "50",
  },
  {
    img: img3,
    text1: "Defense &",
    text2: "Aviation",
    animationDelay: "100",
  },
  {
    img: img4,
    text1: "Manufacturing",
    text2: "",
    animationDelay: "150",
  },
  {
    img: img5,
    text1: "Healthcare",
    text2: "",
    animationDelay: "50",
  },
  {
    img: img6,
    text1: "Real Estate",
    text2: "",
    animationDelay: "100",
  },
  {
    img: img3,
    text1: "Marketing",
    text2: "",
    animationDelay: "150",
  },
  {
    img: img1,
    text1: "Entertainment",
    text2: "",
    animationDelay: "200",
  },
];

const VideoGallery = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="row justify-content-center">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qnwTVQlxs4g"
        onClose={() => setOpen(false)}
      />
      {VideoGalleryContent.map((val, i) => (
        <div
          className="col-xl-3 col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="block-style-twentyOne">
            <img src={val.img} alt="" className="w-100" />
            <div className="d-flex align-items-center justify-content-center flex-column video-button">
              <span>
                {val.text1} <br /> {val.text2}
              </span>
              {/* <span
                className="icon d-flex align-items-center justify-content-center"
                onClick={() => setOpen(true)}
              >
                <img src="images/icon/118.svg" alt="" />
              </span> */}
            </div>
          </div>
          {/* /.block-style-twentyOne */}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
