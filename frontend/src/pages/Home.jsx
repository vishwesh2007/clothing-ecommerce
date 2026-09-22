import api from "@/services/api";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link, useNavigate } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Heart, RefreshCcw, ShoppingBagIcon, Store, Truck } from "lucide-react";

function Home() {
  const [banners, setBanners] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get("/products");

        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();


    const fetchBanners = async () => {
      try {
        const response = await api.get("/banners");

        if (response.data.success) {
          setBanners(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    
    fetchBanners();

    
    const fetchCategory = async () => {
      try {
        const response = await api.get("/categories");

        if (response.data.success) {
          setCategory(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div className="w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {banners.slice(0, 3).map((banner) => (
            <CarouselItem
              key={banner._id}
              onClick={() => navigate(banner.link)}
              className="cursor-pointer pl-0"
            >
              <div className="relative h-[75vh] w-full overflow-hidden">
                <img
                  src={banner.name}
                  alt="Venanco Banner"
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-1 border-y border-border bg-accent sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-2 p-6 text-center sm:border-r sm:border-border">
          <Truck className="size-6" />
          <p className="text-sm font-medium">Free & Fast Shipping</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 p-6 text-center sm:border-r sm:border-border">
          <RefreshCcw className="size-6" />
          <p className="text-sm font-medium">
            10 Days Easy Returns & Exchanges
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 p-6 text-center">
          <Store className="size-6" />
          <p className="text-sm font-medium">15+ Stores Pan India</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center overflow-x-auto p-10">
        <div className="flex min-w-max gap-10">
          {category.map((c) => (
            <Link
              to={c.link}
              key={c._id}
              className="group w-20 cursor-pointer text-center"
            >
              <div className="aspect-square overflow-hidden rounded-full">
                <img
                  src={c.imageUrl}
                  alt={c.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-[10px] text-primary">{c.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 px-20 py-4 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="group w-full cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden bg-accent">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-[#222]/90 duration-100 hover:text-white hover:shadow focus:shadow"
              >
                <Heart className="h-5 w-5 stroke-[1.5]" />
              </button>
              <button
                type="button"
                className="absolute right-2 top-14 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-[#222]/90 duration-100 hover:text-white hover:shadow focus:shadow"
              >
                <ShoppingBagIcon className="h-5 w-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="px-2 pt-3">
              <h3 className="truncate text-base font-normal text-foreground">
                {product.name}
              </h3>

              <p className="mt-1 text-lg font-medium">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
