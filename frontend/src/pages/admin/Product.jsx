import api from "@/services/api";

import {
  AlertTriangle,
  Boxes,
  Package,
  PackageX,
  Plus,
  Search,
  Edit,
  Trash2,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Product() {
  const [products, setProducts] = useState([]);

  const totalStock = products.reduce(
    (sum, product) => sum + (product.stock || 0),
    0,
  );

  const outOfStock = products.filter((product) => product.stock === 0).length;

  const lowStock = products.filter((product) => product.stock <= 5).length;

  const inStock = products.filter((product) => product.stock >= 5).length;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-full flex-col gap-5 bg-gray-50 p-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#1B1A18]">
            All Products
          </h1>

          <p className="mt-1 text-sm text-neutral-500">
            {products.length} products
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/add-products")}
          className="flex items-center gap-2 bg-[#1B1A18] px-5 py-2.5 text-sm font-medium text-white hover:bg-black hover:shadow focus:shadow"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="flex items-center justify-between rounded border border-[#E7E3DC] bg-white p-5">
          <div>
            <p className="text-2xl font-semibold text-[#1B1A18]">
              {products.length}
            </p>

            <p className="mt-1 text-sm text-neutral-500">Total Products</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100">
            <Package className="h-5 w-5 text-[#1B1A18]" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded border border-[#E7E3DC] bg-white p-5">
          <div>
            <p className="text-2xl font-semibold text-[#1B1A18]">{inStock}</p>

            <p className="mt-1 text-sm text-neutral-500">In Stock</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100">
            <Boxes className="h-5 w-5 text-[#1B1A18]" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded border border-[#E7E3DC] bg-white p-5">
          <div>
            <p className="text-2xl font-semibold text-[#1B1A18]">{lowStock}</p>

            <p className="mt-1 text-sm text-neutral-500">Low Stock</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100">
            <AlertTriangle className="h-5 w-5 text-[#1B1A18]" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded border border-[#E7E3DC] bg-white p-5">
          <div>
            <p className="text-2xl font-semibold text-[#1B1A18]">
              {outOfStock}
            </p>

            <p className="mt-1 text-sm text-neutral-500">Out of Stock</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100">
            <PackageX className="h-5 w-5 text-[#1B1A18]" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#E7E3DC] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#E7E3DC] p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#1B1A18]">
              All Products
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Manage your products and inventory
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-64">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="h-9 w-full rounded-lg border border-[#E7E3DC] bg-white pl-9 pr-3 text-sm outline-none placeholder:text-neutral-400 hover:shadow focus:shadow"
              />
            </div>

            <select className="h-9 rounded-lg border border-[#E7E3DC] bg-white px-3 text-sm text-neutral-600 outline-none hover:shadow focus:shadow">
              <option>All Status</option>
              <option>Active</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
              <option>Draft</option>
            </select>

            <select className="h-9 rounded-lg border border-[#E7E3DC] bg-white px-3 text-sm text-neutral-600 outline-none hover:shadow focus:shadow">
              <option>Sort: Newest</option>
              <option>Sort: Price high–low</option>
              <option>Sort: Price low–high</option>
              <option>Sort: Best selling</option>
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-sm text-neutral-500">No products found</p>
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto overflow-x-auto">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-white">
                <TableRow className="bg-neutral-50 hover:bg-neutral-50">
                  <TableHead className="px-6 font-semibold text-[#1B1A18]">
                    Product Name
                  </TableHead>

                  <TableHead className="font-semibold text-[#1B1A18]">
                    Category
                  </TableHead>

                  <TableHead className="font-semibold text-[#1B1A18]">
                    Price
                  </TableHead>

                  <TableHead className="font-semibold text-[#1B1A18]">
                    Stock
                  </TableHead>

                  <TableHead className="pr-6 text-right font-semibold text-[#1B1A18]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id} className="hover:bg-neutral-50">
                    <TableCell className="px-6 font-medium text-[#1B1A18]">
                      {product.name}
                    </TableCell>

                    <TableCell>
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                        {product.category}
                      </span>
                    </TableCell>

                    <TableCell className="font-medium text-[#1B1A18]">
                      ₹{product.price}
                    </TableCell>

                    <TableCell>
                      <span
                        className={
                          product.stock === 0
                            ? "font-medium text-red-600"
                            : product.stock <= 10
                              ? "font-medium text-orange-500"
                              : "font-medium text-green-600"
                        }
                      >
                        {product.stock}
                      </span>
                    </TableCell>

                    <TableCell className="pr-6">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E3DC] text-neutral-600 hover:bg-neutral-100 hover:text-[#1B1A18] hover:shadow focus:shadow"
                        >
                          <Edit className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 hover:shadow focus:shadow"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
