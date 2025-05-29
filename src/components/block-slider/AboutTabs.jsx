import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AboutTabs = ( {benefits}) => {
  console.log(benefits);
  
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs md-mt-50">
          <Tab className="nav-link font-slab">{benefits.name}</Tab>
          <Tab className="nav-link font-slab">{benefits.name2}</Tab>
          <Tab className="nav-link font-slab">{benefits.name3}</Tab>
        </TabList>
        {/* End TabList */}

        <div className="tab-content mt-20">
          <TabPanel>
            <p className="font-gordita">
           {benefits.value}
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-gordita">
   {benefits.value2}            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-gordita">
   {benefits.value3}            </p>
          </TabPanel>
        </div>
        {/* End TabContent */}
      </Tabs>
    </>
  );
};

export default AboutTabs;
