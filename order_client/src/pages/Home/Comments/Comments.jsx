import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import assets from "../../../assets";
import StarRatings from "react-star-ratings";
import fetchData from "../../../Utils/fetchData";
export default function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData("comments?populate=*");
      setComments(response?.data);
    })();
  }, []);
  const navigate = useNavigate();

  const commentItems = comments?.map((c) => {
    return (
      <SwiperSlide>
       <div className="w-full max-w-[350px] my-10 rounded-2xl border-b-4 border-orange-400 bg-gray-100/25 flex flex-col justify-between items-center px-4 py-6">
  <p className="text-gray-500 text-sm text-center leading-6 mb-6">
    {c?.content}
  </p>

  <div className="flex flex-col items-center gap-4">
    <div className="w-[54px] h-[54px] rounded-full overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={
          import.meta.env.VITE_BASE_FILE + c?.img?.formats?.thumbnail?.url
        }
        alt={c?.name}
      />
    </div>

    <div className="flex flex-col items-center gap-2">
      <div dir="ltr">
        <StarRatings
          rating={c?.rating}
          starRatedColor={c?.rating >= 3.5 ? 'green' : 'red'}
          numberOfStars={5}
          name="rating"
          starDimension="22px"
          starSpacing="3px"
        />
      </div>
      <p className="text-lg text-orange-600 font-semibold">{c?.name}</p>
      <span className={c?.rating >= 3.5 ? "text-green-500" : "text-red-500"}>
        {c?.rating >= 3.5 ? "مشتری راضی" : "مشتری ناراضی"}
      </span>
    </div>
  </div>
</div>

      </SwiperSlide>
    );
  });

  return (
    <section className="my-22 flex flex-col justify-center items-center px-4 md:px-10">
  <h3 className="text-2xl md:text-3xl font-extrabold text-center">
    نظر طرفداران <span className="text-orange-600">رستوران</span> ما رو بشنو
  </h3>
  <p className="my-4 text-gray-500 text-center text-sm md:text-base">
    ببین دیگران درباره تجربه‌شون در رستوران ما چی گفتن!
  </p>

  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    breakpoints={{
      0: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 1.2, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 60 },
    }}
    className="commentSlider w-full"
  >
    {commentItems}
  </Swiper>

  <button
    onClick={() => navigate("/feedback")}
    className="outline outline-1 outline-red-500 my-10 rounded-lg px-4 py-1 hover:bg-red-400 hover:text-white text-sm md:text-base"
  >
    نظرتو اینجا بنویس
  </button>
</section>

  );
}
