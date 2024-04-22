import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoFolderOpenOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { FaRightToBracket } from "react-icons/fa6";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Sidebaruserdeatails() {
  let rout = useRouter();
  console.log(rout);
  return (
    <aside class="sidebar fixed top-0 bottom-0 -right-64 z-30 lg:static flex flex-col w-64 lg:w-56 lg:mt-10 px-7 py-5 lg:px-0 lg:py-0 shrink-0 lg:min-h-[calc(100vh-68px)] transition-all lg:transition-none">
      <div class="flex items-center justify-between pb-5 mb-7 border-b md:border-none border-b-slate">
        <a
          href="https://sabzlearn.ir"
          class="flex items-center gap-x-1.5 md:gap-x-2.5"
        >
          <Image
            src="/image/logo.webp"
            className="h-12 "
            width={70}
            height={40}
            alt="سبز لرن ممد"
          />
          <svg class="w-[86px] md:w-32 h-10 md:h-[57px]"></svg>
        </a>
      </div>
      <div class="space-y-4 text-white">
        <Link
          href="/userdeatails"
          class={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails" && "bg-green-500"
          } text-white`}
        >
          <AiOutlineHome className="text-white w-6 h-6 " />
          پیشخوان{" "}
        </Link>
        <Link
          href="/userdeatails/mycourse"
          class={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails/mycourse" && "bg-green-500"
          } text-white`}
        >
          <IoFolderOpenOutline className="text-white w-6 h-6 " />
          دوره های من{" "}
        </Link>
        <Link
          href="/userdeatails/usertiket"
          class={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
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
          class={`flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary ${
            rout.route === "/userdeatails/accontdeatails" && "bg-green-500"
          } text-white`}
        >
          <FaRegUser className="text-white w-6 h-6 " />
          جزئیات حساب{" "}
        </Link>
        <button
          onClick={() => {
            localStorage.clear();
            rout.push("/");
          }}
          class="flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary 
           text-white"
        >
          <FaRightToBracket className="text-white w-6 h-6 " />
          خروج{" "}
        </button>
      </div>
    </aside>
  );
}
