"use client";

import React from "react";
import { useParams } from "next/navigation";
import { cities } from "@/constants/cities";
import { countries } from "@/constants/countries";

const LocationPage = () => {
  const params = useParams<{ code: string }>();

  const removedDuplicates = cities.filter(
    (value: any, index: any, self: any) =>
      self.map((item: any) => item.name).indexOf(value.name) === index,
  );
  const filteredCities = removedDuplicates
    .filter((city: any) => city.country === params.code)
    .sort();

  console.log(filteredCities);

  const country = countries.find((country) => country.code === params.code);

  return (
    <div className="max-container flex flex-col gap-12 py-10 pb-32  lg:py-20 ">
      <h2 className="text-xl">
        {country?.name}: {params.code}
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {filteredCities.map((city: any) => (
          <div key={city.name}>
            <h3>{city.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
