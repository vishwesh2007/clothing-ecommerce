import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trending from "./pages/Trending";
import Whishlist from "./pages/Whishlist";
import Navbar from "./components/Navbar";
import Arrivals from "./pages/Arrivals";
import Tshirts from "./pages/Tshirts";
import Shirts from "./pages/Shirts";
import Bottoms from "./pages/Bottoms";
import Accessories from "./pages/Accessories";

import { ShopContext } from "./context/Products";
import Searchbar from "./pages/Searchbar";

function App() {
  const { loginShow, searchShow, setSearchShow } = useContext(ShopContext);

  return (
    <div className="w-full">
      <Navbar searchShow={searchShow} />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/whish-list" element={<Whishlist />} />
          <Route path="/t-shirts" element={<Tshirts />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/bottoms" element={<Bottoms />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>

      {loginShow && <Login />}

      {searchShow && <Searchbar />}
      
      <SpeedInsights />
    </div>
  );
}

export default App;
