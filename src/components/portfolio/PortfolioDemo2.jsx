import React from "react";
import { TfiArrowTopLeft } from "react-icons/tfi";

const PortfolioContent = [
    {
        title: "Fixed price model",
        description:
            "Predictability is the foundation of our development process, which includes a detailed description of the work's scope, related expenses, and delivery schedule up front.",
    },
    {
        title: "Hire Dedicated Model",
        description:
            "Employ a dedicated team of developers to handle the unique requirements of your project with care. With this hourly-rate model, you are in charge and can guarantee precise cost control and concentrated effort.",
    },
    {
        title: "Onsite model",
        description:
            "Our qualified developers can be immediately incorporated into your team, offering short-term, contract-based resources for direct on-site development.",
    },
];

const PortfolioDemo2 = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div class="card col-4 d-flex justify-content-center align-items-start">
                    {PortfolioContent.map((val, i) => (
                        <a class="card1 col-4" href="#">
                            <h3 className="font-raleway title-text mb-4 fw-bold text-black">{val.title}</h3>
                            <div className="card-line"></div>
                            <p className="small desc-text text-black" style={{fontSize:'18px'}}>{val.description}</p>
                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    <TfiArrowTopLeft />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDemo2;
