import api from "@/services/api";

import { Heart, Minus, Plus, Trash2 } from "lucide-react";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Cart() {
  const [cartProduct, setCartProduct] = useState(null);

  const fetchCartProduct = async () => {
    try {
      const response = await api.get("/cart");

      if (response.data.success) {
        setCartProduct(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartProduct();
  }, []);

  console.log(cartProduct);

  const handleAddToCart = async (productId) => {
    setCartProduct((prevCart) => {
      if (!prevCart) return prevCart;
      
    });
  };

  const cartItems = cartProduct?.items || [];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0,
  );

  return (
    <div className="w-full bg-white px-4 py-8 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Your Cart</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="overflow-hidden rounded border border-[#E7E3DC]">
            <div className="hidden grid-cols-[1fr_100px_130px_100px] border-b border-[#E7E3DC] px-5 py-4 text-sm font-medium md:grid">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex min-h-60 items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Your cart is empty
                </p>
              </div>
            ) : (
              cartItems.map((item) => {
                const product = item.productId;
                const inStock = product.stock > 0;
                const itemTotal = product.price * item.quantity;

                return (
                  <div
                    key={item._id}
                    className="grid gap-4 border-b border-[#E7E3DC] p-5 md:grid-cols-[1fr_100px_130px_100px] md:items-center"
                  >
                    <div className="flex gap-4">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-32 w-24 shrink-0 object-cover"
                      />

                      <div className="flex min-w-0 flex-col justify-between">
                        <div>
                          <h2 className="text-sm font-medium">
                            {product.name}
                          </h2>

                          <p className="mt-1 text-sm text-muted-foreground">
                            {product.category}
                          </p>

                          <p
                            className={`mt-2 w-fit rounded px-2 py-1 text-[11px] ${
                              inStock
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-500"
                            }`}
                          >
                            {inStock ? "In Stock" : "Out of Stock"}
                          </p>
                        </div>

                        <div className="mt-4 flex gap-4">
                          <button
                            type="button"
                            className="flex items-center gap-1 text-xs text-muted-foreground p-2 hover:shadow focus:shadow"
                          >
                            <Heart className="size-4" />
                            Wishlist
                          </button>

                          <button
                            type="button"
                            className="flex items-center gap-1 text-xs text-red-500 p-2 hover:shadow focus:shadow"
                          >
                            <Trash2 className="size-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium">₹{product.price}</p>
                    </div>

                    <div className="flex w-fit items-center border border-[#E7E3DC]">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center hover:shadow focus:shadow"
                      >
                        <Minus className="size-4" />
                      </button>

                      <span className="flex h-9 w-10 items-center justify-center border-x border-[#E7E3DC] text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleAddToCart(product._id)}
                        type="button"
                        className="flex h-9 w-9 items-center justify-center hover:shadow focus:shadow"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>

                    <div>
                      <p className="text-sm font-medium">₹{itemTotal}</p>
                    </div>
                  </div>
                );
              })
            )}

            {cartItems.length > 0 && (
              <div className="p-5">
                <button
                  type="button"
                  className="border border-[#E7E3DC] px-5 py-3 text-sm font-medium hover:shadow focus:shadow"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          <div className="h-fit rounded border border-[#E7E3DC] p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>

                <span className="font-medium">₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>

                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="border-t border-[#E7E3DC] pt-4">
                <div className="flex justify-between">
                  <span className="text-base font-semibold">Total</span>

                  <span className="text-lg font-semibold">₹{subtotal}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              disabled={cartItems.length === 0}
              className="mt-6 w-full bg-[#2563EB] px-5 py-3 text-sm font-medium text-white hover:shadow focus:shadow disabled:cursor-not-allowed disabled:opacity-50"
            >
              Proceed to Checkout
            </button>

            <button
              type="button"
              className="mt-3 w-full border border-[#E7E3DC] px-5 py-3 text-sm font-medium hover:shadow focus:shadow"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
