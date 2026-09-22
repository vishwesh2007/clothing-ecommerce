import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login first...");
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>;
}

export default ProtectedRoute;
