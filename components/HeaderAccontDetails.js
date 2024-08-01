import { useGlobalState } from "@/context/GlobalState";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
export default function HeaderAccontDetails({ setshowsidebar, username }) {
  const { state, dispatch } = useGlobalState();

  return (
    <header className="flex items-center justify-between bg-gray md:bg-transparent border-b md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 md:p-0">
      <h3
        className={`hidden md:block text-2xl ${state.them === "dark" ? "text-white" : "text-black"
          }`}
      >
        {username} {
          state.lan === "fa"
            ? "عزیز؛ خوش اومدی"
            : state.lan === "en"
              ? "Dear; Welcome"
              : state.lan === "ku"
                ? "Heval; Bi xêr hatî"
                : "Liebe/r; Willkommen"
        }
        🙌
      </h3>
      <div
        className={`flex md:hidden items-center ${state.them === "dark"
            ? "bg-[#ffffff0D] text-white"
            : " bg-white text-gray-400"
          } p-4 rounded-full  justify-center`}
      >
        <RxHamburgerMenu
          onClick={() => setshowsidebar(true)}
          className=" w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all"
        />
      </div>
      <div className="flex gap-x-3 md:gap-x-7">
        <Link
          href="/userdeatails/usertiket"
          className={`${state.them === "dark"
              ? "bg-[#ffffff0D] text-white"
              : " bg-white text-gray-400"
            } flex items-center  p-4 rounded-full  justify-center`}
        >
          <IoNotificationsOutline className=" w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
        </Link>
        <div
          className={`flex items-center ${state.them === "dark"
              ? "bg-[#ffffff0D] text-white"
              : "bg-white text-gray-400"
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
        <div className="md:flex items-center hidden    justify-center">
          <Image src="/image/userimageaccont.png" width={50} height={50} />{" "}
        </div>
      </div>
    </header>
  );
}
