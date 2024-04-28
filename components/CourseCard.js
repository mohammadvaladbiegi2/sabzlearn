import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export default function CourseCard({ temp }) {
  return (
    <div class=" flex flex-col bg-dark border border-none rounded-2xl">
      <div class="relative h-42 group">
        <a
          class="block w-full h-full"
          href="#"
          title="بهینه نویسی کد ها در پایتون"
        >
          <Image
            class="block w-full h-full object-cover rounded-2xl"
            src="/image/badusb-1-768x432.webp"
            alt="بهینه نویسی کد ها در پایتون"
            width={200}
            height={200}
          />
        </a>
      </div>
      <div className="p-3">
        <div class="flex-grow px-4.5 pt-4 pb-3">
          <h3 class="text-white line-clamp-2 mb-3">
            <Link href="#">بهینه نویسی کد ها در پایتون</Link>
          </h3>
          <p class="text-sm text-white/70 line-clamp-2 opacity-70">
            همه میدونیم که زبان برنامه نویسی پایتون یه زبان خیلی جذاب، راحت و
            همینطور کاربردیه.&nbsp; قبل از اینکه بخواین این…
          </p>
        </div>
        <div class="px-4.5 pb-3">
          <div class="flex justify-between items-center gap-2.5 text-white/70 text-sm pb-3 border-b border-b-white/10">
            <div class="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
              <LuUsers class="w-5 h-5" />

              <a href="">رضا دولتی</a>
            </div>
            <div class="flex items-center gap-x-0.5 text-amber-500">
              <span>5.0</span>
              <FaStar class="w-5 h-5" />
            </div>
          </div>
          <div class="flex items-center  justify-between pt-3">
            <span class="flex items-center gap-x-0.5 text-white/70 text-sm">
              <LuUsers class="w-5 h-5" />
              738{" "}
            </span>
            <div class="flex flex-col">
              <span class="text-green-500  text-lg">540,000 تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
