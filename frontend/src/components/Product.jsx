import { useContext, useState } from "react";
import { ShopContext } from "../context/Products";

function Product({ product }) {
  const { currency } = useContext(ShopContext);
  return (
    <div className="overflow-hidden flex flex-col justify-start items-center w-35 h-full cursor-pointer">
      <div className="relative overflow-hidden h-40 mb-1">
        <img
          src={product.image[0]}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover ease-in-out transition-transform duration-200 hover:scale-110"
          alt={product.name}
        />
        <p className="text-[10px] absolute top-2 bg-black/80 text-[#ffffff] px-1 py-[2px]">
          {product.subCategory}
        </p>
      </div>
      <div className="w-[100%] bg-white">
        <p className="text-[10px] truncate">{product.name}</p>
        <p className="text-[10px] font-bold text-[6px]">
          {currency}
          {product.price}
        </p>
        <p className="text-[10px] font-bold border-[0.5px] border-[#dadada] text-[#555555] p-1">
          Member Price : {currency}
          {product.price - product.price * 0.2}
        </p>
      </div>
    </div>
  );
}

export default Product;
