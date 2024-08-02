import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoFolderOpenOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { FaRightToBracket } from "react-icons/fa6";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useGlobalState } from "@/context/GlobalState";

export default function Sidebaruserdeatails({ showsidebar, setshowsidebar }) {
  let rout = useRouter();
  const { state } = useGlobalState();

  return (
    <aside
      className={`${showsidebar ? "active_Sidebar  " : "NONactive_Sidebar "
        } fixed top-0 bottom-0 -right-64  ${state.them === "dark" ? "text-white bg-dark" : "text-black bg-white"
        } bg-gray-700 md:bg-slate-700/0   z-30 lg:static flex flex-col w-64 lg:w-56 lg:mt-10 px-7 py-5 lg:px-0 lg:py-0 shrink-0 lg:min-h-[calc(100vh-68px)] transition-all lg:transition-none`}
    >
      <div className="flex items-center justify-between pb-5 mb-7 border-b md:border-none border-b-slate">
        <Link href="/" className="flex items-center gap-x-1 md:gap-x-2">
          <Image
            src="/image/logo.webp"
            className="h-12 "
            width={70}
            height={40}
            alt="logo"
          />
        </Link>
        <div
          className={` ${state.them === "dark"
              ? "bg-[#ffffff0D] text-white"
              : "bg_white_100 text-gray-700"
            } flex items-center md:hidden  p-4 rounded-full  justify-center`}
        >
          <IoMdClose
            onClick={() => setshowsidebar(false)}
            className=" w-5 h-5 text-xl cursor-pointer hover:text-green-500 transition-all"
          />
        </div>
      </div>
      <div className="space-y-4 ">
        <Link
          href="/userdeatails"
          className={`flex items-center gap-x-2 h-10 px-3 rounded-lg bg-primary ${rout.route === "/userdeatails" && "bg-green-500"
            } `}
        >
          <AiOutlineHome className=" w-6 h-6 " />
          {
            state.lan === "fa"
              ? "پیشخوان"
              : state.lan === "en"
                ? "Dashboard"
                : state.lan === "ku"
                  ? "Pêşxan"
                  : "Dashboard"
          }
          {" "}
        </Link>
        <Link
          href="/userdeatails/mycourse"
          className={`flex items-center gap-x-2 h-10 px-3 rounded-lg bg-primary ${rout.route === "/userdeatails/mycourse" && "bg-green-500"
            } `}
        >
          <IoFolderOpenOutline className=" w-6 h-6 " />
          {
            state.lan === "fa"
              ? "دوره‌های من"
              : state.lan === "en"
                ? "My Courses"
                : state.lan === "ku"
                  ? "Dersên min"
                  : "Meine Kurse"
          }
          {" "}
        </Link>
        <Link
          href="/userdeatails/usertiket"
          className={`flex items-center gap-x-2 h-10 px-3 rounded-lg bg-primary ${rout.route === "/userdeatails/usertiket"
              ? "bg-green-500"
              : rout.route === "/userdeatails/usertiket/[id]"
                ? "bg-green-500"
                : rout.route === "/userdeatails/usertiket/newticket"
                  ? "bg-green-500"
                  : ""
            } `}
        >
          <HiOutlineChatBubbleLeftRight className=" w-6 h-6 " />
          {
            state.lan === "fa"
              ? "تیکت‌ها"
              : state.lan === "en"
                ? "Tickets"
                : state.lan === "ku"
                  ? "Tikêtan"
                  : "Tickets"
          }
          {" "}
        </Link>
        <Link
          href="/userdeatails/accontdeatails"
          className={`flex items-center gap-x-2 h-10 px-3 rounded-lg bg-primary ${rout.route === "/userdeatails/accontdeatails" && "bg-green-500"
            } `}
        >
          <FaRegUser className=" w-6 h-6 " />
          {
            state.lan === "fa"
              ? "جزئیات حساب"
              : state.lan === "en"
                ? "Account Details"
                : state.lan === "ku"
                  ? "Detalên hesabê"
                  : "Kontodetails"
          }
          {" "}
        </Link>
        <button
          onClick={() => {
            fetch("https://sabzlearn-psi.vercel.app/api/auth/signout").then((res) => {
              res.status === 200 && rout.push("/");
            });
          
          }}
          className="flex items-center gap-x-2 h-10 px-3 rounded-lg bg-primary 
           "
        >
          <FaRightToBracket className=" w-6 h-6 " />
          {
            state.lan === "fa"
              ? "خروج"
              : state.lan === "en"
                ? "Logout"
                : state.lan === "ku"
                  ? "Derketin"
                  : "Abmelden"
          }
          {" "}
        </button>
      </div>
    </aside>
  );
}
