import React from "react";
import assets from "../../../assets";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function FoodCard({
  id,
  img,
  name,
  content,
  price,
  discount,
  rating,
  onClick
}) {
  const finalPrice = price - (price * discount) / 100;

  return (
    <div onClick={onClick} className="w-full max-w-[480px] rounded-2xl py-4 px-5 shadow-2xl bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full md:w-[200px] h-[180px] overflow-hidden rounded-xl">
          <img className="w-full h-full object-cover" src={img} alt={name} />
        </div>

        <div className="flex flex-col justify-between items-start gap-3 flex-1 text-right">
          <h3 className="text-lg font-bold text-gray-800">{name} </h3>
          <p className="text-sm text-gray-600 leading-6">{content} </p>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span
              className={`${
                discount > 0
                  ? "text-gray-400 line-through text-sm"
                  : "text-green-700 font-bold text-base"
              }`}
            >
              {price * 1000} تومان
            </span>

            {discount > 0 && (
              <>
                <span className="text-green-700 font-bold text-base">
                  {Math.round(finalPrice)*1000} تومان
                </span>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-lg">
                  {discount}% تخفیف
                </span>
              </>
            )}
          </div>
          <div dir="ltr">
            <StarRatings
              rating={rating}
              starRatedColor={"gold"}
              numberOfStars={5}
              name="rating"
              starDimension="22px"
              starSpacing="3px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
