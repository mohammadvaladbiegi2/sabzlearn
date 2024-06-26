import React, { useState } from "react";

import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import TitleCourseIntroduction from "@/components/TitleCourseIntroduction";

import CourseCard from "@/components/CourseCard";
import Waybox from "@/components/Waybox";
import HelpBox from "@/components/HelpBox";
import ArticlsCard from "@/components/ArticlsCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CourseCardSlider from "@/components/CourseCardSlider";
import { useGlobalState } from "@/context/GlobalState";

export default function Home({ articlsData, courseData }) {
  let [temp, setTemp] = useState(0);
  let [activeCours, setactiveCours] = useState(0);
  const { state } = useGlobalState();

  //slider logic
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

  return (
    <div
      className={`${state.them === "dark" ? "bg_black_100" : "bg_white_100"}`}
    >
      <Navbar />
      <header>
        <section className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-0   justify-between items-center px-8 mt-7">
          <div
            className={`${state.lan !== "fa" && "ltr"} md:w-[600px] flex ${
              state.them === "dark" ? "text-white" : "text-black"
            } flex-col xl:ms-[30px] gap-14`}
          >
            <div className="flex flex-col items-center xl:items-start">
              <span className="  text-[35px] md:text-[50px]">
                {state.lan === "fa"
                  ? "آکادمی آموزش"
                  : state.lan === "en"
                  ? "Academy of Education"
                  : state.lan === "ku"
                  ? "Akademiya Perwerdehiyê"
                  : "Akademie für Bildung"}
              </span>
              <span className="  text-[35px] md:text-[50px] text-center">
                {state.lan === "fa"
                  ? "برنامه نویسی سبزلرن"
                  : state.lan === "en"
                  ? "Green programming"
                  : state.lan === "ku"
                  ? "Bernameya Kesk"
                  : "Grüne Programmierung"}
              </span>
            </div>
            <span className=" text-[18px]  md:text-[28px] text-center xl:text-start block">
              {state.lan === "fa"
                ? "با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن"
                : state.lan === "en"
                ? "Learn the science of programming safely and improve with Sabzlern Private Academy"
                : state.lan === "ku"
                ? "Zanistiya bernamesaziyê bi ewlehî fêr bibin û bi Akademiya Taybet a Sabzlern re çêtir bikin"
                : "Lernen Sie die Wissenschaft des Programmierens sicher und verbessern Sie sich mit der Sabzlern Private Academy"}
            </span>
            <div
              className={`${
                state.lan !== "fa" && "ltr"
              } flex items-center gap-5 justify-center xl:justify-start`}
            >
              <a
                href="#lastcourse"
                className=" text-[18px] flex items-center justify-center py-4 px-7 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer"
              >
                {state.lan === "fa"
                  ? "از این مسیرها شروع کن"
                  : state.lan === "en"
                  ? "Start from these paths"
                  : state.lan === "ku"
                  ? "Ji van rêyan dest pê bikin"
                  : "Beginnen Sie auf diesen Wegen"}
              </a>
              <div className="flex items-center bg-green-500 p-3 rounded-full  justify-center">
                <IoPlayOutline className="text-white w-5 h-5 text-2xl cursor-pointer  transition-all" />
              </div>
              <a
                href="#popularcourse"
                className="hidden sm:inline  text-[17px]"
              >
                {state.lan === "fa"
                  ? "دوره‌های رایگان"
                  : state.lan === "en"
                  ? "Free courses"
                  : state.lan === "ku"
                  ? "Kursên belaş"
                  : "Kostenlose Kurse"}
              </a>
            </div>
            <div className="hidden lg:block absolute top-23 right-0 w-[250px] h-[250px] bg-green-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
            <div className="hidden lg:block absolute -bottom-12 right-96 w-[250px] h-[250px] bg-sky-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
          </div>
          <div>
            <Image
              src={`/image/${
                state.them === "dark" ? "hero-dark.svg" : "hero-light.svg"
              }`}
              height={650}
              width={850}
              alt="sabzlearnp"
            />
          </div>
        </section>
      </header>
      {/* last cours */}
      <section id="lastcourse">
        <TitleCourseIntroduction
          title={
            state.lan === "fa"
              ? "آخرین دوره ها"
              : state.lan === "en"
              ? "The last courses"
              : state.lan === "ku"
              ? "Kursên dawîn"
              : "Die letzten Kurse"
          }
          desc={
            state.lan === "fa"
              ? "سکوی پرتاپ شما به سمت موفقیت"
              : state.lan === "en"
              ? "Your launch pad to success"
              : state.lan === "ku"
              ? "Destpêkirina weya serkeftinê"
              : "Ihre Startrampe zum Erfolg"
          }
          linktitle={
            state.lan === "fa"
              ? "مشاهده همه دوره‌ها"
              : state.lan === "en"
              ? "View all courses"
              : state.lan === "ku"
              ? "Hemî qursan bibînin"
              : "Alle Kurse ansehen"
          }
          link="/searchcours/frontend"
          pointcolor="bg-amber-400"
        />
        <div className="grid px-14 grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {courseData.slice(0, 8).map((course) => (
            <CourseCard key={course._id} {...course} />
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
          <Waybox
            number={5}
            title="فرانت‌اند"
            gradientfrom="FFB535"
            gradientto="F2295B"
          />
          <Waybox
            number={3}
            title="امنیت"
            gradientfrom="30c5e4"
            gradientto="28e55d"
          />
          <Waybox
            number={3}
            title="پایتون"
            gradientfrom="2e9eff"
            gradientto="9c33f7"
          />
          <Waybox
            title="مهارت فردی "
            number={4}
            gradientfrom="ff3571"
            gradientto="880175"
          />
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
            {courseData.slice(8, 15).map((card) => (
              <CourseCardSlider key={card._id} {...card} temp={temp} />
            ))}
          </div>
        </div>
      </section>
      {/* last articls */}
      <section>
        <TitleCourseIntroduction
          title="آخرین مقالات"
          desc="مقالات بروز برنامه نویسی"
          showlink={false}
          pointcolor="bg-amber-400 "
        />
        <div className="flex flex-wrap items-center justify-evenly  mt-8 px-10">
          {articlsData.map((articls) => (
            <ArticlsCard key={articls._id} {...articls} />
          ))}
        </div>
      </section>
      {/* popelar course */}
      <section id="popularcourse">
        <TitleCourseIntroduction
          title="محبوب ترین دوره ها"
          desc="پرمخاطب ترین و بهترین دوره های سبزلرن"
          link="/searchcours/All"
          linktitle="مشاهده همه دوره‌ها"
          pointcolor="bg-blue-400 "
        />
        <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 px-14">
          {[...courseData]
            .reverse()
            .slice(0, 8)
            .map((course) => (
              <CourseCard key={course._id} {...course} />
            ))}
        </div>{" "}
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  let articlsres = await fetch("http://localhost:3000/api/articl");
  let articlsData = await articlsres.json();
  let couresres = await fetch("http://localhost:3000/api/course");
  let courseData = await couresres.json();

  return { props: { articlsData, courseData } };
}
