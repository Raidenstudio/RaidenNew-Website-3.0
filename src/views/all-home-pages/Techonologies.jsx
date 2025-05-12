import React from "react";
import Reactw from "../../assets/images/icon/React.png";
import Amazon from "../../assets/images/icon/Amazon Web Services.png"
import EOS from "../../assets/images/icon/EOS.png";
import Etherum from "../../assets/images/icon/Ethereum.png";
import Go from "../../assets/images/icon/Go.png";
import Cloud from "../../assets/images/icon/Google Cloud Platform.png";
import Hyper from "../../assets/images/icon/Hyperledger.png";
import Azure from "../../assets/images/icon/Microsoft Azure.png";
import Mongo from "../../assets/images/icon/MongoDB.png";
import Node from "../../assets/images/icon/Nodejs.png";
import Post from "../../assets/images/icon/PostgreSQL.png";
import Solidity from "../../assets/images/icon/Solidity.png";
import Vue from "../../assets/images/icon/Vue js.png";
import Angular from "../../assets/images/icon/angular.png";
import Vyper from "../../assets/images/icon/vyper.png";
import Python from "../../assets/images/icon/python.png";
import Mysql from "../../assets/images/icon/mysql.png";
import Fe from "../../assets/images/icon/fe.png";



const featureGroups = [
  {
    category: "Web",
    items: [
      { title: "React js", icon: Reactw },
      { title: "Angular", icon: Angular },
      { title: "Vue js", icon: Vue},
    ],
  },
  {
    category: "Smart Contract",
    items: [
      { title: "Solidity", icon: Solidity },
      { title: "Vyper", icon: Vyper },
      { title: "Fe", icon: Fe },
    ],
  },
  {
    category: "Blockchain",
    items: [
      { title: "Ethereum", icon: Etherum },
      { title: "Hyperledger", icon: Hyper },
      { title: "EOS", icon: EOS},
    ],
  },
  {
    category: "Backend",
    items: [
      { title: "Node js", icon: Node },
      { title: "Python", icon: Python },
      { title: "Go", icon: Go },
    ],
  },
  {
    category: "Database",
    items: [
      { title: "MongoDB", icon: Mongo },
      { title: "PostgreSQL", icon: Post },
      { title: "MySQL", icon: Mysql},
    ],
  },
  {
    category: "Cloud",
    items: [
      { title: "Amazon Web Services", icon: Amazon},
      { title: "Microsoft Azure", icon: Azure },
      { title: "Google Cloud Platform", icon: Cloud },
    ],
  },
];

const borderColors = ["#8F6BF6", "#00C2CB"]; 

const Technologies = () => {
  return (
    <div className="row">
      {featureGroups.map((group, i) => {
        const borderColor = (i < 2 || i > 3) ? borderColors[0] : borderColors[1];

        return (
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={i}
          >
            <div
              className="block-style-nineteen"
              style={{
                borderLeftColor: borderColor,
                borderLeftWidth: "6px",
                borderLeftStyle: "solid",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <div className="text">
                <h4 className="mb-20">{group.category}</h4>
                <ul style={{ paddingLeft: 0, marginBottom: 0, listStyle: "none" }}>
                  {group.items.map((item, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        style={{ width: "24px", height: "24px", marginRight: "10px" }}
                      />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
