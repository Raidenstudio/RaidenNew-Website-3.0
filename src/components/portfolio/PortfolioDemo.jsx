import React from "react";
import { FaArrowRight } from "react-icons/fa"; // install with: npm install react-icons

const PortfolioContent = [
    {
        title: "Ideation",
        description:
            "Brainstorm creative ideas and come up with a plan to turn them into a successful smart solution.",
    },
    {
        title: "Design",
        description:
            "Designing intuitive and engaging user interfaces for enhanced user experience.",
    },
    {
        title: "Development",
        description:
            "Developing scalable and performant applications tailored to your business needs.",
    },
];

const PortfolioDemo = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                {PortfolioContent.map((val, i) => (
                    <div className="col-md-4 mb-4 d-flex justify-content-center" key={i}>
                        <div className="custom-card p-4 rounded-4 h-100 position-relative">
                            <h5 className="fw-bold mb-2">{val.title}</h5>
                            <p className="mb-0">{val.description}</p>
                            <span className="arrow-icon">
                                <FaArrowRight />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioDemo;
