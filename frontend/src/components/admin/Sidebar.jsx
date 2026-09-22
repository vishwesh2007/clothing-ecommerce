import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Megaphone,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  

  return (
    <aside className="flex w-70 flex-col gap-8 border-r border-[#E7E3DC]/10 bg-[#222222] p-8 text-[#FAFAF7]">
      <div>
        <h1 className="px-3 text-xl font-bold tracking-wider text-white">
          VENANCO
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
            Overview
          </p>

          <div className="space-y-1">
            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/dashboard")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              to="/admin/orders"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/orders")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Link>

            <Link
              to="/admin/products"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/products") || isActive("/admin/add-products")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Package className="h-4 w-4" />
              Products
            </Link>

            <Link
              to="/admin/customers"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/customers")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>

            <Link
              to="/admin/inventory"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/inventory")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Boxes className="h-4 w-4" />
              Inventory
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
            Insights
          </p>

          <div className="space-y-1">
            <Link
              to="/admin/analytics"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/analytics")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>

            <Link
              to="/admin/promotions"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/promotions")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Megaphone className="h-4 w-4" />
              Promotions
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
            System
          </p>

          <div className="space-y-1">
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                isActive("/admin/settings")
                  ? "bg-white font-medium text-black"
                  : "text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
