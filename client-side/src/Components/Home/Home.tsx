import React from "react";
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
    </>
  );
};
export default Home;
