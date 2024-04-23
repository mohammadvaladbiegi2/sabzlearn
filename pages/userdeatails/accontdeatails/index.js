import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Image from "next/image";
import React, { useState } from "react";

import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";

export default function AccontDeatails() {
  const [showsidebar, setshowsidebar] = useState(false);
  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails setshowsidebar={setshowsidebar} />
        <div className="px-5 md:px-0">
          <h3 className="md:hidden  text-white mb-7">
            mohammad valadbiegi عزیز؛ خوش اومدی 🙌
          </h3>{" "}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div className="xl:col-span-2 bg-gray-800 p-4.5 rounded-2xl">
              <div className="pb-3 m-3 border-b  border-b-slate-500">
                <span className=" md:text-xl text-white ">
                  جزییات حساب کاربری
                </span>
              </div>
              <form className="p-3.5 pt-8">
                <div className="relative mb-11">
                  <Image
                    src="/image/userimageaccont.png"
                    width={100}
                    height={100}
                    className="w-32 md:w-44 h-32 md:h-44 rounded-full"
                  />

                  <a className="absolute flex items-center justify-center bottom-0 right-0 flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-sky-600 dark:bg-secondary dark:hover:bg-blue-600 border-2 md:border-4 border-white dark:border-gray-800 cursor-pointer transition-colors">
                    <HiMiniArrowPathRoundedSquare className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                  <div>
                    <label for="phone" className=" text-white">
                      شماره موبایل
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      value="01234567892"
                      disabled=""
                    />
                  </div>
                  <div className="hidden md:block"></div>
                  <div>
                    <label for="first_name" className=" text-white">
                      نام
                    </label>
                    <input
                      type="text"
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      id="first_name"
                      name="first_name"
                      required=""
                      value="mohammad"
                    />
                  </div>
                  <div>
                    <label for="last_name" className=" text-white">
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      id="last_name"
                      name="last_name"
                      value="valadbiegi"
                    />
                  </div>
                  <div>
                    <label for="username" className=" text-white">
                      نام کاربری
                    </label>
                    <input
                      type="text"
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      disabled=""
                      id="username"
                      value="mohammadvalad"
                    />
                  </div>
                  <div>
                    <label for="email" className=" text-white">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      id="email"
                      name="email"
                      required=""
                      value="mohammad@gmail.com"
                    />
                  </div>
                </div>
                <input type="hidden" name="nonce" value="3910dac7d5" />
                <button
                  type="submit"
                  className="button-lg text-center bg-green-500 mr-auto w-full md:w-auto mt-10"
                >
                  ثبت اطلاعات
                </button>
              </form>
            </div>
            <div className="xl:col-span-1 bg-gray-800 p-4.5 rounded-2xl">
              <div className="pb-3 m-3 border-b border-b-slate-500">
                <span className=" md:text-xl text-white">تغییر رمز عبور</span>
              </div>
              <form id="edit-account-password" className="p-3.5 pt-8">
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <label for="old_pass" className=" text-white">
                      رمز عبور فعلی
                    </label>
                    <input
                      type="password"
                      id="old_pass"
                      name="old_pass"
                      required=""
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5 mb-3  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      placeholder="رمز فعلی را وارد کنید"
                    />
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition mt-3 text-sm"
                    >
                      رمز عبور را فراموش کرده اید؟
                    </a>
                  </div>
                  <div>
                    <label for="new_pass" className=" text-white">
                      رمز عبور جدید
                    </label>
                    <input
                      type="password"
                      className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                      id="new_pass"
                      name="new_pass"
                      required=""
                      placeholder="رمز جدید را وارد کنید"
                    />
                  </div>
                </div>
                <input type="hidden" name="nonce" value="b2b0085233" />
                <button
                  type="submit"
                  className="button-lg bg-green-500 mr-auto text-center w-full md:w-auto mt-10"
                >
                  تغییر رمز
                </button>
              </form>
            </div>
          </div>
          <div className="db-overlay invisible opacity-0 fixed w-full h-full top-0 left-0 bg-black/40 z-20 transition-all"></div>
        </div>
      </section>
    </div>
  );
}
