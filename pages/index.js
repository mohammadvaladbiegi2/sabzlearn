import React, { useEffect, useState } from "react";

import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import TitleCourseIntroduction from "@/components/TitleCourseIntroduction";

import CourseCard from "@/components/CourseCard";
import Waybox from "@/components/Waybox";
import HelpBox from "@/components/HelpBox";
import ArticlsCard from "@/components/ArticlsCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  let [temp, setTemp] = useState(0);
  let [activeCours, setactiveCours] = useState(0);
  let [islogin, setislogin] = useState(false);

  function leftClick() {
    if (activeCours <= -2) {
      setTemp(-760);
      setactiveCours(2);
    } else {
      setTemp(temp + 380);
      setactiveCours((prev) => prev - 1);
    }
  }
  function rightClick() {
    if (activeCours >= 2) {
      setTemp(760);
      setactiveCours(-2);
    } else {
      setTemp(temp - 380);
      setactiveCours((prev) => prev + 1);
    }
  }

  useEffect(() => {
    setislogin(localStorage.getItem("login"));
  }, []);

  return (
    <>
      <Navbar islogin={islogin} />
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
            <div class="hidden lg:block absolute top-23 right-0 w-[250px] h-[250px] bg-green-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
            <div class="hidden lg:block absolute -bottom-12 right-96 w-[250px] h-[250px] bg-sky-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
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
      {/* last cours */}
      <section>
        <TitleCourseIntroduction
          title="آخرین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          linktitle="مشاهده همه دوره ها"
          link="#"
          pointcolor="bg-amber-400"
        />
        <div className="flex flex-wrap items-center justify-evenly  mt-8 px-10">
          {Array(8)
            .fill(0)
            .map((course, index) => (
              <CourseCard key={index} />
            ))}
        </div>{" "}
      </section>
      {/* way sections */}
      <section>
        <TitleCourseIntroduction
          title="نقشه راه ها"
          desc="نقشه های راه برای شروع اصولی یادگیری"
          showlink={false}
          pointcolor="bg-red-500"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-16 gap-6 sm:gap-7">
          <Waybox gradientfrom="FFB535" gradientto="F2295B" />
          <Waybox gradientfrom="30c5e4" gradientto="28e55d" />
          <Waybox gradientfrom="2e9eff" gradientto="9c33f7" />
          <Waybox gradientfrom="ff3571" gradientto="880175" />
        </div>
      </section>
      {/* help sections */}
      <section>
        <TitleCourseIntroduction
          title="ما چه کمکی میتونیم بهت بکنیم"
          desc="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
          showlink={false}
          pointcolor="bg-sky-500"
        />
        <div className="flex flex-wrap items-center justify-evenly  mt-8 px-10">
          <HelpBox
            img="help1-removebg-preview.png"
            title="تضمین کاملترین محتوا"
            desc="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
          />
          <HelpBox
            img="help2-removebg-preview.png"
            title="پشتیبانی دائمی"
            desc="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
          />
          <HelpBox
            img="help3-removebg-preview.png"
            title="پروژه محور در راستای بازار کار"
            desc="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
          />
          <HelpBox
            img="help4-removebg-preview.png"
            title="سراغ حرفه ای ها رفتیم"
            desc="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
          />
        </div>
      </section>
      {/* last cours slider */}
      <section>
        <TitleCourseIntroduction
          title="جدیدترین دوره ها"
          desc="یادگیری و رشد توسعه فردی"
          showlink={false}
          showbutton={true}
          pointcolor="bg-green-500"
          leftClick={leftClick}
          rightClick={rightClick}
        />
        <div className="flex justify-center  overflow-x-hidden px-11 w-[90%] overflow-hidden m-auto">
          <div className="flex items-start justify-center gap-[44px] ">
            {Array(7)
              .fill(0)
              .map((card, index) => (
                <CourseCard key={index} temp={temp} />
              ))}
          </div>
        </div>
      </section>
      {/* last articls */}
      <section>
        <TitleCourseIntroduction
          title="آخرین مقالات"
          desc="مقالات بروز برنامه نویسی"
          link="#"
          linktitle="مشاهده همه مقالات"
          pointcolor="bg-amber-400 "
        />
        <div className="flex flex-wrap items-center justify-evenly  mt-8 px-10">
          {Array(4)
            .fill(0)
            .map((articls, index) => (
              <ArticlsCard key={index} />
            ))}
        </div>
      </section>
      {/* popelar course */}
      <section>
        <TitleCourseIntroduction
          title="محبوب ترین دوره ها"
          desc="پرمخاطب ترین و بهترین دوره های سبزلرن"
          link="#"
          linktitle="مشاهده همه دوره‌ها"
          pointcolor="bg-blue-400 "
        />
        <div className="flex flex-wrap items-center justify-evenly  mt-8 px-10">
          {Array(8)
            .fill(0)
            .map((course, index) => (
              <CourseCard key={index} />
            ))}
        </div>{" "}
      </section>
      <Footer />
    </>
  );
}
