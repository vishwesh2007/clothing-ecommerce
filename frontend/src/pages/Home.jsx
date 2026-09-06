import React from "react";

import {
  bannerImages,
  categoryItems,
  smallBanners,
} from "./../assets/frontend_assets/assets";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Services from "../components/Services";

import { useNavigate } from "react-router-dom";

import Title from "@/components/Title";

import ImageLoader from "../components/ImageLoader";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col bg-white">
      
      <div className="top-0 hidden min-[1025px]:flex">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="cursor-pointer">
            {bannerImages.slice(0, 3).map((banner, index) => (
              <CarouselItem key={index}>
                <div className="w-full aspect-[1350/461] overflow-hidden">
                  <ImageLoader
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    width="1350"
                    height="461"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="block h-full w-full object-cover"
                    skeletonClassName="rounded-none"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="top-0 hidden max-[1025px]:flex">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="cursor-pointer">
            {smallBanners.slice(0, 3).map((banner, index) => (
              <CarouselItem key={index}>
                <div className="w-full aspect-[412/530] overflow-hidden">
                  <ImageLoader
                    src={banner}
                    alt={`Small Banner ${index + 1}`}
                    width="412"
                    height="530"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="block h-full w-full object-cover"
                    skeletonClassName="rounded-none"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Services />

      <div className="flex items-center justify-center p-2">
        <div className="customm-scrollbar flex h-40 min-h-[160px] items-center justify-start gap-8 overflow-x-scroll bg-white min-[1024px]:overflow-hidden">
          
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className="flex shrink-0 cursor-pointer flex-col items-center justify-center gap-3"
              onClick={() => navigate("/")}
            >
              <div className="h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full">
                <ImageLoader
                  src={item.image}
                  alt={item.label}
                  width="80"
                  height="80"
                  loading="lazy"
                  className="block h-full w-full object-cover"
                  skeletonClassName="rounded-full"
                />
              </div>

              <p className="text-[10px] text-[#666666]">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>

      <Title text1={"POPULAR CATEGORIES"} />
    </div>
  );
}

export default Home;