import React, { useEffect, useState } from "react";
import assets from "../../../assets";
import { Link, useNavigate } from "react-router-dom";
import fetchData from "../../../Utils/fetchData";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        "categories?populate=img&filters[popular][$eq]=true"
      );
      setCategories(response?.data);
      //   console.log(response.data.img?.[0]?.formats?.thumbnail?.url)
    })();
  }, []);
  const navigate = useNavigate();

  const categoryItems = categories?.map((c) => {
    return (
      <div
      onClick={()=>navigate(`/foods/${c?.id}/${c?.name.replaceAll(' ','-')}`)}
        key={c?.id}
        className="w-[220px] h-[246px] rounded-3xl bg-[#F5F5F5] overflow-hidden flex flex-col"
      >
        <img
          className="w-full h-[78%] object-cover"
          src={import.meta.env.VITE_BASE_FILE + c?.img?.formats?.thumbnail?.url}
          alt={c?.name}
        />
        <div className="flex justify-start px-5 py-2 items-center h-[22%]">
          <h6 className="text-lg font-bold">{c?.name}</h6>
        </div>
      </div>
    );
  });

  return (
    <section className="my-22 px-4 md:px-16">
      <h3 className="font-extrabold text-xl md:text-2xl text-center md:text-right">
        دسته‌بندی‌های محبوب Order.uk 🤩
      </h3>
      <div className="my-12 flex flex-wrap gap-6 justify-center md:justify-start lg:flex-nowrap">
        {categoryItems}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/categories")}
          className="outline-1 outline-red-500 rounded-lg px-4 py-1 hover:bg-red-400 hover:text-white"
        >
          مشاهده همه
        </button>
      </div>
    </section>
  );
}
