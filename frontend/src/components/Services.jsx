import React from "react";
import { Truck, RotateCcw, Store } from "lucide-react";

function Services() {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto grid h-20 grid-cols-3 items-center gap-2 px-3 sm:h-24 sm:px-6 md:px-10">
        <div className="flex min-w-0 flex-col items-center justify-center gap-1">
          <Truck className="h-5 w-5 shrink-0" />
          <p className="max-w-20 text-center text-[8px] leading-tight sm:max-w-none sm:text-xs md:text-sm">
            Free & Fast Shipping
          </p>
        </div>

        <div className="flex min-w-0 flex-col items-center justify-center gap-1">
          <RotateCcw className="h-5 w-5 shrink-0" />
          <p className="max-w-24 text-center text-[8px] leading-tight sm:max-w-none sm:text-xs md:text-sm">
            10 Days Easy Returns & Exchanges
          </p>
        </div>

        <div className="flex min-w-0 flex-col items-center justify-center gap-1">
          <Store className="h-5 w-5 shrink-0" />
          <p className="max-w-20 text-center text-[8px] leading-tight sm:max-w-none sm:text-xs md:text-sm">
            15+ Stores Pan India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
