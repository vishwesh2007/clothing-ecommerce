import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    } else
    {
      setLogin(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center py-4 px-20 bg-white text-[#1a1a1a] border-b border-[#eaeaea]">
      <div>
        <Link to="/" className="text-xl font-bold tracking-tight">
          logo
        </Link>
      </div>

      <nav className="flex justify-center items-center gap-10 font-medium">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link to="/shop" className="hover:text-primary transition-colors">
          Shop
        </Link>
        <Link to="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>

      {!isLogin ? (
        <div className="flex justify-center items-center gap-3">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>
      ) : (
        <Button variant="secondary" onClick={handleLogout}>Logout</Button>
      )}
    </header>
  );
}

export default Navbar;
