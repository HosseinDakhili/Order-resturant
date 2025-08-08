import React, { useEffect, useState } from "react";
import fetchData from "../../../utils/fetchData";

export default function CategoryOptions({ onChange}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData("categories");
      setCategories(response?.data);
      console.log(response.data);
    })();
  }, []);
  if (!categories || categories.length == 0)
    return (
      <div className="w-40 h-10 bg-gray-200 rounded-xl animate-pulse shadow-sm"></div>
    );

  const categoryItems = categories?.map((c) => {
    return (
      <option className="text-gray-800" key={c?.id} value={c?.id}>
        {c?.name}
      </option>
    );
  });

  return (
    <select
      onChange={onChange}
      defaultValue="all"
      className="w-48 h-12 px-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-3xl shadow-lg font-bold cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-300"
    >
    
      <option value="all">
        همه دسته بندی ها
      </option>
      {categoryItems}
    </select>
  );
}
