import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Searchcourse() {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto py-8">
        <div class="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
          <div class="flex gap-2.5 items-center">
            <span class="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
            <h2 class="text-center font-danaBold text-2xl lg:text-[28px] text-white"> دوره های پایتون </h2>
          </div>
          <span class="sm:text-xl font-danaMedium text-slate-500"><span id="count_item_archive">۶</span> عنوان آموزشی </span>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-x-7" dir="rtl">
          <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
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
          <section></section>
        </div>
      </section>
      <Footer />
    </>
  );
}

function InputCheckbox({title}) {
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
