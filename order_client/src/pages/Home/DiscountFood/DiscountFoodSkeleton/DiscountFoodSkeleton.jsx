import React from "react";

export default function DiscountFoodSkeleton() {
  return (
    
      <div className="relative w-full max-w-[496px] h-[325px] md:h-[300px] sm:h-[250px] animate-pulse">
        <span className="absolute flex justify-center items-center w-[88px] h-[66px] rounded-b-2xl bg-gray-300 z-50 right-5 md:right-7 sm:right-3" />
        <div className="w-full h-full bg-gray-200 rounded-xl" />
        <div className="absolute bottom-3 right-[15%] md:right-[17%] sm:right-[12%] h-4 w-32 bg-gray-300 rounded" />
      </div>
  );
}
