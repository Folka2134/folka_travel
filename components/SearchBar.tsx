"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { countries } from "@/constants/countries";
import { CountriesParams } from "@/types/types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Searchbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <div className="max-container flex flex-col py-5 xl:flex-row">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Search locations...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search locations..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {countries.map((country: CountriesParams) => (
              <CommandItem
                key={country.code}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    window.location.href = `/locations/${country.code}`;
                  }
                }}
                onSelect={() => {
                  runCommand(() => router.push(`/locations/${country.code}`));
                }}
              >
                <a href={`/locations/${country.code}`}>
                  <div className="rounded-lg py-1 pl-5 text-sm">
                    {country.name}
                  </div>
                </a>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Searchbar;
