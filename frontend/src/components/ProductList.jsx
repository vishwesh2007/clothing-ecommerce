import React from "react";

function ProductList({ product }) {
  return (
    <div className="flex justify-start items-center gap-2 p-2 hover:bg-[#f5f5f5]">
      <div className="w-10 h-10 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image[0]}
          loading="lazy"
          decoding="async"
          alt={product.name}
        />
      </div>
      <p className="text-[14px] truncate">{product.name}</p>
    </div>
  );
}

export default ProductList;
