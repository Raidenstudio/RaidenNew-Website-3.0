import React from "react";
import icon1 from "../../assets/images/icon/190.svg";
import icon2 from "../../assets/images/icon/191.svg";
import icon3 from "../../assets/images/icon/192.svg";
import icon4 from "../../assets/images/icon/193.svg";

const HowWorks = () => {
  const surveyContent = [
    {
      _id: 1,
      icon: icon1,
      title: "Innovation",
      descriptions: `Solving technical problems using blockchain technology`,
      bgColor: "#F0F0FF",
      delayAnimation: "0",
    },
    {
      _id: 2,
      icon: icon2,
      title: "Accessible",
      descriptions: `Providing a seamless Web3 experience for every user`,
      bgColor: "#FCF2DA",
      delayAnimation: "100",
    },
    {
      _id: 3,
      icon: icon3,
      title: "Long-term scalability",
      descriptions: ` Ensuring optimized and secure contracts`,
      bgColor: "#EBFBED",
      delayAnimation: "200",
    },
   
  ];
  return (
    <>
      {surveyContent.map((survey) => (
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay={survey.delayAnimation}
          key={survey._id}
        >
          <div className="block-style-thirtyFive text-center mt-30">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: survey.bgColor }}
            >
              <img src={survey.icon} alt="survey icon" />
            </div>
            <h4>{survey.title}</h4>
            <p>{survey.descriptions}</p>
          </div>
          {/* <!-- /.block-style-thirtyFive --> */}
        </div>
      ))}
    </>
  );
};

export default HowWorks;
