import React from "react";
import { IoCodeSlash } from "react-icons/io5";

export default function Waybox({ gradientfrom, gradientto, title, number }) {
  return (
    <div
      className={`py-5 text-white  overflow-hidden rounded-2xl flex justify-center items-center`}
      style={{
        backgroundImage: `linear-gradient(105deg, #${gradientfrom} 0%, #${gradientto} 100%)`,
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <IoCodeSlash className="text-[30px]" />
        <h5 className="text-[22px] lg:text-[25px] font-bold">{title}</h5>
        <span className="text-[14px] lg:text-[16px]">دوره {number}</span>
      </div>
    </div>
  );
}
