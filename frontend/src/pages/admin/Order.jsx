import React, { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  Package,
  Search,
  ShoppingCart,
  Truck,
  XCircle,
} from "lucide-react";

function Order() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const orders = [
    {
      id: "#VN1024",
      customer: "Rahul Sharma",
      email: "rahul@gmail.com",
      product: "Oversized T-Shirt",
      items: 2,
      amount: "₹1,998",
      status: "Delivered",
      date: "Sep 20, 2026",
    },
    {
      id: "#VN1023",
      customer: "Arjun Patel",
      email: "arjun@gmail.com",
      product: "Cargo Pants",
      items: 1,
      amount: "₹1,799",
      status: "Processing",
      date: "Sep 20, 2026",
    },
    {
      id: "#VN1022",
      customer: "Priya Shah",
      email: "priya@gmail.com",
      product: "Classic Shirt",
      items: 2,
      amount: "₹2,598",
      status: "Shipped",
      date: "Sep 19, 2026",
    },
    {
      id: "#VN1021",
      customer: "Aarav Mehta",
      email: "aarav@gmail.com",
      product: "Denim Jacket",
      items: 1,
      amount: "₹2,499",
      status: "Pending",
      date: "Sep 19, 2026",
    },
    {
      id: "#VN1020",
      customer: "Riya Patel",
      email: "riya@gmail.com",
      product: "Wide Leg Jeans",
      items: 1,
      amount: "₹1,899",
      status: "Delivered",
      date: "Sep 18, 2026",
    },
    {
      id: "#VN1019",
      customer: "Dev Shah",
      email: "dev@gmail.com",
      product: "Regular Fit T-Shirt",
      items: 3,
      amount: "₹2,997",
      status: "Cancelled",
      date: "Sep 18, 2026",
    },
    {
      id: "#VN1018",
      customer: "Meera Joshi",
      email: "meera@gmail.com",
      product: "Oversized Hoodie",
      items: 1,
      amount: "₹1,599",
      status: "Delivered",
      date: "Sep 17, 2026",
    },
    {
      id: "#VN1017",
      customer: "Karan Patel",
      email: "karan@gmail.com",
      product: "Straight Fit Jeans",
      items: 2,
      amount: "₹3,598",
      status: "Shipped",
      date: "Sep 17, 2026",
    },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: "1,248",
      icon: ShoppingCart,
    },
    {
      title: "Pending",
      value: "42",
      icon: Package,
    },
    {
      title: "Shipped",
      value: "91",
      icon: Truck,
    },
    {
      title: "Cancelled",
      value: "18",
      icon: XCircle,
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "All Status" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-full bg-[#F7F7F5] p-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1B1A18]">
              Orders
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              Manage and track all customer orders.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded border border-[#E7E3DC] bg-white px-4 py-2.5 text-sm text-neutral-600">
            <CalendarDays className="h-4 w-4" />
            September 2026
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded border border-[#E7E3DC] bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">{stat.title}</p>

                    <h2 className="mt-2 text-2xl font-semibold text-[#1B1A18]">
                      {stat.value}
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F3F3F1]">
                    <Icon className="h-5 w-5 text-[#1B1A18]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded border border-[#E7E3DC] bg-white">
          <div className="border-b border-[#E7E3DC] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />

                <input
                  type="text"
                  placeholder="Search orders, customers or products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 w-full rounded border border-[#E7E3DC] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#1B1A18]"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="h-10 rounded border border-[#E7E3DC] bg-white px-3 text-sm text-neutral-600 outline-none focus:border-[#1B1A18]"
                >
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>

                <select className="h-10 rounded border border-[#E7E3DC] bg-white px-3 text-sm text-neutral-600 outline-none focus:border-[#1B1A18]">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Highest Amount</option>
                  <option>Lowest Amount</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left">
              <thead>
                <tr className="border-b border-[#E7E3DC] text-xs uppercase tracking-wider text-neutral-400">
                  <th className="px-6 py-4 font-medium">Order</th>

                  <th className="px-6 py-4 font-medium">Customer</th>

                  <th className="px-6 py-4 font-medium">Product</th>

                  <th className="px-6 py-4 font-medium">Amount</th>

                  <th className="px-6 py-4 font-medium">Status</th>

                  <th className="px-6 py-4 font-medium">Date</th>

                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-[#E7E3DC] last:border-0 hover:bg-[#FAFAF8]"
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-[#1B1A18]">
                          {order.id}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-[#1B1A18]">
                            {order.customer}
                          </p>

                          <p className="mt-1 text-xs text-neutral-400">
                            {order.email}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm text-neutral-700">
                            {order.product}
                          </p>

                          <p className="mt-1 text-xs text-neutral-400">
                            {order.items} {order.items === 1 ? "item" : "items"}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-[#1B1A18]">
                          {order.amount}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                            order.status === "Delivered"
                              ? "bg-emerald-50 text-emerald-600"
                              : order.status === "Processing"
                                ? "bg-blue-50 text-blue-600"
                                : order.status === "Shipped"
                                  ? "bg-purple-50 text-purple-600"
                                  : order.status === "Cancelled"
                                    ? "bg-red-50 text-red-600"
                                    : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-neutral-500">
                        {order.date}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex h-9 w-9 items-center justify-center rounded border border-[#E7E3DC] text-neutral-500 transition hover:bg-[#F3F3F1] hover:text-[#1B1A18]">
                          <Eye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-16 text-center">
                      <p className="text-sm font-medium text-[#1B1A18]">
                        No orders found
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        Try changing your search or filters.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-[#E7E3DC] px-6 py-4">
            <p className="text-sm text-neutral-500">
              Showing{" "}
              <span className="font-medium text-[#1B1A18]">
                {filteredOrders.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[#1B1A18]">
                {orders.length}
              </span>{" "}
              orders
            </p>

            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#E7E3DC] text-neutral-500 transition hover:bg-[#F3F3F1]">
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded bg-[#1B1A18] text-sm font-medium text-white">
                1
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#E7E3DC] text-sm text-neutral-600 transition hover:bg-[#F3F3F1]">
                2
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#E7E3DC] text-sm text-neutral-600 transition hover:bg-[#F3F3F1]">
                3
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#E7E3DC] text-neutral-500 transition hover:bg-[#F3F3F1]">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
