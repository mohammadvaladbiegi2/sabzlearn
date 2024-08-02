import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFunnelOutline } from "react-icons/io5";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5";
import Notfoundcourse from "@/components/Notfoundcourse";
import { useGlobalState } from "@/context/GlobalState";

export default function Searchcourse({ courses, Allcourse,islogin }) {
  const [showbottomShet, setshowbottomShet] = useState(false);
  const [showfilterbox, setshowfilterbox] = useState(false);
  const [course, setcourse] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [freechecked, setfreechecked] = useState(false);
  const [presellchecked, setpresellchecked] = useState(false);

  useEffect(() => {
    setcourse([...courses]);
  }, [courses]);

  const filtercourse = (filter) => {
    if (filter === "all") {
      setcourse([...Allcourse]);
    } else {
      let sortCours = Allcourse.sort((a, b) => {
        switch (filter) {
          case "cheapest": {
            return a.price - b.price;
          }
          case "expensive": {
            return b.price - a.price;
          }
          case "popular": {
            return b.student - a.student;
          }
        }
      });
      setcourse([...sortCours]);
    }
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    let search = Allcourse.filter(
      (course) =>
        course.title.en.includes(searchtext) ||
        course.title.fa.includes(searchtext) ||
        course.title.ku.includes(searchtext) ||
        course.title.ge.includes(searchtext) ||
        course.category.includes(searchtext)
    );
    setcourse([...search]);
  };

  let { state } = useGlobalState();

  return (
    <>
      <Navbar islogin={islogin}/>
      <main
        className={`${
          state.them === "dark" ? "bg_black_100" : "bg_white_100"
        }  pb-8 overflow-x-hidden pt-8 sm:pt-10`}
      >
        <div className="max-w-[1500px] mx-auto">

        <div className="px-[10px] sm:px-[40px] md:px-[80px] lg:px-[100px]">
          <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
            <div className="flex gap-2.5 items-center">
              <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
              <h2
                className={`text-center ${
                  state.them === "dark" ? "text-white" : "text-black"
                }  text-2xl lg:text-3xl`}
              >
                {state.lan === "fa"
                  ? "دوره ها"
                  : state.lan === "en"
                  ? "Courses"
                  : state.lan === "ku"
                  ? "kursên"
                  : "Kurse"}
              </h2>
            </div>
            <span className="sm:text-xl  text-slate-500">
              <span id="count_item_archive"></span>{" "}
              {state.lan === "fa"
                ? "عنوان آموزشی"
                : state.lan === "en"
                ? "Educational title"
                : state.lan === "ku"
                ? "Sernavê perwerdehiyê"
                : "Bildungstitel"}{" "}
            </span>
          </div>
          <section className="grid grid-cols-12 gap-y-5 md:gap-x-7">
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
              <form onSubmit={SearchHandler} className="space-y-6">
                <div
                  className={`h-17  ${
                    state.them === "dark" ? "bg-dark" : "bg-white"
                  } rounded-xl p-4 md:p-5`}
                >
                  <div className="flex justify-between gap-x-6 h-full text-white">
                    <input
                      type="text"
                      value={searchtext}
                      className={`outline-none flex-grow bg-transparent ${
                        state.them === "dark"
                          ? " placeholder-slate-500 "
                          : "text-gray-500 "
                      }`}
                      placeholder={
                        state.lan === "fa"
                          ? "جستجو بین دوره ها"
                          : state.lan === "en"
                          ? "Search between courses"
                          : state.lan === "ku"
                          ? "Di navbera qursan de bigerin"
                          : "Suche zwischen Kursen"
                      }
                      onChange={(e) => setsearchtext(e.target.value)}
                    />
                    <button type="submit">
                      <IoIosSearch
                        className={`${
                          state.them === "dark" ? "text-white" : "text-gray-500"
                        } w-7 h-7 cursor-pointer`}
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={`rounded-xl p-5 hidden md:block ${
                    state.them === "dark"
                      ? "bg-dark text-white"
                      : "bg-white text-gray-500"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-danaDemiBold ">
                      {state.lan === "fa"
                        ? "فقط دوره های رایگان"
                        : state.lan === "en"
                        ? "Free courses only"
                        : state.lan === "ku"
                        ? "Tenê qursên belaş"
                        : "Nur kostenlose Kurse"}
                    </span>
                    <label
                      className={`w-[46px] h-6 ${
                        state.them === "dark" ? "bg-COLOR1-HA" : "bg-gray-300"
                      }  rounded-full cursor-pointer`}
                    >
                      <input
                        className="hidden peer group"
                        type="checkbox"
                        checked={freechecked}
                        onChange={(e) => {
                          setfreechecked(e.target.checked);
                          if (e.target.checked) {
                            let freecourse = Allcourse.filter(
                              (course) => course.price === 0
                            );
                            setcourse([...freecourse]);
                            setpresellchecked(false);
                          } else {
                            setcourse([...courses]);
                          }
                        }}
                      ></input>
                      <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                        <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div
                  className={`rounded-xl p-5 hidden md:block ${
                    state.them === "dark"
                      ? "bg-dark text-white"
                      : "bg-white text-gray-500"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-danaDemiBold ">
                      {state.lan === "fa"
                        ? "دوره ‌های درحال پیش فروش"
                        : state.lan === "en"
                        ? "Pre-sale courses"
                        : state.lan === "ku"
                        ? "Kursên pêş-firotanê"
                        : "Vorverkaufskurse"}
                    </span>
                    <label
                      className={`w-[46px] h-6 ${
                        state.them === "dark" ? "bg-COLOR1-HA" : "bg-gray-300"
                      }  rounded-full cursor-pointer`}
                    >
                      <input
                        className="hidden peer group"
                        type="checkbox"
                        checked={presellchecked}
                        onChange={(e) => {
                          setpresellchecked(e.target.checked);
                          if (e.target.checked) {
                            let freecourse = Allcourse.filter(
                              (course) => course.ispresell === true
                            );
                            setcourse([...freecourse]);
                            setfreechecked(false);
                          } else {
                            setcourse([...courses]);
                          }
                        }}
                      ></input>
                      <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                        <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </aside>
            <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              <div className="flex md:hidden justify-between items-center gap-6 mb-8">
                <div
                  onClick={() => setshowfilterbox(true)}
                  className={`w-full ${
                    state.them === "dark"
                      ? "bg-dark text-white"
                      : "bg-white text-black"
                  }  flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer  `}
                >
                  <IoFunnelOutline className="w-6 h-6 shrink-0 opacity-70" />

                  <span className=" hover:text-blue-500 transition">
                    {state.lan === "fa" ? "فیلتر" : "Filters"}
                  </span>
                </div>
                <div
                  onClick={() => setshowbottomShet(true)}
                  className={`w-full ${
                    state.them === "dark"
                      ? "bg-dark text-white"
                      : "bg-white text-black"
                  } flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer `}
                >
                  <HiMiniArrowsUpDown className="w-6 h-6 shrink-0 opacity-70" />

                  <span
                    onClick={() => filtercourse("all")}
                    className=" hover:text-blue-500 cursor-pointer transition"
                  >
                    {state.lan === "fa"
                      ? "همه دوره ها"
                      : state.lan === "en"
                      ? "All courses"
                      : state.lan === "ku"
                      ? "Hemû kursên"
                      : "Alle Kurse"}
                  </span>
                </div>
              </div>
              <div
                className={`hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 ${
                  state.them === "dark"
                    ? "bg-dark text-white"
                    : "bg-white text-black"
                }  rounded-xl`}
              >
                <div className="flex items-center shrink-0 gap-x-2">
                  <HiMiniArrowsUpDown className="w-6 h-6 shrink-0 opacity-70" />

                  <span className="">
                    {state.lan === "fa"
                      ? "مرتب سازی بر اساس :"
                      : state.lan === "en"
                      ? "order by :"
                      : state.lan === "ku"
                      ? "ferman ji hêla:"
                      : "Sortieren nach :"}
                  </span>
                </div>
                <div className="flex gap-x-5 transition  leading-[64px] lg:gap-x-8 h-full">
                  <a
                    onClick={() => filtercourse("all")}
                    className="sort-btn  hover:text-blue-500  cursor-pointer line-clamp-1"
                  >
                    {state.lan === "fa"
                      ? "همه دوره ها"
                      : state.lan === "en"
                      ? "All courses"
                      : state.lan === "ku"
                      ? "Hemû kursên"
                      : "Alle Kurse"}
                  </a>
                  <a
                    onClick={() => filtercourse("cheapest")}
                    className="line-clamp-1 hover:text-blue-500"
                    href="#"
                  >
                    {state.lan === "fa"
                      ? "ارزان ترین"
                      : state.lan === "en"
                      ? "cheapest"
                      : state.lan === "ku"
                      ? "herî erzan"
                      : "am billigsten"}
                  </a>
                  <a
                    onClick={() => filtercourse("expensive")}
                    className="line-clamp-1 hover:text-blue-500"
                    href="#"
                  >
                    {state.lan === "fa"
                      ? "گران ترین"
                      : state.lan === "en"
                      ? "most expensive"
                      : state.lan === "ku"
                      ? "ya herî biha"
                      : "das teuerste"}
                  </a>
                  <a
                    onClick={() => filtercourse("popular")}
                    className="line-clamp-1 hover:text-blue-500"
                    href="#"
                  >
                    {state.lan === "fa" ? "پرمخاطب ها" : "celebrities"}
                  </a>
                </div>
              </div>
              {course.length ? (
                <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                  {course.map((course) => (
                    <CourseCard key={course._id} {...course} />
                  ))}
                </div>
              ) : (
                <Notfoundcourse />
              )}
            </section>
          </section>
        </div>
        {/* buttom shet */}

        <div
          className={`fixed md:hidden transition ${
            state.them === "dark" ? "bg_black_100" : "bg-white"
          }  ${
            showbottomShet ? "openbuttomshet" : "closebuttomshet"
          } right-0 left-0 z-50 transition`}
        >
          <div
            className={`flex items-center rounded-t-2xl  p-4 justify-between ${
              state.them === "dark" ? "bg-dark-light" : "bg_white_100"
            }`}
          >
            <h2 className=" text-xl">
              {state.lan === "fa"
                ? "مرتب سازی بر اساس :"
                : state.lan === "en"
                ? "order by :"
                : state.lan === "ku"
                ? "ferman ji hêla:"
                : "Sortieren nach :"}
            </h2>
            <IoMdClose
              onClick={() => setshowbottomShet(false)}
              className=" w-6 h-6 cursor-pointer "
            />
          </div>
          <ul
            className={`${
              state.them === "dark" ? "text-white" : "text-black"
            } text-[17px] p-4 flex flex-col gap-6 mt-3`}
          >
            <li
              className={`bordred border-b-[1px] pb-3  ${
                state.them === "dark" ? "border-white/70" : "border-black/70"
              } `}
            >
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("all");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                {state.lan === "fa"
                  ? "همه دوره ها"
                  : state.lan === "en"
                  ? "All courses"
                  : state.lan === "ku"
                  ? "Hemû kursên"
                  : "Alle Kurse"}
              </a>
            </li>
            <li
              className={`bordred border-b-[1px] pb-3  ${
                state.them === "dark" ? "border-white/70" : "border-black/70"
              } `}
            >
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("cheapest");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                {state.lan === "fa"
                  ? "ارزان ترین"
                  : state.lan === "en"
                  ? "cheapest"
                  : state.lan === "ku"
                  ? "herî erzan"
                  : "am billigsten"}
              </a>
            </li>
            <li
              className={`bordred border-b-[1px] pb-3  ${
                state.them === "dark" ? "border-white/70" : "border-black/70"
              } `}
            >
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("expensive");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                {state.lan === "fa"
                  ? "گران ترین"
                  : state.lan === "en"
                  ? "most expensive"
                  : state.lan === "ku"
                  ? "ya herî biha"
                  : "das teuerste"}
              </a>
            </li>
            <li className=" pb-3">
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("popular");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                {state.lan === "fa" ? "پرمخاطب ها" : "celebrities"}
              </a>
            </li>
          </ul>
        </div>
        {/* filter box sm */}
        <div
          className={`fixed filter  md:hidden ${
            state.them === "dark" ? "bg_drop_down_nav" : "bg-white"
          } ${showfilterbox && "filter--open "} `}
        >
          <div
            className={`flex items-center ${
              state.them === "dark"
                ? "bg-dark-light text-white"
                : "bg-gray-300 text-black"
            }  p-4 justify-between `}
          >
            <h2 className=" text-xl flex items-center gap-2">
              <IoMdClose
                onClick={() => setshowfilterbox(false)}
                className="mb-1 w-6 h-6 cursor-pointer "
              />
              {state.lan === "fa" ? "فیلترها" : "Filters"}
            </h2>
            <h2 className="text-red-500 text-base flex items-center gap-2">
              {state.lan === "fa" ? "حذف فیلترها" : "Remove Filters"}

              <IoTrashSharp
                onClick={() => {
                  setfreechecked(false);
                  setpresellchecked(false);
                  setcourse([...courses]);

                  setshowfilterbox(false);
                }}
                className="mb-1 w-6 h-6 cursor-pointer "
              />
            </h2>
          </div>
          <ul
            className={`${
              state.them === "dark" ? "text-white " : "text-black"
            } text-[17px] p-4 flex flex-col gap-8 mt-3`}
          >
            <li
              className={`bordred border-b-[1px] pb-5  ${
                state.them === "dark" ? "border-white/80" : "border-black/80"
              }  `}
            >
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                {state.lan === "fa"
                  ? "فقط دوره های رایگان"
                  : state.lan === "en"
                  ? "Free courses only"
                  : state.lan === "ku"
                  ? "Tenê qursên belaş"
                  : "Nur kostenlose Kurse"}
                <label
                  className={`w-[46px] h-6 ${
                    state.them === "dark" ? "bg-dark-light" : "bg-gray-300"
                  } rounded-full cursor-pointer`}
                >
                  <input
                    className="hidden peer group"
                    type="checkbox"
                    checked={freechecked}
                    onChange={(e) => {
                      setfreechecked(e.target.checked);
                      if (e.target.checked) {
                        let freecourse = Allcourse.filter(
                          (course) => course.price === 0
                        );
                        setcourse([...freecourse]);
                        setpresellchecked(false);
                        setshowfilterbox(false);
                      } else {
                        setcourse([...courses]);
                      }
                    }}
                  ></input>
                  <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                    <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                  </div>
                </label>
              </a>
            </li>
            <li
              className={`bordred border-b-[1px] pb-5  ${
                state.them === "dark" ? "border-white/80" : "border-black/80"
              }  `}
            >
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                {state.lan === "fa"
                  ? "دوره ‌های درحال پیش فروش"
                  : state.lan === "en"
                  ? "Pre-sale courses"
                  : state.lan === "ku"
                  ? "Kursên pêş-firotanê"
                  : "Vorverkaufskurse"}
                <label
                  className={`w-[46px] h-6 ${
                    state.them === "dark" ? "bg-dark-light" : "bg-gray-300"
                  } rounded-full cursor-pointer`}
                >
                  <input
                    className="hidden peer group"
                    type="checkbox"
                    checked={presellchecked}
                    onChange={(e) => {
                      setpresellchecked(e.target.checked);
                      if (e.target.checked) {
                        let freecourse = Allcourse.filter(
                          (course) => course.ispresell === true
                        );
                        setcourse([...freecourse]);
                        setfreechecked(false);
                        setshowfilterbox(false);
                      } else {
                        setcourse([...courses]);
                      }
                    }}
                  ></input>
                  <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
                    <div className="bg-COLOR2-HA size-4 rounded-full"></div>
                  </div>
                </label>
              </a>
            </li>
          </ul>
        </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(contex) {
  let islogin = false;
  const { token } = contex.req.cookies;
  if (token) {
    islogin = true;
  }
  let res = await fetch(
    `https://sabzlearn-kappa.vercel.app/api/course/search/${contex.query.text}`
  );
  let data = await res.json();
  let resAllcourse = await fetch(`https://sabzlearn-kappa.vercel.app/api/course`);
  let dataAllcourse = await resAllcourse.json();
  let Allcourse = JSON.parse(JSON.stringify(dataAllcourse));
  let courses = JSON.parse(JSON.stringify(data));
  return {
    props: { courses, Allcourse,islogin },
  };
}
