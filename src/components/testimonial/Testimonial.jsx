import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile2 from "../../assets/images/assets/Profile 2.png";
import Profile3 from "../../assets/images/assets/Profile 3.png";

export default function Testimonial() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  };

  const TestimonilContent = [
    {
      desc: `We cherish the solid bond we have established with Raiden. Their team's commitment and understanding of our requirements have made them a reliable collaborator.`,
      reviewerImg: Profile2,
      reviewerName: "Haritha Baskar",
      designation: "Client",
    },
    {
      desc: `Raiden's cost-effectiveness, combined with the results we have achieved, makes them an excellent choice.`,
      reviewerImg: Profile3,
      reviewerName: "Julian Alric",
      designation: "Client",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p className="font-gordita">{val.desc}</p>
          <div className="d-lg-flex align-items-center">
            <img
              src={val.reviewerImg}
              alt=""
              className="c_img"
            />
            <div className="info">
              <strong>{val.reviewerName}</strong> <span>{val.designation}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
