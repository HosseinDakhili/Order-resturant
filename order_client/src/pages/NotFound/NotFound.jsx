import React from "react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-9xl font-extrabold text-orange-500 mb-6">404</h1>
      <h2 className="text-3xl font-bold mb-4 text-gray-700">صفحه پیدا نشد!</h2>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        متاسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد یا ممکن است حذف شده باشد.
      </p>
      <button
        onClick={() => window.history.back()}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        بازگشت به صفحه قبل
      </button>
    </section>
  );
}
