import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import industry1 from "../../assets/Home/Manufacturing/concept.png";
// import industry2 from "../../assets/Home/Manufacturing/tactics.png";
// import industry3 from "../../assets/Home/Manufacturing/Point.png";
// import industry4 from "../../assets/Home/Manufacturing/Execute.png";
// import industry5 from "../../assets/Home/Manufacturing/Assessment.png";
// import industry6 from "../../assets/Home/Manufacturing/Setting.png";

// const PortfolioSteps = [
//   {
//     id: "01",
//     title: "The Concept",
//     desc: "Our expertise and attention to detail enable us to meticulously plan, shape, and transform your idea into a successful solution.",
//     image: industry1,
//   },
//   {
//     image: industry2,
//     id: "02",
//     title: "The Tactics",
//     desc: "Establishing clear, milestone-driven project timelines and selecting the most qualified team are made easier by your goals.",
//   },
//   {
//     image: industry3,
//     id: "03",
//     title: "Point of Origin",
//     desc: "We transform wireframe designs and preliminary concepts into a responsive prototype that offers a clear picture of the final user interface.",
//   },
//   {
//     image: industry4,
//     id: "04",
//     title: "Execute",
//     desc: "Create your project with Raiden's suitable tools and technology by utilizing the project score, timeline, and many other features.",
//   },
//   {
//     image: industry5,
//     id: "05",
//     title: "Assessment",
//     desc: "Products are tested using both the best manual and the most sophisticated automated testing methods to ensure they are thoroughly inspected and free of errors.",
//   },
//   {
//     image: industry6,
//     id: "06",
//     title: "Setting Up",
//     desc: "We guarantee timely delivery of your desired quality while considering all of your suggestions and ideas.",
//   },
// ];


const MobileAppPortfolio = ({PortfolioSteps}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
 

  return (
    <div className="mobile-app-portfolio-wrapper ">
      <div className="text-center mb-xl-5">
        {/* <h2 className="fw-bold mb-xxl-5" style={{ fontFamily: 'Raleway, sans-serif' }} >Our Development Approach From <br /> Ideology to Launch</h2> */}
        {/* <p className="text-muted mb-5">
          Explore our beautifully designed and highly functional mobile apps crafted for various industries.
        </p> */}
      </div>

      <Slider {...settings}>
        {PortfolioSteps.map((val, i) => (
          <div className="item" key={i} >
            <div
              className={`img-holder ${i === activeIndex ? "active" : ""}`}
              style={{
                backgroundImage: i === activeIndex ? `url(${val.image})` : "none",
              }}
            >
              <div className="overlay-content px-4 py-5">
                <h4 className={`title-text mb-4 fw-bold ${i === activeIndex ? "text-white" : "text-dark"}`}  >
                  {val.id}
                </h4>
                <h4 className={`title-text mb-4 fw-bold ${i === activeIndex ? "text-white" : "text-dark"}`} style={{ fontFamily: 'Raleway, sans-serif', font: 'bold' }}>
                  {val.title}
                </h4>
                <p className={`desc-text ${i === activeIndex ? "text-white" : "text-dark"}`}>
                  {val.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileAppPortfolio;
