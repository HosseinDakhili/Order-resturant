import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";

export default function MainSlider() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData("sliders?populate=*");
      setSlides(response?.data);
    })();
  }, []);

  const slideItems = slides?.map((s) => {
    return (
      <SwiperSlide
        key={s?.id}

        
      >
        <img src={import.meta.env.VITE_BASE_FILE+s?.img?.[0]?.formats?.thumbnail?.url
} alt="" />
      </SwiperSlide>
    );
  });

  return (
    <section className="my-[48px] mx-auto w-[90%] h-[70vh] rounded-[25px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        // navigation
        className="mainSlider"
      >
        {slideItems}
      </Swiper>
    </section>
  );
}
