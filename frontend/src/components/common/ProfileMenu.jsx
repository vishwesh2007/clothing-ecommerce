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
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

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

      <DropdownMenuContent
        align="end"
        className="mt-2! w-60 rounded border border-[#E7E3DC] bg-white p-0"
      >
        {isLogin && (
          <div className="flex items-center gap-3 border-b border-[#E7E3DC] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
              <p>{user.name.charAt(0).toUpperCase()}</p>
            </div>

            <div className="min-w-0">
              <p className="truncate capitalize text-sm font-medium text-ink">
                {user?.name || "User"}
              </p>

              <p className="truncate text-xs text-muted-foreground">
                {user?.email || ""}
              </p>
            </div>
          </div>
        )}

        <div className="py-1">
          <DropdownMenuItem
            onClick={() => handleNavigation("/profile")}
            className="h-11 cursor-pointer rounded-none px-4 text-sm text-muted-foreground focus:bg-accent focus:text-foreground"
          >
            <User2Icon className="mr-3 h-5 w-5" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleNavigation("/my-order")}
            className="h-11 cursor-pointer rounded-none px-4 text-sm text-muted-foreground focus:bg-accent focus:text-foreground"
          >
            <Package className="mr-3 h-5 w-5" />
            My Orders
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleNavigation("/wishlist")}
            className="h-11 cursor-pointer rounded-none px-4 text-sm text-muted-foreground focus:bg-accent focus:text-foreground"
          >
            <Heart className="mr-3 h-5 w-5" />
            Wishlist
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleNavigation("/addresses")}
            className="h-11 cursor-pointer rounded-none px-4 text-sm text-muted-foreground focus:bg-accent focus:text-foreground"
          >
            <MapPin className="mr-3 h-5 w-5" />
            Addresses
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="m-0" />

        <div className="py-1">
          {isLogin ? (
            <DropdownMenuItem
              onClick={handleLogout}
              className="h-11 cursor-pointer rounded-none px-4 text-sm text-red-600 focus:bg-red-50 focus:text-red-600"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              onClick={() => navigate("/login")}
              className="h-11 cursor-pointer rounded-none px-4 text-sm text-muted-foreground focus:bg-accent focus:text-foreground"
            >
              <LogIn className="mr-3 h-5 w-5" />
              Login
            </DropdownMenuItem>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
