import React from "react";
import assets from "../../assets";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

export default function Navbar() {
  return (
    <nav
      dir="rtl"
      className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-[5%] py-4"
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={assets.logo} alt="logo" className="h-8" />
      </div>

      <div className="w-full md:w-auto">
        <SearchBar className="w-full md:w-[300px] outline-1 h-8 rounded-2xl placeholder:text-center bg-white" />
      </div>

      <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
        <li className="bg-amber-400 rounded-2xl px-4 py-1">
          <Link to={"/"}>خانه</Link>
        </li>
        <li>
          <Link to={"/categories"}>دسته بندی های غذا ها</Link>
        </li>
        <li>
          <Link to={"/foods/all-categories"}>منو ها</Link>
        </li>
        <li>
          <Link to={"/best-foods"}>بهترین غذاها</Link>
        </li>
        <li>
          <Link to={"/feedback"}>نظرات</Link>
        </li>
      </ul>

      <Link to={"/auth"} className="w-full md:w-auto">
        <button className="w-full md:w-auto flex gap-2 bg-[#03081F] text-white px-4 py-1 items-center justify-center rounded-2xl">
          <img src={assets.userIcon} alt="user" className="h-5 w-5" />
          <span>ورود/ثبت نام</span>
        </button>
      </Link>
    </nav>
  );
}
