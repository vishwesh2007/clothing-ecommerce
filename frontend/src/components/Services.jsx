import React from "react";
import { Truck, RotateCcw, Store } from "lucide-react";

function Services() {
  return (
    <div className="flex h-auto w-full items-start justify-between gap-2 bg-background px-3 py-4 sm:px-6 sm:py-5 md:items-center md:px-10 lg:px-16">
      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 sm:gap-2">
        <Truck className="size-4 sm:size-5 md:size-6" />

        <p className="text-center text-[8px] leading-tight sm:text-[11px] md:text-[14px] lg:text-[16px]">
          Free & Fast Shipping
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 sm:gap-2">
        <RotateCcw className="size-4 sm:size-5 md:size-6" />

        <p className="text-center text-[8px] leading-tight sm:text-[11px] md:text-[14px] lg:text-[16px]">
          10 Days Easy Returns & Exchanges
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 sm:gap-2">
        <Store className="size-4 sm:size-5 md:size-6" />

        <p className="text-center text-[8px] leading-tight sm:text-[11px] md:text-[14px] lg:text-[16px]">
          15+ Stores Pan India
        </p>
      </div>
    </div>
  );
}

export default Services;
