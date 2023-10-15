import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const responce = await axios.get(url);

    const products = await responce.data;
    console.log(
      "~ file: productcontext.js ~ line 10 ~ getProduct ~ response",
      responce
    );
  };

  useEffect(() => {
    getProducts(API);

    return () => {};
  }, []);

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
