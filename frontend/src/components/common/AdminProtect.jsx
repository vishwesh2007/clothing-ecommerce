import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

function AdminProtect() {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (!token) {
      toast.error("Login First...");
    } else if (userRole !== "admin") {
      toast.error("Only admin access");
    }
  }, [token, userRole]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AdminProtect;
