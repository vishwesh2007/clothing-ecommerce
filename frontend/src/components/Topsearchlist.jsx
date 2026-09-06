import React, { useContext, useState } from "react";
import { ShopContext } from "../context/Products";
import { Skeleton } from "@/components/ui/skeleton";

function Topsearchlist({ product }) {
  const { currency } = useContext(ShopContext);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="flex items-start justify-start gap-1 rounded-[10px] bg-[#f5f5f5] lg:gap-5">
          <Skeleton className="h-40 w-35 shrink-0 rounded-l-[10px] md:h-48 md:w-43 lg:h-50 lg:w-45" />
          <div className="flex w-45 flex-col justify-center gap-3 p-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="mt-6 h-8 w-32 rounded-[5px]" />
          </div>
        </div>
      )}

      <div
        className={`flex items-start justify-start gap-1 rounded-[10px] bg-[#f9f9f9] transition-opacity duration-300 lg:gap-5 ${
          loaded ? "opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-40 w-35 shrink-0 overflow-hidden rounded-l-[10px] md:h-48 md:w-43 lg:h-50 lg:w-45">
          <img
            src={product.image[0]}
            width="180"
            height="200"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className="h-full w-full max-w-none object-cover"
            alt={product.name}
          />
        </div>

        <div className="flex w-45 flex-col justify-center gap-1 p-2">
          <p className="text-[14px]">{product.name}</p>
          <p className="text-[18px] font-bold">
            {currency}
            {product.price}
          </p>
          <p className="mt-6 w-fit rounded-[5px] bg-[#fefefe] p-2 text-[12px] font-bold text-[#555555]">
            Member Price : {currency}
            {product.price - product.price * 0.2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topsearchlist;