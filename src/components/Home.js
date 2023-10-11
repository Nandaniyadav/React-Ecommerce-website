import React from "react";
import HeroSection from "../component2/HeroSection";
import Services from "../component2/Services";
import Trusted from "../component2/Trusted";

const Home = () => {
  const data = {
    name: "Nandani Store",
  };
  return (
    <div>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
