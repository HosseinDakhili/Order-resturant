import React, { useEffect, useState } from "react";
import assets from "../../../assets";
import fetchData from "../../../Utils/fetchData";
import { useNavigate } from "react-router-dom";
import DiscountFoodSkeleton from "./DiscountFoodSkeleton/DiscountFoodSkeleton";

export default function DiscountFood() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        "foods?populate=*&filters[discount][$lte]=60&sort[discount]=desc&pagination[limit]=3"
      );
      setFoods(response.data);
      console.log(response.data);
    })();
  }, []);

  if (!foods || foods.length === 0) {
    return (
      <section dir="rtl" className="my-22 px-4 md:px-8 lg:px-16">
        <h3 className="text-2xl font-semibold mb-6">
          تا ۷۰٪ تخفیف 🎊 تخفیف‌های اختصاصی در Order.uk
        </h3>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <DiscountFoodSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  const foodItems = foods.map((f) => {
    return (
      <div
        onClick={() =>
          navigate(`/food-details/${f?.id}/${f?.name?.replaceAll(" ", "-")}`)
        }
        key={f?.id}
        className="relative w-full max-w-[496px] h-[325px] md:h-[300px] sm:h-[250px]"
      >
        <span className="absolute flex justify-center items-center w-[88px] h-[66px] rounded-b-2xl bg-[#03081F] z-50 right-5 md:right-7 sm:right-3">
          <p className="text-white font-extrabold">{f?.discount}%</p>
        </span>
        <img
          className="w-full h-full brightness-60 object-cover"
          src={
            import.meta.env.VITE_BASE_FILE +
            f?.img?.[0]?.formats?.thumbnail?.url
          }
          alt={f?.name || ""}
        />
        <h6 className="absolute text-base md:text-lg sm:text-sm text-white bottom-3 right-[15%] md:right-[17%] sm:right-[12%] font-extrabold">
          {f?.name}
        </h6>
      </div>
    );
  });

  return (
    <section dir="rtl" className="my-22 px-4 md:px-8 lg:px-16">
      <h3 className="text-2xl font-semibold mb-6">
        تا ۷۰٪ تخفیف 🎊 تخفیف‌های اختصاصی در Order.uk
      </h3>
      <div className="flex flex-wrap md:flex-nowrap gap-6">{foodItems}</div>
    </section>
  );
}
