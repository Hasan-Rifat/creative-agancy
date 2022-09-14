import React from "react";
import OurDevelopment from "./OurDevelopment";
import OurMarketing from "./OurMarketing";
import OurServiceTitle from "./OurServiceTitle";
import OurReporting from "./OurReporting";

type OurServicesProps = {};

const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <main>
      <OurServiceTitle />
      <OurDevelopment />
      <OurMarketing />
      <OurReporting />
    </main>
  );
};
export default OurServices;
