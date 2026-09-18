import { User, Package, Heart, MapPin, LogOut, LogIn, User2Icon } from "lucide-react";
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
    if (!token) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [location]);
    const handleLogout = () => {
        localStorage.removeItem("token");
        setLogin(false);
        navigate("/");
    } 
    const handleLogin = () => {
      navigate("/login");
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 rounded-full w-10">
          <User2Icon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52  !rounded-[3px] !mt-2">
        <DropdownMenuItem onClick={() => navigate("/profile")}>
          <User2Icon className="mr-2 h-4 w-4" />
          My Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Package className="mr-2 h-4 w-4" />
          My Orders
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Heart className="mr-2 h-4 w-4" />
          Wishlist
        </DropdownMenuItem>

        <DropdownMenuItem>
          <MapPin className="mr-2 h-4 w-4" />
          Addresses
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        {isLogin ? (
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600"
          >
            <LogOut color="red" className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={handleLogin} className="">
            <LogOut className="mr-2 h-4 w-4" />
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
