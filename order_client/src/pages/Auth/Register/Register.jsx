import React from "react";
import useFormFields from "../../../Hooks/useFormFields";
import fetchData from "../../../Utils/fetchData";
import notify from "../../../utils/Notify";

export default function Register({ handlePageType }) {
  const [fields, handleChange] = useFormFields({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchData("auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    if (response?.jwt) {
      notify("success", "ثبت نام با موفقیت انجام شد");
      handlePageType();
    } else {
      notify("error", "مشکلی رخ داده است");
      notify("error", response?.message?.error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto bg-white p-8 mt-16 rounded-3xl shadow-xl flex flex-col gap-6"
    >
      <h3 className="text-3xl font-extrabold text-center text-orange-500">
        خوش آمدید به <br /> رستوران ما
      </h3>

      <input
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="نام کاربری"
        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-gray-700 placeholder-gray-400 transition"
      />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="ایمیل"
        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-gray-700 placeholder-gray-400 transition"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="رمز عبور"
        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-gray-700 placeholder-gray-400 transition"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-3 rounded-xl font-semibold shadow-lg hover:brightness-110 transition"
      >
        ثبت نام
      </button>

      <button
        type="button"
        onClick={handlePageType}
        className="text-center text-orange-500 underline hover:text-orange-600 font-medium"
      >
        اگر قبلا وارد شدید اینجا کلیک کنید
      </button>
    </form>
  );
}
