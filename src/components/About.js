// import React, { useContext } from "react";
// import HeroSection from "../component2/HeroSection";
// import { AppContext } from "../context/Productcontext";
// // import { useProductContext } from "../context/Productcontext";

// const About = () => {
//   const { myName } = useContext(AppContext);
//   const data = {
//     name: "Nandani Ecommerce",
//   };

//   return (
//     <div>
//       {myName}
//       <HeroSection myData={data} />
//     </div>
//   );
// };

// export default About;

import HeroSection from "../component2/HeroSection";
import { useProductContext } from "../context/Productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Nandani Ecommerce",
  };

  return (
    <div>
      {myName}
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
