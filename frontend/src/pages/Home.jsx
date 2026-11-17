import api from "@/services/api";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PageTitle from "@/components/common/PageTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Heart, RefreshCcw, ShoppingBagIcon, Store, Truck } from "lucide-react";
import { toast } from "sonner";

function Home() {
  const [banners, setBanners] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Men");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get("/products");

        if (response.data.success) {
          const allProducts = response.data.data;
          const mensProduct = allProducts.filter(
            (product) => product.category === activeCategory,
          );
          setProducts(mensProduct);
          console.log(response.data.data);
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
  }, [activeCategory]);

  const handleAddToCart = async (productId) => {
    try {
      const response = await api.post("/cart/add", { productId });
      if (response.data.success) {
        toast.success("Added to cart");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Please login first");
    }
  };

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
      <Link to="/members" className="w-full cursor-pointer">
        <img
          className="w-full"
          src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1790477569/memberBanner.webp"
          alt=""
        />
      </Link>
      <PageTitle title={"POPULAR CATEGORIES"} />
      <div className="grid grid-cols-6 border-y border-[#E7E3DC]">
        <div className="flex min-h-30 flex-col items-center justify-center border-r border-[#E7E3DC] px-4 py-4  hover:shadow focus:shadow">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788513129/category_sec_3.avif"
            alt="T-Shirts"
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 text-sm font-normal">T-Shirts</p>
        </div>

        <div className="flex min-h-30 flex-col items-center justify-center border-r border-[#E7E3DC] px-4 py-4  hover:shadow focus:shadow">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788513127/category_sec_1.avif"
            alt="Shirts"
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 text-sm font-normal">Shirts</p>
        </div>

        <div className="flex min-h-30 flex-col items-center justify-center border-r border-[#E7E3DC] px-4 py-4  hover:shadow focus:shadow">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788513117/category_sec2.webp"
            alt="Bottoms"
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 text-sm font-normal">Bottoms</p>
        </div>

        <div className="flex min-h-30 flex-col items-center justify-center border-r border-[#E7E3DC] px-4 py-4  hover:shadow focus:shadow">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788513128/category_sec_2.avif"
            alt="Co-Ords"
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 text-sm font-normal">Co-Ords</p>
        </div>

        <div className="flex min-h-30 flex-col items-center justify-center border-r border-[#E7E3DC] px-4 py-4  hover:shadow focus:shadow">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788513118/category_sec3.webp"
            alt="New Arrivals"
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 text-sm font-normal">New Arrivals</p>
        </div>

        <div className="flex min-h-30 flex-col items-center justify-center px-4 py-4  hover:shadow focus:shadow">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788513116/category_sec1.webp"
            alt="Bags"
            className="h-14 w-14 object-contain"
          />
          <p className="mt-3 text-sm font-normal">Bags</p>
        </div>
      </div>
      <section className="relative overflow-hidden mt-10">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788512756/banner_1.webp"
            alt="New Arrivals"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative min-h-[850px] px-4 pt-20 sm:px-8 lg:px-12">
          <h1 className="text-center text-6xl font-black uppercase tracking-tight text-white sm:text-7xl lg:text-9xl">
            New
            <br />
            Arrivals
          </h1>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:mt-20 lg:grid-cols-2">
            <Link to="/bags" className="group block overflow-hidden">
              <div className="relative h-[420px] overflow-hidden sm:h-[500px]">
                <img
                  src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788512755/banner_3.webp"
                  alt="Trendy Bags"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
                  <p className="text-xs font-medium uppercase tracking-[0.25em]">
                    Style Meets Function
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold uppercase sm:text-4xl">
                    Trendy Bags
                  </h2>

                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em]">
                    Explore Now →
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/sunglasses" className="group block overflow-hidden">
              <div className="relative h-[420px] overflow-hidden sm:h-[500px]">
                <img
                  src="https://res.cloudinary.com/wp6a9yvf/image/upload/v1788512755/banner_2.webp"
                  alt="Trendy Sunglasses"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
                  <p className="text-xs font-medium uppercase tracking-[0.25em]">
                    See The Difference
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold uppercase sm:text-4xl">
                    Trendy Sunglasses
                  </h2>

                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em]">
                    Explore Now →
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Latest Collection
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              New Arrivals
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("Men")}
              className={`px-5 py-3 text-sm font-medium hover:shadow focus:shadow ${
                activeCategory === "Men"
                  ? "bg-[#222222] text-white"
                  : "border border-[#E7E3DC] bg-white text-muted-foreground"
              }`}
            >
              T-Shirt
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Shirt")}
              className={`px-5 py-3 text-sm font-medium hover:shadow focus:shadow ${
                activeCategory === "Shirt"
                  ? "bg-[#222222] text-white"
                  : "border border-[#E7E3DC] bg-white text-muted-foreground"
              }`}
            >
              Shirt
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Bottoms")}
              className={`px-5 py-3 text-sm font-medium hover:shadow focus:shadow ${
                activeCategory === "Bottoms"
                  ? "bg-[#222222] text-white"
                  : "border border-[#E7E3DC] bg-white text-muted-foreground"
              }`}
            >
              Bottoms
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Co-Ords")}
              className={`px-5 py-3 text-sm font-medium hover:shadow focus:shadow ${
                activeCategory === "Co-Ords"
                  ? "bg-[#222222] text-white"
                  : "border border-[#E7E3DC] bg-white text-muted-foreground"
              }`}
            >
              Co-Ords
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("All Products")}
              className={`px-5 py-3 text-sm font-medium hover:shadow focus:shadow ${
                activeCategory === "All Products"
                  ? "bg-[#222222] text-white"
                  : "border border-[#E7E3DC] bg-white text-muted-foreground"
              }`}
            >
              All Products
            </button>

            <Link
              to="/new-arrivals"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide underline underline-offset-4 hover:shadow focus:shadow"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
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
                onClick={() => handleAddToCart(product._id)}
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
