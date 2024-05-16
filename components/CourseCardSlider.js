import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export default function CourseCard({
  temp,
  title,
  image,
  desc,
  teacher,
  price,
  student,
  _id,
}) {
  return (
    <div
      className="bg-dark m-2 w-[320px] h-[420px] rounded-2xl transition-all duration-500"
      style={{
        transform: `translateX(${temp}px)`,
      }}
    >
      <Link href={`/coursdetails/${_id}`}>
        <Image
          src={`/image/${image}`}
          className="rounded-t-2xl h-[190px]"
          width={320}
          height={300}
          alt={title}
        />
      </Link>
      <div className="p-4">
        <Link
          href={`/coursdetails/${_id}`}
          className="text-white mb-3 line-clamp-1 text-[21px] font-medium"
        >
          {title}
        </Link>
        <p className="line-clamp-2 text-white opacity-70 text-[16px] mb-6">
          {desc}
        </p>
        <div className="flex items-center justify-between border-b border-b-neutral-500 px-2 pb-3">
          <span className="text-white opacity-70 ">{teacher}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            5.0
            <FaStar className=" text-sm" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-white opacity-70 flex items-center gap-1 text-sm">
            <LuUsers className="text-white opacity-70 text-xl" />
            {student}
          </span>
          <span className="text-green-500 text-[18px]">{price}تومان</span>
        </div>
      </div>
    </div>
  );
}
