"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const HotelSearchbar = () => {
  const [checkinDate, setCheckinDate] = useState<Date>();
  const [checkoutDate, setCheckoutDate] = useState<Date>();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  return (
    <div className="flex items-center justify-center gap-1 p-5">
      <div>
        <h4>Where do you want to stay?</h4>
        <Input className="w-96" placeholder="Enter destination or location" />
      </div>
      <div>
        <h4>Check-in</h4>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !checkinDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkinDate ? (
                format(checkinDate, "PPP")
              ) : (
                <span>Pick a check-in Date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkinDate}
              onSelect={setCheckinDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <h4>Check-out</h4>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !checkoutDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkoutDate ? (
                format(checkoutDate, "PPP")
              ) : (
                <span>Pick a check-out Date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkoutDate}
              onSelect={setCheckoutDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <h4>Guests and rooms</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <Button variant="outline">
              {adults > 1 ? adults + " adults" : adults + " adult"}{" "}
              {children > 0 ? children + " children" : ""}{" "}
              {rooms > 1 ? rooms + " rooms" : rooms + " room"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <div className="flex items-center justify-between">
                <h5>Adults</h5>
                <div>
                  <Button
                    onClick={() => (adults > 1 ? setAdults(adults - 1) : null)}
                  >
                    -
                  </Button>
                  <span className="mx-3">{adults}</span>
                  <Button
                    onClick={() => (adults < 4 ? setAdults(adults + 1) : null)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <DropdownMenuSeparator />
              <div className="flex items-center justify-between">
                <h5>Children</h5>
                <div>
                  <Button
                    onClick={() =>
                      children > 0 ? setChildren(children - 1) : null
                    }
                  >
                    -
                  </Button>
                  <span className="mx-3">{children}</span>
                  <Button
                    onClick={() =>
                      children < 4 ? setChildren(children + 1) : null
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
              <DropdownMenuSeparator />
              <div className="flex items-center justify-between">
                <h5>Rooms</h5>
                <div>
                  <Button
                    onClick={() => (rooms > 1 ? setRooms(rooms - 1) : null)}
                  >
                    -
                  </Button>
                  <span className="mx-3">{rooms}</span>
                  <Button
                    onClick={() => (rooms < 4 ? setRooms(rooms + 1) : null)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HotelSearchbar;
