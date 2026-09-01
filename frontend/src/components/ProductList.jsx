import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ProductList({ product }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex justify-start items-center gap-2 p-2 hover:bg-[#f5f5f5]">

      <div className="relative w-10 h-10 overflow-hidden">

        {!loaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-[#111111]" />
        )}

        <img
          className={`w-full h-full object-cover ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={product.image[0]}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          alt={product.name}
        />

      </div>

      <p className="text-[14px] truncate">
        {product.name}
      </p>

    </div>
  );
}

export default ProductList;