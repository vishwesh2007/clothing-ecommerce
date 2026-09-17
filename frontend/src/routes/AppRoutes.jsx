import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
// Layout Components
import Navbar from "../components/layout/Navbar";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "@/pages/Profile";
import ProtectedRoute from "@/components/ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Navbar />

      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </main>
    </>
  );
}

export default AppRoutes;
