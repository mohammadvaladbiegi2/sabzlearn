import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useRef } from "react";
import { IoChatbubbles } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { FaRegCircle } from "react-icons/fa";

import Link from "next/link";
import { toast } from "react-toastify";
import { verify } from "jsonwebtoken";
import connectToDB from "@/DB/DataBase";
import { useGlobalState } from "@/context/GlobalState";

export default function Lessondetails({ sectionData, season, islogin }) {

  const { state } = useGlobalState();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Navbar islogin={islogin} />
      <div className={`${state.them === "dark" ? "bg_black_100 text-white" : "bg_white_100 text-black"
        }`}>


        <main className={` max-w-[1400px] mx-auto overflow-x-hidden py-8 `}>
          <div className="px-5 md:px-14">
            <div className=" mt-8 sm:mt-10 overflow-hidden rounded-xl">
              <div className="relative">
                <img
                  src={`/image/${sectionData.poster}`}
                  className="opacity-40 flex  items-center justify-center h-full w-full"
                ></img>
                <p className=" absolute text-lg sm:text-xl md:text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 bg-rose-500 p-4 rounded-full text-center">
                  {
                    state.lan === "fa"
                      ? "به دلیل حق کپی رایت فقط پوستر مربوطه نشان داده می‌شود"
                      : state.lan === "en"
                        ? "Due to copyright, only the relevant poster is shown"
                        : state.lan === "ku"
                          ? "Ji ber mafê malperê, tenê posterê girêdayî tê nîşandan"
                          : "Aufgrund von Urheberrechten wird nur das entsprechende Poster angezeigt"
                  }

                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-y-6 gap-x-5 lg:gap-x-7 mt-6 lg:mt-8 ">
              <div className="col-span-full order-last md:order-none md:col-span-7 xl:col-span-8">
                <div className={`hidden md:block ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} rounded-2xl p-5 sm:p-5`}>
                  <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                    <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm "></span>
                    <h3 className=" text-xl md:text-2xl">
                      {season.title}
                    </h3>
                  </div>
                  <div className="flex pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-b-white/10">
                    <div className="inline-flex items-center shrink-0 h-7  text-sky-500 bg-sky-500/10 text-sm px-1 ml-2.5  rounded">
                      1
                    </div>
                    <h4 className=" sm:text-lg">{sectionData.title}</h4>
                  </div>
                  <div className="flex justify-between gap-3.5 flex-wrap">
                    <a

                      className={`w-full cursor-pointer sm:w-36 p-3  text-center mt-1 pb-1 rounded-full ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'}`}
                    >
                      {
                        state.lan === "fa"
                          ? "سوال دارم!"
                          : state.lan === "en"
                            ? "I have a question!"
                            : state.lan === "ku"
                              ? "Ez pirsêk heye!"
                              : "Ich habe eine Frage!"
                      }

                    </a>
                    <div className="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                      <a

                        className="w-full cursor-pointer sm:w-36 bg-green-500 p-3  rounded-full   text-center"
                      >
                        {
                          state.lan === "fa"
                            ? "دانلود ویدیو"
                            : state.lan === "en"
                              ? "Download Video"
                              : state.lan === "ku"
                                ? "Vîdeoyê dakêşin"
                                : "Video herunterladen"
                        }
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'} rounded-2xl p-5 sm:p-5 mt-6 lg:mt-8`}
                  id="lesson-qaa"
                >
                  <div className="flex items-center justify-between mb-6 sm:mb-7">
                    <div className="flex items-center gap-x-3 relative">
                      <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                      <IoChatbubbles className="hidden md:inline-block text-red-500 text-4xl" />

                      <h3 className=" text-xl md:text-2xl">
                        {" "}
                        {
                          state.lan === "fa"
                            ? "پرسش و پاسخ"
                            : state.lan === "en"
                              ? "Q&A"
                              : state.lan === "ku"
                                ? "Pirs û bersiv"
                                : "Fragen und Antworten"
                        }

                      </h3>
                    </div>
                  </div>
                  <div className="mb-8 sm:mb-10">
                    <div className="flex gap-x-3.5 mb-4.5 sm:mb-5">
                      <div className="flex-center p-1.5 border border-gray-100 dark:border-dark rounded-full">
                        <div className={`flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} rounded-full`}>
                          <FaRegUser className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="">{
                          state.lan === "fa"
                            ? "دانشجو"
                            : state.lan === "en"
                              ? "Student"
                              : state.lan === "ku"
                                ? "Xwendekar"
                                : "Student"
                        }
                        </span>
                        <span className="/70 text-sm opacity-70">
                          {
                            state.lan === "fa"
                              ? "پرسش جدید"
                              : state.lan === "en"
                                ? "New Question"
                                : state.lan === "ku"
                                  ? "Pirsê nû"
                                  : "Neue Frage"
                          }

                        </span>
                      </div>
                    </div>
                    <form id="submit-question">
                      <textarea
                        dir="rtl"
                        rows="6"
                        className={`w-full h-[200px] block p-4 my-4 md:p-4 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'}  placeholder:text-slate-500/70  text-sm rounded-xl`}
                        placeholder={
                          state.lan === "fa"
                            ? "سوال خود را بپرسید ..."
                            : state.lan === "en"
                              ? "Ask your question ..."
                              : state.lan === "ku"
                                ? "Pirsê xwe bipirse ..."
                                : "Stellen Sie Ihre Frage ..."
                        }

                      ></textarea>{" "}
                      <div className="flex items-center justify-between flex-wrap gap-4.5 mt-4.5 sm:mt-6">
                        <div className="w-full sm:w-auto">
                          <div className=" flex items-center gap-x-2 sm:gap-x-2 cursor-pointer">
                            <HiOutlineArrowUpTray className="size-6 sm:size-7" />

                            <span className="mt-2 text-sm sm:text-base" onClick={handleClick}>
                              {
                                state.lan === "fa"
                                  ? "اگر فایل ضمیمه‌ای دارید لطفا آپلود کنید"
                                  : state.lan === "en"
                                    ? "If you have an attachment, please upload it"
                                    : state.lan === "ku"
                                      ? "Heke hêja yek heye, ji kerema xwe wê bar bikin"
                                      : "Wenn Sie eine Anlage haben, laden Sie sie bitte hoch"
                              }

                            </span>
                            <input
                              type="file"
                              ref={fileInputRef}
                              style={{ display: 'none' }}
                            />
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toast.info(state.lan === "fa"
                              ? "قابلیت پرسش و پاسخ نیست"
                              : state.lan === "en"
                                ? "Q&A feature is not available"
                                : state.lan === "ku"
                                  ? "Taybetmendiya pirs û bersiv tuneye"
                                  : "Die Frage- und Antwortfunktion ist nicht verfügbar");
                          }}
                          className="w-full mt-4 sm:mt-0 sm:w-36 text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover:text-white transition p-3 rounded-full"
                        >
                          {
                            state.lan === "fa"
                              ? "ارسال"
                              : state.lan === "en"
                                ? "Send"
                                : state.lan === "ku"
                                  ? "Şandin"
                                  : "Senden"
                          }

                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="space-y-4 sm:space-y-5">
                    <p className="  leading-7 mt-3">
                      {
                        state.lan === "fa"
                          ? "هنوز برای این جلسه سوالی نپرسیده‌اید!"
                          : state.lan === "en"
                            ? "You haven't asked any questions for this session yet!"
                            : state.lan === "ku"
                              ? "Heta niha ji bo vê dersê pirsa nake"
                              : "Sie haben noch keine Fragen für diese Sitzung gestellt!"
                      }

                    </p>
                  </div>
                </div>
              </div>
              <aside className="col-span-full order-first md:order-none md:col-span-5 xl:col-span-4">
                <div className={`block md:hidden ${state.them === 'dark' ? 'bg-dark' : 'bg-white'} rounded-2xl p-5 sm:p-5`}>
                  <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                    <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm "></span>
                    <h3 className=" text-xl md:text-2xl">
                      {season.title}
                    </h3>
                  </div>
                  <div className="flex pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-b-white/10">
                    <div className="inline-flex items-center shrink-0 h-7  text-sky-500 bg-sky-500/10 text-sm px-1 ml-2.5  rounded">
                      1
                    </div>
                    <h4 className=" sm:text-lg">{sectionData.title}</h4>
                  </div>
                  <div className="flex justify-between gap-3 flex-wrap">
                    <a className={`w-full p-3 flex items-center justify-center sm:w-36 ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'}   rounded-full`}>
                      {
                        state.lan === "fa"
                          ? "سوال دارم!"
                          : state.lan === "en"
                            ? "I have a question!"
                            : state.lan === "ku"
                              ? "Ez pirsêk heye!"
                              : "Ich habe eine Frage!"
                      }
                    </a>
                    <div className="flex gap-y-3 gap-x-4 justify-end flex-grow flex-wrap">
                      <a className="w-full sm:w-36 bg-green-500 rounded-full  p-3 text-center">
                        {
                          state.lan === "fa"
                            ? "دانلود ویدیو"
                            : state.lan === "en"
                              ? "Download Video"
                              : state.lan === "ku"
                                ? "Vîdeoyê dakêşin"
                                : "Video herunterladen"
                        }
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'} border-none  pl-1.5 pr-4.5 sm:pr-5 py-4 sm:py-5 rounded-xl mt-6 lg:mt-0`}>
                  <div className="flex items-center gap-x-2 mb-5 pb-5 border-b border-b-white/10">
                    <svg className="w-[30px] h-[30px]">
                      <use href="#document-text"></use>
                    </svg>
                    <span className=" text-lg">{
                      state.lan === "fa"
                        ? "سرفصل‌های دوره"
                        : state.lan === "en"
                          ? "Course Outline"
                          : state.lan === "ku"
                            ? "Sernavên kursê"
                            : "Kursübersicht"
                    }
                    </span>
                  </div>
                  <div className=" max-h-[602px] pl-2 pr-2 md:pr-0">
                    <div className="chapter">
                      <div className={`mt-3 chapter__head ${state.them === 'dark' ? 'bg-dark-light' : 'bg_white_100'} chapter__head__active`}>
                        <span>{season.title}</span>
                      </div>
                      <div className="chapter__lessons chapter__lessons__active">
                        {season.sections.map((section) => (
                          <div key={season?._id} className="lesson  lesson--watching">
                            <Link
                              href={`/coursdetails/lesson/${section?._id}`}
                              className="block line-clamp-2"
                            >
                              {section.title}
                            </Link>
                            <div className="flex items-center justify-between mt-3 sm:mt-2">
                              <div className="lesson__status">
                                <FaRegCircle className="text-2xl text-green-500" />
                              </div>
                              <div className="min-w-18  text-green-500 border-solid border-2 border-emerald-500 hover:bg-green-500 hover: transition p-3 rounded-full">
                                {section.time}{" "}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${state.them === 'dark' ? 'bg-dark' : 'bg-white'}   p-4 sm:p-5 rounded-xl mt-6 lg:mt-8`}>
                  <p className="text-sm mb-4">
                    {
                      state.lan === "fa"
                        ? "وقتی 70 درصد یک ویدیو را بصورت آنلاین تماشا میکنید، میزان پیشرفت شما بصورت خودکار بروزرسانی میشود."
                        : state.lan === "en"
                          ? "When you watch 70% of a video online, your progress is automatically updated."
                          : state.lan === "ku"
                            ? "Dema ku 70% yê vîdyoyekê online temaşayî dikin, pêşketina we xwe bi xêr tê nûkirin."
                            : "Wenn Sie 70 % eines Videos online ansehen, wird Ihr Fortschritt automatisch aktualisiert."
                    }

                  </p>
                  <div className="flex items-center justify-between mb-4  text-green-500">
                    <span> {
                      state.lan === "fa"
                        ? "میزان پیشرفت شما تستی"
                        : state.lan === "en"
                          ? "Your progress (test)"
                          : state.lan === "ku"
                            ? "Pêşketina we (test)"
                            : "Ihr Fortschritt (Test)"
                    }
                    </span>
                    <span>40%</span>
                  </div>
                  <div className="rounded-full w-[40%] h-3 bg-green-500"></div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
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
  connectToDB();
  const { token } = contex.req.cookies;

  let islogin = false

  if (token) {
    islogin = true
  }

  if (!token) {
    return {
      redirect: {
        destination: "/", // chek have token
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
  let { id } = contex.query;
  let res = await fetch(`https://sabzlearn-psi.vercel.app/api/section/${id}`);
  let data = await res.json();
  let sectionData = JSON.parse(JSON.stringify(data));
  let getseason = await fetch(
    `https://sabzlearn-psi.vercel.app/api/season/${data.season}`
  );
  let seasondata = await getseason.json();
  let season = JSON.parse(JSON.stringify(seasondata));
  return {
    props: { sectionData, season, islogin },
  };
}
