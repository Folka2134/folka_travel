"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { cities } from "@/constants/cities";
import { countries } from "@/constants/countries";
import { City } from "@/types/types";

const LocationPage = () => {
  const params = useParams<{ code: string }>();
  const [page, setPage] = useState(0);
  const [data, setData] = useState<City[]>([]);

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

    const filteredCities = removedDuplicates
      .filter((city: any) => city.country === params.code)
      .sort()
      .slice(from, to);

    setData((currentData) => [...currentData, ...filteredCities]);
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col items-center gap-12 px-10  py-10  lg:px-20 lg:py-20">
      <h2 className="text-xl">
        {country?.name}: {params.code}
      </h2>

      <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-5 lg:w-[1000px]">
        {data?.map((city: any) => (
          <div key={city.name}>
            <h3>{city.name}</h3>
          </div>
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
