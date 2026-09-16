import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import api from "@/services/api.js";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      console.log("Login Successfully:", response.data);
      toast.success("Login Successfully");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      navigate("/profile");
    } catch (err) {
      console.log("Login Error:", err);
      const error = err.response?.data?.message;
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white inset-0 absolute flex justify-center items-center z-50 top-0">
      <div className="flex flex-col justify-center items-start w-96 px-4">
        <h1 className="text-d-h2 font-bold">Welcome Back</h1>

        <form
          onSubmit={handleSubmit}
          action=""
          className="mt-8 flex flex-col w-full bg-white"
        >
          <label className="text-d-label" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-d-input border p-2.5 hover:shadow focus:shadow outline-0 rounded-[3px] duration-300 mt-1"
            type="email"
            id="email"
            placeholder="Enter email"
          />

          <label className="text-d-label mt-4" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-d-input border p-2.5 hover:shadow focus:shadow outline-0 rounded-[3px] duration-300 mt-1"
            type="password"
            id="password"
            placeholder="Enter password"
          />

          <Link
            to="/forgot-password"
            className="text-[12px] text-gray-600 mt-2 hover:underline"
          >
            Forgot Password?
          </Link>

          <button
            className="bg-[#1a1a1a] cursor-pointer mt-6 py-2.5 text-d-btn text-white rounded-[3px] hover:bg-black duration-300"
            type="submit"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Login...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="flex items-center justify-center w-full gap-1 mt-4 text-[12px] text-gray-600">
          <span>Don't have an account?</span>
          <Link to="/register" className="underline font-medium text-black">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
