import { Link, useNavigate } from "react-router-dom";
import { assets, products } from "../assets/frontend_assets/assets";
import {
  CircleDot,
  CircleUserRound,
  Crown,
  Flame,
  Footprints,
  Heart,
  Maximize,
  Package,
  Palette,
  Search,
  Shirt,
  ShirtIcon,
  ShoppingBag,
  Sparkles,
  Tag,
  TextAlignJustify,
  TrendingUp,
  User,
  Watch,
  X,
  Zap,
} from "lucide-react";
import Product from "./Product";
import { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../context/Products";
import ProductList from "./ProductList";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Topsearchlist from "./Topsearchlist";

function Navbar() {
  const navigate = useNavigate();

  const { searchShow, setSearchShow, login, setSearch, search } =
    useContext(ShopContext);

  const close = () => {
    setSearchShow(false);
    setSearch("");
  };

  const searchInput = useRef(null);

  useEffect(() => {
    if (searchShow) {
      searchInput.current?.focus();
    }
  }, [searchShow]);

  const filterData = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

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
      className={`sticky top-0 w-full z-50 py-3 sm:py-1 md:py-2 lg:py-1 bg-white flex px-2 sm:px-10 justify-between items-center ${
        searchShow ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <Link
        to="/"
        aria-label="Venanco Home"
        className="flex justify-center items-center gap-1"
      >
        <div className="sm:hidden flex">
          <Drawer swipeDirection="left">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Open Menu"
                className="!h-10 !w-10 !p-0 [&_svg]:!size-[20px]"
              >
                <TextAlignJustify color="black" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className={"!rounded-none"}>
              <DrawerHeader
                className={
                  "flex flex-row w-full justify-center items-center bg-[#fafafa] pb-7 pt-7"
                }
              >
                <div className="flex justify-start items-center gap-2 w-full">
                  <div className="items-center shrink-0 justify-center text-2xl rounded-full text-white bg-[#222222] flex w-15 h-15">
                    V
                  </div>
                  <div>
                    <h1 className="text-[20px] text-[#222222] font-medium">
                      Vishwesh
                    </h1>
                    <h3 className="text-[10px] text-[#666666]">Customer</h3>
                  </div>
                </div>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close Menu">
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <div className="flex-1 overflow-scroll select-none customm-scrollbar bg-white px-2 text-[#525252]">
                <div className="size-full">
                  <div className="flex flex-col gap-2">
                    <div>
                      <h2 className="border-b border-[#E5E5E5] p-2 text-[16px] font-semibold text-[#444444]">
                        Menu
                      </h2>

                      <div className="flex flex-col text-[14px]">
                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Flame size={18} />
                          Trending Now
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Sparkles size={18} />
                          New Arrivals
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Tag size={18} />
                          Best Offer
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="border-b border-[#E5E5E5] p-2 text-[16px] font-semibold text-[#444444]">
                        Shop
                      </h2>

                      <div className="flex flex-col text-[14px]">
                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Shirt size={18} />
                          Shirts
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <CircleDot size={18} />
                          Bottoms
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <ShirtIcon size={18} />
                          T-Shirts
                        </p>
                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Footprints size={18} />
                          Footwear
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Shirt size={18} />
                          Hoodies & Jackets
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Watch size={18} />
                          Accessories
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="border-b border-[#E5E5E5] p-2 text-[16px] font-semibold text-[#444444]">
                        Collections
                      </h2>

                      <div className="flex flex-col text-[14px]">
                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Crown size={18} />
                          Best Sellers
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Zap size={18} />
                          New Drops
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Palette size={18} />
                          Graphic Collection
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Maximize size={18} />
                          Oversized Collection
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="border-b border-[#E5E5E5] p-2 text-[16px] font-semibold text-[#444444]">
                        Account
                      </h2>

                      <div className="flex flex-col text-[14px]">
                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <User size={18} />
                          My Account
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Package size={18} />
                          My Orders
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <Heart size={18} />
                          Wishlist
                        </p>

                        <p className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition hover:bg-[#fafafa] hover:text-[#222222]">
                          <ShoppingBag size={18} />
                          My Cart
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <img
          src={assets.logo}
          className="w-40 h-auto sm:flex hidden"
          alt="Venanco Logo"
          width="160"
          height="40"
          fetchPriority="high"
        />
      </Link>
      <div className="ml-2">
        <NavigationMenu className={"max-[426px]:hidden flex"}>
          <NavigationMenuList>
            <NavigationMenuItem className={"hidden min-[1025px]:flex"}>
              <Link
                to="/trending"
                className="cursor-pointer px-3 py-2 text-sm font-medium hover:bg-accent rounded-md"
              >
                Trending Now
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-normal"}>
                New Arrivals
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex p-0 rounded-lg overflow-hidden">
                <div className="flex flex-col w-60 h-100">
                  <h3 className="p-[10px] text-[18px]">Top Searches</h3>
                  <Link
                    className="hover:bg-[#f5f5f5] text-[#555555] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                    to="/shirts"
                  >
                    Shirts
                    <TrendingUp color="#555555" size={15} />
                  </Link>

                  <Link
                    className="text-[#555555] hover:bg-[#f5f5f5] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                    to="/t-shirts"
                  >
                    T-Shirts
                    <TrendingUp color="#555555" size={15} />
                  </Link>

                  <Link
                    className="text-[#555555] hover:bg-[#f5f5f5] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                    to="/bottoms"
                  >
                    Bottoms
                    <TrendingUp color="#555555" size={15} />
                  </Link>

                  <Link
                    className="text-[#555555] hover:bg-[#f5f5f5] flex justify-between text-[10px] p-[10px] border-b-[0.5px] border-[#efefef]"
                    to="/arrivals"
                  >
                    View All
                  </Link>
                </div>

                <div className="bg-white flex flex-col items-center w-120 h-100 custom-scrollbar scroll-smooth overflow-y-scroll">
                  <h3 className="flex pl-[15px] left-0 text-[18px] sticky top-0 z-10 w-[100%] bg-white py-[5px]">
                    Trending Products
                  </h3>
                  <div className="grid grid-cols-3 gap-1">
                    {products.slice(0, 6).map((product) => (
                      <Product product={product} key={product._id} />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className={"hidden min-[1025px]:flex"}>
              <NavigationMenuTrigger className={"font-normal"}>
                Foot Wear
              </NavigationMenuTrigger>
              <NavigationMenuContent className={"p-0"}>
                {filterddata.slice(0, 5).map((product) => {
                  return <ProductList product={product} key={product._id} />;
                })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className={"min-[530px]:flex hidden"}>
              <NavigationMenuTrigger className={"font-normal"}>
                Shirts
              </NavigationMenuTrigger>
              <NavigationMenuContent className={"p-0"}>
                {shirtfilterddata
                  .slice().
                  sort(()=>Math.random()-0.5)
                  .slice(0, 5)
                  .map((product) => {
                    return <ProductList product={product} key={product._id} />;
                  })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className={"hidden min-[769px]:flex"}>
              <NavigationMenuTrigger className={"font-normal"}>
                Bottoms
              </NavigationMenuTrigger>
              <NavigationMenuContent className={"p-0"}>
                {bottomfilterddata.slice(0, 5).map((product) => {
                  return <ProductList product={product} key={product._id} />;
                })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className={"min-[530px]:flex hidden"}>
              <NavigationMenuLink className="cursor-pointer px-3 py-2 text-sm font-medium">
                Offer
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex max-[426px]:justify-between justify-end gap-3 items-center w-90">
        <Drawer showSwipeHandle>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              aria-label="Open Search Bar"
              className={
                "w-45 border-none h-10 sm:w-30 sm:h-8 flex justify-start"
              }
            >
              <Search size={16} color="#555555" />
              <span className="text-[14px] hover:text-[#222222] text-[#555555]">
                Search
              </span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className={"bg-white transform-none"}>
            <DrawerHeader
              className={"p-3 transform-none scale-100 opacity-100"}
            >
              <div className="flex justify-center gap-2">
                <div className="flex gap-4 rounded items-center justify-start w-full h-10 p-3 bg-[#fafafa]">
                  <Search color="#222222" size={20} />
                  <input
                    ref={searchInput}
                    value={search}
                    placeholder="What are you looking for?"
                    type="text"
                    className="!w-full outline-none text-[14px]"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div>
                  <DrawerClose asChild>
                    <Button
                      onClick={() => close()}
                      aria-label="Close Search"
                      className={"w-20 h-10"}
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </div>
              <div className="mt-3 pb-3 flex flex-col justify-start items-start gap-2 border-b-1 border-[#dadada]">
                <p className="text-[12px]">Quick Search</p>
                <div className="flex items-center justify-start gap-2">
                  <Button
                    variant="secondary"
                    size="xs"
                    onClick={() => setSearch("Shirt")}
                  >
                    Shirt
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    onClick={() => setSearch("Pants")}
                  >
                    Pants
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    onClick={() => setSearch("Jeans")}
                  >
                    Jeans
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    onClick={() => setSearch("Shoes")}
                  >
                    Shoes
                  </Button>
                </div>
              </div>
            </DrawerHeader>
            <div className="p-3 h-fit pt-0">
              <div className="w-full">
                {search ? (
                  <div className="w-full custom-scrollbar h-100 grid grid-cols-3 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 gap-1 overflow-y-scroll">
                    {filterData.slice(0, 6).map((product, index) => (
                      <Topsearchlist
                        key={`${product._id}-${index}`}
                        product={product}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-full custom-scrollbar h-100 grid grid-cols-3 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 gap-1 overflow-y-scroll">
                    {products.slice(0, 8).map((product, index) => (
                      <Topsearchlist
                        key={`${product._id}-${index}`}
                        product={product}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
        <div className="flex gap-0 md:gap-2">
          <Button aria-label="View Cart" className={"w-8 h-8"} variant="ghost">
            <ShoppingBag size={16} color="#555555" />
          </Button>
          <Button
            aria-label="View Wishlist"
            className={"w-8 h-8 hidden sm:flex"}
            variant="ghost"
          >
            <Heart size={16} color="#555555" />
          </Button>
          {login ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="User Menu"
                  className={"w-8 h-8"}
                  variant="ghost"
                >
                  <CircleUserRound size={30} color="#555555" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"w-50"}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div className="cursor-pointer flex items-center justify-start gap-2 mt-1 mb-1">
                      <CircleUserRound size={25} color="#555555" />
                      <div className="text-[#444444]">
                        <p className="text-primary">Vishwesh</p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/cart")}>
                    <span className="text-[12px]">Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/order")}>
                    <span className="text-[12px]">Orders</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/whishlist")}>
                    <span className="text-[12px]">Wishlist</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/")}>
                    <span className="text-[12px]">Cart</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => navigate("/")}>
                    <span className="text-[12px]">Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <span className="text-[12px]">Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => navigate("/login")} variant="ghost">
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
