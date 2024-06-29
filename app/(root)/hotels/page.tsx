import HotelSearchbar from "@/components/HotelSearch";
import React from "react";

const HotelsPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-96 flex-col justify-center gap-3">
        <h2 className="text-4xl font-bold">Find the right hotel today</h2>
        <HotelSearchbar />
      </div>
    </div>
  );
};

export default HotelsPage;
