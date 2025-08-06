import React, { useEffect, useState } from "react";
import assets from "../../../assets";
import fetchData from "../../../Utils/fetchData";

export default function DiscountFood() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        "foods?populate=*&filters[discount][$lte]=60&sort[discount]=desc&pagination[limit]=3"
      );
      setFoods(response.data);
      console.log(response.data)
    })();
  }, []);

  const foodItems = foods.map((f) => {
    return (
      <div key={f?.id} className="w-[496px] h-[325px] relative">
        <span className=" absolute flex justify-center items-center w-[88px] h-[66px] rounded-b-2xl bg-[#03081F] z-50 right-9">
          <p className="text-white font-extrabold">{f?.discount}%</p>
        </span>
        <img
          className="w-full h-full brightness-60 "
          src={
            import.meta.env.VITE_BASE_FILE +
            f?.img?.[0]?.formats?.thumbnail?.url
          }
          alt=""
        />
        <h6 className="absolute text-lg  text-white bottom-3 right-[17%] font-extrabold ">
          {f?.name}
        </h6>
      </div>
    );
  });



  return (
    <section dir="rtl" className="my-22  ">
      <h3 className="text-2xl font-semibold">
        تا ۷۰٪ تخفیف 🎊 تخفیف‌های اختصاصی در Order.uk
      </h3>
      <div className="my-12 flex gap-6">
        {foodItems}
      </div>
    </section>
  );
}
