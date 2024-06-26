import Image from "next/image";
import React from "react";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import moment from "moment-jalaali";
import { useGlobalState } from "@/context/GlobalState";

export default function ArticlsCard({
  img,
  desc,
  title,
  writer,
  createdAt,
  _id,
}) {
  const gregorianDate = moment(createdAt);
  const jalaliDate = gregorianDate.format("jYYYY/jMM/jDD HH:mm:ss");
  const { state } = useGlobalState();

  return (
    <div
      className={`${
        state.them === "dark" ? "bg-dark text-white" : "bg-white text-black"
      } m-2 w-[320px] rounded-xl  transition hover:-translate-y-2`}
    >
      <div
        className={`relative ${
          state.them === "dark" ? "image_articls" : "image_articls_light"
        } `}
      >
        <Image
          src={`/image/${img}`}
          className="rounded-t-2xl h-[190px] "
          width={320}
          height={190}
          alt={title}
        />
      </div>

      <div className="p-3">
        <h3 className="line-clamp-1  text-lg">
          {" "}
          {state.lan === "fa"
            ? title?.fa
            : state.lan === "en"
            ? title?.en
            : state.lan === "ku"
            ? title?.ku
            : title?.ge}
        </h3>
        <p className="text_articls_card text-justify line-clamp-4 opacity-70 my-4">
          {state.lan === "fa"
            ? desc?.fa
            : state.lan === "en"
            ? desc?.en
            : state.lan === "ku"
            ? desc?.ku
            : desc?.ge}
        </p>
        <div className=" flex justify-between items-center opacity-70 text-sm p-4 border-b border-b-white/10">
          <div className="flex items-center gap-x-0.5">
            <LuUsers className=" opacity-70 text-xl" />
            <a href="#" className="mt-1">
              {state.lan === "fa"
                ? writer?.fa
                : state.lan === "en"
                ? writer?.en
                : state.lan === "ku"
                ? writer?.ku
                : writer?.ge}
            </a>
          </div>
          <div className="flex items-center gap-x-0.5">
            <MdOutlineDateRange className="  opacity-70 text-xl" />
            <span className="mt-1">{jalaliDate.slice(0, 10)}</span>
          </div>
        </div>
        <div className="flex justify-center group mt-5 mb-2">
          <Link
            href={`/articls/${_id}`}
            className="group-hover:text-green-500 flex items-center gap-1 text-lg    transition-colors"
          >
            مطالعه مقاله
            <FaCircleArrowLeft className="h-5 w-5 mb-1 opacity-70 group-hover:text-green-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
