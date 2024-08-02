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
  let { id } = useRouter().query
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
    let res = await fetch("https://sabzlearn-psi.vercel.app/api/user/addcoursepanel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    if (res.status === 200) {
      toast.success(
        state.lan === "fa"
          ? "دوره با موفقیت اضافه شد"
          : state.lan === "en"
            ? "Course added successfully"
            : state.lan === "ku"
              ? "Ders bi serkeftin hat zêdekirin"
              : "Kurs wurde erfolgreich hinzugefügt"

      );
      setisbuycourse(true)

    } else {
      toast.error(
        state.lan === "fa"
          ? "خطا در اضافه شدن"
          : state.lan === "en"
            ? "Error in adding"
            : state.lan === "ku"
              ? "Şewtiya di zêdekirinê de"
              : "Fehler beim Hinzufügen"

      );
    }

  };
  // Add comment to course
  const addNewcomment = async ([questioner, course]) => {
    if (commentText.length < 4) {
      toast.error(state.lan === "fa"
        ? "مقدار معتبر وارد کنید"
        : state.lan === "en"
          ? "Enter a valid value"
          : state.lan === "ku"
            ? "Nirxek çêtir binivîsin"
            : "Geben Sie einen gültigen Wert ein");
    } else {
      setisloading(true)
      let comment = {
        comment: commentText,
        questioner,
        course,
      };
      let res = await fetch("https://sabzlearn-psi.vercel.app/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (res.status === 200) {
        toast.success(state.lan === "fa"
          ? "کامنت با موفقیت اضافه شد"
          : state.lan === "en"
            ? "Comment added successfully"
            : state.lan === "ku"
              ? "Şîroveyê bi serkeftin hat zêdekirin"
              : "Kommentar wurde erfolgreich hinzugefügt");
        fetch(`https://sabzlearn-psi.vercel.app/api/course/${id}`).then(res => res.json()).then(data => {
          setComments([...data.MainCourse.comments])
          setisloading(false)
          setcommentText("")
        })


      } else {
        toast.error(
          state.lan === "fa"
            ? "خطا در اضافه شدن"
            : state.lan === "en"
              ? "Error in adding"
              : state.lan === "ku"
                ? "Şewtiya di zêdekirinê de"
                : "Fehler beim Hinzufügen"

        );
        setisloading(false)

      }
    }
  };

  const handleCopy = () => {
    const text = "https://sabzlearn.ir/?p=4382";
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("copied!")
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <Navbar islogin={islogin} />
      <main
        className={`${state.them === "dark" ? "bg_black_100 text-white" : "bg_white_100"
          } max-w-[1920px]  overflow-x-hidden pb-8`}
      >
        <div className="px-6 md:px-14 mx-auto max-w-[1400px]">
          <section className={`p-3 grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-2xl  lg:p-0 ${state.them === 'dark' ? 'bg-dark ' : 'bg-white'} lg:!bg-transparent  `}>
            <div className="flex flex-col justify-between order-2 lg:order-1">
              <div id="up">
                <h1 className=" my-4  text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-4">
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
                    <div className="flex items-end gap-x-2">
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
                  <div className="flex items-end gap-x-2">
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
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3 sm:py-7 md:pr-3 rounded-xl`}>
                  <HiOutlineInformationCircle className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      وضعیت دوره
                    </span>
                    <span className="block text-sm opacity-70">{
                      state.lan === "fa"
                        ? "تکمیل شده"
                        : state.lan === "en"
                          ? "Completed"
                          : state.lan === "ku"
                            ? "Temam bû"
                            : "Abgeschlossen"
                    }
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3 sm:py-7 md:pr-3 rounded-xl`}>
                  <FaRegClock className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      {
                        state.lan === "fa"
                          ? "مدت زمان دوره"
                          : state.lan === "en"
                            ? "Course Duration"
                            : state.lan === "ku"
                              ? "Demjimêrê dersê"
                              : "Kursdauer"
                      }

                    </span>
                    <span className="block text-sm opacity-70">
                      {Math.floor(course.MainCourse?.time / 60)} {
                        state.lan === "fa"
                          ? "ساعت"
                          : state.lan === "en"
                            ? "Hour"
                            : state.lan === "ku"
                              ? "Saet"
                              : "Stunde"
                      }

                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3 sm:py-7 md:pr-3 rounded-xl`}>
                  <HiOutlineCalendarDays className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      {
                        state.lan === "fa"
                          ? "آخرین بروزرسانی"
                          : state.lan === "en"
                            ? "Last Update"
                            : state.lan === "ku"
                              ? "Nûvekirina paşîn"
                              : "Letzte Aktualisierung"
                      }

                    </span>
                    <span className="block text-sm opacity-70">
                      {" "}
                      {moment(course.MainCourse?.updatedAt)
                        .format("jYYYY/jMM/jDD HH:mm:ss")
                        .slice(0, 10)}
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3 sm:py-7 md:pr-3 rounded-xl`}>
                  <LuUsers className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      {
                        state.lan === "fa"
                          ? "روش پشتیبانی"
                          : state.lan === "en"
                            ? "Support Method"
                            : state.lan === "ku"
                              ? "Rêbaza piştgiriya"
                              : "Supportmethode"
                      }

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
                      {
                        state.lan === "fa"
                          ? "پیش نیاز"
                          : state.lan === "en"
                            ? "Prerequisite"
                            : state.lan === "ku"
                              ? "Pêdivî"
                              : "Voraussetzung"
                      }

                    </span>
                    <span className="block text-sm opacity-70">
                      {
                        state.lan === "fa"
                          ? "آشنایی با دنیای وب"
                          : state.lan === "en"
                            ? "Familiarity with the Web World"
                            : state.lan === "ku"
                              ? "Têgihiştinê bi cîhanê torê"
                              : "Vertrautheit mit der Web-Welt"
                      }

                    </span>
                  </div>
                </div>
                <div className={`flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} pt-4 pb-3.5 sm:py-7 md:pr-3 rounded-xl`}>
                  <BsCameraVideo className="w-10 sm:w-11 h-10 sm:h-11 text-green-500" />

                  <div className="space-y-0.5  sm:space-y-1">
                    <span className="block  text-lg sm:text-base">
                      {
                        state.lan === "fa"
                          ? "نوع مشاهده"
                          : state.lan === "en"
                            ? "View Type"
                            : state.lan === "ku"
                              ? "Tîpa temaşe"
                              : "Ansichtstyp"
                      }

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
                    {
                      state.lan === "fa"
                        ? "توضیحات تستی"
                        : state.lan === "en"
                          ? "Test Descriptions"
                          : state.lan === "ku"
                            ? "Şiroveyên testî"
                            : "Testbeschreibungen"
                    }

                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div
                    className={`relative ${showmoredesc ? "h-full" : " max-h-[600px]"
                      }  /70 `}
                  >
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? `  توی دوره، شرکت‌کنندگان با مفاهیم پایه و اساسی API
                      (رابط‌های برنامه‌نویسی اپلیکیشن) آشنا میشن و روش‌های مختلف
                      استفاده از اون رو یاد میگیرن. این دوره برای کسایی مناسب
                      است که میخوان مفاهیم پایه‌ای مرتبط با توسعه و استفاده از
                      API رو یاد بگیرن و به طراحی، ایجاد و تعامل با API‌ها در
                      برنامه‌ها و وب‌سایت‌های خود بپردازن.`
                          : state.lan === "en"
                            ? `In this course, participants will become familiar with the basic and fundamental concepts of APIs (Application Programming Interfaces) and learn various methods to use them. This course is suitable for those who want to learn the fundamental concepts related to the development and use of APIs and to design, create, and interact with APIs in their applications and websites.`
                            : state.lan === "ku"
                              ? `Di vê kursê de, beşdarên kursê bi têgihiştina bingehîn û esası ya API'yan (Interface'ên Bernamekirinê) ve têkildar dikin û rêbazan cûda yên bikaranînê yên wan hîn dibin. Ev kurs ji bo kesên ku dixwazin têgihiştina bingehîn ên girêdayî bi pêşkeftin û bikaranîna API'yan hîn bibin û bi API'yan di sepanên xwe û malperên xwe de dizaynekirin, afirandin û têkilî dikin, bi rê ve hatîye amade kirin.`
                              : `In diesem Kurs werden die Teilnehmer mit den grundlegenden und wesentlichen Konzepten von APIs (Application Programming Interfaces) vertraut gemacht und lernen verschiedene Methoden zu deren Nutzung. Dieser Kurs ist für diejenigen geeignet, die die grundlegenden Konzepte im Zusammenhang mit der Entwicklung und Nutzung von APIs lernen möchten und sich mit dem Design, der Erstellung und der Interaktion mit APIs in ihren Anwendungen und Websites beschäftigen wollen.`
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? ` شرکت‌کنندگان در این دوره با مفاهیمی از جمله نوع‌های مختلف
                      API از جمله RESTful، GraphQL، SOAP و RPC، مفهوم‌های اساسی
                      از جمله Endpoint، Request، Response، Authentication، و
                      Rate Limiting و همچنین روش‌های آزمون و تست API آشنا میشن.
                      علاوه بر این، مباحث پیشرفته مثل Caching، Versioning،
                      Pagination، و Rate Limiting نیز مورد بررسی قرار میگیرن.`
                          : state.lan === "en"
                            ? `Participants in this course will become familiar with various API types such as RESTful, GraphQL, SOAP, and RPC, as well as fundamental concepts including Endpoint, Request, Response, Authentication, and Rate Limiting. They will also learn about methods for testing and evaluating APIs. Additionally, advanced topics such as Caching, Versioning, Pagination, and Rate Limiting will be covered.`
                            : state.lan === "ku"
                              ? `Beşdarên vê kursê dê bi cûda-tîpa API'yên wek RESTful, GraphQL, SOAP û RPC, û bi têgihiştina bingehîn yên wek Endpoint, Request, Response, Authentication, û Rate Limiting têkilî bidin. Hûn ê her weha rêbazan ji bo testkirin û evalûasyona API'yan hîn bibin. Bi serdema pêşkeftî de, mijarên wek Caching, Versioning, Pagination, û Rate Limiting jî dê li benda xwendinê bin.`
                              : `Teilnehmer dieses Kurses werden mit verschiedenen API-Typen wie RESTful, GraphQL, SOAP und RPC sowie grundlegenden Konzepten wie Endpoint, Request, Response, Authentication und Rate Limiting vertraut gemacht. Sie werden auch Methoden zum Testen und Bewerten von APIs kennenlernen. Darüber hinaus werden fortgeschrittene Themen wie Caching, Versionierung, Pagination und Rate Limiting behandelt.`
                      }
                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "به طور کلی توی این دوره، موارد زیر پوشش داده میشن:"
                          : state.lan === "en"
                            ? "In this course, the following topics are covered:"
                            : state.lan === "ku"
                              ? "Di vê kursê de, mijarên jêrîn têne li benda xwendinê:"
                              : "In diesem Kurs werden folgende Themen behandelt:"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "مفهوم و اهمیت API"
                          : state.lan === "en"
                            ? "Concept and Importance of API"
                            : state.lan === "ku"
                              ? "Têgihiştin û girîngiya API'yan"
                              : "Konzept und Bedeutung von APIs"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "نوع‌های مختلف API از جمله RESTful، GraphQL، SOAP و RPC"
                          : state.lan === "en"
                            ? "Different types of APIs including RESTful, GraphQL, SOAP, and RPC"
                            : state.lan === "ku"
                              ? "Cûda-tîpa API'yan wek RESTful, GraphQL, SOAP û RPC"
                              : "Verschiedene API-Typen wie RESTful, GraphQL, SOAP und RPC"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "استفاده از API در توسعه نرم‌افزار و توسعه وب"
                          : state.lan === "en"
                            ? "Using APIs in Software Development and Web Development"
                            : state.lan === "ku"
                              ? "Bikaranîna API'yan di pêşkeftina nermalî û web de"
                              : "Nutzung von APIs in der Software- und Webentwicklung"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "مزایا و معایب استفاده از API"
                          : state.lan === "en"
                            ? "Advantages and Disadvantages of Using APIs"
                            : state.lan === "ku"
                              ? "Fayda û kêmîyên bikaranîna API'yan"
                              : "Vorteile und Nachteile der Nutzung von APIs"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "مفاهیم اساسی مانند Endpoint، Request، Response، Authentication، و Rate Limiting"
                          : state.lan === "en"
                            ? "Basic concepts such as Endpoint, Request, Response, Authentication, and Rate Limiting"
                            : state.lan === "ku"
                              ? "Têgihiştina bingehîn wek Endpoint, Request, Response, Authentication û Rate Limiting"
                              : "Grundlegende Konzepte wie Endpoint, Request, Response, Authentication und Rate Limiting"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "روش‌های آزمون و تست API"
                          : state.lan === "en"
                            ? "Methods for Testing and Evaluating APIs"
                            : state.lan === "ku"
                              ? "Rêbazên testkirin û evalûasyona API'yan"
                              : "Methoden zum Testen und Bewerten von APIs"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "مباحث پیشرفته مانند Caching، Versioning، Pagination، و Rate Limiting"
                          : state.lan === "en"
                            ? "Advanced topics such as Caching, Versioning, Pagination, and Rate Limiting"
                            : state.lan === "ku"
                              ? "Mijarên pêşkeftî wek Caching, Versioning, Pagination û Rate Limiting"
                              : "Fortgeschrittene Themen wie Caching, Versionierung, Pagination und Rate Limiting"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? "روش‌های مستندسازی و مستندنویسی API"
                          : state.lan === "en"
                            ? "Methods for Documenting and Writing API Documentation"
                            : state.lan === "ku"
                              ? "Rêbazên belgekirin û nivîsandinê ya API'yan"
                              : "Methoden zur Dokumentation und Erstellung von API-Dokumentationen"
                      }

                    </p>
                    <p className="p-2 leading-7" dir="rtl">
                      {
                        state.lan === "fa"
                          ? ` این دوره برای توسعه‌دهندگان نرم‌افزار، وب دولوپر ها و
                      دانشجویان علوم کامپیوتر و علاقمندان به فناوری‌های وب و
                      نرم‌افزار مناسبه است و با توجه به روند آموزش گام به گام،
                      به شرکت‌کنندگان اجازه میده تا مهارت‌های لازم برای استفاده
                      موثر از API‌ها رو به دست بیارن.`
                          : state.lan === "en"
                            ? `This course is suitable for software developers, web developers, computer science students, and enthusiasts of web and software technologies. With its step-by-step teaching approach, it allows participants to acquire the necessary skills for effectively using APIs.`
                            : state.lan === "ku"
                              ? `Ev kurs ji bo pêşkeftkarên nermalî, web developer'ên, xwendekarên zanistên kompîtur û hezaran teknolojiyên web û nermalî şayeste ye. Bi rêbaza fêrgehê ya gêm-şên, ev dibe ku beşdarên kursê şansê xwe bidin ku têgihiştina pêwîst ji bo bikaranîna efkê API'yan beşdar bikin.`
                              : `Dieser Kurs ist geeignet für Softwareentwickler, Webentwickler, Informatikstudenten und Technikbegeisterte im Bereich Web- und Softwaretechnologien. Durch den schrittweisen Lehransatz ermöglicht er den Teilnehmern, die notwendigen Fähigkeiten für eine effektive Nutzung von APIs zu erwerben.`
                      }
                    </p>
                  </div>

                </div>
                <button
                  className="p-5 rounded-full  text-center  block  m-auto bg-green-500 w-auto mx-auto mt-5"
                  onClick={() => setshowmoredesc((prev) => !prev)}
                >
                  <span>{showmoredesc ?
                    state.lan === "fa"
                      ? "بستن"
                      : state.lan === "en"
                        ? "Close"
                        : state.lan === "ku"
                          ? "Guhertin"
                          : "Schließen"

                    :
                    state.lan === "fa"
                      ? "مشاهده بیشتر مطلب"
                      : state.lan === "en"
                        ? "Read more"
                        : state.lan === "ku"
                          ? "Zêdetir bixwîne"
                          : "Mehr lesen"

                  }</span>
                </button>
              </div>
              <div id="lesson" className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'} rounded-2xl p-4 sm:p-5 mt-8`}>
                <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                  <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm"></span>
                  <RiGraduationCapFill className="hidden md:inline-block text-sky-500 text-3xl" />

                  <div className=" text-xl md:text-2xl">{
                    state.lan === "fa"
                      ? "سرفصل‌ها"
                      : state.lan === "en"
                        ? "Headings"
                        : state.lan === "ku"
                          ? "Sernivîs"
                          : "Kapitelüberschriften"
                  }
                  </div>
                </div>
                <div className="space-y-4 md:space-y-5">
                  {course.Sections?.map((season) => (
                    <div key={season?._id} className={`topic flex flex-col justify-center ${state.them === "dark" ? "bg_black_100" : "bg_white_100"}`}>
                      <input type="checkbox" id={`toggle-${season?._id}`} className="hidden" />
                      <label htmlFor={`toggle-${season?._id}`} className="topic__head cursor-pointer p-4 flex justify-between items-center">
                        <span className="text-lg inline-block lg:line-clamp-3 transition-colors">
                          {season?.title}
                        </span>
                        <div className="flex items-center gap-x-2.5">
                          <div className="hidden lg:flex items-center gap-x-1 text-sm transition-colors">
                            <span>
                              {season.sections.length} {state.lan === "fa" ? "جلسه" : state.lan === "en" ? "Session" : state.lan === "ku" ? "Civîn" : "Sitzung"}
                            </span>
                          </div>
                          <FaChevronDown className="w-5 h-5 transition-all transform" />
                        </div>
                      </label>
                      <div className="topic__body max-h-0 overflow-hidden  transition-all px-3">
                        {season.sections.map((section, index) => (
                          <div key={index} className="flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group cursor-pointer border-b border-white/10 my-5">
                            <div className="flex items-start flex-grow gap-x-2 md:gap-x-3">
                              <div className="transition-colors w-8 h-6 md:h-7 text-sm flex items-center justify-center bg-white/10 group-hover:bg-green-500 group-hover:rounded">
                                {index + 1}
                              </div>
                              <Link href={isbuycourse ? `/coursdetails/lesson/${section?._id}` : "#up"} className="mt-1 inline-block lg:max-w-3/4 text-sm md:text-base transition-colors group-hover:text-green-500">
                                {section?.title}
                              </Link>
                            </div>
                            <div className="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500 transition-colors">
                              <span className="text-sm md:text-base mt-1">{section?.time}</span>
                              {isbuycourse ? (
                                <LuPlayCircle className="text-2xl transition-colors group-hover:text-green-500" />
                              ) : (
                                <FaLock className="text-2xl transition-colors group-hover:text-green-500" />
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
                    <span className="absolute -right-6 sm:-right-[26px] block w-1 h-[34px] md:h-9 bg-red-500 rounded-r-sm "></span>
                    <IoChatbubbles className="hidden md:inline-block text-red-500 text-4xl" />

                    <div className=" text-xl md:text-2xl  mt-1">
                      {
                        state.lan === "fa"
                          ? "نظرات"
                          : state.lan === "en"
                            ? "Comments"
                            : state.lan === "ku"
                              ? "Şîroveyên"
                              : "Kommentare"
                      }

                    </div>
                  </div>
                  <button className="p-3 flex items-center gap-x-2  bg-green-500  rounded-full">
                    {
                      state.lan === "fa"
                        ? "ایجاد نظر جدید"
                        : state.lan === "en"
                          ? "Create New Comment"
                          : state.lan === "ku"
                            ? "Şîroveyek nû afirandin"
                            : "Neuen Kommentar erstellen"
                    }

                    <BsChatSquareText className="w-5 h-5" />
                  </button>
                </div>
                <div>
                  <div className="flex gap-x-3 mb-4 sm:mb-5">
                    <div className="flex-center p-1 border border-dark rounded-full">
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
                      <span className=" text-sm opacity-70">
                        {
                          state.lan === "fa"
                            ? "ثبت نظر جدید"
                            : state.lan === "en"
                              ? "Submit New Comment"
                              : state.lan === "ku"
                                ? "Şîroveyek nû qeyd bikin"
                                : "Neuen Kommentar einreichen"
                        }

                      </span>
                    </div>
                  </div>

                  <textarea
                    className={`w-full h-[150px]  mt-5 block p-4 md:p-4 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'}  placeholder:text-slate-500/70  text-sm rounded-xl`}
                    placeholder={
                      state.lan === "fa"
                        ? "نظر خود را بنویسید ..."
                        : state.lan === "en"
                          ? "Write your comment..."
                          : state.lan === "ku"
                            ? "Şîroveya xwe binivîse..."
                            : "Schreiben Sie Ihren Kommentar..."
                    }

                    value={commentText}
                    onChange={(e) => setcommentText(e.target.value)}
                  ></textarea>
                  {islogin ? (
                    <div className="flex gap-x-4 justify-end mt-5 sm:mt-6">
                      <button
                        onClick={() => setcommentText("")}
                        className="flex-grow sm:grow-0 sm:w-36 text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-4 rounded-full"
                      >
                        {
                          state.lan === "fa"
                            ? "لغو"
                            : state.lan === "en"
                              ? "Cancel"
                              : state.lan === "ku"
                                ? "Bersivîn"
                                : "Abbrechen"
                        }

                      </button>
                      <button
                        onClick={() =>
                          addNewcomment([user.username, course.MainCourse._id])
                        }
                        className="flex-grow sm:grow-0 sm:w-36  bg-green-500 p-4 rounded-full"
                        disabled={isloading}
                      >
                        {
                          state.lan === "fa"
                            ? "ارسال"
                            : state.lan === "en"
                              ? "Send"
                              : state.lan === "ku"
                                ? "Şandîn"
                                : "Senden"
                        }

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
                        {
                          state.lan === "fa"
                            ? "ورود"
                            : state.lan === "en"
                              ? "Login"
                              : state.lan === "ku"
                                ? "Têketin"
                                : "Anmelden"
                        }

                      </button>
                    </Link>
                  )}
                </div>
                {/*comments  */}
                <div className=" space-y-4 mt-10 sm:space-y-5">
                  {Comments.length ? (
                    Comments.map((comment) => (
                      <div key={comment._id} className={`p-4.5 md:p-5 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} p-3 my-4 rounded-xl`}>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-x-3">
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
                                  | {
                                    state.lan === "fa"
                                      ? "دانشجو"
                                      : state.lan === "en"
                                        ? "Student"
                                        : state.lan === "ku"
                                          ? "Xwendekar"
                                          : "Student"
                                  }

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
                    <Notfound title={
                      state.lan === "fa"
                        ? "کامنتی برای این دوره ثبت نشده"
                        : state.lan === "en"
                          ? "No comments have been submitted for this course"
                          : state.lan === "ku"
                            ? "Ji bo vê kursê tu şîrove nekirî ye"
                            : "Es wurden keine Kommentare für diesen Kurs eingereicht"
                    }
                    />
                  )}
                </div>
              </div>
            </div>
            <aside className="col-span-12 lg:col-span-4 space-y-8">
              <div className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'}  rounded-2xl p-4 sm:p-5 `}>
                <div className="flex gap-x-4">
                  <div className={`flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3 sm:py-5 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} rounded-xl`}>
                    <FaUsers className="w-10 h-10 md:w-11 md:h-11 text-green-500" />

                    <div className="">
                      <span className="block font-bold text-sm md:text-base">
                        {course.MainCourse?.student}
                      </span>
                      <span className="block text-sm opacity-70">{
                        state.lan === "fa"
                          ? "دانشجو"
                          : state.lan === "en"
                            ? "Student"
                            : state.lan === "ku"
                              ? "Xwendekar"
                              : "Student"
                      }
                      </span>
                    </div>
                  </div>
                  <div className={`flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3 sm:py-5 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} rounded-xl`}>
                    <FaStar className="w-10 h-10 md:w-11 md:h-11 text-amber-500" />

                    <div className="">
                      <span className="block font-bold text-sm md:text-base">
                        5.0
                      </span>
                      <span className="block text-sm opacity-70">{
                        state.lan === "fa"
                          ? "رضایت"
                          : state.lan === "en"
                            ? "Satisfaction"
                            : state.lan === "ku"
                              ? "Rêza"
                              : "Zufriedenheit"
                      }
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-5">
                  <div className=" flex items-center justify-between  text-sm sm:text-base mb-3">
                    <span>{
                      state.lan === "fa"
                        ? "درصد تکمیل دوره"
                        : state.lan === "en"
                          ? "Course Completion Percentage"
                          : state.lan === "ku"
                            ? "Hejmara temamkirina kursê"
                            : "Kursabschlussprozentsatz"
                    }
                    </span>
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
                  | {
                    state.lan === "fa"
                      ? "مدرس دوره"
                      : state.lan === "en"
                        ? "Course Instructor"
                        : state.lan === "ku"
                          ? "Rêberê kursê"
                          : "Kursleiter"
                  }

                </span>
              </div>
              <div className={`hidden lg:block ${state.them === "dark" ? "bg-dark" : 'bg-white'} rounded-2xl p-5 text-center`}>
                <span className=" text-lg">{
                  state.lan === "fa"
                    ? "لینک کوتاه آموزش"
                    : state.lan === "en"
                      ? "Short Training Link"
                      : state.lan === "ku"
                        ? "Girêdana kûtkirinê"
                        : "Kurzer Schulungslink"
                }
                </span>
                <div className="flex items-center justify-between gap-x-3 p-4 mt-5 bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                  <button onClick={handleCopy}>
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
  let islogin = false;
  let user = null;
  let Isbuycourse = false;
  connectToDB();
  const { token } = contex.req.cookies;
  if (token) {
    islogin = true;
  }
  let res = await fetch(`https://sabzlearn-psi.vercel.app/api/course/${contex.query.id}`);
  let course = await res.json();

  const tokenPayload = verifyToken(token); // verify and find payload
  if (tokenPayload) {

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
