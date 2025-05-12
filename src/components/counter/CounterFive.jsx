import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "50",
    endPointText: "+",
    countMeta: "App Developed",
    meta: "App Developed",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "30",
    endPointText: "+",
    countMeta: "Team Members",
    meta: "Team Members",
    animationDelay: "50",
  },
  {
    startCount: "0",
    endCount: "100",
    endPointText: "%",
    countMeta: "Satisfaction Rate",
    meta: "Satisfaction Rate",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "10",
    endPointText: "%",
    countMeta: "Years of Experience",
    meta: "Years of Experience",
    animationDelay: "150",
  },

];

const CounterFive = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="counter-box-two">
            <h2 className="number">
              <span className="timer">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </span>
              {val.endPointText}
            </h2>
            {/* <em>{val.countMeta}</em> */}
            <p className="font-rubik">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterFive;
