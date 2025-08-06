import React from 'react'

export default function CategoriesSkeleton() {
  return (
    <div className="w-[220px] h-[246px] rounded-3xl bg-[#F5F5F5] overflow-hidden flex flex-col animate-pulse">
  <div className="w-full h-[78%] bg-gray-200" />
  <div className="flex justify-start px-5 py-2 items-center h-[22%]">
    <div className="h-4 w-24 bg-gray-300 rounded" />
  </div>
</div>

  )
}
