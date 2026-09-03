import { Link, useNavigate } from "react-router-dom";
import { assets, products } from "../assets/frontend_assets/assets";
import {
  CircleUserRound,
  Heart,
  Search,
  ShoppingBag,
  TextAlignJustify,
  TrendingUp,
  X,
} from "lucide-react";
import Product from "./Product";
import { useContext, useEffect, useRef, useState } from "react";
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
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import Topsearchlist from "./Topsearchlist";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//====================================================================================================================================
//====================================================================================================================================

function Navbar() {
  const navigate = useNavigate();

  const {  searchShow, setSearchShow, login, setSearch, search } =
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

  const [open, setClose] = useState(false);

  const boxRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      className={`sticky top-0 z-50 bg-white border-b border-[#dadada] flex px-20 justify-between items-center ${searchShow ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      <Link to="/" className="flex justify-center items-center gap-1">
        <div className="max-[426px]:flex hidden" onClick={() => setMenu(true)}>
          <TextAlignJustify color="black" size={15} />
        </div>
        <img src={assets.logo} className="w-40" alt="" />
      </Link>
      <div className=" flex items-center ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>Trending Now</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-normal"}>
                New Arrivals
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex p-0 rounded-lg overflow-hidden">
                <div className="flex flex-col w-60 h-100">
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
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-normal"}>
                Foot Wear
              </NavigationMenuTrigger>
              <NavigationMenuContent className={"p-0"}>
                {filterddata
                  .slice()
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 5)
                  .map((product) => {
                    return <ProductList product={product} key={product._id} />;
                  })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-normal"}>
                Shirts
              </NavigationMenuTrigger>
              <NavigationMenuContent className={"p-0"}>
                {shirtfilterddata
                  .slice()
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 5)
                  .map((product) => {
                    return <ProductList product={product} key={product._id} />;
                  })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-normal"} x>
                Bottoms
              </NavigationMenuTrigger>
              <NavigationMenuContent className={"p-0"}>
                {bottomfilterddata
                  .slice()
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 5)
                  .map((product) => {
                    return <ProductList product={product} key={product._id} />;
                  })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Best Offer</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex justify-center gap-2 items-center">
        <Popover modal={true}>
          <PopoverTrigger asChild>
            <Button variant="outline" className={"bg-white"}>
              <Search size={16} color="#555555" />{" "}
              <p className="text-[14px] flex justify-center hover:text-[#222222] text-[#555555]">
                Search
              </p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="absolute top-[-40px] right-25 w-fit p-0 rounded-lg overflow-hidden">
            <PopoverHeader>
              <PopoverDescription className={""}>
                <div className="flex gap-4 items-center justify-center border-b-1 h-10 p-3 border-[#dadada]">
                  <Search color="#222222" size={20} />
                  <input
                    ref={searchInput}
                    value={search}
                    placeholder="What are you looking for?"
                    type="text"
                    className="w-full outline-none text-[14px]"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col pl-3 pr-3 pt-2 pb-2 gap-1 border-b-1 border-[#dadada]">
                  <p className="text-[10px]">Quick Search</p>
                  <div className="flex items-center justify-start gap-2">
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => setSearch("Shirt")}
                      name={"Shirt"}
                    >
                      Shirt
                    </Button>
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => setSearch("Pants")}
                      name={"Pants"}
                    >
                      Pants
                    </Button>
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => setSearch("Jeans")}
                      name={"Jeans"}
                    >
                      Jeans
                    </Button>
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => setSearch("Shoes")}
                      name={"Shoes"}
                    >
                      Shoes
                    </Button>
                  </div>
                </div>
                <div className="pl-3 pr-3 pt-2 pb-2">
                  <p className="text-[14px]">Products</p>
                </div>
                {search ? (
                  <div className="w-200 h-100 overflow-y-scroll pl-3 pr-3 pb-2 gap-2 custom-scrollbar grid grid-cols-2">
                    {filterData.slice(0, 12).map((product, index) => (
                      <Topsearchlist
                        key={`${product._id}-${index}`}
                        product={product}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-200 h-100 overflow-y-scroll pl-3 pr-3 pb-2 gap-2 custom-scrollbar grid grid-cols-2">
                    {products.slice(0, 6).map((product, index) => (
                      <Topsearchlist
                        key={`${product._id}-${index}`}
                        product={product}
                      />
                    ))}
                  </div>
                )}
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
        <Button className={"w-8 h-8"} variant="ghost">
          <ShoppingBag size={16} color="#555555" />
        </Button>
        <Button className={"w-8 h-8"} variant="ghost">
          <Heart size={16} color="#555555" />
        </Button>
        {login ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className={"w-8 h-8"} variant="ghost">
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
                <DropdownMenuItem onClick={()=>navigate('/cart')}> <p className="text-[12px]">Profile</p> </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>navigate("/order")}> <p className="text-[12px]">Orders</p> </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>navigate("/whishlist")}> <p className="text-[12px]">Wishlist</p> </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>navigate("/")}> <p className="text-[12px]">Cart</p> </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={()=>navigate("/")}><p className="text-[12px]">Settings</p></DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem><p className="text-[12px]">Logout</p></DropdownMenuItem>
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
  );
}

export default Navbar;
