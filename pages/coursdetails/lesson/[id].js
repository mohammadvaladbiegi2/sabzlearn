import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { IoChatbubbles } from "react-icons/io5";
import { FaRegClock, FaRegUser } from "react-icons/fa6";
import {
  HiOutlineArrowUpTray,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function Lessondetails() {
  return (
    <>
      <Navbar />
      <main class="max-w-[1920px] mx-auto overflow-x-hidden mt-8 sm:mt-10">
        <div class="px-5 md:px-14">
          <div className=" mt-8 sm:mt-10 overflow-hidden rounded-xl">
            <div className="relative">
              <img
                src="/image/api-1.webp"
                class="opacity-40 flex  items-center justify-center h-full w-full"
              ></img>
              <p class="text-white absolute text-lg sm:text-xl md:text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 bg-rose-500 p-4 rounded-full text-center">
                به دلیل حق کپی رایت فقط پوستر مربوطه نشان داده می‌شود
              </p>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-y-6 gap-x-5 lg:gap-x-7 mt-6 lg:mt-8 ">
            <div class="col-span-full order-last md:order-none md:col-span-7 xl:col-span-8">
              <div class="hidden md:block bg-dark rounded-2xl p-5 sm:p-5">
                <div class="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                  <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm "></span>
                  <h3 class="text-white text-xl md:text-2xl">
                    درک عمیق مفاهیم API از صفر مطلق
                  </h3>
                </div>
                <div class="flex pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-b-white/10">
                  <div class="inline-flex items-center shrink-0 h-7  text-sky-500 bg-sky-500/10 text-sm px-1 ml-2.5  rounded">
                    1
                  </div>
                  <h4 class="text-white sm:text-lg">API چیست؟</h4>
                </div>
                <div class="flex justify-between gap-3.5 flex-wrap">
                  <a
                    href="#"
                    class="w-full sm:w-36 p-3 text-white text-center mt-1 pb-1 rounded-full bg-dark-light"
                  >
                    سوال دارم!
                  </a>
                  <div class="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                    <a
                      href="#"
                      class="w-full sm:w-36 bg-green-500 p-3 text-white rounded-full   text-center"
                    >
                      دانلود ویدیو
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="bg-dark rounded-2xl p-5 sm:p-5 mt-6 lg:mt-8"
                id="lesson-qaa"
              >
                <div class="flex items-center justify-between mb-6 sm:mb-7">
                  <div class="flex items-center gap-x-3 relative">
                    <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                    <IoChatbubbles class="hidden md:inline-block text-red-500 text-4xl" />

                    <h3 class="text-white text-xl md:text-2xl"> پرسش و پاسخ</h3>
                  </div>
                </div>
                <div class="mb-8 sm:mb-10">
                  <div class="flex gap-x-3.5 mb-4.5 sm:mb-5">
                    <div class="flex-center p-1.5 border border-gray-100 dark:border-dark rounded-full">
                      <div class="flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12 bg-dark-light rounded-full">
                        <FaRegUser class="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <span class="text-white">mohammadvalad</span>
                      <span class="text-white/70 text-sm opacity-70">
                        پرسش جدید
                      </span>
                    </div>
                  </div>
                  <form id="submit-question">
                    <textarea
                      dir="rtl"
                      rows="6"
                      class="w-full h-[200px] block p-4 my-4 md:p-4 bg-dark-light text-white placeholder:text-slate-500/70  text-sm rounded-xl"
                      placeholder="سوال خود را بپرسید ..."
                    ></textarea>{" "}
                    <div class="flex items-center justify-between flex-wrap gap-4.5 mt-4.5 sm:mt-6">
                      <div class="w-full sm:w-auto">
                        <div class="text-white flex items-center gap-x-2 sm:gap-x-2 cursor-pointer">
                          <HiOutlineArrowUpTray class="size-6 sm:size-7" />

                          <span class="mt-2 text-sm sm:text-base">
                            اگر فایل ضمیمه ای دارید لطفا آپلود کنید
                          </span>
                        </div>
                      </div>
                      <button class="w-full mt-4 sm:mt-0 sm:w-36 text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                        ارسال
                      </button>
                    </div>
                  </form>
                </div>
                <div class="space-y-4.5 sm:space-y-5">
                  <p class="text-white  leading-7 mt-3.5">
                    هنوز برای این جلسه سوالی نپرسیده‌اید!
                  </p>
                </div>
              </div>
            </div>
            <aside class="col-span-full order-first md:order-none md:col-span-5 xl:col-span-4">
              <div class="block md:hidden bg-dark rounded-2xl p-5 sm:p-5">
                <div class="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                  <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm "></span>
                  <h3 class="text-white text-xl md:text-2xl">
                    درک عمیق مفاهیم API از صفر مطلق
                  </h3>
                </div>
                <div class="flex pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-b-white/10">
                  <div class="inline-flex items-center shrink-0 h-7  text-sky-500 bg-sky-500/10 text-sm px-1 ml-2.5  rounded">
                    1
                  </div>
                  <h4 class="text-white sm:text-lg">API چیست؟</h4>
                </div>
                <div class="flex justify-between gap-3.5 flex-wrap">
                  <a class="w-full p-3 flex items-center justify-center sm:w-36 bg-dark-light text-white rounded-full">
                    سوال دارم!
                  </a>
                  <div class="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                    <a class="w-full sm:w-36 bg-green-500 rounded-full text-white p-3 text-center">
                      دانلود ویدیو
                    </a>
                  </div>
                </div>
              </div>
              <div class="bg-dark border-none text-white pl-1.5 pr-4.5 sm:pr-5 py-4 sm:py-5 rounded-xl mt-6 lg:mt-0">
                <div class="flex items-center gap-x-2 mb-5 pb-5 border-b border-b-white/10">
                  <svg class="w-[30px] h-[30px]">
                    <use href="#document-text"></use>
                  </svg>
                  <span class="text-white text-lg">سرفصل های دوره</span>
                </div>
                <div class="overflow-y-scroll max-h-[602px] pl-2 pr-2 md:pr-0">
                  <div class="chapter">
                    <div class="text-white mt-3 chapter__head  chapter__head__active">
                      <span>API چیه و چرا ازش استفاده میشه؟</span>
                      <IoIosArrowDown class="w-6 h-6 shrink-0 transition-transform" />
                    </div>
                    <div class="chapter__lessons chapter__lessons__active">
                      <div class="lesson  lesson--watching">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29658"
                          class="block line-clamp-2"
                        >
                          API چیست؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            10:00{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29659"
                          class="block line-clamp-2"
                        >
                          چرا از API استفاده میشه؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            05:13{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29660"
                          class="block line-clamp-2"
                        >
                          API ها چجوری کار میکنن؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            06:16{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29661"
                          class="block line-clamp-2"
                        >
                          مزایای استفاده از API
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            04:57{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29662"
                          class="block line-clamp-2"
                        >
                          معایب استفاده از API
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            04:03{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chapter">
                    <div class="text-white mt-3 chapter__head ">
                      <span>انواع API ها و کارکردشون</span>
                      <IoIosArrowDown class="w-6 h-6 shrink-0 transition-transform" />
                    </div>
                    <div class="chapter__lessons">
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29664"
                          class="block line-clamp-2"
                        >
                          JSON چیست؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            07:37{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29665"
                          class="block line-clamp-2"
                        >
                          XML چیست؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            04:42{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29666"
                          class="block line-clamp-2"
                        >
                          HTTP چیست؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            05:24{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29668"
                          class="block line-clamp-2"
                        >
                          REST چیست؟
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            07:22{" "}
                          </div>
                        </div>
                      </div>
                      <div class="lesson ">
                        <a
                          href="https://sabzlearn.ir/lesson/70-29669"
                          class="block line-clamp-2"
                        >
                          انواع API ها (Restfull, SOAP, RPC, GraphQL, WebSooket)
                        </a>
                        <div class="flex items-center justify-between mt-3 sm:mt-2">
                          <div class="lesson__status">
                            <FaRegCircle className="text-2xl text-green-500" />
                          </div>
                          <div class="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full">
                            07:07{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-white grid grid-cols-3 gap-3.5 mt-6 lg:mt-8">
                <div class="text-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-dark  rounded-xl">
                  <HiOutlineInformationCircle class="w-10 h-10 inline text-green-500 mb-2 sm:mb-1" />

                  <span class="block  text-sm sm:text-base mb-0.5 sm:mb-0">
                    وضعیت دوره
                  </span>
                  <span class="opacity-70 text-sm">تکمیل شده</span>
                </div>
                <div class="text-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-dark  rounded-xl">
                  <FaRegClock class=" w-10 h-10 inline text-green-500 mb-2 sm:mb-" />

                  <span class="block  text-sm sm:text-base mb-0.5 sm:mb-0">
                    زمان دوره
                  </span>
                  <span class="opacity-70 text-sm">03:33</span>
                </div>
                <div class="text-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-dark  rounded-xl">
                  <BsCameraVideo class="inline w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5" />

                  <span class="block  text-sm sm:text-base mb-0.5 sm:mb-0">
                    جلسات دوره
                  </span>
                  <span class="opacity-70 text-sm">30</span>
                </div>
              </div>
              <div class="bg-dark text-white  p-4.5 sm:p-5 rounded-xl mt-6 lg:mt-8">
                <p class="text-sm mb-4">
                  وقتی 70 درصد یک ویدیو را بصورت آنلاین تماشا میکنید، میزان
                  پیشرفت شما بصورت خودکار بروزرسانی میشود.
                </p>
                <div class="flex items-center justify-between mb-4  text-green-500">
                  <span>میزان پیشرفت شما</span>
                  <span>0%</span>
                </div>
                <div className="rounded-full w-full h-3 bg-green-500"></div>
              </div>
              <div class="bg-dark  p-4.5 sm:p-5 rounded-xl mt-6 lg:mt-8">
                <img
                  src="https://secure.gravatar.com/avatar/1a7a0b04750b5b7b236b81c7f2adb5f9?s=96&amp;d=mm&amp;r=g"
                  class="mx-auto rounded-full object-cover"
                  width="90"
                  height="90"
                  alt="معین باغشیخی"
                />
                <p class="text-white text-lg my-4 text-center">
                  معین باغشیخی | مدرس دوره
                </p>
                <a
                  href="https://sabzlearn.ir/teacher/moein123"
                  class="flex items-center justify-center gap-x-3 pb-3 text-green-500 "
                >
                  مشاهده پروفایل من
                  <FaCircleArrowLeft class="w-7 h-7" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
