import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Cart from "./components/Cart";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import Errorpage from "./components/Errorpage";
import { GlobalStyle } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component2/Header";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",
      black: "#122529",
      helper: "#8990ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255)0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27,31,35.0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "786px",
      tab: "998px",
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/GlobalStyle" element={<GlobalStyle />} />
            <Route path="/Home" element={<Home />} />
            <Route path="Products" element={<Product />} />
            <Route path="SingleProduct/:id" element={<SingleProduct />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
