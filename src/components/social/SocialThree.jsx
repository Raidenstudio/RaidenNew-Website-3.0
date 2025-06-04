import React, { useState } from "react";
import Aero from "../../assets/images/assets/Aerospace.png";
import Auto from "../../assets/images/assets/automotive.png";
import Aviation from "../../assets/images/assets/Aviation.png";
import Defence from "../../assets/images/assets/Defence.png";
import Education from "../../assets/images/assets/education.png";
import Game from "../../assets/images/assets/gaming.png";
import Goods from "../../assets/images/assets/goods.png";
import Care from "../../assets/images/assets/Health care.png";
import Hospital from "../../assets/images/assets/hospitality.png";
import Manufacture from "../../assets/images/assets/Manufacturing.png";
import Oil from "../../assets/images/assets/Oil & Gas.png";
import Real from "../../assets/images/assets/Real Estate.png";
import Tourism from "../../assets/images/assets/Tourism.png";
import "./SocialThree.css";

const socialContent = [
  {
    name: "Automotive",
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-a",
    img: Auto,
    link: "#",
    animationDelay: "",
  },
  {
    name: "Aerospace",
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-b",
    img: Aero,
    link: "#",
    animationDelay: "50",
  },
  {
    name: "Defence",
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-c",
    img: Defence,
    link: "#",
    animationDelay: "100",
  },
  {
    name: "Aviation",
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: Aviation,
    link: "#",
    animationDelay: "150",
  },
  {
    name: "Education",
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-e",
    img: Education,
    link: "#",
    animationDelay: "200",
  },
  {
    name: "Gaming",
    classCol: "col-xl-4 col-lg-2 col-md-4 col-6",
    boxClass: "bx-f",
    img: Game,
    link: "#",
    animationDelay: "50",
  },
  {
    name: "Consumer Goods",
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-g",
    img: Goods,
    link: "#",
    animationDelay: "100",
  },
  {
    name: "Health care",
    classCol: "col-xl-3 col-lg-3 col-md-4 col-6",
    boxClass: "bx-h",
    img: Care,
    link: "#",
    animationDelay: "150",
  },
  {
    name: "Hospitality",
    classCol: "col-xl-3 col-lg-11 col-md-4 col-6",
    boxClass: "bx-i",
    img: Hospital,
    link: "#",
    animationDelay: "200",
  },
  {
    name: "Manufacturing",
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-a",
    img: Manufacture,
    link: "#",
    animationDelay: "",
  },
  {
    name: "Oil & Gas",
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-b",
    img: Oil,
    link: "#",
    animationDelay: "50",
  },
  {
    name: "Real Estate",
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: Real,
    link: "#",
    animationDelay: "150",
  },
  {
    name: "Tourism",
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: Tourism,
    link: "#",
    animationDelay: "150",
  }
];

const SocialThree = () => {
  const [selectedName, setSelectedName] = useState(null);

  const handleClick = (name) => {
    setSelectedName(selectedName === name ? null : name);
  };

  return (
    <div>
      <div className="row justify-content-center">
        {socialContent.map((val, i) => (
          <div
            className={val.classCol}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.animationDelay}
            key={i}
            onClick={() => handleClick(val.name)}
            style={{ cursor: "pointer" }}
          >
            <div className={`img-box ${val.boxClass}`}>
              <img src={val.img} alt={val.name} />
              {selectedName === val.name && (
                <div className="image-overlay-text">
                  {val.name}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialThree;
