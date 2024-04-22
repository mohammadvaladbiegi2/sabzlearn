import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Mycoursecard from "@/components/mycoursecard";
import Image from "next/image";
import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlRocket } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Mycourse() {
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
            <div className="md:flex items-center hidden  bg-white p-3 rounded-full  justify-center">
              <Image src="/image/userimage.png" width={30} height={30} />{" "}
            </div>
          </div>
        </header>
        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-9">
          <Userdeatailsheaderbox
            title="دوره‌های ثبت نام شده"
            desc="24 دوره"
            icon={<FaCreditCard />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="دوره‌های نقدی"
            desc="11 دوره"
            icon={<AiOutlineDollar />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title="دوره‌های رایگان"
            desc="13 دوره"
            icon={<SlRocket />}
            bg="bg-green-400"
          />
        </div>
        <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-5">
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
        </div>
      </section>
    </div>
  );
}
