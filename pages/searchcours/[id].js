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
      <main class="max-w-[1920px] mx-auto  overflow-x-hidden mt-8 sm:mt-10">
        <div class="px-[70px] md:px-[80px] lg:px-[100px]">
          <div class="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
            <div class="flex gap-2.5 items-center">
              <span class="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
              <h2 class="text-center text-white  text-2xl lg:text-3.5xl">
                {" "}
                دوره های پایتون{" "}
              </h2>
            </div>
            <span class="sm:text-xl  text-slate-500">
              <span id="count_item_archive">6</span> عنوان آموزشی{" "}
            </span>
          </div>
          <section class="grid grid-cols-12 gap-y-5 md:gap-x-7">
            <aside class="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
              <form class="space-y-6">
                <div class="h-17 bg-dark rounded-xl p-4 md:p-5">
                  <div class="flex justify-between gap-x-6 h-full text-white">
                    <input
                      type="text"
                      name="s"
                      class="outline-none placeholder-slate-500 bg-transparent flex-grow"
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
            <section class="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              <div class="flex md:hidden justify-evenly items-center gap-6 mb-8">
                <div class=" bg-dark  flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer  ">
                  <IoFunnelOutline class="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white hover:text-blue-500 transition">
                    فیلتر
                  </span>
                </div>
                <div class=" bg-dark flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer   ">
                  <HiMiniArrowsUpDown class="w-6 h-6 shrink-0 text-white/70" />

                  <span class="text-white hover:text-blue-500 transition">
                    همه دوره ها
                  </span>
                </div>
              </div>
              <div class="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-dark  rounded-xl">
                <div class="flex items-center shrink-0 gap-x-2">
                  <HiMiniArrowsUpDown class="w-6 h-6 shrink-0 text-white/70" />

                  <span class="text-white">مرتب سازی بر اساس :</span>
                </div>
                <div class="flex gap-x-5 text-white leading-[64px] lg:gap-x-8 h-full">
                  <a
                    href="javascript:setArchiveSort('default', 'همه دوره ها')"
                    data-id="default"
                    class="sort-btn sort-btn--active line-clamp-1"
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
              <div class="posts_wrap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
              </div>
              <button
                type="button"
                class="bg-green-500 rounded-full p-5 text-white cursor-pointer hover:opacity-80 m-auto block mt-7"
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
