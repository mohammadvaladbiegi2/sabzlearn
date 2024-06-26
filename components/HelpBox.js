import { useGlobalState } from "@/context/GlobalState";
import Image from "next/image";
import React from "react";

export default function HelpBox({ img, title, desc }) {
  const { state } = useGlobalState();

  return (
    <div
      className={`${
        state.them === "dark" ? "bg-dark text-white" : "bg-white text-black"
      } rounded-2xl flex flex-col md:flex-row items-center gap-3 w-[660px] p-6 m-3`}
    >
      <Image
        src={`/image/${img}`}
        height={100}
        width={100}
        alt={title}
        quality={100}
      />
      <div>
        <h4 className=" font-bold text-[18px] mb-2 text-center md:text-start">
          {title}
        </h4>
        <span className=" opacity-70 text-[16px] text-center md:text-start">
          {desc}
        </span>
      </div>
    </div>
  );
}
