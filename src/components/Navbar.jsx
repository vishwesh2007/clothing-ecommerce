import { Link, NavLink } from "react-router-dom";
import { assets, products } from "../assets/frontend_assets/assets";
import {
  ChevronDown,
  CircleUserRound,
  Heart,
  Search,
  ShoppingBag,
  TextAlignJustify,
  TrendingUp,
} from "lucide-react";
import Product from "./Product";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../context/Products";
import ProductList from "./ProductList";

function Navbar() {

  const [open, setClose] = useState(false);

  const boxRef = useRef(null);
  useEffect(() => {
  const handleClickOutside = (event)=>{
    if(boxRef.current && !boxRef.current.contains(event.target)){
      setClose(false)
    }
  };

    document.addEventListener('mousedown',handleClickOutside);
     return () => {
        document.removeEventListener('mousedown',handleClickOutside);
     };
  }, []);

  const { setLoginShow, searchShow, setSearchShow, login } =
    useContext(ShopContext);
  const filterddata = products.filter((product) =>
    product.name.toLowerCase().includes("shoes"),
  );
  const shirtfilterddata = products.filter((product) =>
    product.name.toLowerCase().includes("shirt"),
  );
  const bottomfilterddata = products.filter((product) =>
    product.name.toLowerCase().includes("jeans"),
  );
  return (
    <div
      className={`relative border-b border-[#dadada] flex px-20 justify-between items-center ${searchShow ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      <Link to="/" className="flex justify-center items-center gap-1">
        <div className="max-[426px]:flex hidden" onClick={() => setMenu(true)}>
          <TextAlignJustify color="black" size={15} />
        </div>
        <img src={assets.logo} className="w-40" alt="" />
      </Link>
      <div className="min-[426px]:flex hidden justify-center gap-4 ">
        <NavLink
          className="uppercase text-[14px] flex justify-center items-center"
          to="/trending"
        >
          Trending Now
        </NavLink>
        <div className="group relative">
          <NavLink
            className="uppercase h-15 text-[14px] flex justify-center items-center"
            to="/arrivals"
          >
            New Arrivals <ChevronDown size={15} />
          </NavLink>

          <div
            className={`group-hover:flex hidden absolute  left-1/2 -translate-x-1/2 flex`}
          >
            <div className="border-t-[0.5px] bg-white border-t-[#dadada] flex justify-between items-center">
              <div className="flex flex-col w-60 h-100 bg-[#f6f6f6]/40">
                <h2 className="p-[10px] text-[18px]">Top Searches</h2>
                <Link
                  className="hover:bg-[#f5f5f5] text-[#555555] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                  to="/"
                >
                  Shirts
                  <TrendingUp color="#555555" size={15} />
                </Link>

                <Link
                  className="text-[#555555] hover:bg-[#f5f5f5] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                  to="/"
                >
                  T-Shirts
                  <TrendingUp color="#555555" size={15} />
                </Link>

                <Link
                  className="text-[#555555] hover:bg-[#f5f5f5] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                  to="/"
                >
                  Bottoms
                  <TrendingUp color="#555555" size={15} />
                </Link>

                <Link
                  className="text-[#555555] hover:bg-[#f5f5f5] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                  to="/"
                >
                  View All
                </Link>
              </div>

              <div className="bg-white flex flex-col items-center w-120 h-100 custom-scrollbar scroll-smooth overflow-y-scroll">
                <h2 className="flex pl-[15px] left-0  text-[18px] sticky top-0 z-10 w-[100%] bg-white py-[5px]">
                  Trending Products
                </h2>
                <div className=" grid grid-cols-3 gap-1 ">
                  {products
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 6)
                    .map((product) => (
                      <Product product={product} key={product._id} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <NavLink
            className="uppercase h-15 text-[14px] flex justify-center items-center"
            to="/arrivals"
          >
            FootWear <ChevronDown size={15} />
          </NavLink>

          <div
            className={`group-hover:flex hidden absolute  left-1/2 -translate-x-1/2 flex`}
          >
            <div className="border-t-[0.5px] bg-white border-t-[#dadada] flex justify-between items-center">
              <div className="bg-white flex flex-col items-center w-120 custom-scrollbar scroll-smooth overflow-y-scroll">
                <div className="bg-[#fafafa] p-4">
                  {filterddata
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5)
                    .map((product) => {
                      return (
                        <ProductList product={product} key={product._id} />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <NavLink
            className="uppercase h-15 text-[14px] flex justify-center items-center"
            to=""
          >
            Shirts <ChevronDown size={15} />
          </NavLink>

          <div
            className={`group-hover:flex hidden absolute  left-1/2 -translate-x-1/2 flex`}
          >
            <div className="border-t-[0.5px] bg-white border-t-[#dadada] flex justify-between items-center">
              <div className="bg-white flex flex-col items-center w-120 custom-scrollbar scroll-smooth overflow-y-scroll">
                <div className="bg-[#fafafa] p-4">
                  {shirtfilterddata
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5)
                    .map((product) => {
                      return (
                        <ProductList product={product} key={product._id} />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <NavLink
            className="uppercase h-15 text-[14px] flex justify-center items-center"
            to="/arrivals"
          >
            Bottoms <ChevronDown size={15} />
          </NavLink>

          <div
            className={`group-hover:flex hidden absolute  left-1/2 -translate-x-1/2 flex`}
          >
            <div className="border-t-[0.5px] bg-white border-t-[#dadada] flex justify-between items-center">
              <div className="bg-white flex flex-col items-center w-120 custom-scrollbar scroll-smooth overflow-y-scroll">
                <div className="bg-[#fafafa] p-4">
                  {bottomfilterddata
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5)
                    .map((product) => {
                      return (
                        <ProductList product={product} key={product._id} />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <NavLink
            className="uppercase h-15 text-[14px] flex justify-center items-center"
            to="/arrivals"
          >
            Best offer
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center">
        <button
          className="cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        flex items-center justify-center rounded gap-2 p-1 px-2"
          onClick={() => setSearchShow(true)}
        >
          <Search size={16} color="#555555" />{" "}
          <p className="text-[14px] flex justify-center hover:text-[#222222] text-[#555555]">
            Search
          </p>
        </button>
        <Link
          to="/cart"
          className="hover:bg-[#f5f5f5] flex justify-center items-center rounded-lg w-8 h-8"
        >
          <ShoppingBag size={16} color="#555555" />
        </Link>
        <Link
          to="/whish-list"
          className="hover:bg-[#f5f5f5] flex justify-center items-center rounded-lg w-8 h-8"
        >
          <Heart size={16} color="#555555" />
        </Link>
        {login ? (
          <div  className="relative" ref={boxRef}>
            <div  onClick={()=>setClose(!open)} className="hover:bg-[#f5f5f5] border-1 border-[#dadada] flex justify-center items-center rounded-lg w-8 h-8">
              <CircleUserRound size={18} color="#555555" />
            </div>
            {
              open &&(
                <div className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] absolute flex flex-col top-10 rounded select-none right-0 bg-white">
                  <div className="border-b-1 cursor-pointer border-[#dadada] flex items-center justify-center gap-2  p-4">
                    <CircleUserRound size={30} color="#555555"/>
                    <div className="text-[#444444]">
                      <p className="">vishwewsh</p>
                    <p className="text-[10px] truncate">vishwewshsitapara2007@gmail.com</p>
                    </div>
                  </div>
                  <div className="border-b-1 border-[#dadada] text-[12px]">
                    <p className="hover:bg-[#fafafa] pl-4 pr-4 p-2 text-[#444444]">My Profile</p>
                    <p className="hover:bg-[#fafafa] pl-4 pr-4 p-2 text-[#444444]">My Orders</p>
                    <p className="hover:bg-[#fafafa] pl-4 pr-4 p-2 text-[#444444]">Wishlist</p>
                    <p className="hover:bg-[#fafafa] pl-4 pr-4 p-2 text-[#444444]">Cart</p>
                  </div>
                  <div className="border-b-1 border-[#dadada] text-[12px]">
                    <p className="hover:bg-[#fafafa] pl-4 pr-4 p-2 text-[#444444]">Setting</p>
                  </div>
                  <div className=" hover:bg-red-50 text-[red] pl-4 pr-4 p-2 text-[12px]">
                    <p className="">Logout</p>
                  </div>
                </div>
              )
            }
          </div>
        ) : (
          <button
            onClick={() => setLoginShow(true)}
            className="bg-[#222222] rounded text-white
hover:bg-[#333333] text-[14px] py-[5px] px-[20px]"
            to=""
          >
            <p>Sign in</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
