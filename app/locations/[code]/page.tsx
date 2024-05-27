"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { cities } from "@/constants/cities";
import { countries } from "@/constants/countries";
import { City } from "@/types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const LocationPage = () => {
  const params = useParams<{ code: string }>();
  const [page, setPage] = useState(0);
  const [data, setData] = useState<City[]>([]);
  const [dateFrom, setDateFrom] = React.useState<Date | undefined>();
  const [dateTo, setDateTo] = React.useState<Date | undefined>();

  const country = countries.find((country) => country.code === params.code);

  const getFromAndTo = () => {
    const ITEM_PER_PAGE = 10;
    let from = page * ITEM_PER_PAGE;
    let to = from + ITEM_PER_PAGE;

    if (page > 0) {
      from += 1;
    }

    return { from, to };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const { from, to } = getFromAndTo();

    console.log(page);

    // ALL DATA
    const removedDuplicates = cities.filter(
      (value: any, index: any, self: any) =>
        self.map((item: any) => item.name).indexOf(value.name) === index,
    );

    // console.log(removedDuplicates);

    const filteredCities = removedDuplicates
      .filter((city: any) => city.country === params.code)
      .sort()
      .slice(from, to);

    setData([...data, ...filteredCities]);
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col items-center gap-12 px-10  py-10  lg:px-20 lg:py-20">
      <h2 className="text-xl">
        {country?.name}: {params.code}
      </h2>

      <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-5 lg:w-[1000px]">
        {data?.map((city: any) => (
          // Replace with component after setting up Context API
          <Dialog key={city.name}>
            <DialogTrigger>{city.name}</DialogTrigger>
            <DialogContent className="w-72">
              <DialogHeader>
                <DialogTitle>Travel to {city.name}</DialogTitle>
              </DialogHeader>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="btn btn-primary">
                    From:{" "}
                    {dateFrom ? (
                      <span>{format(dateFrom, "PPP")}</span>
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="btn btn-primary">
                    To:{" "}
                    {dateTo ? (
                      <span>{format(dateTo, "PPP")}</span>
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          fetchData();
        }}
      >
        More...
      </button>
    </div>
  );
};

export default LocationPage;
