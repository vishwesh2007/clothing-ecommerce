import React, { useState } from "react";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import api from "@/services/api";
import { toast } from "sonner";

function AddProducts() {
  const [formdata, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    console.log("FORM DATA:", formdata);

    try {
      const response = await api.post("/products/create", formdata);

      toast.success("New product added");
      console.log(response);
    } catch (error) {
      toast.error("Fill up all the details")
    }
  };

  return (
    <div className="min-h-full bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500">
              <Link
                to="/admin/products"
                className="flex items-center gap-1 hover:text-[#1B1A18]"
              >
                <ArrowLeft className="h-4 w-4" />
                Products
              </Link>

              <span>/</span>
              <span>Add Product</span>
            </div>

            <h1 className="text-2xl font-semibold text-[#1B1A18]">
              Add New Product
            </h1>

            <p className="mt-1 text-sm text-neutral-500">
              Add a new product to your store.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/admin/products"
              className="rounded border border-[#E7E3DC] bg-white px-5 py-2.5 text-sm font-medium text-[#1B1A18] hover:bg-neutral-50 hover:shadow focus:shadow"
            >
              Cancel
            </Link>

            <button
              onClick={handleSubmit}
              className="rounded bg-[#1B1A18] px-5 py-2.5 text-sm font-medium text-white hover:bg-black hover:shadow focus:shadow"
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="rounded border border-[#E7E3DC] bg-white p-6">
              <h2 className="text-base font-semibold text-[#1B1A18]">
                Basic Information
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                Enter the basic details of your product.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1B1A18]">
                    Product Name
                  </label>

                  <input
                    required
                    onChange={handleChange}
                    value={formdata.name}
                    name="name"
                    type="text"
                    placeholder="e.g. Oversized Cotton T-Shirt"
                    className="h-11 w-full rounded border border-[#E7E3DC] px-3 text-sm outline-none placeholder:text-neutral-400 hover:shadow focus:shadow"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1B1A18]">
                    Description
                  </label>

                  <textarea
                    required
                    onChange={handleChange}
                    value={formdata.description}
                    name="description"
                    rows="5"
                    placeholder="Describe your product..."
                    className="w-full resize-none rounded border border-[#E7E3DC] px-3 py-3 text-sm outline-none placeholder:text-neutral-400 hover:shadow focus:shadow"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1B1A18]">
                    Category
                  </label>

                  <Select
                    required
                    value={formdata.category}
                    onValueChange={(value) =>
                      handleChange({
                        target: {
                          name: "category",
                          value,
                        },
                      })
                    }
                  >
                    <SelectTrigger className="h-11 w-full rounded border border-[#E7E3DC] bg-white px-3 text-sm text-neutral-600 shadow-none outline-none hover:shadow focus:shadow">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Men">Men</SelectItem>
                      <SelectItem value="Women">Women</SelectItem>
                      <SelectItem value="Kids">Kids</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="rounded border border-[#E7E3DC] bg-white p-6">
              <h2 className="text-base font-semibold text-[#1B1A18]">
                Pricing & Inventory
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                Set the product price and available stock.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1B1A18]">
                    Price
                  </label>

                  <div className="relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-neutral-500">
                      ₹
                    </span>

                    <input
                      required
                      onChange={handleChange}
                      value={formdata.price}
                      name="price"
                      type="number"
                      min="0"
                      placeholder="999"
                      className="h-11 w-full rounded border border-[#E7E3DC] pl-8 pr-3 text-sm outline-none hover:shadow focus:shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1B1A18]">
                    Stock
                  </label>

                  <input
                    required
                    onChange={handleChange}
                    value={formdata.stock}
                    name="stock"
                    type="number"
                    min="0"
                    placeholder="50"
                    className="h-11 w-full rounded border border-[#E7E3DC] px-3 text-sm outline-none hover:shadow focus:shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded border border-[#E7E3DC] bg-white p-6">
              <h2 className="text-base font-semibold text-[#1B1A18]">
                Product Image
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                Add the image URL of your product.
              </p>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-[#1B1A18]">
                  Image URL
                </label>

                <input
                  required
                  onChange={handleChange}
                  value={formdata.imageUrl}
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/product.jpg"
                  className="h-11 w-full rounded border border-[#E7E3DC] px-3 text-sm outline-none placeholder:text-neutral-400 hover:shadow focus:shadow"
                />

                <p className="mt-2 text-xs text-neutral-500">
                  Enter a direct URL to the product image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
