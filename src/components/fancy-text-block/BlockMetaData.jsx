import React from "react";
import customer from '../../assets/images/assets/Why-choose-us/customer-centric.png'
import flex from '../../assets/images/assets/Why-choose-us/Flexible-solution.png'
import game from '../../assets/images/assets/Why-choose-us/Game-design.png'
import qa from '../../assets/images/assets/Why-choose-us/quality-assurance.png'
const BlockMetaData = () => {
  const blockMetaContent = [
    {
      _id: 1,
      icon: customer,
      title: "Streamlines Focus",
      metaHoverContent: `Understanding your particular needs and difficulties is the first step in developing solutions that are specifically suited to you.`,
    },
    {
      _id: 2,
      icon: qa,
      title: "Guaranteed Execution",
      metaHoverContent: `We focus on providing trustworthy solutions that meet your needs and ensure timely project completion and quality control.`,
    },
    {
      _id: 3,
      icon: game,
      title: "Consistent Methodology",
      metaHoverContent: `Our team creates innovative gaming experiences by pushing the limits of creativity and technology.`,
    },
    {
      _id: 4,
      icon: flex,
      title: "Growth Driven solution",
      metaHoverContent: `We offer flexible development solutions that can change and expand to meet your demands.`,
    },
  ];

  return (
    <>
      {blockMetaContent.map((blockMeta) => (
        <div className="block-meta-data text-center col-3" key={blockMeta._id}>
          <div className="line-dot-container">
            <div className="icon-box">
              <img style={{ width: "60%" }} src={blockMeta.icon} alt="icon" />
            </div>
            {/* /.icon-box */}
            <p className="text-start mt-5 fw-bold" style={{ fontFamily: 'Raleway, sans-serif' }}>{blockMeta.title}</p>
            <p className="text-start">{blockMeta.metaHoverContent}</p>
          </div>
        </div >
      ))}
    </>
  );
};

export default BlockMetaData;
