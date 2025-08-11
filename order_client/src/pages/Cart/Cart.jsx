import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, clear, remove } from "../../store/Slices/CartSlice";

export default function Cart() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (items == 0)
    return (
      <div className="flex h-[70vh] justify-center items-center">
        <h3 className="text-orange-700 text-2xl">سبد خرید خالی است</h3>
      </div>
    );

  const tableItems = items?.map((f, i) => {
    return (
      <tr key={f?.id} className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-4 py-2">{i + 1}</td>
        <td className="px-4 py-2">{f?.name}</td>
        <td className="px-4 py-2">
          <img
            className="w-16 h-16 object-cover rounded-lg mx-auto"
            src={
              import.meta.env.VITE_BASE_FILE +
              f?.img?.[0]?.formats?.thumbnail?.url
            }
            alt={f?.name}
          />
        </td>
        <td className="px-4 py-2">{f?.price * 1000}</td>
        <td className="px-4 py-2">{f?.cartQuantity}</td>
        <td className="px-4 py-2">{f?.cartQuantity * f?.price * 1000}</td>
        <td className="px-4 py-2 flex items-center justify-center gap-2">
          <button
            onClick={() => dispatch(remove(f?.id))}
            className="px-3 py-1 rounded-2xl bg-red-500 hover:bg-red-600 text-white transition"
          >
            -
          </button>
          <button
            onClick={() => dispatch(add(f))}
            className="px-3 py-1 rounded-2xl bg-green-500 hover:bg-green-600 text-white transition"
          >
            +
          </button>
        </td>
      </tr>
    );
  });

  return (
   <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden text-center">
  <thead className="bg-gray-100 text-gray-700">
    <tr>
      <th className="px-4 py-2 border border-gray-300">شماره</th>
      <th className="px-4 py-2 border border-gray-300">نام</th>
      <th className="px-4 py-2 border border-gray-300">تصویر</th>
      <th className="px-4 py-2 border border-gray-300">قیمت</th>
      <th className="px-4 py-2 border border-gray-300">تعداد</th>
      <th className="px-4 py-2 border border-gray-300">قیمت کل</th>
      <th className="px-4 py-2 border border-gray-300">اقدامات</th>
    </tr>
  </thead>

  <tbody>{tableItems}</tbody>

  <tfoot className="bg-gray-50 font-semibold">
    <tr>
      <td colSpan={6} className="px-4 py-2 text-right border border-gray-300">
        قیمت نهایی
      </td>
      <td className="px-4 py-2 border border-gray-300">
        {totalPrice.toFixed(2) * 1000} تومان
      </td>
    </tr>
    <tr>
      <td colSpan={7} className="px-4 py-4 text-center border border-gray-300">
        <button
          onClick={() => dispatch(clear())}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-2xl shadow-md transition"
        >
          حذف همه
        </button>
      </td>
    </tr>
  </tfoot>
</table>

  );
}
