import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";

import React, { useState } from "react";

import HeaderAccontDetails from "@/components/HeaderAccontDetails";

export default function NewTickts() {
  const [showsidebar, setshowsidebar] = useState(false);

  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails setshowsidebar={setshowsidebar} />

        <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
          <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span className=" md:text-xl text-white">ارسال تیکت</span>
          </div>
          <form>
            <div>
              <label for="department" className=" text-white">
                دپارتمان
              </label>
              <select
                required=""
                className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
              >
                <option value="">دپارتمان مورد نظر...</option>
                <option value="finance">مالی</option>
                <option value="management">ارتباط با مدیریت</option>
                <option value="support">پشتیبانی</option>
                <option value="counseling">مشاوره</option>
              </select>
            </div>
            <div className="mt-6">
              <label for="title" className=" text-white">
                موضوع تیکت
              </label>
              <input
                type="text"
                className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                id="title"
                name="title"
                required=""
                placeholder="موضوع تیکت خود را وارد کنید"
              />
            </div>
            <div className="mt-6">
              <label for="text" className=" text-white">
                متن تیکت
              </label>
              <textarea
                rows="8"
                className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slateplaceholder:text-gray-500 transition-all"
                id="text"
                name="text"
                required=""
                placeholder="متن تیکت خود را وارد کنید"
              ></textarea>
            </div>
            <div className="flex justify-between gap-5 flex-wrap mt-6">
              <div className="flex gap-x-3 mr-auto">
                <button
                  className="bg-green-500 text-white py-3 px-4 hover:opacity-90 rounded-xl"
                  type="submit"
                >
                  ارسال
                </button>
              </div>
            </div>
            <input type="hidden" name="ticket_id" value="" />
            <input type="hidden" name="nonce" value="51f75ddbb7" />
          </form>
        </div>
      </section>
    </div>
  );
}
