import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  AlertTriangle,
  Boxes,
  CheckCircle2,
  Clock3,
  IndianRupee,
  Package,
  ShoppingCart,
  Users,
  XCircle,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹2,48,500",
      change: "+12.5%",
      positive: true,
      icon: IndianRupee,
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      positive: true,
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      value: "842",
      change: "+5.4%",
      positive: true,
      icon: Users,
    },
    {
      title: "Products",
      value: "186",
      change: "-2.1%",
      positive: false,
      icon: Package,
    },
  ];

  const recentOrders = [
    {
      id: "#VN1024",
      customer: "Rahul Sharma",
      product: "Oversized T-Shirt",
      amount: "₹999",
      status: "Delivered",
      date: "Today, 10:42 AM",
    },
    {
      id: "#VN1023",
      customer: "Arjun Patel",
      product: "Cargo Pants",
      amount: "₹1,799",
      status: "Processing",
      date: "Today, 09:18 AM",
    },
    {
      id: "#VN1022",
      customer: "Priya Shah",
      product: "Classic Shirt",
      amount: "₹1,299",
      status: "Shipped",
      date: "Yesterday",
    },
    {
      id: "#VN1021",
      customer: "Aarav Mehta",
      product: "Denim Jacket",
      amount: "₹2,499",
      status: "Pending",
      date: "Yesterday",
    },
    {
      id: "#VN1020",
      customer: "Riya Patel",
      product: "Wide Leg Jeans",
      amount: "₹1,899",
      status: "Delivered",
      date: "Sep 18, 2026",
    },
  ];

  const topProducts = [
    {
      name: "Oversized T-Shirt",
      category: "Men",
      sold: 124,
      revenue: "₹1,23,876",
    },
    {
      name: "Wide Leg Jeans",
      category: "Women",
      sold: 98,
      revenue: "₹1,86,102",
    },
    {
      name: "Cargo Pants",
      category: "Men",
      sold: 86,
      revenue: "₹1,54,714",
    },
    {
      name: "Classic Shirt",
      category: "Men",
      sold: 74,
      revenue: "₹96,126",
    },
  ];

  const inventory = [
    {
      name: "Oversized T-Shirt",
      stock: 3,
      status: "Low Stock",
    },
    {
      name: "Cargo Pants",
      stock: 5,
      status: "Low Stock",
    },
    {
      name: "Classic Shirt",
      stock: 0,
      status: "Out of Stock",
    },
    {
      name: "Denim Jacket",
      stock: 7,
      status: "Low Stock",
    },
  ];

  const categories = [
    { name: "Men", value: 42 },
    { name: "Women", value: 31 },
    { name: "Kids", value: 17 },
    { name: "Accessories", value: 10 },
  ];

  return (
    <div className="min-h-full bg-[#F7F7F5] p-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1B1A18]">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              Here's what's happening with your store today.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded border border-[#E7E3DC] bg-white px-4 py-2.5 text-sm text-neutral-600">
            <Clock3 className="h-4 w-4" />
            Last 30 days
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
                <div className="flex items-start justify-between">
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

                <div className="mt-4 flex items-center gap-1 text-xs">
                  {stat.positive ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
                  )}

                  <span
                    className={
                      stat.positive
                        ? "font-medium text-emerald-600"
                        : "font-medium text-red-500"
                    }
                  >
                    {stat.change}
                  </span>

                  <span className="text-neutral-400">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
          <div className="rounded border border-[#E7E3DC] bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-[#1B1A18]">
                  Sales Overview
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Revenue performance over the last 30 days
                </p>
              </div>

              <div className="flex items-center gap-1 rounded border border-[#E7E3DC] p-1">
                <button className="rounded bg-[#1B1A18] px-3 py-1.5 text-xs font-medium text-white">
                  Revenue
                </button>
                <button className="rounded px-3 py-1.5 text-xs text-neutral-500">
                  Orders
                </button>
              </div>
            </div>

            <div className="mt-8 flex h-64 items-end gap-3 border-b border-[#E7E3DC] px-2">
              {[
                35, 48, 42, 60, 52, 72, 65, 80, 68, 88, 76, 94, 82, 100, 91,
              ].map((height, index) => (
                <div key={index} className="flex flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-[#1B1A18] transition hover:bg-neutral-700"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-between px-2 text-xs text-neutral-400">
              <span>Sep 1</span>
              <span>Sep 7</span>
              <span>Sep 14</span>
              <span>Sep 21</span>
              <span>Sep 30</span>
            </div>
          </div>

          <div className="rounded border border-[#E7E3DC] bg-white p-6">
            <div>
              <h2 className="text-base font-semibold text-[#1B1A18]">
                Order Status
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Current order breakdown
              </p>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-neutral-600">Pending</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1B1A18]">
                    42
                  </span>
                </div>

                <div className="h-2 rounded-full bg-neutral-100">
                  <div className="h-2 w-[35%] rounded-full bg-amber-400" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-neutral-600">Processing</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1B1A18]">
                    68
                  </span>
                </div>

                <div className="h-2 rounded-full bg-neutral-100">
                  <div className="h-2 w-[52%] rounded-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-neutral-600">Shipped</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1B1A18]">
                    91
                  </span>
                </div>

                <div className="h-2 rounded-full bg-neutral-100">
                  <div className="h-2 w-[68%] rounded-full bg-purple-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-neutral-600">Delivered</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1B1A18]">
                    1,047
                  </span>
                </div>

                <div className="h-2 rounded-full bg-neutral-100">
                  <div className="h-2 w-[92%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-neutral-600">Cancelled</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1B1A18]">
                    18
                  </span>
                </div>

                <div className="h-2 rounded-full bg-neutral-100">
                  <div className="h-2 w-[15%] rounded-full bg-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded border border-[#E7E3DC] bg-white">
          <div className="flex items-center justify-between border-b border-[#E7E3DC] p-6">
            <div>
              <h2 className="text-base font-semibold text-[#1B1A18]">
                Recent Orders
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Latest orders from your store
              </p>
            </div>

            <button className="text-sm font-medium text-[#1B1A18] hover:underline">
              View all
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="border-b border-[#E7E3DC] text-xs uppercase tracking-wider text-neutral-400">
                  <th className="px-6 py-4 font-medium">Order</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Product</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-[#E7E3DC] last:border-0"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#1B1A18]">
                      {order.id}
                    </td>

                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {order.product}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-[#1B1A18]">
                      {order.amount}
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
                                : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-neutral-500">
                      {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded border border-[#E7E3DC] bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-[#1B1A18]">
                  Top Selling Products
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Best performing products
                </p>
              </div>

              <Boxes className="h-5 w-5 text-neutral-400" />
            </div>

            <div className="mt-6 divide-y divide-[#E7E3DC]">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F3F3F1] text-sm font-semibold text-[#1B1A18]">
                      {index + 1}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#1B1A18]">
                        {product.name}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {product.category} · {product.sold} sold
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#1B1A18]">
                    {product.revenue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded border border-[#E7E3DC] bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-[#1B1A18]">
                  Inventory Alerts
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Products that need attention
                </p>
              </div>

              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>

            <div className="mt-6 divide-y divide-[#E7E3DC]">
              {inventory.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded bg-[#F3F3F1]">
                      <Package className="h-4 w-4 text-neutral-600" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#1B1A18]">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-neutral-500">
                        {item.stock === 0
                          ? "Currently unavailable"
                          : `${item.stock} units remaining`}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      item.stock === 0
                        ? "bg-red-50 text-red-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded border border-[#E7E3DC] bg-white p-6">
          <div>
            <h2 className="text-base font-semibold text-[#1B1A18]">
              Sales by Category
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Revenue distribution across categories
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1B1A18]">
                    {category.name}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {category.value}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-neutral-100">
                  <div
                    className="h-2 rounded-full bg-[#1B1A18]"
                    style={{ width: `${category.value * 2.2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
