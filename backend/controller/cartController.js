// getCart() addToCart() updateCart() removeFromCart() clearCart()

import { Cart } from "../model/cart.js";

export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.json({
        message: "id is required",
        success: false,
      });
    }
    let cart = await Cart.findOne({
      userId: req.user.id,
    });

    if (!cart) {
      cart = await Cart.create({
        userId: req.user.id,
        items: [
          {
            productId,
            quantity: 1,
          },
        ],
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({
          productId,
          quantity: 1,
        });
      }
      await cart.save();
    }
    res.status(200).json({
      success: true,
      message: "Product added to cart",
      data: cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.user.id,
    }).populate("items.productId");
    if (!cart) {
      return res.json({
        success: true,
        data: {
          item: [],
        },
      });
    }
    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
