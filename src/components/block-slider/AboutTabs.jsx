import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AboutTabs = () => {
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs md-mt-50">
          <Tab className="nav-link font-slab">Students</Tab>
          <Tab className="nav-link font-slab">Professionals</Tab>
          <Tab className="nav-link font-slab">Organizers</Tab>
        </TabList>
        {/* End TabList */}

        <div className="tab-content mt-20">
          <TabPanel>
            <p className="font-gordita">
              Give your educational path practical experiences that allow you to apply what you've learned.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-gordita">
              Develop essential skills that will help you succeed in the dynamic and quickly changing workplace of today.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-gordita">
              Increase workforce competencies by providing hands-on training that promotes continuous improvement and operational excellence.
            </p>
          </TabPanel>
        </div>
        {/* End TabContent */}
      </Tabs>
    </>
  );
};

export default AboutTabs;
