import React from "react";

const Features3 = () => {
    return (
        <div className="row">
            <div className="col-xl-6 col-lg-7 order-lg-last" data-aos="fade-left">
                <div className="ps-lg-5">
                    <div className="title-style-fourteen">
                        {/* <div className="upper-title">Made for human</div> */}
                        <h2>Raiden's Core Commitments</h2>
                    </div>
                    <div className="tag-line">
                        At Raiden, we're driven by a clear set of principles:
                    </div>
                    <ul className="list-item">
                        <li>Strive for constant innovation to provide you with the greatest learning solutions.</li>
                        <li>Provide each client with unmatched support and service.</li>
                        <li>Encourage a culture that prioritizes diversity, inclusivity, and genuine teamwork.</li>
                        <li>Act with integrity, ethics, and professionalism at all times.</li>
                    </ul>
                </div>
            </div>
            {/* Emd .col */}

            <div
                className="col-xl-6 col-lg-5 text-center text-lg-left order-lg-first"
                data-aos="fade-right"
            >
                <div className="illustration-holder d-inline-block md-mt-60">
                    <img src="images/assets/ils_23.svg" alt="" className="w-100" />
                    <img
                        src="images/assets/ils_23.1.svg"
                        alt=""
                        className="shapes shape-one"
                    />
                    <img
                        src="images/assets/ils_23.2.svg"
                        alt=""
                        className="shapes shape-two"
                    />
                    <img
                        src="images/assets/ils_23.3.svg"
                        alt=""
                        className="shapes shape-three"
                    />
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default Features3;
