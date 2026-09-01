import { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../context/Products";
import { Search, X } from "lucide-react";
import Btn from "../components/Btn";
import { products } from "../assets/frontend_assets/assets";
import Topsearchlist from "./../components/Topsearchlist";

function Searchbar() {
  const { setSearchShow, searchShow, search, setSearch } =
    useContext(ShopContext);

    const close = ()=>{
      setSearchShow(false);
      setSearch("");
    }
  const searchInput = useRef(null);

  useEffect(() => {
    if (searchShow) {
      searchInput.current?.focus();
    }
  }, [searchShow]);

  const filterData = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      onClick={() => close()}
      className={`bg-transparent flex justify-center items-center w-full inset-0 absolute h-full top-0 z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] 
          top-0 top-[61px] w-150 h-[457px] rounded flex-col  flex absolute bg-white`}
      >
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
          <button
            className="hover:bg-[#fafafa] rounded w-8 h-7 flex justify-center items-center"
            onClick={() => close()}
          >
            <X color="#222222" size={18} />
          </button>
        </div>
        <div className=" flex flex-col pl-3 pr-3 pt-2 pb-2 gap-1 border-b-1 border-[#dadada]">
          <p className="text-[10px]">Quick Search</p>
          <div className="flex items-center justify-start gap-2">
            <Btn onClick={()=>setSearch("Shirt")} name={"Shirt"} />
            <Btn onClick={()=>setSearch("Pants")} name={"Pants"} />
            <Btn onClick={()=>setSearch("Jeans")} name={"Jeans"} />
            <Btn onClick={()=>setSearch("Shoes")} name={"Shoes"} />
          </div>
        </div>
        <div className="pl-3 pr-3 pt-2 pb-2">
          <p className="text-[14px]">Products</p>
        </div>
        {search ? (
          <div className="pl-3 pr-3 pb-2 gap-2 grid grid-cols-2 w-full h-full custom-scrollbar scroll-smooth overflow-y-scroll overflow-x-hidden">
            {filterData.map((product,index) => {
              return <Topsearchlist key={`${product._id}-${index}`} product={product} />;
            })}
          </div>
        ) : (
          <div className="pl-3 pr-3 pb-2 gap-2 grid grid-cols-2 w-full h-full custom-scrollbar scroll-smooth overflow-y-scroll overflow-x-hidden">
            {products.slice().sort(()=>Math.random() - 0.5).slice(0,5).map((product,index) => {
              return <Topsearchlist key={`${product._id}-${index}`} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
