import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Searchcourse() {
  return (
    <>
      <Navbar />
      <section className="max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
          <div className="flex gap-2.5 items-center">
            <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
            <h2 className="text-center font-danaBold text-2xl lg:text-[28px] text-white"> دوره های پایتون </h2>
          </div>
          <span className="sm:text-xl font-danaMedium text-slate-500"><span id="count_item_archive">۶</span> عنوان آموزشی </span>
        </div>
        <div className="flex gap-y-5 md:gap-x-7" dir="rtl">
          <aside className="w-[294px] lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
            <form className="space-y-6" action="">
              <div className="h-17 rounded-xl p-4 md:p-5 bg-dark">
                <div className="flex justify-between gap-x-6 h-full text-slate-500 dark:text-white">
                  <input type="text" className="md:font-danaMedium placeholder-slate-500 bg-transparent flex-grow outline-none" placeholder="جستجو بین دوره ها">
                  </input>
                  <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <InputCheckbox title="فقط دوره های رایگان" />
              <InputCheckbox title="در حال پیش فروش" />
            </form>
          </aside>
          <section className="w-full">
            <div className="flex md:hidden items-center gap-6 w-full mb-8">
              <div className="p-4 w-1/2 rounded-full flex justify-center items-center gap-2 text-white bg-dark" id="filter-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                </svg>
                <span>فیلتر</span>
              </div>
              <div className="p-4 w-1/2 rounded-full flex justify-center items-center gap-2 text-white bg-dark" id="sort-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
                <span className="">همه دوره ها</span>
              </div>
            </div>
            <div className="flex items-center gap-x-6 h-16 px-5 mb-8 rounded-xl text-white bg-dark">
              <div className="flex items-center shrink-0 gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
                <span className="font-danaMedium">مرتب سازی بر اساس :</span>
              </div>
              <div className="flex gap-x-5 lg:gap-x-8 h-full">
                <a href="javascript:setArchiveSort('default', 'همه دوره ها')" data-id="default" className="flex items-center sort-btn--active" role="button">همه دوره ها</a>
                <a href="javascript:setArchiveSort('cheapest', 'ارزان ترین')" data-id="cheapest" className="flex items-center " role="button">ارزان ترین</a>
                <a href="javascript:setArchiveSort('expensive', 'گران ترین')" data-id="expensive" className="flex items-center " role="button">گران ترین</a>
                <a href="javascript:setArchiveSort('popular', 'پرمخاطب ها')" data-id="popular" className="flex items-center " role="button">پرمخاطب ها</a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}

function InputCheckbox({ title }) {
  return (
    <div className="rounded-xl p-5 hidden md:block bg-dark">
      <div className="flex items-center justify-between">
        <span className="font-danaDemiBold text-white">{title}</span>
        <label className="w-[46px] h-6 bg-COLOR1-HA rounded-full cursor-pointer">
          <input className="hidden peer group" type="checkbox" name=""></input>
          <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
            <div className="bg-COLOR2-HA size-4 rounded-full"></div>
          </div>
        </label>
      </div>
    </div>
  )
}
