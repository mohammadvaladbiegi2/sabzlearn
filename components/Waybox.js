import React from "react";

export default function Waybox({
  gradientfrom,
  gradientto,
  title,
  number,
  icon,
}) {
  return (
    <div
      className={`py-5 text-white  overflow-hidden rounded-2xl flex justify-center items-center`}
      style={{
        backgroundImage: `linear-gradient(105deg, #${gradientfrom} 0%, #${gradientto} 100%)`,
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        {icon}
        <h5 className="text-[22px] lg:text-[25px] font-bold">{title}</h5>
        <span className="text-[14px] lg:text-[16px]"> {number}</span>
      </div>
    </div>
  );
}
