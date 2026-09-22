import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "../components/layout/Navbar";
import AdminNavbar from "../components/admin/AdminNavbar";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "@/pages/Profile";
import MyOrders from "@/pages/MyOrders";
import Dashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import AdminProtect from "@/components/common/AdminProtect";
import Sidebar from "@/components/admin/Sidebar";
import Order from "@/pages/admin/Order";
import Inventory from "@/pages/admin/Inventory";
import Product from "@/pages/admin/Product";
import Customers from "@/pages/admin/Customers";
import Setting from "@/pages/admin/Setting";
import AddProducts from "@/pages/admin/AddProducts";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminNavbar />

        <main className="min-h-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};


function AppRoutes() {
  return (
    <>
      <Toaster position="bottom-center" />

      <main>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-order" element={<MyOrders />} />
            </Route>
          </Route>

          <Route element={<AdminProtect />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/orders" element={<Order />} />
              <Route path="/admin/inventory" element={<Inventory />} />
              <Route path="/admin/products" element={<Product />} />
              <Route path="/admin/add-products" element={<AddProducts />} />
              <Route path="/admin/customers" element={<Customers />} />
              <Route path="/admin/setting" element={<Setting />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default AppRoutes;
