import React from "react";
import Banner from "./Banner";
import Client from "./Client";
import Services from "./Services";
import Work from "./Work";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Banner />
      <Client />
      <Services />
      <Work />
    </>
  );
};
export default Home;
