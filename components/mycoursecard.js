import { useGlobalState } from "@/context/GlobalState";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CourseCard({ progress = 0, image, title, courseid }) {
  const { state } = useGlobalState();

  return (
    <div
      className={` flex flex-col overflow-hidden ${
        state.them === "dark"
          ? "bg_black_100  border border-gray-700 text-white"
          : " bg-white text-black"
      }  rounded-2xl`}
    >
      <div className="relative h-42">
        <Link
          className="w-full h-full block"
          href={`/coursdetails/${courseid}`}
          title="آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه"
        >
          <Image
            className="block w-full h-full  object-cover rounded-2xl"
            src={`/image/${image}`}
            alt={title}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
        <h4 className=" h-12 line-clamp-2  mb-2.5">
          <Link href={`/coursdetails/${courseid}`}>{state.lan === "fa" ? title.fa : state.lan === "en" ? title.en : state.lan === "ku" ? title.ku : title.ge}</Link>
        </h4>
        <div
          className={`pt-3 border-t ${
            state.them === "dark" ? "border-t-gray-700" : "border-t-slate-300"
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="">میزان مشاهده</span>
            <span className="text-slate-500 dark:text-slate-400">
              {progress}%
            </span>
          </div>
          <div
            className={`${
              state.them === "dark" ? "border-t-gray-700" : "border-t-slate-400"
            } h-[5px] rounded-full`}
          >
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
