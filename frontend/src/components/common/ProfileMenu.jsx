import { Package, Heart, MapPin, LogOut, User2Icon, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/");
  };

  const handleNavigation = (path) => {
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="h-10 rounded-full w-10 cursor-pointer"
          />
        }
      >
        <User2Icon className="h-5 w-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52 rounded-[6px]! mt-2!">
        <DropdownMenuItem
          onClick={() => handleNavigation("/profile")}
          className="cursor-pointer"
        >
          <User2Icon className="mr-2 h-4 w-4" />
          My Profile
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleNavigation("/orders")}
          className="cursor-pointer"
        >
          <Package className="mr-2 h-4 w-4" />
          My Orders
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleNavigation("/wishlist")}
          className="cursor-pointer"
        >
          <Heart className="mr-2 h-4 w-4" />
          Wishlist
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleNavigation("/addresses")}
          className="cursor-pointer"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Addresses
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {isLogin ? (
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600"
          >
            <LogOut className="mr-2 h-4 w-4 text-red-600" />
            Logout
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() => navigate("/login")}
            className="cursor-pointer"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
