import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";

import Image from "next/image";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Mainticket() {
  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <header className="flex items-center justify-between bg-gray md:bg-transparent border-b md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 md:p-0">
          <h3 className="hidden md:block text-2xl text-white">
            mohammad valadbiegi عزیز؛ خوش اومدی 🙌
          </h3>
          <div className="flex md:hidden items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
            <RxHamburgerMenu className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </div>
          <div className="flex gap-x-3.5 md:gap-x-7">
            <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
              <IoNotificationsOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
            </div>
            <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
              <IoSunnyOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
            </div>
            <div className="md:flex items-center hidden    justify-center">
              <Image src="/image/userimageaccont.png" width={50} height={50} />{" "}
            </div>
          </div>
        </header>

        <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
          <div class="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span class=" md:text-xl text-white">اضافه کردن دوره</span>
          </div>
          <div class="space-y-4">
            <div class="w-11/12 sm:w-2/3 bg-gray-700 text-white mb-12 p-4 rounded-2xl rounded-tr-sm">
              <h4 class="font-danaMedium text-xl mb-1 text-right">
                mohammad valadbiegi
              </h4>
              <span
                class="block text-xs  text-slate-400 text-right"
                style={{ direction: "ltr" }}
              >
                1402/11/01 19:17
              </span>
              <p class=" mt-4.5">
                سلام خدمت سایت عالی و خوب سبزلرن بنده در این جشواره دوره های
                مورد نظر تهیه کردم و فقط 50 هزار تومان مونده تا به دوره مستر
                فریلنسر دسترسی پیدا کنم ولی من تمام دوره های مورد نیاز خودم رو
                در جشنواره های قبلی خریداری کردم در صورت امکان دوره فریلنسر رو
                به من هم بدید ممنون
              </p>
            </div>
            <div class="w-11/12 sm:w-2/3 bg-sky-800 mr-auto   text-white p-4 rounded-2xl rounded-tl-sm">
              <h4 class=" text-xl mb-1 text-left">Shahram.Kh</h4>
              <span
                class="block text-xs  text-slate-400 text-left"
                style={{ direction: "ltr" }}
              >
                1402/11/02 00:19
              </span>
              <p class=" mt-4.5"></p>
              <p>سلام دوست عزیز</p>
              <p>ممنونم از شما لطف دارید </p>
              <p>
                این موردتون مشکلی نیست و تایید شد بزودی دوره براتون فعال میشه
              </p>
              <p></p>
            </div>
            <div class="w-11/12 sm:w-2/3  mr-auto bg-sky-800   text-white p-4 rounded-2xl rounded-tl-sm">
              <h4 class=" text-xl mb-1 text-left">Shahram.Kh</h4>
              <span
                class="block text-xs  text-slate-400 text-left"
                style={{ direction: "ltr" }}
              >
                1402/11/09 01:30
              </span>
              <p class=" mt-4.5">این تیکت بصورت اتوماتیک بسته شده است.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
