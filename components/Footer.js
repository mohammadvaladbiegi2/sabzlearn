import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-dark flex flex-wrap items-center justify-evenly gap-[50px]  mt-8 p-10">
      <div className="flex flex-col  gap-y-3 flex-grow">
        <h4 className="font-bold text-white text-xl">درباره ما</h4>
        <p className="sm:max-w-xs text-lg text-white/70">
          سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی
          متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
        </p>
      </div>
      <div className="flex flex-col gap-y-5 flex-grow">
        <h4 className="font-bold text-white text-xl">دسترسی سریع</h4>
        <div className="flex flex-col items-start gap-y-4 text-white/70">
          <a href="#">قوانین و مقررات</a>
          <a href="#">ارسال تیکت</a>
          <a href="#">همه دوره ها</a>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 flex-grow">
        <h4 className="font-bold text-white text-xl">لینک‌های سریع</h4>
        <div className="flex flex-col items-start gap-y-4 text-white/70">
          <a href="#">آموزش جاوااسکریپت</a>
          <a href="#">آموزش پایتون</a>
          <a href="#">آموزش HTML</a>
          <a href="#">آموزش CSS</a>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 flex-grow">
        <h4 className="font-bold text-white text-xl">شبکه های اجتماعی</h4>
        <div className="flex flex-col items-start gap-y-4 text-white/70">
          <a
            href="#"
            className="transition hover:text-green-500 flex items-center gap-3"
          >
            <div className="flex items-center bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC] p-4 rounded-full mt-1  justify-center">
              <FaInstagram className="text-white w-4 h-4 text-2xl  " />
            </div>
            sabzlearn_@{" "}
          </a>
          <a
            href="#"
            className="transition hover:text-green-500 flex items-center gap-3"
          >
            <div className="flex items-center bg-gradient-to-b from-blue-400 to-blue-600 p-4 rounded-full mt-1  justify-center">
              <FaTelegramPlane className="text-white w-4 h-4 text-2xl  " />
            </div>
            sabzlearn@{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
