import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InputCheckbox from "@/components/InputCheckbox";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFunnelOutline } from "react-icons/io5";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

export default function Searchcourse() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] mx-auto  overflow-x-hidden mt-8 sm:mt-10">
        <div className="px-[70px] md:px-[80px] lg:px-[100px]">
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
              <div className="flex md:hidden justify-evenly items-center gap-6 mb-8">
                <div className=" bg-dark  flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer  ">
                  <IoFunnelOutline className="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white hover:text-blue-500 transition">
                    فیلتر
                  </span>
                </div>
                <div className=" bg-dark flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer   ">
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
                    href="javascript:setArchiveSort('default', 'همه دوره ها')"
                    data-id="default"
                    className="sort-btn sort-btn--active line-clamp-1"
                    role="button"
                  >
                    همه دوره ها
                  </a>
                  <a
                    className="line-clamp-1"
                    href="javascript:setArchiveSort('cheapest', 'ارزان ترین')"
                  >
                    ارزان ترین
                  </a>
                  <a
                    className="line-clamp-1"
                    href="javascript:setArchiveSort('expensive', 'گران ترین')"
                  >
                    گران ترین
                  </a>
                  <a
                    className="line-clamp-1"
                    href="javascript:setArchiveSort('popular', 'پرمخاطب ها')"
                  >
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
      </main>
      <Footer />
    </>
  );
}
