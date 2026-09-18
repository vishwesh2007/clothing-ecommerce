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
  return (
    <header className="flex items-center justify-between border-b border-[#E7E3DC] bg-white px-20 py-4 text-ink">
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
                <NavigationMenuTrigger className="h-auto px-0 py-0 font-medium !bg-transparent">
                  Sale
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[180px] gap-1 p-2">
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

        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 relative">
          <ShoppingBag className="h-1 w-1" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
            3
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 relative">
          <Heart className="h-1 w-1" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
            2
          </span>
        </Button>

        <ProfileMenu />
      </div>
    </header>
  );
}

export default Navbar;
