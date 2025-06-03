import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      image: "img_117",
      title: "Data Backups",
      productLink: "#",
      price: "72.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      paragraph: "Securing your data with encryption by providing and maintaining a proper backup plan without any defects."
    },
    {
      _id: 2,
      image: "img_117",
      title: "Data Protection",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We protect sensitive information, game assets, and user data from unauthorized access through robust security and privacy protocols."

    },
    {
      _id: 3,
      image: "img_117",
      title: "Quality Deliverance",
      productLink: "#",
      price: "382.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "Rendering service with highly standardized quality assurance that ensures professional excellence in all aspects of your project."

    },
    {
      _id: 4,
      image: "img_117",
      title: "Enhancement",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We appreciate your feedback and suggestions for our expert technicians to complete your project to your full satisfaction."
    },
    {
      _id: 4,
      image: "img_117",
      title: "Client centric",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "Clients needs are verified across the web, mobile, and blockchain to provide solutions and make a way for the growth of business."
    },
    {
      _id: 4,
      image: "img_117",
      title: "Agile Development",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "We employ agile development to finish projects fast and flexibly while providing ongoing feedback and on-time delivery of functional features."
    },
    {
      _id: 4,
      image: "img_117",
      title: "Dedicated Development Team",
      productLink: "#",
      price: "27.00",
      rating: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
      paragraph: "Take charge of your project with our talented development team, a full-time integrated unit of professionals dedicated to its success."
    },
    {
      _id: 4,
      image: "img_117",
      title: "Excellent Support",
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
            <div className="block-style-thirtySeven">
              <div className="img-meta d-flex align-items-center justify-content-center">
                <img
                  src={`images/media/${product.image}.png`}
                  alt="vr product"
                />
              </div>
              <h4 className="p-title mt-25 text-start">
                <a className="text-black" href={product.productLink}>{product.title}</a>
                <p className="text-black mt-3">
                  {product.paragraph}
                </p>
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default LatestProduct;
