import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import fetchData from '../../utils/fetchData';
import Loading from "../../Components/Loading/Loading";
import CategoryOptions from "./CategoryOptions/CategoryOptions";

export default function Foods() {
  const { categoryId } = useParams();
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState(categoryId);
  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleCategory = (e) =>{
    setCategory(e.target.value)
  }

  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `foods?populate=*${
          category == "all"
            ? `&sort=${sort}`
            : `&filters[categories][id][$eq]=${category}&sort=${sort}`
        }`
      );
      setFoods(response?.data);
    })();

    document.title = "منو های غذایی";
  }, [categoryId, sort]);
  if (!foods || foods.length == 0) return <Loading />;
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <CategoryOptions handleChange={handleCategory}/>
        <div className="flex flex-col gap-5">
          <select
            onChange={handleSort}
            className="w-full float-start max-w-[200px] px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            defaultValue=""
          >
            <option value="" disabled hidden>
              مرتب‌سازی بر اساس...
            </option>
            <option value="name">الفبا</option>
            <option value="createdAt:desc">جدیدترین</option>
            <option value="createdAt">قدیمی‌ترین</option>
            <option value="price:desc">گران‌ترین</option>
            <option value="price">ارزان‌ترین</option>
            <option value="rating:desc">بازخورد</option>
            <option value="discount:desc">تخفیف</option>
          </select>
        </div>
      </div>
    </section>
  );
}
