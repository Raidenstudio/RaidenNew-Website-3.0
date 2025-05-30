import React from "react";

const FancyBlock = () => {
  const fancyBlockCotent = [
    {
      id: 1,
      icon: "203",
      title: "Healthcare",
      text: `Simplify the process to create proposals.`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "204",
      title: "Education",
      text: `Return money within 7 days only!`,
      delayAnim: "100",
    },
    {
      id: 3,
      icon: "205",
      title: "Manufacturing",
      text: `We ensure secure payment with PEV`,
      delayAnim: "200",
    },
    {
      id: 4,
      icon: "206",
      title: "IT",
      text: `We provide world best security system`,
      delayAnim: "300",
    },
    ,
    {
      id: 5,
      icon: "206",
      title: "Finance",
      text: `We provide world best security system`,
      delayAnim: "300",
    }
    ,
    {
      id: 6,
      icon: "206",
      title: "Retail",
      text: `We provide world best security system`,
      delayAnim: "300",
    }
    ,
    {
      id: 7,
      icon: "206",
      title: "Hospitality",
      text: `We provide world best security system`,
      delayAnim: "300",
    }
    ,
    {
      id: 8,
      icon: "206",
      title: "Energy and Utilities",
      text: `We provide world best security system`,
      delayAnim: "300",
    }
  ];

  return (
    <>
      {fancyBlockCotent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="block-style-thirtyNine mt-40 text-center">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={`images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <h3>{item.title}</h3>
            {/* <p className="ps-xl-3 pe-xl-3">{item.text}</p> */}
          </div>
          {/* <!-- /.block-style-thirtyNine --> */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock;
