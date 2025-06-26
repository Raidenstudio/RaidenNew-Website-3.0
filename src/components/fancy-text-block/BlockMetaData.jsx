import React from "react";
import customer from '../../assets/Why-choose-raiden/customer-centric.svg'
import flex from '../../assets/Why-choose-raiden/Flexible-solution.svg'
import game from '../../assets/Why-choose-raiden/Gamedesign.svg'
import qa from '../../assets/Why-choose-raiden/qualityassurance.svg'
const BlockMetaData = () => {
  const blockMetaContent = [
    {
      _id: 1,
      icon: customer,
      title: "Streamlines Focus",
      metaHoverContent: `Understanding your specific needs and challenges is the first step in developing tailored solutions.`,
    },
    {
      _id: 2,
      icon: qa,
      title: "Guaranteed Execution",
      metaHoverContent: `We provide trusted solutions that meet your needs and ensure timely project delivery and quality control.`,
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
            <div className="icon-box m-auto">
              <img style={{ width: "60%" }} src={blockMeta.icon} alt="icon" />
            </div>
            {/* /.icon-box */}
            <h3 className="text-center mt-5 fw-bold mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>{blockMeta.title}</h3>
            <p className="text-center p-0" style={{fontSize:'18px'}}>{blockMeta.metaHoverContent}</p>
          </div>
        </div >
      ))}
    </>
  );
};

export default BlockMetaData;
