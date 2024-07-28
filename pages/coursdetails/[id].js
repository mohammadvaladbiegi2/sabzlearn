import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import { FaLock, FaRegClock } from "react-icons/fa";
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
import moment from "moment-jalaali";
import Notfound from "@/components/Notfound";
import connectToDB from "@/DB/DataBase";
import { verify } from "jsonwebtoken";
import { User } from "@/Models/UsersModel";
import { toast } from "react-toastify";
import { useGlobalState } from "@/context/GlobalState";
import { useRouter } from "next/router";

export default function DetailsCours({ course, user, Isbuycourse, islogin }) {
  let {id} = useRouter().query
  const [showmoredesc, setshowmoredesc] = useState(false);
  const [commentText, setcommentText] = useState("");
  const [Comments, setComments] = useState([...course.MainCourse?.comments]);
  const [isloading, setisloading] = useState(false);
  const [isbuycourse, setisbuycourse] = useState(Isbuycourse);
  const { state } = useGlobalState();

  /// Add Course To user Panel
  const addCourseToPanel = async ([courseid, title, image, user]) => {
   
      let course = {
        title,
        image,
        courseid,
        user,
      };
      let res = await fetch("http://localhost:3000/api/user/addcoursepanel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });
      console.log(res);
      if (res.status === 200) {
        toast.success("دوره با موفقیت اضافه شد");
        setisbuycourse(true)
        
      } else {
        toast.error("خظا در اضافه شدن");
      }
    
  };
  // Add comment to course
  const addNewcomment = async ([questioner, course]) => {
    if (commentText.length < 4) {
      toast.error("مقدار معتبر وارد کنید");
    } else {
      setisloading(true)
      let comment = {
        comment: commentText,
        questioner,
        course,
      };
      let res = await fetch("http://localhost:3000/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (res.status === 200) {
        toast.success("کامنت با موفقیت اضافه شد");
        fetch(`http://localhost:3000/api/course/${id}`).then(res =>res.json()).then(data => {setComments([...data.MainCourse.comments])
          setisloading(false)
          setcommentText("")
        })
      

      } else {
        toast.error("خظا در اضافه شدن");
      setisloading(false)

      }
    }
  };
  return (
    <>
      <Navbar islogin/>
      <main
        className={`${
          state.them === "dark" ? "bg_black_100 text-white" : "bg_white_100"
        } max-w-[1920px]  overflow-x-hidden pb-8`}
      >
        <div className="px-6 md:px-14 mx-auto max-w-[1400px]">
          <section className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-y-4.5 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-2xl p-4.5 lg:p-0 bg-dark lg:!bg-transparent  ">
            <div className="flex flex-col justify-between order-2 lg:order-1">
              <div id="up">
                <h1 className=" my-4  text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-4.5">
                  {state.lan === "fa"
                    ? course.MainCourse?.title.fa
                    : state.lan === "en"
                    ? course.MainCourse?.title.en
                    : state.lan === "ku"
                    ? course.MainCourse?.title.ku
                    : course.MainCourse?.title.ge}
                </h1>
                <p className=" my-2 sm:text-lg line-clamp-4 sm:line-clamp-3">
                  {state.lan === "fa"
                    ? course.MainCourse?.desc.fa
                    : state.lan === "en"
                    ? course.MainCourse?.desc.en
                    : state.lan === "ku"
                    ? course.MainCourse?.desc.ku
                    : course.MainCourse?.desc.ge}
                </p>
              </div>
              {isbuycourse ? (
                <div className="space-y-4 lg:space-y-8 mt-4 lg:mt-0 ">
                  <div className="flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6">
                    <div className="flex items-center gap-x-1">
                      <LuUsers className="w-7 md:w-11 h-7 md:h-11 text-green-500" />

                      <p className=" text-sm md:text-lg">
                        {state.lan === "fa"
                          ? "شما دانشجوی دوره هستید"
                          : state.lan === "en"
                          ? "You are a course student"
                          : state.lan === "ku"
                          ? " Tu xwendekarek kursê yî"
                          : "Sie sind Kursteilnehmer"}
                      </p>
                    </div>
                    <a
                      href="#lesson"
                      className="bg-green-500 p-3 md:p-5  text-center rounded-full lg:w-56"
                    >
                      {state.lan === "fa"
                        ? "مشاهده دوره"
                        : state.lan === "en"
                        ? "View course"
                        : state.lan === "ku"
                        ? " Dîtina kursê"
                        : "Kurs ansehen"}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 lg:space-y-8 mt-4 lg:mt-0 ">
                  <div className="flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6">
                    <a
                      onClick={() => {
                        if (islogin) {
                          addCourseToPanel([
                            course.MainCourse._id,
                            course.MainCourse.title,
                            course.MainCourse.image,
                            user._id,
                          ]);
                        } else {
                          {
                            state.lan === "fa"
                              ? toast.error("ابتدا عضو شوید")
                              : state.lan === "en"
                              ? toast.error("First, sign up")
                              : state.lan === "ku"
                              ? toast.error("Yekem, qeydkirin")
                              : toast.error("Zuerst registrieren");
                          }
                        }
                      }}
                      className="bg-green-500 cursor-pointer  p-3 md:p-4  text-center rounded-full lg:w-56"
                    >
                      {state.lan === "fa"
                        ? "افزودن دوره به پنل"
                        : state.lan === "en"
                        ? "Add course to panel"
                        : state.lan === "ku"
                        ? "Kursê bi panelê zêde bike"
                        : "Kurs zum Panel hinzufügen"}
                    </a>
                    <div className="flex items-end gap-x-2.5">
                      <span className=" text-2xl">
                        {state.lan === "fa"
                          ? `${course.MainCourse?.price.toLocaleString(
                              "fa-IR"
                            )} تومان`
                          : `${course.MainCourse?.price.toLocaleString()}$`}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* for Off */}
              {/* <div className="space-y-4 lg:space-y-8 mt-4 lg:mt-0 ">
                <div className=" flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-y-4 gap-x-5 flex-wrap justify-between text-center sm:text-right p-4 xl:h-16 bg-dark-light lg:bg-dark rounded-xl">
                  <span className=" sm:text-xl lg:text-center xl:text-right text-red-500">
                    100% پیشنهاد شگفت انگیز
                  </span>
                  <div className="flex  items-center justify-between gap-1 sm:gap-3">
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
                <div className="flex flex-col sm:flex-row justify-center items-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6">
                  <a
                    href="#"
                    className=" bg-green-500  rounded-full p-5  sm:w-auto"
                  >
                    ثبت نام در دوره
                  </a>
                  <div className="flex items-end gap-x-2.5">
                    <span className="/70 text-xl line-through">
                      150,000{" "}
                    </span>
                    <span className=" text-2xl">رایگان! </span>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="overflow-hidden rounded-2xl order-1 lg:order-2 xl:h-[370px]">
              <Image
                src={`/image/${course.MainCourse?.image}`}
                className="w-full h-full object-cover"
                alt={
                  state.lan === "fa"
                    ? course.MainCourse?.title.fa
                    : state.lan === "en"
                    ? course.MainCourse?.title.en
                    : state.lan === "ku"
                    ? course.MainCourse?.title.ku
                    : course.MainCourse?.title.ge
                }
                width={800}
                height={800}
              />
            </div>
            
          </section>
          <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <HiOutlineInformationCircle className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      وضعیت دوره
                    </span>
                    <span className="block text-sm opacity-70">تکمیل شده</span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <FaRegClock className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      مدت زمان دوره
                    </span>
                    <span className="block text-sm opacity-70">
                      {Math.floor(course.MainCourse?.time / 60)} ساعت
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <HiOutlineCalendarDays className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      آخرین بروزرسانی
                    </span>
                    <span className="block text-sm opacity-70">
                      {" "}
                      {moment(course.MainCourse?.updatedAt)
                        .format("jYYYY/jMM/jDD HH:mm:ss")
                        .slice(0, 10)}
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <LuUsers className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      روش پشتیبانی
                    </span>
                    <span className="block text-sm opacity-70">
                      {state.lan === "fa"
                        ? course.MainCourse?.suport.fa
                        : course.MainCourse?.suport.en}
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <BsBriefcase className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      پیش نیاز
                    </span>
                    <span className="block text-sm opacity-70">
                      اشنایی با دنیای وب
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <BsCameraVideo className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      نوع مشاهده
                    </span>
                    <span className="block text-sm opacity-70">
                      {state.lan === "fa"
                        ? course.MainCourse?.suport.fa
                        : course.MainCourse?.suport.en}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'} rounded-2xl p-5 sm:p-5 mt-8`}>
                <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                  <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-amber-400 rounded-r-sm "></span>
                  <BsFileEarmarkTextFill className="hidden md:inline-block text-amber-400 text-3xl" />

                  <div className=" text-xl md:text-2xl p-2 ">
                    {" "}
                    توضیحات تستی
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div
                    className={`relative ${
                      showmoredesc ? "h-full" : " max-h-[600px]"
                    }  /70 `}
                  >
                    <p className="p-2 leading-7" dir="rtl">
                      توی دوره، شرکت‌کنندگان با مفاهیم پایه و اساسی API
                      (رابط‌های برنامه‌نویسی اپلیکیشن) آشنا میشن و روش‌های مختلف
                      استفاده از اون رو یاد میگیرن. این دوره برای کسایی مناسب
                      است که میخوان مفاهیم پایه‌ای مرتبط با توسعه و استفاده از
                      API رو یاد بگیرن و به طراحی، ایجاد و تعامل با API‌ها در
                      برنامه‌ها و وب‌سایت‌های خود بپردازن.
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      شرکت‌کنندگان در این دوره با مفاهیمی از جمله نوع‌های مختلف
                      API از جمله RESTful، GraphQL، SOAP و RPC، مفهوم‌های اساسی
                      از جمله Endpoint، Request، Response، Authentication، و
                      Rate Limiting و همچنین روش‌های آزمون و تست API آشنا میشن.
                      علاوه بر این، مباحث پیشرفته مثل Caching، Versioning،
                      Pagination، و Rate Limiting نیز مورد بررسی قرار میگیرن.
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      به طور کلی توی این دوره، موارد زیر پوشش داده میشن:
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      مفهوم و اهمیت API
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      نوع‌های مختلف API از جمله RESTful، GraphQL، SOAP و RPC
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      استفاده از API در توسعه نرم‌افزار و توسعه وب
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      مزایا و معایب استفاده از API
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      مفاهیم اساسی مانند Endpoint، Request، Response،
                      Authentication، و Rate Limiting
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      روش‌های آزمون و تست API
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      مباحث پیشرفته مانند Caching، Versioning، Pagination، و
                      Rate Limiting
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      روش‌های مستندسازی و مستندنویسی API
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      این دوره برای توسعه‌دهندگان نرم‌افزار، وب دولوپر ها و
                      دانشجویان علوم کامپیوتر و علاقمندان به فناوری‌های وب و
                      نرم‌افزار مناسبه است و با توجه به روند آموزش گام به گام،
                      به شرکت‌کنندگان اجازه میده تا مهارت‌های لازم برای استفاده
                      موثر از API‌ها رو به دست بیارن.
                    </p>
                  </div>
                
                </div>
                <button
                  className="p-5 rounded-full  text-center  block  m-auto bg-green-500 w-auto mx-auto mt-5"
                  onClick={() => setshowmoredesc((prev) => !prev)}
                >
                  <span>{showmoredesc ? "بستن" : "مشاهده بیشتر مطلب"}</span>
                </button>
              </div>
              <div id="lesson" className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'} rounded-2xl p-4 sm:p-5 mt-8`}>
                <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                  <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm"></span>
                  <RiGraduationCapFill className="hidden md:inline-block text-sky-500 text-3xl" />

                  <div className=" text-xl md:text-2xl">سرفصل ها</div>
                </div>
                <div className="space-y-4 md:space-y-5">
                  {course.Sections?.map((season) => (
                    <div className={`topic  flex flex-col justify-center  ${state.them === "dark" ? "bg_black_100" : "bg_white_100"}`}>
                      <div className="topic__head ">
                        <span className="text-lg inline-block  lg:line-clamp-3 transition-colors">
                          {season?.title}
                        </span>
                        <div className="flex items-center gap-x-2.5 shrink-0">
                          <div className="mt-1 hidden lg:flex items-center gap-x-1.5 text-sm  transition-colors">
                            <span>{season.sections.length} جلسه</span>
                          </div>
                          <FaChevronDown className="w-5 h-5  transition-all " />
                        </div>
                      </div>
                      <div className="topic__body  px-3 ">
                        {season.sections.map((section, index) => (
                          <div className=" flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer border_b_s my-5">
                            {" "}
                            <div className="flex  items-start flex-grow gap-x-2.5 md:gap-x-3.5 ">
                              <div className="transition-colors w-8 h-6 md:h-7 text-sm  flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover: rounded">
                                {index + 1}{" "}
                              </div>
                              <Link
                                href={
                                  isbuycourse
                                    ? `/coursdetails/lesson/${section?._id}`
                                    : "#up"
                                }
                                className="mt-1 inline-block lg:max-w-3/4 text-sm md:text-base transition-colors group-hover:text-green-500 "
                              >
                                {section?.title}
                              </Link>
                            </div>
                            <div className="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                              <span className="text-sm md:text-base mt-1">
                                {section?.time}{" "}
                              </span>
                              {isbuycourse ? (
                                <LuPlayCircle className="/70 text-2xl transition-colors group-hover:text-green-500" />
                              ) : (
                                <FaLock className="/70 text-2xl transition-colors group-hover:text-green-500" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'} p-3 rounded-2xl p-4.5 sm:p-5 mt-8`}
                id="course-comments"
              >
                <div className="flex items-center justify-between mb-6 sm:mb-7">
                  <div className="flex items-center gap-x-3 relative">
                    <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                    <IoChatbubbles className="hidden md:inline-block text-red-500 text-4xl" />

                    <div className=" text-xl md:text-2xl  mt-1">
                      نظرات
                    </div>
                  </div>
                  <button className="p-3 flex items-center gap-x-2  bg-green-500  rounded-full">
                    ایجاد نظر جدید
                    <BsChatSquareText className="w-5 h-5" />
                  </button>
                </div>
                <div>
                  <div className="flex gap-x-3.5 mb-4.5 sm:mb-5">
                    <div className="flex-center p-1.5 border border-dark rounded-full">
                      <div className={`flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12  ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} rounded-full`}>
                        <FaRegUser className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {islogin ? (
                        <span className="">{user.username}</span>
                      ) : (
                        ""
                      )}
                      <span className="/70 text-sm opacity-70">
                        ثبت نظر جدید
                      </span>
                    </div>
                  </div>

                  <textarea
                    className={`w-full h-[150px] p-3 mt-5 block p-4.5 md:p-4 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'}  placeholder:text-slate-500/70  text-sm rounded-xl`}
                    placeholder="نظر خود را بنویسید ..."
                    value={commentText}
                    onChange={(e) => setcommentText(e.target.value)}
                  ></textarea>
                  {islogin ? (
                    <div className="flex gap-x-4 justify-end mt-5 sm:mt-6">
                      <button
                        onClick={() => setcommentText("")}
                        className="flex-grow sm:grow-0 sm:w-36 text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover: transition p-4 rounded-full"
                      >
                        لغو
                      </button>
                      <button
                        onClick={() =>
                          addNewcomment([user.username, course.MainCourse._id])
                        }
                        className="flex-grow sm:grow-0 sm:w-36  bg-green-500 p-4 rounded-full"
                        disabled={isloading}
                      >
                        ارسال
                      </button>
                    </div>
                  ) : (
                    <Link
                      className="flex gap-x-4 justify-end mt-5 sm:mt-6"
                      href="/auth/login"
                    >
                      <button className=" font-bold flex items-center justify-center py-3 px-5 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer">
                        {" "}
                        <FaRegUser className="   text-[23px] mt-1" />
                        ورود | عضویت
                      </button>
                    </Link>
                  )}
                </div> 
                {/*comments  */}
                <div className=" space-y-4.5 mt-10 sm:space-y-5">
                  {Comments.length ? (
                    Comments.map((comment) => (
                      <div className={`p-4.5 md:p-5 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} p-3 my-4 rounded-xl`}>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-x-3.5">
                            <div className="hidden border-amber-400 sm:flex-center w-15 h-15 border rounded-full relative">
                              <div className="absolute -top-0.5 -right-0.5 flex-center w-5 h-5 bg-amber-400 rounded-full">
                                <HiMiniAcademicCap className=" text-2xl" />
                              </div>{" "}
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-x-1 ">
                                <span className="inline-block  max-w-40 truncate">
                                  {comment.questioner}
                                </span>
                                <strong className="/70">
                                  | دانشجو
                                </strong>
                              </div>
                              <span className="/70 text-sm ">
                                {moment(comment?.createdAt)
                                  .format("jYYYY/jMM/jDD HH:mm:ss")
                                  .slice(0, 10)}
                              </span>
                            </div>
                          </div>
                          <button className="border-solid border-2 border-blue-400 rounded-full p-2">
                            <HiArrowUturnLeft className="text-blue-400 text-xl" />
                          </button>
                        </div>
                        <p className=" text-sm sm:text-base break-words">
                          {comment.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <Notfound title="کامنتی برای این دوره ثبت نشده" />
                  )}
                </div>
              </div>
            </div>
            <aside className="col-span-12 lg:col-span-4 space-y-8">
              <div className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'}  rounded-2xl p-4 sm:p-5 `}>
                <div className="flex gap-x-4">
                  <div className={`flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-5 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} rounded-xl`}>
                    <FaUsers className="w-10 h-10 md:w-11 md:h-11 text-green-500" />

                    <div className="">
                      <span className="block font-bold text-sm md:text-base">
                        {course.MainCourse?.student}
                      </span>
                      <span className="block text-sm opacity-70">دانشجو</span>
                    </div>
                  </div>
                  <div className={`flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-5 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} rounded-xl`}>
                    <FaStar className="w-10 h-10 md:w-11 md:h-11 text-amber-500" />

                    <div className="">
                      <span className="block font-bold text-sm md:text-base">
                        5.0
                      </span>
                      <span className="block text-sm opacity-70">رضایت</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3.5 sm:mt-5">
                  <div className=" flex items-center justify-between  text-sm sm:text-base mb-3">
                    <span>درصد تکمیل دوره</span>
                    <span>100%</span>
                  </div>
                  <div className="rounded-full w-full h-3 bg-green-500"></div>
                </div>
              </div>
              <div className={`${state.them === "dark" ? "bg-dark" : 'bg-white'} rounded-2xl pt-6 px-4 pb-4 md:py-6 md:px-5 text-center`}>
                <img
                  className="block mb-4 mx-auto object-cover rounded-full"
                  width="90"
                  height="90"
                  src=""
                  alt={
                    state.lan === "fa"
                      ? course.MainCourse?.teacher.fa
                      : course.MainCourse?.teacher.en
                  }
                />
                <span className=" text-lg mb-2">
                  {" "}
                  {state.lan === "fa"
                    ? course.MainCourse?.teacher.fa
                    : course.MainCourse?.teacher.en}{" "}
                  | مدرس دوره
                </span>
              </div>
              <div className={`hidden lg:block ${state.them === "dark" ? "bg-dark" : 'bg-white'} rounded-2xl p-5 text-center`}>
                <span className=" text-lg">لینک کوتاه آموزش</span>
                <div className="flex items-center justify-between gap-x-3 p-4 mt-5 bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                  <button onclick="navigator.clipboard.writeText('https://sabzlearn.ir/?p=4382');showNotification('موفق', 'با موفقیت کپی شد.')">
                    <HiClipboardDocumentCheck className="w-8 h-8" />
                  </button>
                  <span className=" text-lg w-64 text-ltr text-left truncate">
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

const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.PriveKey); // chek for valid token
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export async function getServerSideProps(contex) {
  let islogin = true;
  let user = null;
  let Isbuycourse = false;
  connectToDB();
  const { token } = contex.req.cookies;
  if (!token) {
    islogin = false;
  }
  let res = await fetch(`http://localhost:3000/api/course/${contex.query.id}`);
  let course = await res.json();

  const tokenPayload = verifyToken(token); // verify and find payload
  if (!tokenPayload) {
    islogin = false;
  } else {
    let MainUser = await User.findOne(
      { phoneNumber: tokenPayload.phoneNumber },
      "-__v -password"
    )
      .populate("courses")
      .lean();
    Isbuycourse = MainUser.courses.some(
      (course) => course.courseid === contex.query.id
    );

    user = JSON.parse(JSON.stringify(MainUser));
  }
  return {
    props: { course, user, Isbuycourse, islogin },
  };
}
