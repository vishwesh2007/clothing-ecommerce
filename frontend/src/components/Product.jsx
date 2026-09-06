import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Product({ product }) {
  const [loaded, setLoaded] = useState(false);
  const currency = "₹"; 
  const memberPrice = Math.round(product.price - product.price * 0.20);

  return (
    <div className="flex flex-col justify-start items-center w-[140px] h-full cursor-pointer group overflow-hidden">
      <div className="relative overflow-hidden h-40 mb-1 w-full bg-[#f5f5f5]">
        {!loaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-[#e0e0e0]" />
        )}

        <img
          src={product.image[0]}
          width="140"
          height="160"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          alt={product.name}
        />

        {product.subCategory && (
          <span className="text-[10px] absolute top-2 left-0 bg-black/80 text-white px-1.5 py-0.5 font-medium">
            {product.subCategory}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full bg-white px-1">
        <p className="text-[11px] text-[#333333] truncate font-normal">
          {product.name}
        </p>

        <div className="flex items-center gap-1.5 my-0.5">
          <p className="text-[11px] font-bold text-[#111111]">
            {currency}{product.price}
          </p>
        </div>

        <div className="text-[9px] font-medium border border-[#e5e5e5] text-[#555555] px-1 py-0.5 bg-[#fafafa]">
          Member Price: {currency}{memberPrice}
        </div>
      </div>
    </div>
  );
}

export default Product;