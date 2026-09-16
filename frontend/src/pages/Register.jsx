import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import api from "@/services/api.js";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      console.log("Registration Successfully:", response.data);
        toast.success("Registration Successfully");
        
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      navigate("/profile");
    } catch (err) {
      console.log("Registration Error:", err);
      const error = err.response?.data?.message;
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white inset-0 absolute flex justify-center items-center z-50 top-0">
      <div className="flex flex-col justify-center items-start w-96 px-4">
        <h1 className="text-d-h2 font-bold">Create Account</h1>

        <form
          onSubmit={handleSubmit}
          action=""
          className="mt-8 flex flex-col w-full bg-white"
        >
          <label className="text-d-label" htmlFor="name">
            Full Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="text-d-input bg-white border p-2.5 hover:shadow focus:shadow outline-0 rounded-[3px] duration-300 mt-1"
            type="text"
            id="name"
            placeholder="Enter full name"
            
          />

          <label className="text-d-label mt-4" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-d-input bg-white border p-2.5 hover:shadow focus:shadow outline-0 rounded-[3px] duration-300 mt-1"
            type="email"
            id="email"
            placeholder="Enter email"
            
          />

          <label className="text-d-label mt-4" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-d-input bg-white border p-2.5 hover:shadow focus:shadow outline-0 rounded-[3px] duration-300 mt-1"
            type="password"
            id="password"
            placeholder="Enter password"
            
          />

          <button
            className="bg-[#1a1a1a] cursor-pointer mt-6 py-2.5 text-d-btn text-white rounded-[3px] hover:bg-black duration-300"
            type="submit"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Creating Account...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="flex items-center justify-center w-full gap-1 mt-4 text-[12px] text-gray-600">
          <span>Already have an account?</span>
          <Link to="/login" className="underline font-medium text-black">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
