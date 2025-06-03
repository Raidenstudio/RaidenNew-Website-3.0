import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import automotiveImg from "../../assets/Home/Industries/Automobile.png";
import hospitalityImg from "../../assets/Home/Industries/Hospitality.png";
import consumerGoodsImg from "../../assets/Home/Industries/Consumer Goods.png";
import educationImg from "../../assets/Home/Industries/Education.png";
import gamingImg from "../../assets/Home/Industries/Gaming.png";
import healthcareImg from "../../assets/Home/Industries/Health care.png";
import aviationImg from "../../assets/Home/Industries/Aviation.png";
import manufacturingImg from "../../assets/Home/Industries/manufacturing.png";
import realEstateImg from "../../assets/Home/Industries/Real Estate.png";
import tourismImg from "../../assets/Home/Industries/Tourism.png";

const IndustriesData = [
  {
    id: "01",
    image: automotiveImg,
    title: "Automotive",
    desc: "We are collaborating with the automotive sector to develop smarter, safer, and more fashionable transportation options."
  },
  {
    id: "02",
    image: hospitalityImg,
    title: "Hospitality",
    desc: "Ensure your guests are satisfied and your business runs smoothly. Our goals are to enhance your service and make those incredible experiences even better."
  },
  {
    id: "03",
    image: consumerGoodsImg,
    title: "Consumer Goods",
    desc: "We're transforming the way that products are conceived, produced, and consumed by bringing brands and customers together through efficient production and engaging interaction."
  },
  {
    id: "04",
    image: educationImg,
    title: "Education",
    desc: "We change classrooms and study techniques to make them more interesting and accessible for all students, regardless of where they learn or how they learn it. Learning should be fun."
  },
  {
    id: "05",
    image: gamingImg,
    title: "Gaming",
    desc: "Get ready for the next epic adventure with us. We are creating incredible, immersive worlds and rock-solid platforms that will redefine what it means to be fun."
  },
  {
    id: "06",
    image: healthcareImg,
    title: "Health care",
    desc: "Improving healthcare for all is something we are passionate about. We facilitate medical progress, simplify care, and assist clinics and hospitals with operations management."
  },
  {
    id: "07",
    image: aviationImg,
    title: "Aviation",
    desc: "We assist airlines and aerospace businesses in streamlining everything from training to maintenance, guaranteeing effective and safe travel."
  },
  {
    id: "08",
    image: manufacturingImg,
    title: "Manufacturing",
    desc: "We're updating factories for the modern era. Develop more productive manufacturing lines that enable companies to achieve remarkable outcomes with a smaller amount of working capital."
  },
  {
    id: "09",
    image: realEstateImg,
    title: "Real Estate",
    desc: "We're making it simpler to manage procedures, visualize properties, and locate precisely what you're looking for, making every step more transparent."
  },
  {
    id: "10",
    image: tourismImg,
    title: "Tourism",
    desc: "Helping people travel the world is something we love. We simplify planning and create memorable experiences for both tourists and the establishments that host them."
  }
];


const MobileAppScreenSlider = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {IndustriesData.map((val, i) => (
          <div className="item" key={i}>
            <div className="img-holder img-holder-industry">
              <img src={val.image} alt="screen" />
              <div className="img-holder-industry-content">
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MobileAppScreenSlider;
