import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProfileMenu from "../common/ProfileMenu";
import { Heart, ShoppingBag } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SearchBar from "../common/SearchBar";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <header className="flex top-0 sticky z-50 items-center justify-between border-b border-[#E7E3DC] bg-white px-20 py-4 text-ink">
      <div className="flex items-center gap-30 text-ink-soft">
        <Link to="/" className="text-xl font-bold text-ink">
          VENANCO
        </Link>

        <nav className="flex items-center justify-center gap-7 font-medium text-d-nav-links">
          <Link to="/men" className="transition-colors hover:text-primary">
            Men
          </Link>

          <Link to="/women" className="transition-colors hover:text-primary">
            Women
          </Link>

          <Link to="/kids" className="transition-colors hover:text-primary">
            Kids
          </Link>

          <Link
            to="/new-arrivals"
            className="transition-colors hover:text-primary"
          >
            New Arrivals
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto px-0 py-0 font-medium bg-transparent!">
                  Sale
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-45 gap-1 p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/sale/men"
                        className="rounded-md px-2 py-1.5 hover:bg-accent"
                      >
                        Men's Sale
                      </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                      <Link
                        to="/sale/women"
                        className="rounded-md px-2 py-1.5 hover:bg-accent"
                      >
                        Women's Sale
                      </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                      <Link
                        to="/sale/kids"
                        className="rounded-md px-2 py-1.5 hover:bg-accent"
                      >
                        Kids' Sale
                      </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                      <Link
                        to="/sale"
                        className="rounded-md px-2 py-1.5 hover:bg-accent"
                      >
                        All Sale
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <SearchBar />

        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 cursor-pointer rounded-full bg-accent/50"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
            3
          </span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 cursor-pointer rounded-full bg-accent/50"
        >
          <Heart className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
            2
          </span>
        </Button>
        {token ? (
          <ProfileMenu />
        ) : (
          <Link to={"/login"}>
            <Button className={"rounded-none px-5 py-4.5"}>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
  