import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function TitleCourseIntroduction({
  title,
  desc,
  link,
  linktitle,
  showlink = true,
  showbutton = false,
  pointcolor,
  leftClick,
  rightClick,
}) {
  return (
    <div className="flex  md:flex-row flex-col gap-6  items-center md:justify-between px-12 my-20">
      <div>
        <h3 className="text-white text-center md:text-start text-2xl sm:text-2.5xl font-medium mb-5">
          <span
            class={`hidden sm:inline-block w-4 h-4 ${pointcolor}  rounded-sm me-4`}
          ></span>
          {title}
        </h3>

        <p className=" text-slate-500 font-danaMedium sm:text-lg text-center sm:text-right">
          {desc}
        </p>
      </div>
      {showlink && (
        <div className="flex items-center gap-4">
          <Link className="text-green-500 text-[16px] font-medium" href={link}>
            {linktitle}
          </Link>
          <FaAngleLeft className="text-green-500" />
        </div>
      )}
      {showbutton && (
        <div className="flex items-center gap-7 lg:pe-5">
          <div
            onClick={rightClick}
            className="flex items-center group border  border-green-500  hover:bg-green-500 p-4 rounded-full cursor-pointer  justify-center"
          >
            <FaAngleRight className="text-green-500 w-6 h-6 text-xl  group-hover:text-white transition-all" />
          </div>
          <div
            onClick={leftClick}
            className="flex items-center group border border-green-500  hover:bg-green-500 p-4 rounded-full cursor-pointer  justify-center"
          >
            <FaChevronLeft className="text-green-500 w-6 h-6 text-xl  group-hover:text-white transition-all" />
          </div>
        </div>
      )}
    </div>
  );
}
