import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InputCheckbox from "@/components/InputCheckbox";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFunnelOutline } from "react-icons/io5";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5";
import Notfoundcourse from "@/components/Notfoundcourse";

export default function Searchcourse({ courses, Allcourse }) {
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
        course.title.fa.includes(searchtext.toLowerCase()) ||
        course.category.includes(searchtext.toLowerCase())
    );
    setcourse([...search]);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] mx-auto  overflow-x-hidden mt-8 sm:mt-10">
        <div className="px-[10px] sm:px-[40px] md:px-[80px] lg:px-[100px]">
          <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
            <div className="flex gap-2.5 items-center">
              <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
              <h2 className="text-center text-white  text-2xl lg:text-3.5xl">
                {" "}
                دوره ها{" "}
              </h2>
            </div>
            <span className="sm:text-xl  text-slate-500">
              <span id="count_item_archive"></span> عنوان آموزشی{" "}
            </span>
          </div>
          <section className="grid grid-cols-12 gap-y-5 md:gap-x-7">
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
              <form onSubmit={SearchHandler} className="space-y-6">
                <div className="h-17 bg-dark rounded-xl p-4 md:p-5">
                  <div className="flex justify-between gap-x-6 h-full text-white">
                    <input
                      type="text"
                      value={searchtext}
                      className="outline-none placeholder-slate-500 bg-transparent flex-grow"
                      placeholder="جستجو بین دوره ها"
                      onChange={(e) => setsearchtext(e.target.value)}
                    />
                    <button type="submit">
                      <IoIosSearch className="text-white w-7 h-7 cursor-pointer" />
                    </button>
                  </div>
                </div>
                <div className="rounded-xl p-5 hidden md:block bg-dark">
                  <div className="flex items-center justify-between">
                    <span className="font-danaDemiBold text-white">
                      فقط دوره های رایگان
                    </span>
                    <label className="w-[46px] h-6 bg-COLOR1-HA rounded-full cursor-pointer">
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
                <div className="rounded-xl p-5 hidden md:block bg-dark">
                  <div className="flex items-center justify-between">
                    <span className="font-danaDemiBold text-white">
                      دوره ‌های درحال پیش فروش
                    </span>
                    <label className="w-[46px] h-6 bg-COLOR1-HA rounded-full cursor-pointer">
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
                  className="w-full bg-dark  flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer  "
                >
                  <IoFunnelOutline className="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white hover:text-blue-500 transition">
                    فیلتر
                  </span>
                </div>
                <div
                  onClick={() => setshowbottomShet(true)}
                  className="w-full bg-dark flex items-center justify-center p-5 rounded-full gap-2 cursor-pointer   "
                >
                  <HiMiniArrowsUpDown className="w-6 h-6 shrink-0 text-white/70" />

                  <span
                    onClick={() => filtercourse("all")}
                    className="text-white hover:text-blue-500 cursor-pointer transition"
                  >
                    همه دوره ها
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-dark  rounded-xl">
                <div className="flex items-center shrink-0 gap-x-2">
                  <HiMiniArrowsUpDown className="w-6 h-6 shrink-0 text-white/70" />

                  <span className="text-white">مرتب سازی بر اساس :</span>
                </div>
                <div className="flex gap-x-5 text-white leading-[64px] lg:gap-x-8 h-full">
                  <a
                    onClick={() => filtercourse("all")}
                    className="sort-btn sort-btn--active cursor-pointer line-clamp-1"
                  >
                    همه دوره ها
                  </a>
                  <a
                    onClick={() => filtercourse("cheapest")}
                    className="line-clamp-1"
                    href="#"
                  >
                    ارزان ترین
                  </a>
                  <a
                    onClick={() => filtercourse("expensive")}
                    className="line-clamp-1"
                    href="#"
                  >
                    گران ترین
                  </a>
                  <a
                    onClick={() => filtercourse("popular")}
                    className="line-clamp-1"
                    href="#"
                  >
                    پرمخاطب ها
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
          className={`fixed md:hidden transition bg_black_100  ${
            showbottomShet ? "openbuttomshet" : "closebuttomshet"
          } right-0 left-0 z-50 transition`}
        >
          <div className="flex items-center rounded-t-2xl  p-4 justify-between bg-dark-light">
            <h2 className="text-white text-xl">مرتب سازی بر اساس</h2>
            <IoMdClose
              onClick={() => setshowbottomShet(false)}
              className="text-white w-6 h-6 cursor-pointer "
            />
          </div>
          <ul className="text-white text-[17px] p-4 flex flex-col gap-6 mt-3">
            <li className="bordred border-b-[1px] pb-3  border-white/70 ">
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("all");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                همه دوره ها
              </a>
            </li>
            <li className="bordred border-b-[1px] pb-3  border-white/70 ">
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("cheapest");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                ارزان ترین
              </a>
            </li>
            <li className="bordred border-b-[1px] pb-3  border-white/70 ">
              <a
                onClick={() => {
                  setshowbottomShet(false);
                  filtercourse("expensive");
                }}
                className="transition cursor-pointer  hover:text-green-500"
              >
                گران ترین
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
                پرمخاطب‌ ها
              </a>
            </li>
          </ul>
        </div>
        {/* filter box sm */}
        <div
          className={`fixed filter  md:hidden bg_drop_down_nav  ${
            showfilterbox && "filter--open "
          } `}
        >
          <div className="flex items-center   p-4 justify-between bg-dark-light">
            <h2 className="text-white text-xl flex items-center gap-2">
              <IoMdClose
                onClick={() => setshowfilterbox(false)}
                className="mb-1 w-6 h-6 cursor-pointer "
              />
              فیلتر‌ها
            </h2>
            <h2 className="text-red-500 text-base flex items-center gap-2">
              حذف فیلترها
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
          <ul className="text-white text-[17px] p-4 flex flex-col gap-8 mt-3">
            <li className="bordred border-b-[1px] pb-5  border-white/80  ">
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                فقط دوره‌های رایگان
                <label className="w-[46px] h-6 bg-dark-light rounded-full cursor-pointer">
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
            <li className="bordred border-b-[1px] pb-5  border-white/80  ">
              <a
                href="#"
                className="transition flex items-center justify-between px-5  hover:text-green-500"
              >
                درحال پیش فروش
                <label className="w-[46px] h-6 bg-dark-light rounded-full cursor-pointer">
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
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(contex) {
  let res = await fetch(
    `http://localhost:3000/api/course/search/${contex.query.text}`
  );
  let data = await res.json();
  let resAllcourse = await fetch(`http://localhost:3000/api/course`);
  let dataAllcourse = await resAllcourse.json();
  let Allcourse = JSON.parse(JSON.stringify(dataAllcourse));
  let courses = JSON.parse(JSON.stringify(data));
  return {
    props: { courses, Allcourse },
  };
}
