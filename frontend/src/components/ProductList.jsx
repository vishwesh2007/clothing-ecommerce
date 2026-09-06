import React from "react";

function ProductList({ product }) {
  return (
    <div className="flex items-center justify-between px-3 py-2.5 hover:bg-[#fafafa] transition-colors cursor-pointer border-b border-[#f0f0f0] last:border-none">
      <div className="flex flex-col overflow-hidden pr-2">
        <p className="text-[13px] font-medium text-[#222222] truncate">
          {product.name}
        </p>
        <span className="text-[11px] text-[#777777]">
          {product.subCategory || product.category}
        </span>
      </div>
      <span className="text-[13px] font-semibold text-[#222222] shrink-0">
        ₹{product.price}
      </span>
    </div>
  );
}

export default ProductList;