import React from "react";
import unity from "../../assets/images/assets/Frameworks/Frame 22.png"
import arimg from "../../assets/images/assets/Frameworks/Frame 31.png"
import csharp from "../../assets/images/assets/Frameworks/Frame 32.png"
import opengl from "../../assets/images/assets/Frameworks/Frame 33.png"
import arjsImg from "../../assets/images/assets/Frameworks/Frame 34.png"
import Ar2Img from "../../assets/images/assets/Frameworks/Frame 35.png"
import andriod from "../../assets/images/assets/Frameworks/Frame 36.png"
import ios from "../../assets/images/assets/Frameworks/Frame 37.png"
import mac from "../../assets/images/assets/Frameworks/Frame 38.png"
import windows from "../../assets/images/assets/Frameworks/Frame 39.png"
import visionpro from "../../assets/images/assets/Frameworks/Frame 40.png"
import vr from "../../assets/images/assets/Frameworks/Frame 41.png"
import ar from "../../assets/images/assets/Frameworks/Frame 42.png"


const socialContent = [
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-a",
    img: unity,
    link: "#",
    animationDelay: "",
  },
  {
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-b",
    img: arimg,
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-c",
    img: csharp,
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: opengl,
    link: "#",
    animationDelay: "150",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-e",
    img: arjsImg,
    link: "#",
    animationDelay: "200",
  },
  {
    classCol: "col-xl-4 col-lg-2 col-md-4 col-6",
    boxClass: "bx-f",
    img: Ar2Img,
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-g",
    img: andriod,
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-3 col-lg-3 col-md-4 col-6",
    boxClass: "bx-h",
    img: ios,
    link: "#",
    animationDelay: "150",
  },
  {
    classCol: "col-xl-3 col-lg-11 col-md-4 col-6",
    boxClass: "bx-i",
    img: mac,
    link: "#",
    animationDelay: "200",
  },
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-a",
    img: windows,
    link: "#",
    animationDelay: "",
  },
  {
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-b",
    img: visionpro,
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-c",
    img: vr,
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: ar,
    link: "#",
    animationDelay: "150",
  }
];

const SocialTwo = () => {
  return (
    <div className="row justify-content-center">
      {socialContent.map((val, i) => (
        <div
          className={val.classCol}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className={`img-box ${val.boxClass}`}>
            <a href="#">
              <img src={val.img} alt="logo" />
            </a>
          </div>
          {/* /.img-box */}
        </div>
      ))}

      {/* End .col */}
    </div>
  );
};

export default SocialTwo;
