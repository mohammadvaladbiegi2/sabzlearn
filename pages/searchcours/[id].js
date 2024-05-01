import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InputCheckbox from "@/components/InputCheckbox";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFunnelOutline } from "react-icons/io5";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5";

export default function Searchcourse() {
  const [showbottomShet, setshowbottomShet] = useState(false);
  const [showfilterbox, setshowfilterbox] = useState(false);

  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] mx-auto  overflow-x-hidden mt-8 sm:mt-10">
        <div className="px-[10px] sm:px-[40px] md:px-[80px] lg:px-[100px]">
          <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
            <div className="flex gap-2.5 items-center">
              <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
              <h2 className="text-center text-white  text-2xl lg:text-3.5xl">
                {" "}
                دوره های پایتون{" "}
              </h2>
            </div>
            <span className="sm:text-xl  text-slate-500">
              <span id="count_item_archive">6</span> عنوان آموزشی{" "}
            </span>
          </div>
          <section className="grid grid-cols-12 gap-y-5 md:gap-x-7">
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
              <form className="space-y-6">
                <div className="h-17 bg-dark rounded-xl p-4 md:p-5">
                  <div className="flex justify-between gap-x-6 h-full text-white">
                    <input
                      type="text"
                      name="s"
                      className="outline-none placeholder-slate-500 bg-transparent flex-grow"
                      placeholder="جستجو بین دوره ها"
                    />
                    <button type="submit">
                      <IoIosSearch className="text-white w-7 h-7 cursor-pointer" />
                    </button>
                  </div>
                </div>
                <InputCheckbox title="فقط دوره های رایگان" />
                <InputCheckbox title="در حال پیش فروش" />
                <InputCheckbox title="دوره ها خریداری شده" />
              </form>
            </aside>
            <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              <div className="flex md:hidden justify-between items-center gap-6 mb-8">
                <div
                  onClick={() => setshowfilterbox(true)}
                  className="w-full bg-dark  flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer  "
                >
                  <IoFunnelOutline className="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white hover:text-blue-500 transition">
                    فیلتر
                  </span>
                </div>
                <div
                  onClick={() => setshowbottomShet(true)}
                  className="w-full bg-dark flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer   "
                >
                  <HiMiniArrowsUpDown className="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white hover:text-blue-500 transition">
                    همه دوره ها
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-dark  rounded-xl">
                <div className="flex items-center shrink-0 gap-x-2">
                  <HiMiniArrowsUpDown className="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white">مرتب سازی بر اساس :</span>
                </div>
                <div className="flex gap-x-5 text-white leading-[64px] lg:gap-x-8 h-full">
                  <a
                    href="#"
                    data-id="default"
                    className="sort-btn sort-btn--active line-clamp-1"
                    role="button"
                  >
                    همه دوره ها
                  </a>
                  <a className="line-clamp-1" href="#">
                    ارزان ترین
                  </a>
                  <a className="line-clamp-1" href="#">
                    گران ترین
                  </a>
                  <a className="line-clamp-1" href="#">
                    پرمخاطب ها
                  </a>
                </div>
              </div>
              <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
              </div>
              <button
                type="button"
                className="bg-green-500 rounded-full p-5 text-white cursor-pointer hover:opacity-80 m-auto block mt-7"
              >
                مشاهده بیشتر
              </button>
            </section>
          </section>
        </div>
        {/* buttom shet */}

        <div
          className={`fixed md:hidden transition bg_black_100  ${
            showbottomShet ? "openbuttomshet" : "closebuttomshet"
          } right-0 left-0 z-50 transition`}
        >
          <div className="flex items-center rounded-t-2xl  p-4 justify-between bg-dark-light">
            <h2 className="text-white text-xl">مرتب سازی بر اساس</h2>
            <IoMdClose
              onClick={() => setshowbottomShet(false)}
              className="text-white w-6 h-6 cursor-pointer "
            />
          </div>
          <ul className="text-white text-[17px] p-4 flex flex-col gap-6 mt-3">
            <li className="bordred border-b-[1px] pb-3  border-white/70 ">
              <a href="#" className="transition  hover:text-green-500">
                همه دوره ها
              </a>
            </li>
            <li className="bordred border-b-[1px] pb-3  border-white/70 ">
              <a href="#" className="transition  hover:text-green-500">
                ارزان ترین
              </a>
            </li>
            <li className="bordred border-b-[1px] pb-3  border-white/70 ">
              <a href="#" className="transition  hover:text-green-500">
                گران ترین
              </a>
            </li>
            <li className=" pb-3">
              <a href="#" className="transition  hover:text-green-500">
                پرمخاطب‌ ها
              </a>
            </li>
          </ul>
        </div>
        {/* filter box sm */}
        <div
          className={`fixed filter  md:hidden bg_drop_down_nav  ${
            showfilterbox && "filter--open "
          } `}
        >
          <div className="flex items-center   p-4 justify-between bg-dark-light">
            <h2 className="text-white text-xl flex items-center gap-2">
              <IoMdClose
                onClick={() => setshowfilterbox(false)}
                className="mb-1 w-6 h-6 cursor-pointer "
              />
              فیلتر‌ها
            </h2>
            <h2 className="text-red-500 text-base flex items-center gap-2">
              حذف فیلترها
              <IoTrashSharp
                onClick={() => setshowfilterbox(false)}
                className="mb-1 w-6 h-6 cursor-pointer "
              />
            </h2>
          </div>
          <ul className="text-white text-[17px] p-4 flex flex-col gap-8 mt-3">
            <li className="bordred border-b-[1px] pb-5  border-white/80  ">
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                فقط دوره‌های رایگان
                <label className="w-[46px] h-6 bg-dark-light rounded-full cursor-pointer">
                  <input
                    className="hidden peer group"
                    type="checkbox"
                    name=""
                  ></input>
                  <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                    <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                  </div>
                </label>
              </a>
            </li>
            <li className="bordred border-b-[1px] pb-5  border-white/80  ">
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                درحال پیش فروش
                <label className="w-[46px] h-6 bg-dark-light rounded-full cursor-pointer">
                  <input
                    className="hidden peer group"
                    type="checkbox"
                    name=""
                  ></input>
                  <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                    <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                  </div>
                </label>
              </a>
            </li>
            <li className="bordred border-b-[1px] pb-5  border-white/80  ">
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                دوره های خریدار شده
                <label className="w-[46px] h-6 bg-dark-light rounded-full cursor-pointer">
                  <input
                    className="hidden peer group"
                    type="checkbox"
                    name=""
                  ></input>
                  <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                    <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                  </div>
                </label>
              </a>
            </li>
          </ul>
          <button className="bg-green-500 rounded-full hover:opacity-80 p-5 w-[80%] text-center block m-auto text-white">
            اعمال فیلتر
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
