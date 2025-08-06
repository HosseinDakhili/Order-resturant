import React from "react";

export default function BrandsSkeleton() {
  return (
    <div className="w-[210px] h-[240px] rounded-xl flex flex-col items-center overflow-hidden animate-pulse">
      <div className="w-full h-[60%] bg-gray-200" />
      <div className="bg-gray-300 w-full h-[17%] rounded-b-lg py-0 mt-[-2px] flex items-center justify-center">
        <div className="h-4 w-24 bg-gray-400 rounded" />
      </div>
    </div>
  );
}
