import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import { useNavigate, useParams } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import Loading from "../../Components/Loading/Loading";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import * as Slider from "@radix-ui/react-slider";

export default function Foods() {
  const { categoryId } = useParams();
  const [foods, setFoods] = useState();
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [category, setCategory] = useState(categoryId);
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const navigate = useNavigate();

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    setLoading(true);

    (async () => {
      const response = await fetchData(
        `foods?populate=*${
          category === "all"
            ? `&sort=${sort}&filters[price][$gte]=${priceRange[0]}&filters[price][$lte]=${priceRange[1]}`
            : `&filters[categories][id][$eq]=${category}&sort=${sort}&filters[price][$gte]=${priceRange[0]}&filters[price][$lte]=${priceRange[1]}`
        }`
      );
      setFoods(response?.data || []);
      setLoading(false);
      setInitialLoading(false);
    })();

    document.title = "منو های غذایی";
  }, [category, sort, priceRange]);

  if (initialLoading) return <Loading />;

  // if (!loading && foods.length === 0)
  //   return (
  //     <h6 className="text-center mt-10 text-gray-600">محصولی وجود ندارد</h6>
  //   );

  const foodItems = foods?.map((f) => {
    return (
      <FoodCard
        onClick={() =>
          navigate(`/food-details/${f?.id}/${f?.name.replaceAll(" ", "-")}`)
        }
        key={f?.id}
        id={f?.id}
        img={
          import.meta.env.VITE_BASE_FILE + f?.img?.[0]?.formats?.thumbnail?.url
        }
        name={f?.name}
        content={f?.content}
        price={f?.price}
        discount={f?.discount}
        rating={f?.rating}
      />
    );
  });

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <CategoryOptions onChange={handleCategory} />
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
            <option value="discount:desc">تخفیف</option>
          </select>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            defaultValue={priceRange}
            max={300}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            aria-label="Volume"
          >
            <Slider.Track className="bg-gray-300 relative flex-grow rounded-full h-2">
              <Slider.Range className="absolute bg-orange-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-orange-600 rounded-full shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <Slider.Thumb className="block w-5 h-5 bg-orange-600 rounded-full shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </Slider.Root>
          <div className="mt-4 text-center text-gray-700">
            قیمت: {priceRange[1]} - {priceRange[0]}
          </div>
        </div>
      </div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems}
      </div>
      {!loading && foods.length === 0 && (
        <div className="w-full flex justify-center items-center py-8">
          <h6 className="text-gray-400 text-xl font-bold">محصولی وجود ندارد</h6>
        </div>
      )}
    </section>
  );
}
