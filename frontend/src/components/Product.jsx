import { useContext, useState } from "react";
import { ShopContext } from "../context/Products";
import { Skeleton } from "@/components/ui/skeleton";

function Product({ product }) {
  const { currency } = useContext(ShopContext);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden flex flex-col justify-start items-center w-35 h-full cursor-pointer">

      <div className="relative overflow-hidden h-40 mb-1 w-full">

        {!loaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-[#cccccc]" />
        )}

        <img
          src={product.image[0]}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover ease-in-out transition-transform duration-200 hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          alt={product.name}
        />

        <p className="text-[10px] absolute top-2 bg-black/80 text-white px-1 py-[2px]">
          {product.subCategory}
        </p>

      </div>

      <div className="w-full bg-white">
        <p className="text-[10px] truncate">{product.name}</p>

        <p className="text-[10px] font-bold">
          {currency}{product.price}
        </p>

        <p className="text-[10px] font-bold border-[0.5px] border-[#dadada] text-[#555555] p-1">
          Member Price : {currency}{product.price - product.price * 0.20}
        </p>
      </div>

    </div>
  );
}

export default Product;