import React from "react";

import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import TitleCourseIntroduction from "@/components/TitleCourseIntroduction";

import CourseCard from "@/components/CourseCard";
import Waybox from "@/components/Waybox";
export default function Home() {
  return (
    <>
      <header>
        <section className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-0   justify-between items-center px-8 mt-7">
          <div className="md:w-[600px] flex flex-col xl:ms-[30px] gap-14">
            <div className="flex flex-col items-center xl:items-start">
              <span className="text-white font-medium text-[35px] md:text-[50px]">
                آکادمی آموزش
              </span>
              <span className="text-white font-medium text-[35px] md:text-[50px] text-center">
                برنامه نویسی سبزلرن
              </span>
            </div>
            <span className="text-white text-[18px] md:text-[28px] text-center xl:text-start block">
              با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر
              و پیشرفت کن
            </span>
            <div className="flex items-center gap-5 justify-center xl:justify-start">
              <button className="text-white text-[18px] flex items-center justify-center py-4 px-7 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer">
                از این مسیرها شروع کن
              </button>
              <div className="flex items-center bg-green-500 p-3 rounded-full  justify-center">
                <IoPlayOutline className="text-white w-5 h-5 text-2xl cursor-pointer  transition-all" />
              </div>
              <span className="hidden sm:inline text-white text-[17px]">
                دوره‌های رایگان
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/image/hero-dark.svg"
              height={650}
              width={850}
              alt="sabzlearnp"
              className=""
            />
          </div>
        </section>
      </header>
      <section>
        <TitleCourseIntroduction
          title="آخرین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          linktitle="مشاهده همه دوره ها"
          link="#"
        />
        <div className="flex flex-wrap items-center justify-evenly  mt-8 px-10">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>{" "}
      </section>
      <section>
        <TitleCourseIntroduction
          title="نقشه راه ها"
          desc="نقشه های راه برای شروع اصولی یادگیری"
          showlink={false}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-16 gap-6 sm:gap-7">
          <Waybox gradientfrom="FFB535" gradientto="F2295B" />
          <Waybox gradientfrom="30c5e4" gradientto="28e55d" />
          <Waybox gradientfrom="2e9eff" gradientto="9c33f7" />
          <Waybox gradientfrom="ff3571" gradientto="880175" />
        </div>
      </section>
    </>
  );
}
