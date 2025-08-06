import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
      <footer dir='rtl' className="bg-[#03081F] text-white px-6 md:px-20 py-10 mt-20">
  <div className="flex flex-col md:flex-row justify-between gap-10">
    
    <div className="flex-1">
      <h4 className="text-2xl font-extrabold mb-4">Order.uk</h4>
      <p className="text-sm leading-6 text-gray-300 max-w-md">
        در Order.uk می‌تونی بهترین و خوشمزه‌ترین غذاها رو از محبوب‌ترین رستوران‌ها سفارش بدی. سریع، ساده و حرفه‌ای!
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <h5 className="text-lg font-bold mb-2">لینک‌های مفید</h5>
      <ul className="flex flex-col gap-1 text-sm text-gray-300">
        <li><Link to="/about" className="hover:text-white">درباره ما</Link></li>
        <li><Link to="/contact" className="hover:text-white">تماس با ما</Link></li>
        <li><Link to="/terms" className="hover:text-white">قوانین و مقررات</Link></li>
        <li><Link to="/categories" className="hover:text-white">دسته‌بندی‌ها</Link></li>
      </ul>
    </div>

    <div className="flex flex-col gap-2">
      <h5 className="text-lg font-bold mb-2">شبکه‌های اجتماعی</h5>
      <ul className="flex flex-col gap-1 text-sm text-gray-300">
        <li><a href="#" className="hover:text-white">اینستاگرام</a></li>
        <li><a href="#" className="hover:text-white">تلگرام</a></li>
        <li><a href="#" className="hover:text-white">توییتر</a></li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Order.uk - تمامی حقوق محفوظ است.
  </div>
</footer>


    
  )
}
