import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export default function CourseCard() {
  return (
    <div className="bg_black_100 m-2   h-auto rounded-2xl transition-all duration-500">
      <Link href="#">
        <Image
          src="/image/badusb-1-768x432.webp"
          className="rounded-t-2xl h-[190px] w-full"
          width={310}
          height={170}
        />
      </Link>
      <div className="p-4">
        <Link
          href="#"
          className="text-white mb-3 line-clamp-2 text-[18px] font-medium"
        >
          تست نفوذ با BadUSB
        </Link>

        <div className="flex items-center justify-between border-t pt-3 border-b-neutral-700/70 px-2 pb-3">
          <span className="text-white/70 ">میزان مشاهده</span>
          <div className="flex items-center gap-1 text-white/70">57%</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 h-[5px] rounded-full">
          <div className="bg-green-500 h-full rounded-full w-[57%]"></div>
        </div>
      </div>
    </div>
  );
}
