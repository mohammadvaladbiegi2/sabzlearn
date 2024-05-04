import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { LuPlayCircle } from "react-icons/lu";
import { IoChatbubbles } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function DetailsCours() {
  const [showmoredesc, setshowmoredesc] = useState(false);

  return (
    <>
      <Navbar />
      <main class="max-w-[1920px] mx-auto overflow-x-hidden mt-8 sm:mt-10">
        <div class="px-6 md:px-14">
          <section class="p-3 grid grid-cols-1 lg:grid-cols-2 gap-y-4.5 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-2xl p-4.5 lg:p-0 bg-dark lg:!bg-transparent  ">
            <div class="flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h1 class="text-white my-4  text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-4.5">
                  درک عمیق مفاهیم API از صفر مطلق
                </h1>
                <p class="text-white my-2 sm:text-lg line-clamp-4 sm:line-clamp-3">
                  تو این دوره، دانشجو ها با مفاهیم پایه و اساسی API آشنا میشن و
                  روش های مختلف استفاده از اون رو یاد میگیرن. همینطور مفاهیمی
                  مثل انواع API ها، نکات پیشرفته api نویسی و.. مورد بررسی قرار
                  میگیرن
                </p>
              </div>
              <div class="space-y-4 lg:space-y-8 mt-4 lg:mt-0 ">
                <div class=" flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-y-4 gap-x-5 flex-wrap justify-between text-center sm:text-right p-4 xl:h-16 bg-dark-light lg:bg-dark rounded-xl">
                  <span class=" sm:text-xl lg:text-center xl:text-right text-red-500">
                    100% پیشنهاد شگفت انگیز
                  </span>
                  <div className="flex text-white items-center justify-between gap-1 sm:gap-3">
                    <div className="md:pl-5 md:ps-2 pl-1 ps-1 border-l-2 border-white/70">
                      <span className="pl-2 text-xl">0</span>
                      روز
                    </div>
                    <div className="md:pl-5 md:ps-2 pl-1 ps-1 border-l-2 border-white/70">
                      <span className="pl-2 text-xl">9</span>
                      ساعت
                    </div>
                    <div className="md:pl-5 md:ps-2 pl-1 ps-1 border-l-2 border-white/70">
                      <span className="pl-2 text-xl">23</span>
                      دقیقه
                    </div>
                    <div>
                      <span className="md:pl-3 pl-1 text-xl text-red-500">
                        50
                      </span>
                      ثانیه
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row justify-center items-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6">
                  <a
                    href="#"
                    class=" bg-green-500 text-white rounded-full p-5  sm:w-auto"
                  >
                    ثبت نام در دوره
                  </a>
                  <div class="flex items-end gap-x-2.5">
                    <span class="text-white/70 text-xl line-through">
                      150,000{" "}
                    </span>
                    <span class="text-white text-2xl">رایگان! </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="overflow-hidden rounded-2xl order-1 lg:order-2 xl:h-[370px]">
              <Image
                src="/image/api-1.webp"
                class="w-full h-full object-cover"
                alt="درک عمیق مفاهیم API از صفر مطلق"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section class="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
            <div class="col-span-12 lg:col-span-8">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-dark pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl">
                  <HiOutlineInformationCircle class="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div class="space-y-0.5 text-white sm:space-y-1">
                    <span class="block  text-lg sm:text-base">وضعیت دوره</span>
                    <span class="block text-sm opacity-70">تکمیل شده</span>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-dark pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl">
                  <FaRegClock class="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div class="space-y-0.5 text-white sm:space-y-1">
                    <span class="block  text-lg sm:text-base">
                      مدت زمان دوره
                    </span>
                    <span class="block text-sm opacity-70">3 ساعت</span>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-dark pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl">
                  <HiOutlineCalendarDays class="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div class="space-y-0.5 text-white sm:space-y-1">
                    <span class="block  text-lg sm:text-base">
                      آخرین بروزرسانی
                    </span>
                    <span class="block text-sm opacity-70">1403/02/09</span>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-dark pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl">
                  <LuUsers class="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div class="space-y-0.5 text-white sm:space-y-1">
                    <span class="block  text-lg sm:text-base">
                      روش پشتیبانی
                    </span>
                    <span class="block text-sm opacity-70">آنلاین</span>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-dark pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl">
                  <BsBriefcase class="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div class="space-y-0.5 text-white sm:space-y-1">
                    <span class="block  text-lg sm:text-base">پیش نیاز</span>
                    <span class="block text-sm opacity-70">
                      اشنایی با دنیای وب
                    </span>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-dark pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl">
                  <BsCameraVideo class="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div class="space-y-0.5 text-white sm:space-y-1">
                    <span class="block  text-lg sm:text-base">نوع مشاهده</span>
                    <span class="block text-sm opacity-70">دانلودی/آنلاین</span>
                  </div>
                </div>
              </div>
              <div class="bg-dark rounded-2xl p-5 sm:p-5 mt-8">
                <div class="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                  <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-amber-400 rounded-r-sm "></span>
                  <BsFileEarmarkTextFill class="hidden md:inline-block text-amber-400 text-3xl" />

                  <div class=" text-xl md:text-2xl p-2 text-white">توضیحات</div>
                </div>
                <div class="relative overflow-hidden">
                  <div
                    class={`relative ${
                      showmoredesc ? "h-full" : " max-h-[800px]"
                    }  text-white/70 `}
                  >
                    <p class="p-2 leading-7" dir="rtl">
                      توی دوره، شرکت‌کنندگان با مفاهیم پایه و اساسی API
                      (رابط‌های برنامه‌نویسی اپلیکیشن) آشنا میشن و روش‌های مختلف
                      استفاده از اون رو یاد میگیرن. این دوره برای کسایی مناسب
                      است که میخوان مفاهیم پایه‌ای مرتبط با توسعه و استفاده از
                      API رو یاد بگیرن و به طراحی، ایجاد و تعامل با API‌ها در
                      برنامه‌ها و وب‌سایت‌های خود بپردازن.
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      شرکت‌کنندگان در این دوره با مفاهیمی از جمله نوع‌های مختلف
                      API از جمله RESTful، GraphQL، SOAP و RPC، مفهوم‌های اساسی
                      از جمله Endpoint، Request، Response، Authentication، و
                      Rate Limiting و همچنین روش‌های آزمون و تست API آشنا میشن.
                      علاوه بر این، مباحث پیشرفته مثل Caching، Versioning،
                      Pagination، و Rate Limiting نیز مورد بررسی قرار میگیرن.
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      به طور کلی توی این دوره، موارد زیر پوشش داده میشن:
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      مفهوم و اهمیت API
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      نوع‌های مختلف API از جمله RESTful، GraphQL، SOAP و RPC
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      استفاده از API در توسعه نرم‌افزار و توسعه وب
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      مزایا و معایب استفاده از API
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      مفاهیم اساسی مانند Endpoint، Request، Response،
                      Authentication، و Rate Limiting
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      روش‌های آزمون و تست API
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      مباحث پیشرفته مانند Caching، Versioning، Pagination، و
                      Rate Limiting
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      روش‌های مستندسازی و مستندنویسی API
                    </p>
                    <p class="p-2 leading-7" dir="rtl">
                      این دوره برای توسعه‌دهندگان نرم‌افزار، وب دولوپر ها و
                      دانشجویان علوم کامپیوتر و علاقمندان به فناوری‌های وب و
                      نرم‌افزار مناسبه است و با توجه به روند آموزش گام به گام،
                      به شرکت‌کنندگان اجازه میده تا مهارت‌های لازم برای استفاده
                      موثر از API‌ها رو به دست بیارن.
                    </p>
                  </div>
                  {!showmoredesc && (
                    <div class="absolute bottom-0 right-0 left-0  w-full  h-64 bg-gradient-to-t from-gray-800/70 to-transparent shadow-lg"></div>
                  )}
                </div>
                <button
                  class="p-5 rounded-full  text-center text-white block  m-auto bg-green-500 w-auto mx-auto mt-5"
                  onClick={() => setshowmoredesc((prev) => !prev)}
                >
                  <span>{showmoredesc ? "بستن" : "مشاهده بیشتر مطلب"}</span>
                </button>
              </div>
              <div class="bg-dark rounded-2xl p-4 sm:p-5 mt-8">
                <div class="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                  <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm"></span>
                  <RiGraduationCapFill class="hidden md:inline-block text-sky-500 text-3xl" />

                  <div class="text-white text-xl md:text-2xl">سرفصل ها</div>
                </div>
                <div class="space-y-4 md:space-y-5">
                  <div class="topic flex flex-col justify-center  text-white">
                    <div class="topic__head ">
                      <span class="text-lg inline-block  lg:line-clamp-3 transition-colors">
                        API چیه و چرا ازش استفاده میشه؟
                      </span>
                      <div class="flex items-center gap-x-2.5 shrink-0">
                        <div class="mt-1 hidden lg:flex items-center gap-x-1.5 text-sm text-white transition-colors">
                          <span>5 جلسه</span>
                          <span class="mt-1 block w-1 h-1 bg-white/50 rounded-full"></span>
                          <span>29 دقیقه </span>
                        </div>
                        <FaChevronDown class="w-5 h-5  transition-all " />
                      </div>
                    </div>
                    <div class="topic__body  px-3">
                      <div class=" flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer border_b_s my-5">
                        {" "}
                        <div class="flex  items-start flex-grow gap-x-2.5 md:gap-x-3.5 ">
                          <div class="transition-colors w-8 h-6 md:h-7 text-sm  flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">
                            1{" "}
                          </div>
                          <Link
                            href="/coursdetails/lesson/5"
                            class="mt-1 inline-block lg:max-w-3/4 text-sm md:text-base transition-colors group-hover:text-green-500 "
                          >
                            API چیست؟
                          </Link>
                        </div>
                        <div class="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                          <span class="text-sm md:text-base mt-1">10:00 </span>
                          <LuPlayCircle className="text-white/70 text-2xl transition-colors group-hover:text-green-500" />
                        </div>
                      </div>
                      <div class=" flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer border_b_s my-5">
                        {" "}
                        <div class="flex items-start flex-grow gap-x-2.5 md:gap-x-3.5 transition-colors">
                          <div class=" w-8 h-6 md:h-7 text-sm  flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">
                            2{" "}
                          </div>
                          <Link
                            href="/coursdetails/lesson/5"
                            class=" mt-1 inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 "
                          >
                            چرا از API استفاده میشه؟
                          </Link>
                        </div>
                        <div class="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                          <span class="text-sm md:text-base mt-1">05:13 </span>
                          <LuPlayCircle className="text-white/70 text-2xl transition-colors group-hover:text-green-500" />
                        </div>
                      </div>
                      <div class=" flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer border_b_s my-5">
                        {" "}
                        <div class="flex items-start flex-grow gap-x-2.5 md:gap-x-3.5 transition-colors">
                          <div class=" w-8 h-6 md:h-7 text-sm  flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">
                            3{" "}
                          </div>
                          <Link
                            href="/coursdetails/lesson/5"
                            class=" mt-1 inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 "
                          >
                            API ها چجوری کار میکنن؟
                          </Link>
                        </div>
                        <div class="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                          <span class="text-sm md:text-base mt-1">06:16 </span>
                          <LuPlayCircle className="text-white/70 text-2xl transition-colors group-hover:text-green-500" />
                        </div>
                      </div>
                      <div class=" flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer border_b_s my-5">
                        {" "}
                        <div class="flex items-start flex-grow gap-x-2.5 md:gap-x-3.5 transition-colors">
                          <div class=" w-8 h-6 md:h-7 text-sm  flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">
                            4{" "}
                          </div>
                          <Link
                            href="/coursdetails/lesson/5"
                            class=" mt-1 inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 "
                          >
                            مزایای استفاده از API
                          </Link>
                        </div>
                        <div class="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                          <span class="text-sm md:text-base mt-1">04:57 </span>
                          <LuPlayCircle className="text-white/70 text-2xl transition-colors group-hover:text-green-500" />
                        </div>
                      </div>
                      <div class=" flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer ">
                        {" "}
                        <div class="flex items-start flex-grow gap-x-2.5 md:gap-x-3.5 transition-colors">
                          <div class=" w-8 h-6 md:h-7 text-sm  flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">
                            5{" "}
                          </div>
                          <Link
                            href="/coursdetails/lesson/5"
                            class=" mt-1 inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 "
                          >
                            معایب استفاده از API
                          </Link>
                        </div>
                        <div class="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                          <span class="text-sm md:text-base mt-1">04:03 </span>
                          <LuPlayCircle className="text-white/70 text-2xl transition-colors group-hover:text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-dark p-3 rounded-2xl p-4.5 sm:p-5 mt-8"
                id="course-comments"
              >
                <div class="flex items-center justify-between mb-6 sm:mb-7">
                  <div class="flex items-center gap-x-3 relative">
                    <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                    <IoChatbubbles class="hidden md:inline-block text-red-500 text-4xl" />

                    <div class=" text-xl md:text-2xl text-white mt-1">
                      نظرات
                    </div>
                  </div>
                  <button class="p-3 flex items-center gap-x-2  bg-green-500 text-white rounded-full">
                    ایجاد نظر جدید
                    <BsChatSquareText class="w-5 h-5" />
                  </button>
                </div>
                <div>
                  <div class="flex gap-x-3.5 mb-4.5 sm:mb-5">
                    <div class="flex-center p-1.5 border border-dark rounded-full">
                      <div class="flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12 bg-dark-light rounded-full">
                        <FaRegUser class="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <span class="text-white">mohammadvalad</span>
                      <span class="text-white/70 text-sm opacity-70">
                        ثبت نظر جدید
                      </span>
                    </div>
                  </div>

                  <textarea
                    class="w-full h-[150px] p-3 mt-5 block p-4.5 md:p-4 bg-dark-light text-white placeholder:text-slate-500/70  text-sm rounded-xl"
                    placeholder="نظر خود را بنویسید ..."
                  ></textarea>
                  <div class="flex gap-x-4 justify-end mt-5 sm:mt-6">
                    <button class="flex-grow sm:grow-0 sm:w-36 text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-4 rounded-full">
                      لغو
                    </button>
                    <button class="flex-grow sm:grow-0 sm:w-36 text-white bg-green-500 p-4 rounded-full">
                      ارسال
                    </button>
                  </div>
                </div>
                <div class=" space-y-4.5 mt-10 sm:space-y-5">
                  <div class="p-4.5 md:p-5 bg-dark-light p-3 my-4 rounded-xl">
                    <div class="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <div class="flex items-center gap-x-3.5">
                        <div class="hidden border-amber-400 sm:flex-center w-15 h-15 border rounded-full relative">
                          <div class="absolute -top-0.5 -right-0.5 flex-center w-5 h-5 bg-amber-400 rounded-full">
                            <HiMiniAcademicCap class="text-white text-2xl" />
                          </div>{" "}
                        </div>
                        <div class="flex flex-col gap-1">
                          <div class="flex items-center gap-x-1 ">
                            <span class="inline-block text-white max-w-40 truncate">
                              Ghostmaysam
                            </span>
                            <strong class="text-white/70">| دانشجو</strong>
                          </div>
                          <span class="text-white/70 text-sm ">1403/02/10</span>
                        </div>
                      </div>
                      <button className="border-solid border-2 border-blue-400 rounded-full p-2">
                        <HiArrowUturnLeft class="text-blue-400 text-xl" />
                      </button>
                    </div>
                    <p class="text-white text-sm sm:text-base break-words">
                      سلام استاد تو این دوره در مورد چگونگی امنیت هم توضیح
                      دادین؟
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside class="col-span-12 lg:col-span-4 space-y-8">
              <div class="bg-dark  rounded-2xl p-4 sm:p-5 ">
                <div class="flex gap-x-4">
                  <div class="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-5 bg-dark-light rounded-xl">
                    <FaUsers class="w-10 h-10 md:w-11 md:h-11 text-green-500" />

                    <div className="text-white">
                      <span class="block font-bold text-sm md:text-base">
                        754
                      </span>
                      <span class="block text-sm opacity-70">دانشجو</span>
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-5 bg-dark-light rounded-xl">
                    <FaStar class="w-10 h-10 md:w-11 md:h-11 text-amber-500" />

                    <div className="text-white">
                      <span class="block font-bold text-sm md:text-base">
                        5.0
                      </span>
                      <span class="block text-sm opacity-70">رضایت</span>
                    </div>
                  </div>
                </div>
                <div class="mt-3.5 sm:mt-5">
                  <div class="text-white flex items-center justify-between  text-sm sm:text-base mb-3">
                    <span>درصد تکمیل دوره</span>
                    <span>100%</span>
                  </div>
                  <div className="rounded-full w-full h-3 bg-green-500"></div>
                </div>
              </div>
              <div class="text-white bg-dark rounded-2xl pt-6 px-4 pb-4 md:py-6 md:px-5 text-center">
                <img
                  class="block mb-4 mx-auto object-cover rounded-full"
                  width="90"
                  height="90"
                  src=""
                  alt="معین باغشیخی"
                />
                <span class=" text-lg mb-2">معین باغشیخی | مدرس دوره</span>
                <p class="mt-2">برنامه نویس بک اند</p>
                <button class="text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-4 rounded-full mx-auto mt-8">
                  مشاهده پروفایل من
                </button>
              </div>
              <div class="text-white hidden lg:block bg-dark rounded-2xl p-5 text-center">
                <span class=" text-lg">لینک کوتاه آموزش</span>
                <div class="flex items-center justify-between gap-x-3 p-4 mt-5 bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                  <button onclick="navigator.clipboard.writeText('https://sabzlearn.ir/?p=4382');showNotification('موفق', 'با موفقیت کپی شد.')">
                    <HiClipboardDocumentCheck className="w-8 h-8" />
                  </button>
                  <span class=" text-lg w-64 text-ltr text-left truncate">
                    https://sabzlearn.ir/?p=4382
                  </span>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
