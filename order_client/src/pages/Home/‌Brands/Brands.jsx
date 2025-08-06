import React, { useEffect, useState } from "react";
import assets from "../../../assets";
import fetchData from "../../../Utils/fetchData";
import BrandsSkeleton from "./BrandsSkeleton/BrandsSkeleton";

const Brands = () => {
  const [brand, setBrands] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData("brands?populate=*");
      setBrands(response.data);
    })();
  }, []);

  if (!brand || brand.length == 0)
    return (
      <section className="my-22 px-4 md:px-16">
        <h3 className="font-extrabold text-xl md:text-2xl text-center md:text-right">
          رستوران‌های پرطرفدار
        </h3>
        <div className="my-12 flex flex-wrap gap-6 justify-center md:justify-start lg:flex-nowrap">
          {Array.from({ length: 6 }).map((_, i) => {
            return <BrandsSkeleton key={i} />;
          })}
        </div>
      </section>
    );

  const brandItems = brand?.map((b) => {
    return (
      <div
        key={b?.id}
        className="w-[210px] h-[240px] rounded-xl flex flex-col items-center overflow-hidden"
      >
        <div className="w-full h-[60%]">
          <img
            className="w-full h-full object-cover"
            src={
              import.meta.env.VITE_BASE_FILE + b?.img?.formats?.thumbnail?.url
            }
            alt={b?.name}
          />
        </div>
        <div className="bg-[#FC8A06] w-full h-[17%] flex justify-center items-center rounded-b-lg py-0 mt-[-2px]">
          <h6 className=" text-white font-bold">{b?.name}</h6>
        </div>
      </div>
    );
  });

  return (
    <section className="my-22 px-4 md:px-16">
      <h3 className="font-extrabold text-xl md:text-2xl text-center md:text-right">
        رستوران‌های پرطرفدار
      </h3>
      <div className="my-12 flex flex-wrap gap-6 justify-center md:justify-start lg:flex-nowrap">
        {brandItems}
      </div>
    </section>
  );
};

export default Brands;
