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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Services from "../components/Services";
import { useNavigate } from "react-router-dom";
import Title from "@/components/Title";
import ImageLoader from "../components/ImageLoader";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full flex-col h-full flex">
      <div className="top-0 min-[1025px]:flex hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className={"cursor-pointer"}>
            {bannerImages.slice(0, 3).map((banner, index) => (
              <CarouselItem key={index}>
                <img
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  width="1350"
                  height="461"
                  fetchPriority="high"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="top-0 max-[1025px]:flex hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className={"cursor-pointer"}>
            {smallBanners.slice(0, 3).map((banner, index) => (
              <CarouselItem key={index}>
                <ImageLoader
                  src={banner}
                  alt={`Small Banner ${index + 1}`}
                  width="412"
                  height="530"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover"
                  skeletonClassName="rounded-none"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Services />
      <div className="justify-center flex items-center p-2">
        <div className="flex justify-start items-center gap-8 h-40 min-h-[160px] customm-scrollbar bg-white overflow-x-scroll min-[1024px]:overflow-hidden">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className="gap-3 flex flex-col justify-center items-center shrink-0 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.label}
                  width="80"
                  height="80"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] text-[#666666]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <Title text1={"POPULAR CATEGORIES"} />
    </div>
  );
}

export default Home;
