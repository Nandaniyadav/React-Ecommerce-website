// import { createContext } from "react";

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   return (
//     <AppContext.Provider value={{ mayName: "Nandani Yadav" }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// export { AppProvider, AppContext };

import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "Nandani Yadav" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
