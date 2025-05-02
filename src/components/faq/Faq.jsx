import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "Bridging Realities",
    desc: ` XR, AI, and blockchain are revolutionizing the transition between digital and tangible realms for leading game development companies.`,
    expand: "a",
  },
  {
    title: "Cognitive Engagement",
    desc: ` Our AI technology, combined with blockchain for enhanced security, enables intelligent interactions with zero latency.`,
    expand: "b",
  },
  {
    title: "Transformative Vision",
    desc: ` We transform brands with our powerful software development services, spanning from engaging mobile games to blockchain NFT ecosystems.`,
    expand: "c",
  },
];

const Faq = () => {
  return (
    <div className="accordion-style-two pe-5">
      <div className="faq-wrraper">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
