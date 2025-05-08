import React from "react";

const featureGroups = [
  {
    category: "Web",
    items: [
      { title: "React js", icon: "113" },
      { title: "Angular", icon: "114" },
      { title: "Vue js", icon: "115" },
    ],
  },
  {
    category: "Smart Contract",
    items: [
      { title: "Solidity", icon: "116" },
      { title: "Vyper", icon: "117" },
      { title: "More Coming Soon", icon: "118" },
    ],
  },
  {
    category: "Blockchain",
    items: [
      { title: "Ethereum", icon: "113" },
      { title: "Hyperledger", icon: "114" },
      { title: "EOS", icon: "115" },
    ],
  },
  {
    category: "Backend",
    items: [
      { title: "Node js", icon: "113" },
      { title: "Python", icon: "114" },
      { title: "Go", icon: "115" },
    ],
  },
  {
    category: "Database",
    items: [
      { title: "MongoDB", icon: "114" },
      { title: "PostgreSQL", icon: "115" },
      { title: "MySQL", icon: "113" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { title: "Amazon Web Services", icon: "113" },
      { title: "Microsoft Azure", icon: "114" },
      { title: "Google Cloud Platform", icon: "115" },
    ],
  },
];

const borderColors = ["#8F6BF6", "#00C2CB"]; // outer and middle groups

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
                borderLeftWidth: "4px",
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
                        src={`images/icon/${item.icon}.svg`}
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
