import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className={"h-10 rounded-full w-10"}
          />
        }
      >
        <Search className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] sm:w-100">
        <SheetHeader>
          <SheetTitle>Search Products</SheetTitle>
          <SheetDescription>Find your favorite products</SheetDescription>
        </SheetHeader>

        <div className="px-4">
          <Input
            type="search"
            placeholder="What are you looking for?"
            className="h-11"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
