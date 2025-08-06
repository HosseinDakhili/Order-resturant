import React, { useEffect, useState } from "react";
import assets from "../../assets";
import fetchData from "../../Utils/fetchData";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData("categories?populate=*");
      setCategories(response?.data);
    })();
    document.title = 'دسته بندی ها'
  }, []);
  const navigate = useNavigate();
  const categoryItems = categories?.map((c) => {
    return (
      <>
        <div
          key={c?.id}
          onClick={() =>
            navigate(`/foods/${c?.id}/${c?.name.replaceAll(" ", "-")}`)
          }
          className="flex flex-col justify-center items-center gap-2"
        >
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden ">
            <img
              className="w-full h-full "
              src={
                import.meta.env.VITE_BASE_FILE + c?.img?.formats?.thumbnail?.url
              }
              alt={c?.name}
            />
          </div>
          <h6 className="font-bold text-lg">{c?.name}</h6>
        </div>
      </>
    );
  });

  return (
    <>
      {/* <head>
        <title>دسته بندی ها</title>
      </head> */}

      <section className="my-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-9 flex-wrap  ">
        {categoryItems}
      </section>
    </>
  );
}
