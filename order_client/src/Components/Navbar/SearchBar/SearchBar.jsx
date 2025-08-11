import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ className }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchFoodResult, setSearchFoodResult] = useState();
  const [searchCategoryResult, setSearchCategoryResult] = useState();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".search-inp")) {
        setSearchFoodResult(null);
        setSearchCategoryResult(null);
        setSearchValue("");
      }
    });
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
    if (e.target.value.length < 2) return;
    const foodResponse = await fetchData(
      `foods?filters[name][$containsi]=${encodeURIComponent(value)}&populate=*`
    );
    const categoryResponse = await fetchData(
      `categories?filters[name][$containsi]=${encodeURIComponent(
        value
      )}&populate=*`
    );
    setSearchFoodResult(foodResponse?.data);
    setSearchCategoryResult(categoryResponse?.data);
  };

  const categoryResult = searchCategoryResult?.map((cat) => {
    return (
      <div
        onClick={() =>
          navigate(`foods/${cat?.id}/${cat?.name.replaceAll(" ", "-")}`)
        }
        className="flex cursor-pointer justify-between items-center px-[3%]"
        key={cat?.id}
      >
        <h3>{cat?.name}</h3>
        <img
          src={
            import.meta.env.VITE_BASE_FILE + cat?.img?.formats?.thumbnail?.url
          }
          alt=""
        />
      </div>
    );
  });

  const foodResult = searchFoodResult?.map((pr) => {
    return (
      <div
        onClick={() =>
          navigate(`food-details/${pr?.id}/${pr?.name.replaceAll(" ", "-")}`)
        }
        className="flex justify-between cursor-pointer items-center px-[3%]"
        key={pr?.id}
      >
        <h3>{pr?.name}</h3>
        <img
          src={
            import.meta.env.VITE_BASE_FILE +
            pr?.img?.[0]?.formats?.thumbnail?.url
          }
          alt={pr?.name}
        />
      </div>
    );
  });

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        onChange={handleSearch}
        className={`${className} w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 search-inp`}
        type="text"
        placeholder="جستجو کنید"
      />

      {(categoryResult?.length > 0 || foodResult?.length > 0) && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg top-full z-50 max-h-[40vh] overflow-y-auto divide-y divide-gray-100">
          {categoryResult?.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                دسته‌بندی‌ها
              </h3>
              <div className="space-y-3">{categoryResult}</div>
            </div>
          )}

          {foodResult?.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                غذاها
              </h3>
              <div className="space-y-3">{foodResult}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
