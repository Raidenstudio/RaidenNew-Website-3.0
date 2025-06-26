import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agile from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/Agile-Dev.png'
import clint from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/Client-centric-dev.png'
import dedi from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/Dedicated-Dev-team.png'
import enha from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/Enhancement.png'
import data from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/data-backup.png'
import production from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/data-protection.png'
import Excellent from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/Excellent-support.png'
import Quality from '../../assets/images/assets/Delivering-Excellence-to-Transform-Businesses/Quality-Deliverance.png'


const LatestProduct = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const vrProducts = [
    {
      _id: 1,
      image: data,
      title: "Encryption",
      productLink: "#",
      price: "72.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      paragraph: "Securing your data with encryption by providing and maintaining a proper backup plan without any defects."
    },
    {
      _id: 2,
      image: production,
      title: "Secured Data ",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We protect sensitive information, game assets, and user data from unauthorized access through robust security and privacy protocols."

    },
    {
      _id: 3,
      image: Quality,
      title: "Better Quality ",
      productLink: "#",
      price: "382.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "Rendering service with highly standardized quality assurance that ensures professional excellence in all aspects of your project."

    },
    {
      _id: 4,
      image: enha,
      title: "Refinement ",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We appreciate your feedback and suggestions for our expert technicians to complete your project to your full satisfaction."
    },
    {
      _id: 5,
      image: clint,
      title: "Customer-focused",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "Clients needs are verified across the web, mobile, and blockchain to provide solutions and make a way for the growth of business."
    },
    {
      _id: 6,
      image: agile,
      title: "Agile Development",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We employ agile development to finish projects fast and flexibly while providing ongoing feedback and on-time delivery of functional features."
    },
    {
      _id: 7,
      image: dedi,
      title: " Tech Experts",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "Take charge of your project with our talented  team, a full-time integrated unit of professionals dedicated to its success."
    },
    {
      _id: 8,
      image: Excellent,
      title: "End to end support",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We always give you our best assistance and service to meet our clients needs and deliver a complete experience."
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {vrProducts.map((product) => (
          <div className="item" key={product._id}>
            <div className="block-style-thirtySeven rounded">
              <div className="img-meta d-flex align-items-center justify-content-center">
                <img
                  src={product.image}
                  alt="vr product" style={{borderRadius:'6px'}}
                />
              </div>
              {/* <h4 className="p-title mt-25 text-start"> */}
                <h3 className="text-black font-raleway fw-bold p-title mt-25 text-start" >{product.title}</h3>
                <p className="text-black mt-3 text-start opacity-75">
                  {product.paragraph}
                </p>
              
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default LatestProduct;
