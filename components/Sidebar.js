import Image from "next/image";
import React from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
export default function Sidebar({ setshowsidebar, showsidebar }) {
  return (
    <div
      class={`${
        showsidebar ? "active_Sidebar" : "NONactive_Sidebar"
      } xl:hidden bg-dark w-60 overflow-y-auto fixed top-0 bottom-0 z-50 p-4 transition-all right-[-240px]`}
    >
      <div class="flex items-center justify-between pb-6 relative border-b  border-b-white/10">
        <Image
          src="/image/logo.webp"
          className="h-12 "
          width={70}
          height={40}
          alt=""
        />
        <div class="flex gap-x-3">
          <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
            <IoSunnyOutline className="text-white w-5 h-5 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </div>
          <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
            <IoMdClose
              onClick={() => setshowsidebar(false)}
              className="text-white w-5 h-5 text-xl cursor-pointer hover:text-green-500 transition-all"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full mt-2 justify-center">
        <input
          type="text"
          className="input_navBar text-slate-300 w-[160px] "
          placeholder="چی مخوای یادبگیری؟"
        />
        <IoIosSearch className="text-white w-5 h-5 cursor-pointer" />
      </div>
      <ul class="py-2 mt-2">
        <li className="group my-6">
          <span class="text-white text-[18px] group-hover:text-green-500 transition-colors cursor-pointer flex items-center justify-between">
            فرانت اند{" "}
            <FaAngleLeft className="text-white h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </span>
          {/* <ul class="py-2 px-4 mt-3 rounded-xl  active_sidebar_links w-[240px] bg-dark-100">
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش HTML
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش CSS
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش FlexBox
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش CSS Grid
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                مینی پروژه های تخصصی با Css
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش Tailwind CSS
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white"
                href="#-design-with-html-css-flexbox/"
              >
                آموزش اصولی طراحی قالب
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش بوت استرپ
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش جاوااسکریپت
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                پروژه های تخصصی با JS
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش جامع ری اکت ReactJS
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش ویو جی اس
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-[16px] text-white hover:text-green-500 transition-colors"
                href="#"
              >
                آموزش وی اس کد - Vscode
              </a>
            </li>
          </ul> */}
        </li>
        <li className="group my-6">
          <span class="text-white group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between ">
            امنیت{" "}
            <FaAngleLeft className="text-white h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </span>
        </li>
        <li className="group my-6">
          <span class="text-white group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between ">
            پایتون{" "}
            <FaAngleLeft className="text-white h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </span>
        </li>
        <li className="group my-6">
          <span class="text-white group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between ">
            پی‌اچ‌پی{" "}
            <FaAngleLeft className="text-white h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </span>
        </li>
        <li className="group my-6">
          <span class="text-white group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between ">
            ارتقامهارت{" "}
            <FaAngleLeft className="text-white h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </span>
        </li>
        <li className="group my-6">
          <span class="text-white group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between ">
            مقالات{" "}
            <FaAngleLeft className="text-white h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </span>
        </li>
      </ul>
    </div>
  );
}
