import React, { useState } from "react";

export default function Feedback() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("در حال ارسال...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a22d008-22b2-4821-b0bd-c1191252d58c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("فرم با موفقیت ارسال شد.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "خطایی رخ داده است.");
      }
    } catch (error) {
      setResult("خطا در ارسال فرم.");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex my-16 flex-col gap-4 max-w-md mx-auto p-4"
    >
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="نام خود را وارد کنید"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل خود را وارد کنید"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="متن خود را اینجا وارد کنید"
        className="w-full border border-gray-300 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-orange-400"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-orange-400 text-white py-2 rounded-md font-semibold hover:bg-orange-500 transition"
      >
        ارسال
      </button>
      {result && (
        <p className="mt-4 text-center text-gray-700 font-medium">{result}</p>
      )}
    </form>
  );
}
