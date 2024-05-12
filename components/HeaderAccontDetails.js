import Image from "next/image";
import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
export default function HeaderAccontDetails({ setshowsidebar, username }) {
  return (
    <header className="flex items-center justify-between bg-gray md:bg-transparent border-b md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 md:p-0">
      <h3 className="hidden md:block text-2xl text-white">
        {username} عزیز؛ خوش اومدی 🙌
      </h3>
      <div className="flex md:hidden items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
        <RxHamburgerMenu
          onClick={() => setshowsidebar(true)}
          className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all"
        />
      </div>
      <div className="flex gap-x-3.5 md:gap-x-7">
        <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
          <IoNotificationsOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
        </div>
        <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
          <IoSunnyOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
        </div>
        <div className="md:flex items-center hidden    justify-center">
          <Image src="/image/userimageaccont.png" width={50} height={50} />{" "}
        </div>
      </div>
    </header>
  );
}
