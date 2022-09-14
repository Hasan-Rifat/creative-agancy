import React from "react";
import FooterTop from "../shared/Footer/Footer";
import Banner from "./Banner";
import Client from "./Client";
import ClientReview from "./ClientReview";
import Services from "./Services";
import Work from "./Work";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Client />
      <Services />
      <Work />
      <ClientReview />
      <FooterTop />
    </>
  );
};
export default Home;
