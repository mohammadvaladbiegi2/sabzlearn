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

export default function Sidebaruserdeatails({ showsidebar, setshowsidebar }) {
  let rout = useRouter();

  return (
    <aside
      className={`${
        showsidebar ? "active_Sidebar  " : "NONactive_Sidebar "
      } fixed top-0 bottom-0 -right-64  bg-gray-700 md:bg-slate-700/0   z-30 lg:static flex flex-col w-64 lg:w-56 lg:mt-10 px-7 py-5 lg:px-0 lg:py-0 shrink-0 lg:min-h-[calc(100vh-68px)] transition-all lg:transition-none`}
    >
      <div className="flex items-center justify-between pb-5 mb-7 border-b md:border-none border-b-slate">
        <Link href="/" className="flex items-center gap-x-1.5 md:gap-x-2.5">
          <Image
            src="/image/logo.webp"
            className="h-12 "
            width={70}
            height={40}
            alt="logo"
          />
        </Link>
        <div className="flex items-center md:hidden bg-[#ffffff0D] p-4 rounded-full  justify-center">
          <IoMdClose
            onClick={() => setshowsidebar(false)}
            className="text-white w-5 h-5 text-xl cursor-pointer hover:text-green-500 transition-all"
          />
        </div>
      </div>
      <div className="space-y-4 text-white">
        <Link
          href="/userdeatails"
          className={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails" && "bg-green-500"
          } text-white`}
        >
          <AiOutlineHome className="text-white w-6 h-6 " />
          پیشخوان{" "}
        </Link>
        <Link
          href="/userdeatails/mycourse"
          className={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails/mycourse" && "bg-green-500"
          } text-white`}
        >
          <IoFolderOpenOutline className="text-white w-6 h-6 " />
          دوره های من{" "}
        </Link>
        <Link
          href="/userdeatails/usertiket"
          className={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails/usertiket"
              ? "bg-green-500"
              : rout.route === "/userdeatails/usertiket/[idticket]"
              ? "bg-green-500"
              : rout.route === "/userdeatails/usertiket/newticket"
              ? "bg-green-500"
              : ""
          } text-white`}
        >
          <HiOutlineChatBubbleLeftRight className="text-white w-6 h-6 " />
          تیکت ها{" "}
        </Link>
        <Link
          href="/userdeatails/accontdeatails"
          className={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails/accontdeatails" && "bg-green-500"
          } text-white`}
        >
          <FaRegUser className="text-white w-6 h-6 " />
          جزئیات حساب{" "}
        </Link>
        <button
          onClick={() => {
            fetch("http://localhost:3000/api/auth/signout").then((res) => {
              res.status === 200 && rout.push("/");
            });
          }}
          className="flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary 
           text-white"
        >
          <FaRightToBracket className="text-white w-6 h-6 " />
          خروج{" "}
        </button>
      </div>
    </aside>
  );
}
