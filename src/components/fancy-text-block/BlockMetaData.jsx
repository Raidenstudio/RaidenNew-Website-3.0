import React from "react";

const BlockMetaData = () => {
  const blockMetaContent = [
    {
      _id: 1,
      icon: "01",
      title: "Customer-centric approach",
      metaHoverContent: `Understanding your particular needs and difficulties is the first step in developing solutions that are specifically suited to you, with an emphasis on collaboration and open communication. Our ultimate goal is your success, from concept to launch and beyond that.`,
    },
    {
      _id: 2,
      icon: "02",
      title: "Quality assurance and timely delivery",
      metaHoverContent: `We use rigorous quality assurance processes to ensure that every solution is dependable, safe, and flawless. With a flexible approach and a strong dedication to deadlines, your project will always be completed effectively and on time.`,
    },
    {
      _id: 3,
      icon: "03",
      title: "Innovative game design and development",
      metaHoverContent: `Our team creates innovative gaming experiences by pushing the limits of creativity and technology. With unique mechanics, captivating narratives, and stunning visuals we captivate players and set your game apart in the rapidly changing digital landscape.`,
    },
    {
      _id: 4,
      icon: "04",
      title: "Flexible and scalable solutions",
      metaHoverContent: `We offer flexible development solutions that can change and expand to meet your demands. We offer the appropriate tools and expertise at every stage, whether you're a business seeking expansion or a startup with a creative concept. Our services are designed to grow with you.`,
    },
  ];

  return (
    <>
      {blockMetaContent.map((blockMeta) => (
        <div className="block-meta-data text-center col-3" key={blockMeta._id}>
          <div className="line-dot-container">
            <div className="icon-box">
              <img src={`images/icon/${blockMeta.icon}.svg`} alt="icon" />
            </div>
            {/* /.icon-box */}
            <p className="text-start mt-5 fw-bold">{blockMeta.title}</p>
            <p className="text-start">{blockMeta.metaHoverContent}</p>
          </div>
        </div >
      ))}
    </>
  );
};

export default BlockMetaData;
