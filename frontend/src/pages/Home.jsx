import React from "react";
import { bannerImages, category } from "./../assets/frontend_assets/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Services from "./Services";
import { useNavigate } from "react-router-dom";
import Title from "@/components/Title";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full flex-col h-full flex">
      <div className="top-0 ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className={"cursor-pointer"}>
            {bannerImages
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((banner, index) => (
                <CarouselItem key={index}>
                  <img
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="w-full"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Services />
      <div className="flex justify-center items-center gap-10 h-50 bg-white">
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[0]} alt="Belts" />
          </div>
          <p className="text-[10px] text-[#666666]">Belts</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[1]} alt="Oversized T-Shirt" />
          </div>
          <p className="text-[10px] text-[#666666]">Oversized T-Shirt</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[2]} alt="Bags" />
          </div>
          <p className="text-[10px] text-[#666666]">Bags</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[3]} alt="Casual Wears" />
          </div>
          <p className="text-[10px] text-[#666666]">Casual Wears</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[4]} alt="Party Wear" />
          </div>
          <p className="text-[10px] text-[#666666]">Party Wear</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[5]} alt="Office Wear" />
          </div>
          <p className="text-[10px] text-[#666666]">Office Wear</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[6]} alt="Sunglasses" />
          </div>
          <p className="text-[10px] text-[#666666]">Sunglasses</p>
        </div>
        <div className="gap-3 flex flex-col justify-center items-center" onClick={() => navigate("/")}>
          <div className="w-[80px] overflow-hidden h-[80px] rounded-[100%] overflow-hidden">
            <img src={category[7]} alt="Trending Bottoms" />
          </div>
          <p className="text-[10px] text-[#666666]">Trending Bottoms</p>
        </div>
      </div>
      <Title text1={"POPULAR CATEGORIES"}/>
    </div>
  );
}

export default Home;
