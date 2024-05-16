import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CourseCard({ progress = 0, image, title, courseid }) {
  return (
    <div className=" flex flex-col overflow-hidden bg_black_100  border border-gray-700 rounded-2xl">
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
        <h4 className=" h-12 line-clamp-2 text-white mb-2.5">
          <Link href={`/coursdetails/${courseid}`}>{title}</Link>
        </h4>
        <div className="pt-3 border-t border-t-gray-700">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-white">میزان مشاهده</span>
            <span className="text-slate-500 dark:text-slate-400">
              {progress}%
            </span>
          </div>
          <div className="bg-gray-700 h-[5px] rounded-full">
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
