import React from "react";
import { bannerImages } from "./../assets/frontend_assets/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Home() {
  return (
    <div className="bg-accent w-full h-screen flex">
      <div className="top-0 ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className={"cursor-pointer"}>
            {bannerImages.sort(()=>Math.random()-0.5).slice(0,3).map((banner,index) => (
              <CarouselItem key={index}>
                <img src={banner} alt={`Banner ${index + 1}`}
          className="w-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
