import Link from "next/link";
import React from "react";

export default function Userdeatailsheaderbox({
  icon,
  title,
  desc,
  bg,
  href = "",
}) {
  return (
    <Link
      href={href}
      class={`flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 ${bg} dark:bg-secondary p-2 rounded-2xl`}
    >
      <div class="flex items-center justify-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
        <dix class="w-8 h-8 md:w-9 md:h-9 text-white text-[38px]">{icon}</dix>
      </div>
      <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
        <span class="text-xs">{title}</span>
        <span class="font-danaDemiBold text-sm md:text-lg">{desc}</span>
      </div>
    </Link>
  );
}
