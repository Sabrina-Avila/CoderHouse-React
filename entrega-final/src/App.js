import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/Cart";
import NavBar from "./components/NavBar";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:id" element={<ProductList />} />
          <Route path="/item/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
