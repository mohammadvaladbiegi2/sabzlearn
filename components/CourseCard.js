import { useGlobalState } from "@/context/GlobalState";
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
  const { state } = useGlobalState();
  return (
    <div
      className={`${state.lan !== "fa" && "ltr"} flex flex-col ${
        state.them === "dark" ? "bg-dark text-white/70" : "bg-white text-black"
      }  border border-none h-fit rounded-2xl`}
    >
      <div className="relative h-42 group">
        <Link
          className="block w-full h-full"
          href={`/coursdetails/${_id}`}
          title="بهینه نویسی کد ها در پایتون"
        >
          <Image
            className="block w-full h-full object-cover rounded-2xl"
            src={`/image/${image}`}
            alt={title?.en}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="p-3">
        <div className="flex-grow px-4 pt-4 pb-3">
          <h3 className="line-clamp-1 mb-3">
            {state.lan === "fa"
              ? title?.fa
              : state.lan === "en"
              ? title?.en
              : state.lan === "ku"
              ? title?.ku
              : title?.ge}
            <Link href="/coursdetails/5" className="line-clamp-1"></Link>
          </h3>
          <p className="text-sm  line-clamp-2 opacity-70">
            {state.lan === "fa"
              ? desc?.fa
              : state.lan === "en"
              ? desc?.en
              : state.lan === "ku"
              ? desc?.ku
              : desc?.ge}
          </p>
        </div>
        <div className="px-4 pb-3">
          <div
            className={`flex justify-between items-center gap-2  text-sm pb-3 border-b ${
              state.them === "dark" ? "border-b-white/10" : "border-b-black/10"
            }`}
          >
            <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
              <LuUsers className="w-5 h-5 mb-1" />

              {state.lan === "fa" ? teacher?.fa : teacher?.en}
            </div>
            <div className="flex items-center gap-x-0.5 text-amber-500">
              <span>5.0</span>
              <FaStar className="w-5 h-5 mb-1" />
            </div>
          </div>
          <div className="flex items-center  justify-between pt-3">
            <span className="flex items-center gap-x-0.5  text-sm">
              <LuUsers className="w-5 h-5 mb-1" />
              {student}{" "}
            </span>
            <div className="flex flex-col">
              <span className="text-green-500  text-lg">
                {}{" "}
                {state.lan === "fa"
                  ? `${price.toLocaleString("fa-IR")}تومان`
                  : `${price.toLocaleString()}$`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
