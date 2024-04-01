import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export default function CourseCard() {
  return (
    <div className="bg-dark m-2 w-[320px] h-[420px] rounded-2xl">
      <Link href="#">
        <Image
          src="/image/badusb-1-768x432.webp"
          className="rounded-t-2xl h-[190px]"
          width={320}
          height={190}
        />
      </Link>
      <div className="p-4">
        <Link
          href="#"
          className="text-white mb-3 line-clamp-2 text-[21px] font-medium"
        >
          تست نفوذ با BadUSB
        </Link>
        <p className="line-clamp-2 text-white opacity-70 text-[16px] mb-6">
          در این دوره کاربردی ما به مفهوم HID ATTACK و چگونگی پیاده سازی سناریو
          های جذاب از چگونگی نفوذ
        </p>
        <div className="flex items-center justify-between border-b border-b-neutral-500 px-2 pb-3">
          <span className="text-white opacity-70 ">اشکان مقدس</span>
          <div className="flex items-center gap-1 text-yellow-500">
            5.0
            <FaStar className=" text-sm" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-white opacity-70 flex items-center gap-1 text-sm">
            <LuUsers className="text-white opacity-70 text-xl" />
            49
          </span>
          <span className="text-green-500 text-[18px]">1,300,000تومان</span>
        </div>
      </div>
    </div>
  );
}
