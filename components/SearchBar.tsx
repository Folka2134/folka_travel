"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { countries } from "@/constants/countries";
import { Separator } from "./ui/separator";
import { CountriesParams } from "@/types/types";
import Link from "next/link";
import router from "next/router";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="max-container flex flex-col lg:py-5 xl:flex-row">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Search locations...</Button>
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-[425px]">
          <DialogHeader className="">
            <Input
              id="location"
              defaultValue={search}
              className="col-span-3 h-12 border-0 "
              placeholder="Search locations..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </DialogHeader>
          <div className="grid">
            <ScrollArea className="h-72 w-full rounded-md">
              <div className="px-2">
                {filteredCountries.map((country: CountriesParams) => (
                  <div
                    onClick={() => {
                      window.location.href = `/locations/${country.code}`;
                    }}
                    key={country.code}
                  >
                    <div className="rounded-lg py-2 pl-5 text-sm hover:bg-gray-20">
                      {country.name}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Searchbar;
