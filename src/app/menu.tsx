import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, MenuIcon, ScrollText } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex bg-red-100 justify-between items-center px-3 py-4">
      <Link href={`/`} className="flex gap-3">
        <Home size={36} />
        <h2>Carlton&apos;s Home Website</h2>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon size={36} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href={`/`} className="flex gap-3">
              <Home size={24} />
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`/house-rules`} className="flex gap-3">
              <ScrollText size={24} />
              House Rules
            </Link>
          </DropdownMenuItem>
          {/*
          <DropdownMenuItem>Food</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Admin</DropdownMenuItem>
          */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
