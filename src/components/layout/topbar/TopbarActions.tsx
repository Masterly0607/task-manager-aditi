"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";

export function TopbarActions() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative hidden w-72 md:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search tasks..." className="pl-9" />
      </div>

      <Button variant="outline" size="icon" className="hidden md:inline-flex">
        <Bell className="h-4 w-4 cursor-pointer"  />
      </Button>

      <Button className="bg-black text-white cursor-pointer hover:bg-black/90">
        + New Task
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="ml-1 rounded-full cursor-pointer hover:opacity-90 focus:outline-none">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="text-xs font-semibold">
                CN
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="cursor-pointer hover:opacity-90 focus:outline-none">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer hover:opacity-90 focus:outline-none">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:opacity-90 focus:outline-none">Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600 cursor-pointer hover:text-red-600 focus:text-red-600 data-[highlighted]:text-red-600">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
