import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Productreducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
  isLoading: false,
  esError: false,
  products: [],
  featureProducts: [],
  isSingleLoding: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const responce = await axios.get(url);
      const products = await responce.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //my 2nd Api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const responce = await axios.get(url);
      const singleProduct = await responce.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);

    return () => {};
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
