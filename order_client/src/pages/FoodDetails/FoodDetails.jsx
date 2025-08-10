import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import assets from "../../assets";
import StarRatings from "react-star-ratings";
import fetchData from "../../utils/fetchData";
import FoodDetailsSkeleton from "./FoodDetailsSkeleton/FoodDetailsSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/Slices/CartSlice";

export default function FoodDetails() {
  const { id, name } = useParams();
  const [food, setFood] = useState(null);
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id == id)
  );
  const cartQuantity = cartItem ? cartItem.cartQuantity : 0;

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `foods?populate=*&filters[id][$eq]=${id}`
      );
      setFood(response?.data?.[0]);
      console.log(response?.data?.[0]);
    })();
    document.title = name;
  }, [id]);

  if (!food || food.length == 0) return <FoodDetailsSkeleton />;

  return (
    <section className="my-16 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        <div className="w-full max-w-[591px] h-[300px] lg:h-[571px]">
          <img
            className="w-full h-full object-cover rounded-2xl shadow-md"
            src={
              import.meta.env.VITE_BASE_FILE +
              food?.img?.[0]?.formats?.thumbnail?.url
            }
            alt="food"
          />
        </div>
        <div className="flex flex-col justify-start items-center text-center lg:text-right gap-8 lg:gap-12 h-auto lg:h-[571px]">
          <div dir="ltr" className="w-36">
            <StarRatings
              rating={food?.rating}
              starRatedColor={"gold"}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="4px"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            {food?.discount === 0 ? (
              <span className="text-2xl font-semibold text-gray-800">
                {food?.price * 1000} تومان
              </span>
            ) : (
              <>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  {food?.discount}%
                </span>

                <span className="text-sm text-gray-500 line-through">
                  {food?.price * 1000} تومان
                </span>

                <span className="text-2xl font-semibold text-gray-800">
                  {Math.round(
                    food?.price - (food?.price * food?.discount) / 100
                  ) * 1000}{" "}
                  تومان
                </span>
              </>
            )}
          </div>
          <p className="text-gray-600 max-w-md">{food?.content}</p>
          {cartQuantity == 0 ? (
            <button
              onClick={() => dispatch(add(food))}
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-2xl shadow-md"
            >
              سفارش دهید
            </button>
          ) : (
            <>
              <button
                onClick={() => dispatch(remove(food?.id))}
                className="bg-red-600 px-4 py-3 rounded-xl"
              >
                -
              </button>
              <span>{cartQuantity}</span>
              <button
                onClick={() => dispatch(add(food))}
                className="bg-green-600 px-4 py-3 rounded-xl"
              >
                +
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
