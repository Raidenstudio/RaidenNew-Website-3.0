import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "5",
    endPointText: "+",
    meta: " Experience",
    animationDelay: "0",
    // bgColor: "#25E5DA",
  },
  {
    startCount: "0",
    endCount: "50",
    endPointText: "+",
    meta: " Employees",
    animationDelay: "100",
    // bgColor: "#FF36AF",
  },
  {
    startCount: "0",
    endCount: "100",
    endPointText: "%",
    meta: "Job success",
    animationDelay: "200",
    // bgColor: "#FFB13A",
  },
  {
    startCount: "0",
    endCount: "20",
    endPointText: "+",
    meta: "Countries ",
    animationDelay: "200",
    // bgColor: "#FFB13A",
  },
];

const CounterSix = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center ">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="counter-box-five text-center pt-30 pb-5">
            <div className="dot" style={{ background: val.bgColor }}></div>
            <h2 className="number font-gordita text-white" style={{fontSize:40}}>
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
            <p className="text-white">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterSix;
