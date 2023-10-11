import React from "react";
import HeroSection from "../component2/HeroSection";

const Home = () => {
  const data = {
    name: "Nandani Store",
  };
  return (
    <div>
      <HeroSection myData={data} />
    </div>
  );
};

export default Home;
