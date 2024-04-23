import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";

import { SlRocket } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa";

import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";

export default function UserDeatailsPage() {
  const [showsidebar, setshowsidebar] = useState(false);
  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails setshowsidebar={setshowsidebar} />
        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
          <Userdeatailsheaderbox
            title="مجموع پرداخت ها"
            desc="4,437,300 تومان"
            icon={<FaCreditCard />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="دوره های من"
            desc="26 دوره"
            icon={<SlRocket />}
            bg="bg-secondry"
          />
          <Userdeatailsheaderbox
            title="مجموع تیکت ها"
            desc="2 تیکت"
            icon={<HiOutlineChatAlt2 />}
            bg="bg-rose-500"
          />
          <Userdeatailsheaderbox
            title="موجودی حساب"
            desc="11 دوره"
            icon={<AiOutlineDollar />}
            bg="bg-green-500"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7 items-start">
          <div>
            <div className="flex justify-between items-center bg-gray-700 px-3.5 py-2.5 md:p-4.5 mb-4 md:mb-5 rounded-2xl">
              <span className=" md:text-xl text-white">اخیرا مشاهده شده</span>
              <Link
                href="/userdeatails/mycourse"
                className="flex items-center gap-x-1.5 text-sky-500 bg-sky-800/30 p-3 rounded-xl  text-sm"
              >
                همه دوره‌های ثبت نام شده
                <FaArrowLeftLong className="w-6 h-6" />
              </Link>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
              <div className=" flex flex-col overflow-hidden bg-gray-700  border border-gray-700 rounded-2xl">
                <div className="relative h-42">
                  <a className="w-full h-full block" href="#">
                    <Image
                      width={150}
                      height={150}
                      className="block w-full h-full object-cover rounded-2xl"
                      src="/image/badusb-1-768x432.webp"
                    />
                  </a>
                </div>
                <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
                  <h4 className=" h-12 line-clamp-2 text-white mb-2.5">
                    <a href="#">آموزش Next.js بصورت پروژه محور</a>
                  </h4>
                  <div className="pt-3 border-t border-t-gray-700">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-white">میزان مشاهده</span>
                      <span className="text-slate-400">57%</span>
                    </div>
                    <div className="bg-gray-700 h-[5px] rounded-full">
                      <div className="bg-green-500 w-[57%] h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col overflow-hidden bg-gray-700 border border-gray-700 rounded-2xl">
                <div className="relative h-42">
                  <a className="w-full h-full block" href="#">
                    <Image
                      width={150}
                      height={150}
                      className="block w-full h-full object-cover rounded-2xl"
                      src="/image/badusb-1-768x432.webp"
                    />
                  </a>
                </div>
                <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
                  <h4 className=" h-12 line-clamp-2 text-white mb-2.5">
                    <a href="#">آموزش حرفه ای NodeJS بدون پیش نیاز</a>
                  </h4>
                  <div className="pt-3 border-t border-t-gray-700">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-white">میزان مشاهده</span>
                      <span className="text-slate-400">0%</span>
                    </div>
                    <div className="bg-gray-700 h-[5px] rounded-full">
                      <div className="bg-green-500 w-[0%] h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col overflow-hidden bg-gray-700 border border-gray-700 rounded-2xl">
                <div className="relative h-42">
                  <a className="w-full h-full block" href="#">
                    <Image
                      width={150}
                      height={150}
                      className="block w-full h-full object-cover rounded-2xl"
                      src="/image/badusb-1-768x432.webp"
                    />
                  </a>
                </div>
                <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
                  <h4 className=" h-12 line-clamp-2 text-white mb-2.5">
                    <a href="#">مستر فریلنس - هنر همکاری موفق با کارفرماها</a>
                  </h4>
                  <div className="pt-3 border-t border-t-gray-700">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-white">میزان مشاهده</span>
                      <span className="text-slate-400">9%</span>
                    </div>
                    <div className="bg-gray-700 h-[5px] rounded-full">
                      <div className="bg-green-500 w-[9%] h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col overflow-hidden bg-gray-700 border border-gray-700 rounded-2xl">
                <div className="relative h-42">
                  <a className="w-full h-full block" href="#">
                    <Image
                      width={150}
                      height={150}
                      className="block w-full h-full object-cover rounded-2xl"
                      src="/image/badusb-1-768x432.webp"
                    />
                  </a>
                </div>
                <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
                  <h4 className=" h-12 line-clamp-2 text-white mb-2.5">
                    <a href="#">
                      آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار
                    </a>
                  </h4>
                  <div className="pt-3 border-t border-t-gray-700">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-white">میزان مشاهده</span>
                      <span className="text-slate-400">21%</span>
                    </div>
                    <div className="bg-gray-700 h-[5px] rounded-full">
                      <div className="bg-green-500 w-[23%] h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-700 p-3.5 md:p-4.5 rounded-2xl">
              <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-bborder-b-gray-700">
                <span className=" md:text-xl text-white">تیکت های اخیر</span>
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 text-sky-500  text-sm"
                >
                  همه تیکت ها
                  <FaArrowLeftLong className="w-6 h-6" />
                </a>
              </div>
              <div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:bg-gray-700 rounded-xl transition-colors">
                  <a
                    href="#"
                    className="text-white w-full sm:max-w-sm sm:truncate"
                  >
                    اضافه کردن دوره
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/11/09</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      بسته شده
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:bg-gray-700 rounded-xl transition-colors">
                  <a
                    href="#"
                    className="text-white w-full sm:max-w-sm sm:truncate"
                  >
                    کانال پشتیبانی دوره ری اکت
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/07/05</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      بسته شده
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-3.5 md:p-4.5 rounded-2xl mt-7">
              <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
                <span className=" md:text-xl text-white">پرسش های اخیر</span>
              </div>
              <div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:bg-gray-700 rounded-xl transition-colors">
                  <a
                    href="#"
                    className="text-white w-full sm:max-w-sm sm:truncate"
                  >
                    آموزش Next.js بصورت پروژه محور - آشنایی با متد Populate
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/12/11</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      بسته شده
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:bg-gray-700 rounded-xl transition-colors">
                  <a
                    href="#"
                    className="text-white w-full sm:max-w-sm sm:truncate"
                  >
                    آموزش Next.js بصورت پروژه محور - پیاده سازی SSR در Dynamic
                    Routes
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/12/02</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      بسته شده
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:bg-gray-700 rounded-xl transition-colors">
                  <a
                    href="#"
                    className="text-white w-full sm:max-w-sm sm:truncate"
                  >
                    آموزش Next.js بصورت پروژه محور - مفهوم Pre-rendering و انواع
                    آن
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/11/26</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      بسته شده
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:bg-gray-700 rounded-xl transition-colors">
                  <a
                    href="#"
                    className="text-white w-full sm:max-w-sm sm:truncate"
                  >
                    آموزش Next.js بصورت پروژه محور - معرفی فصل و پروژه
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/11/24</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      بسته شده
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
