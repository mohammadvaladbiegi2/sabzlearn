import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoFolderOpenOutline, IoSunnyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { useRouter } from "next/router";
import { useGlobalState } from "@/context/GlobalState";
import { FaMoon } from "react-icons/fa";

export default function navbar() {
  let route = useRouter();
  const [showsidebar, setshowsidebar] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [searchtext, setSearchtext] = useState("");
  let [islogin, setislogin] = useState(false);
  let [showbox, setshowbox] = useState(false);
  let [showboxlanguage, setshowboxlanguage] = useState(false);
  const { state, dispatch } = useGlobalState();
  const getuser = async (cookies) => {
    let res = await fetch("http://localhost:3000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${cookies}`,
      },
    });

    if (res.status === 200) {
      setislogin(true);
    }
  };
  useEffect(() => {
    const token = document.cookie /// get cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      setUserToken(token.split("=")[1]);
    }

    getuser(userToken);
  }, []);
  return (
    <nav
      className={`px-3 md:px-8 py-6 ${
        state.them === "dark" ? "bg-dark" : "bg-white"
      }  `}
    >
      {/* xl size */}
      <div className="hidden xl:flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/image/logo.webp"
              className="h-12 "
              width={70}
              height={40}
              alt="logo"
            />
          </Link>
          <ul
            className={`${
              state.them === "dark" ? "text-white" : "text-black"
            } flex items-center justify-around gap-6`}
          >
            <li className="flex items-center relative group gap-2">
              <Link
                href="/searchcours/frontend"
                className=" group-hover:text-green-500  transition-colors   text-lg"
              >
                فرانت‌اند
              </Link>
              <IoIosArrowDown className="   group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div
                  className={` flex flex-col gap-y-4 w-64 ${
                    state.them === "dark"
                      ? "bg-dark bg_drop_down_nav  border-y-4  border-x-0 border-y-green-500 border-green-500 shadow-none"
                      : "bg-white"
                  }  border-y  p-5  shadow-sm  rounded-xl`}
                >
                  <Link
                    href="/coursdetails/6640c9a2eb3e5323a79b0d89"
                    className="  hover:text-green-500 transition-colors"
                  >
                    توسعه کتابخانه با جاوااسکریپت
                  </Link>
                  <Link
                    href="/coursdetails/6640e375eb3e5323a79b0d9d"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش جامع Tailwind css{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e406eb3e5323a79b0d9f"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش کاربردی Typescript{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e46feb3e5323a79b0da1"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش PWA{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e4d1eb3e5323a79b0da3"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش Next.js{" "}
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <Link
                href="/searchcours/security"
                className=" group-hover:text-green-500  transition-colors   text-lg"
              >
                امنیت
              </Link>
              <IoIosArrowDown className="   group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div
                  className={` flex flex-col gap-y-4 w-64 ${
                    state.them === "dark"
                      ? "bg-dark bg_drop_down_nav  border-y-4  border-x-0 border-y-green-500 border-green-500 shadow-none"
                      : "bg-white"
                  }  border-y  p-5  shadow-sm  rounded-xl`}
                >
                  <Link
                    href="/coursdetails/6640e5b3eb3e5323a79b0da7"
                    className="  hover:text-green-500 transition-colors"
                  >
                    دوره هکرقانونمند{" "}
                  </Link>
                  <Link
                    href="/coursdetails/664103f0eb3e5323a79b0da9"
                    className="  hover:text-green-500 transition-colors"
                  >
                    اموزش لینوکس با گرایش امنیت{" "}
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <Link
                href="/searchcours/python"
                className=" group-hover:text-green-500  transition-colors   text-lg"
              >
                پایتون
              </Link>
              <IoIosArrowDown className="   group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div
                  className={` flex flex-col gap-y-4 w-64 ${
                    state.them === "dark"
                      ? "bg-dark bg_drop_down_nav  border-y-4  border-x-0 border-y-green-500 border-green-500 shadow-none"
                      : "bg-white"
                  }  border-y  p-5  shadow-sm  rounded-xl`}
                >
                  <Link
                    href="/coursdetails/6640ca95eb3e5323a79b0d8b"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش جنگو{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e160eb3e5323a79b0d95"
                    className="  hover:text-green-500 transition-colors"
                  >
                    بهینه نویسی کد ها در پایتون{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e1cbeb3e5323a79b0d97"
                    className="  hover:text-green-500 transition-colors"
                  >
                    Data Visualization با پایتون{" "}
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <Link
                href="/searchcours/php"
                className=" group-hover:text-green-500  transition-colors   text-lg"
              >
                پی‌اچ‌پی
              </Link>
              <IoIosArrowDown className="   group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div
                  className={` flex flex-col gap-y-4 w-64 ${
                    state.them === "dark"
                      ? "bg-dark bg_drop_down_nav  border-y-4  border-x-0 border-y-green-500 border-green-500 shadow-none"
                      : "bg-white"
                  }  border-y  p-5  shadow-sm  rounded-xl`}
                >
                  <Link
                    href="/coursdetails/6640cb2deb3e5323a79b0d8d"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش جامع api نویسی با PHP{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e24feb3e5323a79b0d99"
                    className="  hover:text-green-500 transition-colors"
                  >
                    وب سوکت در لاراول با Reverb{" "}
                  </Link>
                  <Link
                    href="/coursdetails/6640e2b5eb3e5323a79b0d9b"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش ساخت ربات تلگرام با PHP{" "}
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex items-center relative group gap-2">
              <Link
                href="/searchcours/SkillUpgrade"
                className=" group-hover:text-green-500  transition-colors   text-lg"
              >
                ارتقا مهارت
              </Link>
              <IoIosArrowDown className="   group-hover:text-green-500 transition-colors " />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                <div
                  className={` flex flex-col gap-y-4 w-64 ${
                    state.them === "dark"
                      ? "bg-dark bg_drop_down_nav  border-y-4  border-x-0 border-y-green-500 border-green-500 shadow-none"
                      : "bg-white"
                  }  border-y  p-5  shadow-sm  rounded-xl`}
                >
                  <Link
                    href="/coursdetails/6640cc7eeb3e5323a79b0d8f"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش Docker از صفر مطلق!
                  </Link>
                  <Link
                    href="/coursdetails/6640ccfdeb3e5323a79b0d91"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش جامع پروژه محور GraphQL
                  </Link>
                  <Link
                    href="/coursdetails/6640e0caeb3e5323a79b0d93"
                    className="  hover:text-green-500 transition-colors"
                  >
                    آموزش git و github
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              route.push(`/searchcours/${searchtext}`);
            }}
            className={`flex items-center ${
              state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
            }  p-4 rounded-full justify-center`}
          >
            <input
              type="text"
              className="input_navBar text-slate-300   "
              placeholder="چی مخوای یادبگیری؟"
              value={searchtext}
              onChange={(e) => setSearchtext(e.target.value)}
            />
            <button type="submit">
              <IoIosSearch
                className={`${
                  state.them === "dark" ? "text-white" : "text-gray-500"
                }  w-6 h-6 cursor-pointer`}
              />
            </button>
          </form>
          <div
            className={`flex items-center ${
              state.them === "dark"
                ? "bg-[#ffffff0D] text-white"
                : "bg_white_100 text-gray-400"
            }  p-4 rounded-full  justify-center`}
          >
            {state.them === "dark" ? (
              <IoSunnyOutline
                onClick={() => dispatch({ type: "light" })}
                className=" w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all"
              />
            ) : (
              <FaMoon
                onClick={() => dispatch({ type: "dark" })}
                className=" w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all"
              />
            )}
          </div>

          {islogin ? (
            <>
              <div
                onClick={() => {
                  setshowboxlanguage(false);
                  setshowbox((prev) => !prev);
                }}
                className={`flex  ${showbox && "z-50"} items-center  ${
                  state.them === "dark"
                    ? "bg-[#ffffff0D] text-white"
                    : "bg_white_100 text-gray-400"
                } p-4 rounded-full  justify-center`}
              >
                <FaRegUser className=" w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
              </div>

              <div
                className={`absolute ${
                  showbox ? "visible opacity-100" : "opacity-0 hidden"
                }    left-8 ${
                  state.them === "dark"
                    ? "bg-dark text-white"
                    : "bg-white text-black"
                } top-[14%] pt-4 z-10 transition-all show`}
              >
                <div className="w-[278px]  border-0 p-5 pb-3.5 rounded-xl">
                  <div className="flex items-center border-b border-b-white/5 pb-5 mb-2">
                    <a href="#" className="shrink-0">
                      <Image
                        src="/image/userimageaccont.png"
                        alt="user"
                        className="object-cover w-14 h-14 rounded-full inline-block"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
                      <span className=" inline-block truncate">
                        mohammad valadbiegi
                      </span>
                      <span className="text-sm  text-green-500 inline-block">
                        موجودی: 0 تومان
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/userdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <AiOutlineHome className=" w-6 h-6 " />
                      پیشخوان{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/mycourse"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <IoFolderOpenOutline className=" w-6 h-6 " />
                      دوره های من{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/usertiket"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <HiOutlineChatBubbleLeftRight className=" w-6 h-6 " />
                      تیکت ها{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/accontdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <FaRegUser className=" w-6 h-6 " />
                      جزئیات حساب{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link href="/auth/login">
              <button className="text-white font-bold flex items-center justify-center py-3 px-5 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer">
                {" "}
                <FaRegUser className="text-white   text-[23px] mt-1" />
                ورود | عضویت
              </button>
            </Link>
          )}
          <span
            onClick={() => {
              setshowboxlanguage((prev) => !prev);
              setshowbox(false);
            }}
            className={`flex items-center gap-3 cursor-pointer ${
              state.them === "dark"
                ? "bg-[#ffffff0D] text-white"
                : "bg_white_100 text-black"
            }  p-4 rounded-full  justify-center`}
          >
            <Image
              src={`/image/${
                state.lan === "fa"
                  ? "Iran-512.webp"
                  : state.lan === "en"
                  ? "en-flag.png"
                  : state.lan === "ku"
                  ? "kurdi.png"
                  : "3909219.png"
              }`}
              width={20}
              height={20}
              className=" rounded-full"
              alt="languge"
            />
            <IoLanguage className=" w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </span>
          <div
            className={` absolute ${
              showboxlanguage ? "visible opacity-100" : "opacity-0 hidden"
            }    left-8 top-[14%] pt-4 z-10 transition-all  show`}
          >
            <div
              className={`${
                state.them === "dark"
                  ? "  bg-dark text-white"
                  : "bg-white text-black"
              }  w-[278px] border-0 p-5 pb-3.5 rounded-xl`}
            >
              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "ku" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">kurdi</span>
                <Image
                  src="/image/kurdi.png"
                  width={20}
                  height={20}
                  className=" rounded-full"
                  alt="languge"
                />
              </span>
              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "en" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">English </span>
                <Image
                  src="/image/en-flag.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                  alt="languge"
                />
              </span>

              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "fa" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">فارسی </span>
                <Image
                  src="/image/Iran-512.webp"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                  alt="languge"
                />
              </span>
              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "ge" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">Deutsch </span>
                <Image
                  src="/image/3909219.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                  alt="languge"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* phone size */}
      <div className="xl:hidden flex items-center justify-between">
        <span
          className={`flex items-center ${
            state.them === "dark"
              ? "bg-[#ffffff0D] text-white"
              : "text-gray-500 bg_white_100"
          }  p-4 rounded-full  justify-center`}
        >
          <RxHamburgerMenu
            onClick={() => setshowsidebar(true)}
            className=" w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all"
          />
        </span>

        <Link href="/">
          <Image
            src="/image/logo.webp"
            className="h-12 mr-10"
            width={70}
            height={40}
            alt="languge"
          />
        </Link>
        <div className="flex items-center gap-2">
          {islogin ? (
            <>
              <div
                onClick={() => {
                  setshowbox((prev) => !prev);
                  setshowboxlanguage(false);
                }}
                className={`flex  ${showbox && "z-50"} items-center  ${
                  state.them === "dark"
                    ? "bg-[#ffffff0D] text-white"
                    : "bg_white_100 text-gray-400"
                } p-4 rounded-full  justify-center`}
              >
                <FaRegUser className=" w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
              </div>

              <div
                className={`absolute ${
                  showbox ? "visible opacity-100" : "opacity-0 hidden"
                }    left-8 ${
                  state.them === "dark"
                    ? "bg-dark text-white"
                    : "bg-white text-black"
                } top-[14%] pt-4 z-10 transition-all show`}
              >
                <div className="w-[278px]  border-0 p-5 pb-3.5 rounded-xl">
                  <div className="flex items-center border-b border-b-white/5 pb-5 mb-2">
                    <a href="#" className="shrink-0">
                      <Image
                        src="/image/userimageaccont.png"
                        alt="user"
                        className="object-cover w-14 h-14 rounded-full inline-block"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </a>
                    <div className="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
                      <span className=" inline-block truncate">
                        mohammad valadbiegi
                      </span>
                      <span className="text-sm  text-green-500 inline-block">
                        موجودی: 0 تومان
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/userdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <AiOutlineHome className=" w-6 h-6 " />
                      پیشخوان{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/mycourse"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <IoFolderOpenOutline className=" w-6 h-6 " />
                      دوره های من{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/usertiket"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <HiOutlineChatBubbleLeftRight className=" w-6 h-6 " />
                      تیکت ها{" "}
                    </span>
                  </Link>
                  <Link
                    href="/userdeatails/accontdeatails"
                    className="flex items-center justify-between px-2.5 h-12 rounded-lg  hover:bg-green-500 transition-colors"
                  >
                    <span className="flex items-center gap-x-2">
                      <FaRegUser className=" w-6 h-6 " />
                      جزئیات حساب{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link
              href="/auth/login"
              className={`flex items-center ${
                state.them === "dark"
                  ? "bg-[#ffffff0D] text-white"
                  : "bg_white_100 text-gray-500"
              }  p-4 rounded-full  justify-center`}
            >
              <HiOutlineArrowRightOnRectangle className=" w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
            </Link>
          )}
          <span
            onClick={() => {
              setshowboxlanguage((prev) => !prev);
              setshowbox(false);
            }}
            className={`flex items-center gap-3 cursor-pointer ${
              state.them === "dark"
                ? "bg-[#ffffff0D] text-white"
                : "bg_white_100 text-gray-500"
            }   p-4 rounded-full  justify-center`}
          >
            <Image
              src={`/image/${
                state.lan === "fa"
                  ? "Iran-512.webp"
                  : state.lan === "en"
                  ? "en-flag.png"
                  : state.lan === "ku"
                  ? "kurdi.png"
                  : "3909219.png"
              }`}
              width={20}
              height={20}
              className=" rounded-full"
              alt="languge"
            />
            <IoLanguage className="w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </span>
          <div
            className={` absolute ${
              showboxlanguage ? "visible opacity-100" : "opacity-0 hidden"
            }    left-8 top-[14%] pt-4 z-10 transition-all show`}
          >
            <div
              className={`w-[278px] ${
                state.them === "dark"
                  ? " bg-dark text-white"
                  : "bg-white text-black"
              } border-0 p-5 pb-3.5 rounded-xl`}
            >
              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "ku" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">kurdi</span>
                <Image
                  src="/image/kurdi.png"
                  width={20}
                  height={20}
                  className=" rounded-full"
                  alt="languge"
                />
              </span>
              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "en" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">English </span>
                <Image
                  src="/image/en-flag.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                  alt="languge"
                />
              </span>

              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "fa" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">فارسی </span>
                <Image
                  src="/image/Iran-512.webp"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                  alt="languge"
                />
              </span>
              <span
                onClick={() => {
                  setshowboxlanguage(false);
                  dispatch({ type: "ge" });
                }}
                className="flex items-center justify-between cursor-pointer px-2.5 h-12 rounded-lg hover:bg-green-500 transition-colors"
              >
                <span className="flex items-center gap-x-2">Deutsch </span>
                <Image
                  src="/image/3909219.png"
                  width={20}
                  height={20}
                  className="bg-white rounded-full"
                  alt="languge"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {<Sidebar showsidebar={showsidebar} setshowsidebar={setshowsidebar} />}
    </nav>
  );
}
