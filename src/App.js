import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";
import GlobalStyle from "./components/GlobalStyle";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div>
      <h3>welcome to the Nandani Ecommerce website</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/GlobalStyle" element={<GlobalStyle/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="Product" element={<Product/>}/>
          <Route path="SingleProduct" element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
