import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Image from "next/image";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsTicketPerforated } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";

export default function UserTiket() {
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
        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
          <Userdeatailsheaderbox
            title="همه تیکت ها"
            desc="2 عدد"
            icon={<BsTicketPerforated />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="تیکت های باز"
            desc="0 تیکت"
            icon={<IoMailOpenOutline />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title="تیکت های بسته شده"
            desc="2 تیکت"
            icon={<HiOutlineChatAlt2 />}
            bg="bg-rose-500"
          />
        </div>
        <div className="mb-3">
          <Userdeatailsheaderbox
            desc="تیکت جدید"
            icon={<FiPlusCircle />}
            bg="bg-secondry"
            href="/userdeatails/usertiket/newticket"
          />
        </div>
        <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
          <div class="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span class=" md:text-xl text-white">تیکت ها</span>
          </div>
          <div>
            <Link
              href="/userdeatails/usertiket/5256871"
              class="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-700 rounded-xl transition-colors"
            >
              <div class="flex items-center">
                <span class="block text-white w-20 text-right ">#10089</span>
                <Link
                  href="/userdeatails/usertiket/5256871"
                  class="text-white w-full  sm:max-w-md md:truncate"
                >
                  اضافه کردن دوره
                </Link>
              </div>
              <div class="flex items-center gap-5">
                <span class="text-xs text-slate-400 text-ltr">
                  1402/11/01 (19:17)
                </span>
                <span class="text-xs py-1 px-1.5 text-yellow-400  bg-yellow-400/10 rounded">
                  ارتباط با مدیریت
                </span>
                <span class="text-xs py-1 px-1.5 text-yellow-400  bg-yellow-400/10 rounded">
                  بسته شده
                </span>
              </div>
            </Link>
            <Link
              href="/userdeatails/usertiket/5256871"
              class="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-700 rounded-xl transition-colors"
            >
              <div class="flex items-center">
                <span class="block text-white w-20 text-right ">#3021</span>
                <Link
                  href="/userdeatails/usertiket/5256871"
                  class="text-white w-full  sm:max-w-md md:truncate"
                >
                  کانال پشتیبانی دوره ری اکت
                </Link>
              </div>
              <div class="flex items-center gap-5">
                <span class="text-xs text-slate-400 text-ltr">
                  1401/11/18 (23:48)
                </span>
                <span class="text-xs py-1 px-1.5 text-yellow-400  bg-yellow-400/10 rounded">
                  پشتیبانی
                </span>
                <span class="text-xs py-1 px-1.5 text-yellow-400  bg-yellow-400/10 rounded">
                  بسته شده
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
