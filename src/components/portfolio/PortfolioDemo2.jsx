import React from "react";
import { FaArrowRight } from "react-icons/fa";

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

const PortfolioDemo2 = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div class="card col-4">
                    {PortfolioContent.map((val, i) => (
                        <a class="card1 col-4" href="#">
                            <p>{val.title}</p>
                            <p class="small">{val.description}</p>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
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
