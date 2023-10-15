import React from "react";
import HeroSection from "../component2/HeroSection";
import Services from "../component2/Services";
import Trusted from "../component2/Trusted";
import FeaturesProduct from "../component2/FeaturesProduct";

const Home = () => {
  const data = {
    name: "Nandani Store",
  };
  return (
    <div>
      <HeroSection myData={data} />
      <FeaturesProduct/>
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
