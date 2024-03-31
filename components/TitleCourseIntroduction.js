import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
export default function TitleCourseIntroduction({
  title,
  desc,
  link,
  linktitle,
}) {
  return (
    <div className="flex  md:flex-row flex-col gap-6  items-center md:justify-between px-12 mt-16">
      <div>
        <h3 className="text-white text-center md:text-start text-2xl sm:text-2.5xl font-medium mb-5">
          <span class="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm me-4"></span>
          {title}
        </h3>

        <p className=" text-slate-500 font-danaMedium sm:text-lg text-center sm:text-right">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link className="text-green-500 text-[16px] font-medium" href={link}>
          {linktitle}
        </Link>
        <FaAngleLeft className="text-green-500" />
      </div>
    </div>
  );
}
