import React from "react";
import Image from "next/image";

import underConstruction from "../../public/under_construction.jpg";

const LocationsPage = () => {
  return (
    <div className="my-24 flex justify-center text-3xl font-bold text-red-600">
      <Image
        src={underConstruction}
        // width={50}
        // height={50}
        alt="Under construction"
      />
    </div>
  );
};

export default LocationsPage;
