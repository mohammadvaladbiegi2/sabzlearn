import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoFolderOpenOutline, IoSunnyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";

export default function navbar() {
  const [showsidebar, setshowsidebar] = useState(false);
  let [islogin, setislogin] = useState(false);
  let [showbox, setshowbox] = useState(false);
  let [showboxlanguage, setshowboxlanguage] = useState(false);
  useEffect(() => {
    setislogin(localStorage.getItem("login"));
  }, []);
  return (
    <nav className="px-3 md:px-8 py-6 bg-dark ">
      {/* xl size */}
      <div className="hidden xl:flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/image/logo.webp"
              className="h-12 "
              width={70}
              height={40}
              alt=""
            />
          </Link>
          <ul className="flex items-center justify-around gap-6">
            <li className="flex items-center relative group gap-2">
              <Link
                href="/searchcours/frontend"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                فرانت‌اند
              </Link>
              <IoIosArrowDown className="text-white   group-hover:text-green-500 transition-colors " />
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
              <Link
                href="/searchcours/security"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                امنیت
              </Link>
              <IoIosArrowDown className="text-white   group-hover:text-green-500 transition-colors " />
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
              <Link
                href="/searchcours/python"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                پایتون
              </Link>
              <IoIosArrowDown className="text-white   group-hover:text-green-500 transition-colors " />
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
              <Link
                href="/searchcours/php"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                پی‌اچ‌پی
              </Link>
              <IoIosArrowDown className="text-white   group-hover:text-green-500 transition-colors " />
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
              <Link
                href="/searchcours/SkillUpgrade"
                className="text-white group-hover:text-green-500  transition-colors   text-lg"
              >
                ارتقا مهارت
              </Link>
              <IoIosArrowDown className="text-white   group-hover:text-green-500 transition-colors " />
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

          {islogin ? (
            <>
              <div
                onClick={() => {
                  setshowboxlanguage(false);
                  setshowbox((prev) => !prev);
                }}
                className={`flex  ${
                  showbox && "z-50"
                } items-center bg-[#ffffff0D] p-4 rounded-full  justify-center`}
              >
                <FaRegUser className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
              </div>

              <div
                class={`absolute ${
                  showbox ? "visible opacity-100" : "opacity-0 hidden"
                }    left-8 top-[14%] pt-4 z-10 transition-all show`}
              >
                <div className="w-[278px] bg-dark border-0 p-5 pb-3.5 rounded-xl">
                  <div className="flex items-center border-b border-b-white/5 pb-5 mb-2">
                    <a href="#" className="shrink-0">
                      <Image
                        src="/image/userimageaccont.png"
                        alt="mohammadvalad"
                        className="object-cover w-14 h-14 rounded-full inline-block"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
                      <span className="text-white inline-block truncate">
                        mohammad valadbiegi
                      </span>
                      <span className="text-sm  text-green-500 inline-block">
                        موجودی: 0 تومان
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/userdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <AiOutlineHome className="text-white w-6 h-6 " />
                      پیشخوان{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/mycourse"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <IoFolderOpenOutline className="text-white w-6 h-6 " />
                      دوره های من{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/usertiket"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <HiOutlineChatBubbleLeftRight className="text-white w-6 h-6 " />
                      تیکت ها{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/accontdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <FaRegUser className="text-white w-6 h-6 " />
                      جزئیات حساب{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link href="/auth/login">
              <button className="text-white font-bold flex items-center justify-center py-3 px-5 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer">
                {" "}
                <FaRegUser className="text-white font-medium text-[23px] mt-1" />
                ورود | عضویت
              </button>
            </Link>
          )}
          <span
            onClick={() => {
              setshowboxlanguage((prev) => !prev);
              setshowbox(false);
            }}
            className="flex items-center gap-3 cursor-pointer bg-[#ffffff0D] p-4 rounded-full  justify-center"
          >
            <Image
              src="/image/Iran-512.webp"
              width={20}
              height={20}
              className="bg-white rounded-full"
            />
            <IoLanguage className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </span>
          <div
            class={` absolute ${
              showboxlanguage ? "visible opacity-100" : "opacity-0 hidden"
            }    left-8 top-[14%] pt-4 z-10 transition-all  show`}
          >
            <div className="w-[278px] bg-dark border-0 p-5 pb-3.5 rounded-xl">
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">English </span>
                <Image
                  src="/image/en-flag.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">العربية </span>
                <Image
                  src="/image/saudi-flag.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">فارسی </span>
                <Image
                  src="/image/Iran-512.webp"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">Deutsch </span>
                <Image
                  src="/image/3909219.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* phone size */}
      <div className="xl:hidden flex items-center justify-between">
        <span className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
          <RxHamburgerMenu
            onClick={() => setshowsidebar(true)}
            className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all"
          />
        </span>

        <Link href="/">
          <Image
            src="/image/logo.webp"
            className="h-12 mr-10"
            width={70}
            height={40}
            alt=""
          />
        </Link>
        <div className="flex items-center gap-2">
          {islogin ? (
            <>
              <div
                onClick={() => {
                  setshowbox((prev) => !prev);
                  setshowboxlanguage(false);
                }}
                className={`flex  ${
                  showbox && "z-50"
                } items-center bg-[#ffffff0D] p-4 rounded-full  justify-center`}
              >
                <FaRegUser className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
              </div>

              <div
                class={`absolute ${
                  showbox ? "visible opacity-100" : "opacity-0 hidden"
                }    left-8 top-[14%] pt-4 z-10 transition-all show`}
              >
                <div className="w-[278px] bg-dark border-0 p-5 pb-3.5 rounded-xl">
                  <div className="flex items-center border-b border-b-white/5 pb-5 mb-2">
                    <a href="#" className="shrink-0">
                      <Image
                        src="/image/userimageaccont.png"
                        alt="mohammadvalad"
                        className="object-cover w-14 h-14 rounded-full inline-block"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
                      <span className="text-white inline-block truncate">
                        mohammad valadbiegi
                      </span>
                      <span className="text-sm  text-green-500 inline-block">
                        موجودی: 0 تومان
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/userdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <AiOutlineHome className="text-white w-6 h-6 " />
                      پیشخوان{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/mycourse"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <IoFolderOpenOutline className="text-white w-6 h-6 " />
                      دوره های من{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/usertiket"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <HiOutlineChatBubbleLeftRight className="text-white w-6 h-6 " />
                      تیکت ها{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/accontdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <FaRegUser className="text-white w-6 h-6 " />
                      جزئیات حساب{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center"
            >
              <HiOutlineArrowRightOnRectangle className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
            </Link>
          )}
          <span
            onClick={() => {
              setshowboxlanguage((prev) => !prev);
              setshowbox(false);
            }}
            className="flex items-center gap-3 cursor-pointer  bg-[#ffffff0D] p-4 rounded-full  justify-center"
          >
            <Image
              src="/image/Iran-512.webp"
              width={20}
              height={20}
              className="bg-white rounded-full"
            />
            <IoLanguage className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </span>
          <div
            class={` absolute ${
              showboxlanguage ? "visible opacity-100" : "opacity-0 hidden"
            }    left-8 top-[14%] pt-4 z-10 transition-all show`}
          >
            <div className="w-[278px] bg-dark border-0 p-5 pb-3.5 rounded-xl">
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">English </span>
                <Image
                  src="/image/en-flag.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">العربية </span>
                <Image
                  src="/image/saudi-flag.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">فارسی </span>
                <Image
                  src="/image/Iran-512.webp"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
              <span className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg text-white hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-x-2">Deutsch </span>
                <Image
                  src="/image/3909219.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {<Sidebar showsidebar={showsidebar} setshowsidebar={setshowsidebar} />}
    </nav>
  );
}
