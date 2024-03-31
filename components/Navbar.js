import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

export default function navbar() {
  const [showsidebar, setshowsidebar] = useState(false);

  return (
    <nav className="px-8 py-6 bg-dark ">
      {/* xl size */}
      <div className="hidden xl:flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Image
            src="/image/logo.webp"
            className="h-12 "
            width={70}
            height={40}
            alt=""
          />
          <ul className="flex items-center justify-around gap-6">
            <li className="flex items-center relative group gap-2">
              <a
                href="#"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                فرانت‌اند
              </a>
              <IoIosArrowDown className="text-white mt-2  group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div className="bg_drop_down_nav flex flex-col gap-y-4 w-64  dark:bg-darker p-5 border-y-4  border-y-green-500 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش HTML{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش CSS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش FlexBox{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش CSS Grid{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    مینی پروژه های تخصصی با Css{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش Tailwind CSS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش اصولی طراحی قالب{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش بوت استرپ{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش جاوااسکریپت{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    پروژه های تخصصی با JS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش جامع ری اکت ReactJS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش ویو جی اس{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش وی اس کد - Vscode{" "}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <a
                href="#"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                امنیت
              </a>
              <IoIosArrowDown className="text-white mt-2  group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div className="bg_drop_down_nav flex flex-col gap-y-4 w-64  dark:bg-darker p-5 border-y-4  border-y-green-500 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    نقشه راه ورود به دنیای هک و امنیت{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    شبکه با گرایش امنیت{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    لینوکس با گرایش امنیت{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش هکر قانونمند - CEH V11{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش کالی لینوکس{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش پایتون سیاه{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش Burp Suite{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش جاوااسکریپت سیاه{" "}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <a
                href="#"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                پایتون
              </a>
              <IoIosArrowDown className="text-white mt-2  group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div className="bg_drop_down_nav flex flex-col gap-y-4 w-64  dark:bg-darker p-5 border-y-4  border-y-green-500 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    دوره آموزش پایتون{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    پروژه های کاربردی با پایتون{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    بهینه نویسی کد ها در پایتون{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    متخصص جنگو{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    مصور سازی داده با پایتون{" "}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <a
                href="#"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                پی‌اچ‌پی
              </a>
              <IoIosArrowDown className="text-white mt-2  group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div className="bg_drop_down_nav flex flex-col gap-y-4 w-64  dark:bg-darker p-5 border-y-4  border-y-green-500 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    ربات تلگرام با PHP{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    پروژه های کاربردی با PHP{" "}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <a
                href="#"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                ارتقا مهارت
              </a>
              <IoIosArrowDown className="text-white mt-2  group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div className="bg_drop_down_nav flex flex-col gap-y-4 w-64  dark:bg-darker p-5 border-y-4  border-y-green-500 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    الگوریتم و ساختمان داده{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش websocket{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    گیت و گیتهاب{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش GraphQL{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    توسعه کتابخانه با JS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    افزونه نویسی با JS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    Clean Code برای JS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    دیپلوی پروژه های JS{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    دوره Mern Stack{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش رجکس (regex){" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    NPM برای جاوااسکریپت کارها{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    آموزش کاربردی Vscode{" "}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <a
                href="#"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                مقالات
              </a>
              <IoIosArrowDown className="text-white mt-2  group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div className="bg_drop_down_nav flex flex-col gap-y-4 w-64  dark:bg-darker p-5 border-y-4  border-y-green-500 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    اچ تی ام ال{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    بوت استرپ{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    پروژه های برنامه نویسی{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    تست نفوذ و امنیت وب{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    جی کوئری{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    ری اکت جی اس{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    سی اس اس{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    شروع برنامه نویسی{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    طراحی سایت{" "}
                  </a>
                  <a
                    href="#"
                    className=" text-white hover:text-green-500 transition-colors"
                  >
                    ویو جی اس{" "}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-7">
          <div className="flex items-center  bg-[#ffffff0D] p-4 rounded-full justify-center">
            <input
              type="text"
              className="input_navBar text-slate-300  font-medium"
              placeholder="چی مخوای یادبگیری؟"
            />
            <IoIosSearch className="text-white w-6 h-6 cursor-pointer" />
          </div>
          <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
            <IoSunnyOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
          </div>

          <button className="text-white font-bold flex items-center justify-center py-4 px-7 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer">
            {" "}
            <FaRegUser className="text-white font-medium text-[23px] mt-1" />
            ورود | عضویت
          </button>
        </div>
      </div>
      {/* phone size */}
      <div className="xl:hidden flex items-center justify-between">
        <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
          <RxHamburgerMenu
            onClick={() => setshowsidebar(true)}
            className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all"
          />
        </div>
        <Image
          src="/image/logo.webp"
          className="h-12 "
          width={70}
          height={40}
          alt=""
        />
        <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
          <HiOutlineArrowRightOnRectangle className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
        </div>
      </div>
      {<Sidebar showsidebar={showsidebar} setshowsidebar={setshowsidebar} />}
    </nav>
  );
}
