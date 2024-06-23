import Image from "next/image";
import React, { useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import { useGlobalState } from "@/context/GlobalState";
import { FaMoon } from "react-icons/fa";
import { useRouter } from "next/router";
export default function Sidebar({ setshowsidebar, showsidebar }) {
  const { state, dispatch } = useGlobalState();
  const [searchtext, setSearchtext] = useState("");
  let route = useRouter();

  return (
    <div
      className={`${
        showsidebar ? "active_Sidebar" : "NONactive_Sidebar"
      } xl:hidden ${
        state.them === "dark" ? "bg-dark text-white" : "bg-white text-black"
      } w-60 overflow-y-auto fixed top-0 bottom-0 z-50 p-4 transition-all right-[-240px]`}
    >
      <div className="flex items-center justify-between pb-6 relative border-b  border-b-white/10">
        <Link href="/">
          <Image
            src="/image/logo.webp"
            className="h-12 "
            width={70}
            height={40}
            alt="logo"
          />
        </Link>
        <div className="flex gap-x-3">
          <div
            className={`flex items-center ${
              state.them === "dark"
                ? "bg-[#ffffff0D] text-white"
                : "text-gray-500 bg_white_100"
            } p-4 rounded-full  justify-center`}
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
          <div
            className={`flex items-center ${
              state.them === "dark"
                ? "bg-[#ffffff0D] text-white"
                : "text-gray-500 bg_white_100"
            } p-4 rounded-full  justify-center`}
          >
            <IoMdClose
              onClick={() => setshowsidebar(false)}
              className=" w-5 h-5 text-xl cursor-pointer hover:text-green-500 transition-all"
            />
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          route.push(`/searchcours/${searchtext}`);
        }}
        className={`flex items-center ${
          state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
        }  p-3 my-2 rounded-full justify-center`}
      >
        <input
          type="text"
          className="input_navBar text-slate-300 text-sm  "
          placeholder="چی مخوای یادبگیری؟"
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <button type="submit">
          <IoIosSearch
            className={`${
              state.them === "dark" ? "text-white" : "text-gray-500"
            }  w-4 h-4 cursor-pointer`}
          />
        </button>
      </form>
      <ul className="py-2 mt-2">
        <li className="group my-6">
          <Link
            href="/searchcours/frontend"
            className="text-[18px] group-hover:text-green-500 transition-colors cursor-pointer flex items-center justify-between"
          >
            فرانت اند{" "}
            <FaAngleLeft className="h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </Link>
        </li>
        <li className="group my-6">
          <Link
            href="/searchcours/security"
            className="group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between "
          >
            امنیت{" "}
            <FaAngleLeft className="h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </Link>
        </li>
        <li className="group my-6">
          <Link
            href="/searchcours/python"
            className="group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between "
          >
            پایتون{" "}
            <FaAngleLeft className="h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </Link>
        </li>
        <li className="group my-6">
          <Link
            href="/searchcours/php"
            className="group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between "
          >
            پی‌اچ‌پی{" "}
            <FaAngleLeft className="h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </Link>
        </li>
        <li className="group my-6">
          <Link
            href="/searchcours/SkillUpgrade"
            className="group-hover:text-green-500 text-[18px] transition-colors cursor-pointer flex items-center justify-between "
          >
            ارتقامهارت{" "}
            <FaAngleLeft className="h-4 w-4 group-hover:text-green-500 transition-colors cursor-pointer" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
