import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export default function CourseCard({
  title,
  image,
  desc,
  teacher,
  price,
  student,
  _id,
}) {
  return (
    <div className=" flex flex-col bg-dark border border-none rounded-2xl">
      <div className="relative h-42 group">
        <Link
          className="block w-full h-full"
          href={`/coursdetails/${_id}`}
          title="بهینه نویسی کد ها در پایتون"
        >
          <Image
            className="block w-full h-full object-cover rounded-2xl"
            src={`/image/${image}`}
            alt={title}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="p-3">
        <div className="flex-grow px-4.5 pt-4 pb-3">
          <h3 className="text-white line-clamp-2 mb-3">
            <Link href="/coursdetails/5" className="line-clamp-1">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-white/70 line-clamp-2 opacity-70">
            {desc}
          </p>
        </div>
        <div className="px-4.5 pb-3">
          <div className="flex justify-between items-center gap-2.5 text-white/70 text-sm pb-3 border-b border-b-white/10">
            <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
              <LuUsers className="w-5 h-5" />

              <a href="#">{teacher}</a>
            </div>
            <div className="flex items-center gap-x-0.5 text-amber-500">
              <span>5.0</span>
              <FaStar className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center  justify-between pt-3">
            <span className="flex items-center gap-x-0.5 text-white/70 text-sm">
              <LuUsers className="w-5 h-5" />
              {student}{" "}
            </span>
            <div className="flex flex-col">
              <span className="text-green-500  text-lg">{price} تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
