import React, { useContext, useState } from "react";
import { ShopContext } from "../context/Products";
import { Skeleton } from "@/components/ui/skeleton";

function Topsearchlist({ product }) {
  const { currency } = useContext(ShopContext);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="cursor-pointer hover:bg-[#fafafa]/90 h-fit bg-[#ffffff] p-1 flex border-[0.5px] gap-2 rounded border-[#dadada]">
      <div className="relative rounded-l w-41 h-51 overflow-hidden flex justify-center items-center">
        {!loaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-[#111111]" />
        )}

        <img
          src={product.image[0]}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          alt={product.name}
        />
      </div>

      <div className="flex flex-col w-50 gap-1 justify-start mt-5">
        <p className="text-[13px] truncate">{product.name}</p>

        <p className="text-[18px] font-bold text-[6px]">
          {currency}
          {product.price}
        </p>

        <p className="text-[13px] px-2 py-3 w-full font-bold border-[0.5px] border-[#dadada] text-[#555555] p-1">
          Member Price : {currency}
          {product.price - product.price * 0.2}
        </p>
      </div>
    </div>
  );
}

export default Topsearchlist;
