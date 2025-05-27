import React from "react";

const Features2 = () => {
    return (
        <div className="row">
            <div className="col-xl-6 col-lg-7 order-lg-last" data-aos="fade-left">
                <div className="ps-lg-5">
                    <div className="title-style-fourteen">
                        {/* <div className="upper-title">Made for human</div> */}
                        <h2>How We Help Industry Leaders</h2>
                    </div>
                    <div className="tag-line">
                        We collaborate closely with industry leaders to create learning experiences that truly have an impact. Through the use of interactive simulations and practical assistance, we assist teams in:
                    </div>
                    <ul className="list-item">
                        <li>Gain knowledge more quickly and become more powerful.</li>
                        <li>Think creatively and find solutions to practical issues.</li>
                        <li>Increase productivity and enhance daily performance.</li>
                        <li>Improve their connections with their clients.</li>
                        <li>Be ready for the next developments in their field.</li>
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

export default Features2;
