import React from "react";

export default function FoodDetailsSkeleton() {
  return (
    <section className="my-16 px-4 animate-pulse">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        <div className="w-full max-w-[591px] h-[300px] lg:h-[571px] bg-gray-300 rounded-2xl"></div>

        <div className="flex flex-col justify-start items-center text-center lg:text-right gap-8 lg:gap-12 h-auto lg:h-[571px] w-full">
          <div className="w-24 h-5 bg-gray-300 rounded"></div> 
          <div className="w-40 h-8 bg-gray-300 rounded"></div> 
          <div className="w-32 h-6 bg-gray-300 rounded"></div> 
          <div className="w-full max-w-md h-20 bg-gray-300 rounded"></div>
          <div className="w-40 h-12 bg-gray-300 rounded-2xl"></div>
          
        </div>
      </div>
    </section>
  );
}
