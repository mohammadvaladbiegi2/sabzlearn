import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export default function CourseCard() {
  return (
    <div className=" flex flex-col overflow-hidden bg_black_100  border border-gray-700 rounded-2xl">
      <div className="relative h-42">
        <a
          className="w-full h-full block"
          href="#"
          title="آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه"
        >
          <Image
            className="block w-full h-full  object-cover rounded-2xl"
            src="/image/badusb-1-768x432.webp"
            alt="آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه"
            width={200}
            height={200}
          />
        </a>
      </div>
      <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
        <h4 className=" h-12 line-clamp-2 text-white mb-2.5">
          <a href="#">آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه</a>
        </h4>
        <div className="pt-3 border-t border-t-gray-700">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-white">میزان مشاهده</span>
            <span className="text-slate-500 dark:text-slate-400">57%</span>
          </div>
          <div className="bg-gray-700 h-[5px] rounded-full">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: "57%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
