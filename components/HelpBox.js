import Image from "next/image";
import React from "react";

export default function HelpBox({ img, title, desc }) {
  return (
    <div className="bg-dark rounded-2xl flex items-center gap-3 w-[660px] p-6 m-3">
      <Image src={`/image/${img}`} height={100} width={100} quality={100} />
      <div>
        <h4 className="text-white font-bold text-[18px] mb-2">{title}</h4>
        <span className="text-white opacity-70 text-[16px]">{desc}</span>
      </div>
    </div>
  );
}
