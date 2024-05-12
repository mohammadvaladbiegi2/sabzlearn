import Image from "next/image";
import React from "react";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import moment from "moment-jalaali";

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

  return (
    <div className="bg-dark m-2 w-[320px] rounded-xl transition hover:-translate-y-2">
      <div className="relative image_articls">
        <Image
          src={`/image/${img}`}
          className="rounded-t-2xl h-[190px] "
          width={320}
          height={190}
        />
      </div>

      <div className="p-3">
        <h3 className="line-clamp-1 text-white text-lg">{title}</h3>
        <p className="text_articls_card text-justify line-clamp-4 text-white/70 my-4">
          {desc}
        </p>
        <div className=" flex justify-between items-center text-white/70 text-sm p-4 border-b border-b-white/10">
          <div className="flex items-center gap-x-0.5">
            <LuUsers className="text-white opacity-70 text-xl" />
            <a href="#" className="mt-1">
              {writer}
            </a>
          </div>
          <div className="flex items-center gap-x-0.5">
            <MdOutlineDateRange className="text-white  opacity-70 text-xl" />
            <span className="mt-1">{jalaliDate.slice(0, 10)}</span>
          </div>
        </div>
        <div className="flex justify-center group mt-5 mb-2">
          <Link
            href={`/articls/${_id}`}
            className="group-hover:text-green-500 flex items-center gap-1 text-lg text-white   transition-colors"
          >
            مطالعه مقاله
            <FaCircleArrowLeft className="h-5 w-5 mb-1 text-white/70 group-hover:text-green-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
