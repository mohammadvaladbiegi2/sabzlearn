import { useGlobalState } from "@/context/GlobalState";
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
  const { state } = useGlobalState();

  return (
    <div
      className={`${
        state.them === "dark" ? "bg-dark text-white" : "bg-white text-black"
      } m-2 w-[320px] h-[420px] ${
        state.lan !== "fa" && "ltr"
      } rounded-2xl transition-all duration-500`}
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
          alt={title?.en}
        />
      </Link>
      <div className="p-4">
        <Link href={`/coursdetails/${_id}`} className=" mb-3 line-clamp-1   ">
          {state.lan === "fa"
            ? title?.fa
            : state.lan === "en"
            ? title?.en
            : state.lan === "ku"
            ? title?.ku
            : title?.ge}
        </Link>
        <p className="line-clamp-2  opacity-70  mb-6">
          {state.lan === "fa"
            ? desc?.fa
            : state.lan === "en"
            ? desc?.en
            : state.lan === "ku"
            ? desc?.ku
            : desc?.ge}
        </p>
        <div className="flex items-center justify-between border-b border-b-neutral-500 px-2 pb-3">
          <span className=" opacity-70 ">
            {state.lan === "fa" ? teacher?.fa : teacher?.en}
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            5.0
            <FaStar className=" text-sm" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className=" opacity-70 flex items-center gap-1 text-sm">
            <LuUsers className=" opacity-70 text-xl" />
            {student}
          </span>
          <span className="text-green-500 text-[18px]">
            {" "}
            {state.lan === "fa"
              ? `${price.toLocaleString("fa-IR")}تومان`
              : `${price.toLocaleString()}$`}
          </span>
        </div>
      </div>
    </div>
  );
}
