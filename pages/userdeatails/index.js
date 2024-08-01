import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";

import { SlRocket } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa";

import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import { User } from "@/Models/UsersModel";
import connectToDB from "@/DB/DataBase";
import Notfound from "@/components/Notfound";
import moment from "moment-jalaali";
import { useGlobalState } from "@/context/GlobalState";

export default function UserDeatailsPage({ MainUser }) {
  const [showsidebar, setshowsidebar] = useState(false);
  const { state } = useGlobalState();

  return (
    <div
      className={`${state.them === "dark" ? "bg_black_100" : "bg-white"
        } flex gap-x-10 2xl:gap-x-14 px-4 my-4 md:my-0 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 `}
    >
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section
        className={`${state.them === "dark"
          ? "bg-dark text-white"
          : "bg-gray-100 text-black"
          } px-5 rounded-2xl w-full max-w-[1432px] mx-auto  md:p-10 lg:rounded-4xl`}
      >
        <HeaderAccontDetails
          username={MainUser.username}
          setshowsidebar={setshowsidebar}
        />
        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
          <Userdeatailsheaderbox
            title={
              state.lan === "fa"
                ? "مجموع پرداخت ها"
                : state.lan === "en"
                  ? "Total Payments"
                  : state.lan === "ku"
                    ? "Tevahiya dravê"
                    : "Gesamtzahlungen"
            }
            desc={
              state.lan === "fa"
                ? "0 تومان"
                : state.lan === "en"
                  ? "0 $"
                  : state.lan === "ku"
                    ? "0 $"
                    : "0 $"
            }

            icon={<FaCreditCard />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title={
              state.lan === "fa"
                ? "دوره های من"
                : state.lan === "en"
                  ? "My Courses"
                  : state.lan === "ku"
                    ? "Dersên min"
                    : "Meine Kurse"
            }

            desc={`${MainUser.courses?.length} ${state.lan === 'fa' ? 'دوره' : 'Course'}`}
            icon={<SlRocket />}
            bg="bg-secondry"
          />
          <Userdeatailsheaderbox
            title={
              state.lan === "fa"
                ? "مجموع تیکت ها"
                : state.lan === "en"
                  ? "Total Tickets"
                  : state.lan === "ku"
                    ? "Tevahiya tikêtan"
                    : "Gesamt-Tickets"
            }

            desc={`${MainUser.tickets?.length} ${state.lan === 'fa' ? 'تیکت' : 'Tickets'}`}
            icon={<HiOutlineChatAlt2 />}
            bg="bg-rose-500"
          />
          <Userdeatailsheaderbox
            title={
              state.lan === "fa"
                ? "موجودی حساب"
                : state.lan === "en"
                  ? "Account Balance"
                  : state.lan === "ku"
                    ? "Hejmara hesabê"
                    : "Kontostand"
            }

            desc={
              state.lan === "fa"
                ? "0 دوره"
                : state.lan === "en"
                  ? "0 Courses"
                  : state.lan === "ku"
                    ? "0 Ders"
                    : "0 Kurse"
            }

            icon={<AiOutlineDollar />}
            bg="bg-green-500"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7 items-start">
          <div>
            <div
              className={`flex justify-between items-center ${state.them === "dark" ? "bg-gray-700" : "bg-white"
                } px-3 py-2 md:p-4 mb-4 md:mb-5 rounded-2xl`}
            >
              <span className=" md:text-xl ">{
                state.lan === "fa"
                  ? "دوره‌های اخیر"
                  : state.lan === "en"
                    ? "Recent Courses"
                    : state.lan === "ku"
                      ? "Dersên dawî"
                      : "Neueste Kurse"
              }
              </span>
              <Link
                href="/userdeatails/mycourse"
                className={`flex items-center gap-x-1.5 text-sky-500 ${state.them === "dark" && " bg-sky-800/30"
                  } p-3 rounded-xl  text-sm`}
              >
                {
                  state.lan === "fa"
                    ? "همه دوره‌های ثبت نام شده"
                    : state.lan === "en"
                      ? "All Registered Courses"
                      : state.lan === "ku"
                        ? "Hemî dersên qeyd kirî"
                        : "Alle angemeldeten Kurse"
                }

                <FaArrowLeftLong className="w-6 h-6" />
              </Link>
            </div>
            {MainUser.courses.length ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
                {[...MainUser.courses].slice(0, 4).reverse().map((course) => (

                  <Link
                    key={course._id}
                    href={`/coursdetails/${course.courseid}`}
                    className={` flex flex-col overflow-hidden ${state.them === "dark"
                      ? "bg-gray-700 border border-gray-700"
                      : "bg-white"
                      }  rounded-2xl`}
                  >
                    <div className="relative h-42">
                      <a className="w-full h-full block" href="#">
                        <Image
                          width={150}
                          height={150}
                          className="block w-full h-full object-cover rounded-2xl"
                          src={`/image/${course.image}`}
                        />
                      </a>
                    </div>
                    <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
                      <h4 className=" h-12 line-clamp-2  mb-2.5">
                        <a href="#">{
                          state.lan === "fa"
                            ? course.title.fa
                            : state.lan === "en"
                              ? course.title.en
                              : state.lan === "ku"
                                ? course.title.ku
                                : course.title.ge
                        }</a>
                      </h4>
                      <div
                        className={`pt-3 border-t ${state.them === "dark"
                          ? "border-t-gray-700"
                          : " border-t-slate-300"
                          }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="">{
                            state.lan === "fa"
                              ? "میزان مشاهده"
                              : state.lan === "en"
                                ? "View Count"
                                : state.lan === "ku"
                                  ? "Hejmara temaşe"
                                  : "Aufrufanzahl"
                          }
                          </span>
                          <span className="text-slate-400">20%</span>
                        </div>
                        <div
                          className={`${state.them === "dark"
                            ? "bg-gray-700"
                            : "bg-slate-300"
                            } h-[5px] rounded-full`}
                        >
                          <div className="bg-green-500 w-[20%] h-full rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <Notfound title={
                state.lan === "fa"
                  ? "هنوز در دوره‌ای شرکت نکردید"
                  : state.lan === "en"
                    ? "You have not enrolled in any courses yet"
                    : state.lan === "ku"
                      ? "Heta niha tu di dersê de nehatî qeyd kirin"
                      : "Sie haben sich noch in keinem Kurs angemeldet"
              }
              />
            )}
          </div>
          <div>
            <div
              className={`${state.them === "dark" ? "bg-gray-700" : "bg-white"
                } p-3.5 md:p-4.5 rounded-2xl`}
            >
              <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-bborder-b-gray-700">
                <span className=" md:text-xl ">{
                  state.lan === "fa"
                    ? "تیکت‌های اخیر"
                    : state.lan === "en"
                      ? "Recent Tickets"
                      : state.lan === "ku"
                        ? "Tikêtên dawî"
                        : "Neueste Tickets"
                }
                </span>
                <Link
                  href="/userdeatails/usertiket"
                  className="flex items-center gap-x-1.5 text-sky-500  text-sm"
                >
                  {
                    state.lan === "fa"
                      ? "همه تیکت‌ها"
                      : state.lan === "en"
                        ? "All Tickets"
                        : state.lan === "ku"
                          ? "Hemî tikêtan"
                          : "Alle Tickets"
                  }

                  <FaArrowLeftLong className="w-6 h-6" />
                </Link>
              </div>
              <div>
                {MainUser?.tickets.length ? (
                  [...MainUser.tickets].slice(0, 4).reverse().map((ticket) => (
                    <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:opacity-60 rounded-xl transition-colors">
                      <Link
                        href={`/userdeatails/usertiket/${ticket._id}`}
                        className=" w-full sm:max-w-sm sm:truncate"
                      >
                        {ticket.title}
                      </Link>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400">
                          {" "}
                          {moment(ticket.createdAt)
                            .format("jYYYY/jMM/jDD HH:mm:ss")
                            .slice(0, 10)}
                        </span>
                        <span className="text-xs py-1 px-1 bg-blue-400/60  rounded">
                          {
                            state.lan === "fa"
                              ? "منتظر پاسخ"
                              : state.lan === "en"
                                ? "Waiting for a Response"
                                : state.lan === "ku"
                                  ? "Li benda bersiva"
                                  : "Warten auf Antwort"
                          }

                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <Notfound title={
                    state.lan === "fa"
                      ? "تیکتی وجود نداره"
                      : state.lan === "en"
                        ? "No Tickets Available"
                        : state.lan === "ku"
                          ? "Tikêt tuneye"
                          : "Keine Tickets vorhanden"
                  }
                  />
                )}
              </div>
            </div>
            <div
              className={`${state.them === "dark" ? "bg-gray-700" : "bg-white"
                } p-3.5 md:p-4 rounded-2xl mt-7`}
            >
              <div className="flex justify-between items-center pb-3 md:pb-4 mb-6 md:mb-7 border-b border-b-gray-700">
                <span className=" md:text-xl ">{
                  state.lan === "fa"
                    ? "پرسش‌های اخیر تستی"
                    : state.lan === "en"
                      ? "Recent Quiz Questions"
                      : state.lan === "ku"
                        ? "Pirsên dawî yên testî"
                        : "Neueste Quizfragen"
                }
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:opacity-70 rounded-xl transition-colors">
                  <a href="#" className=" w-full sm:max-w-sm sm:truncate">
                    آموزش Next.js بصورت پروژه محور - آشنایی با متد Populate
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/12/11</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      {
                        state.lan === "fa"
                          ? "بسته شده"
                          : state.lan === "en"
                            ? "Closed"
                            : state.lan === "ku"
                              ? "Girtî ye"
                              : "Geschlossen"
                      }
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:opacity-70 rounded-xl transition-colors">
                  <a href="#" className=" w-full sm:max-w-sm sm:truncate">
                    آموزش Next.js بصورت پروژه محور - پیاده سازی SSR در Dynamic
                    Routes
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/12/02</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      {
                        state.lan === "fa"
                          ? "بسته شده"
                          : state.lan === "en"
                            ? "Closed"
                            : state.lan === "ku"
                              ? "Girtî ye"
                              : "Geschlossen"
                      }

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:opacity-70 rounded-xl transition-colors">
                  <a href="#" className=" w-full sm:max-w-sm sm:truncate">
                    آموزش Next.js بصورت پروژه محور - مفهوم Pre-rendering و انواع
                    آن
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/11/26</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      {
                        state.lan === "fa"
                          ? "بسته شده"
                          : state.lan === "en"
                            ? "Closed"
                            : state.lan === "ku"
                              ? "Girtî ye"
                              : "Geschlossen"
                      }
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:hover:opacity-70 rounded-xl transition-colors">
                  <a href="#" className=" w-full sm:max-w-sm sm:truncate">
                    آموزش Next.js بصورت پروژه محور - معرفی فصل و پروژه
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">1402/11/24</span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400 bg-yellow-400/10 rounded">
                      {
                        state.lan === "fa"
                          ? "بسته شده"
                          : state.lan === "en"
                            ? "Closed"
                            : state.lan === "ku"
                              ? "Girtî ye"
                              : "Geschlossen"
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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

export async function getServerSideProps(context) {
  connectToDB();
  const { token } = context.req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const tokenPayload = verifyToken(token); // verify and find payload
  if (!tokenPayload) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  let FindUser = await User.findOne({
    phoneNumber: tokenPayload.phoneNumber,
  })
    .populate("courses tickets")
    .lean();
  let MainUser = JSON.parse(JSON.stringify(FindUser));

  return { props: { MainUser } };
}
