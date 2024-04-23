import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Mycoursecard from "@/components/mycoursecard";
import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { SlRocket } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";

export default function Mycourse() {
  const [showsidebar, setshowsidebar] = useState(false);

  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails setshowsidebar={setshowsidebar} />

        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-9">
          <Userdeatailsheaderbox
            title="دوره‌های ثبت نام شده"
            desc="24 دوره"
            icon={<FaCreditCard />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="دوره‌های نقدی"
            desc="11 دوره"
            icon={<AiOutlineDollar />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title="دوره‌های رایگان"
            desc="13 دوره"
            icon={<SlRocket />}
            bg="bg-green-400"
          />
        </div>
        <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-5">
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
          <Mycoursecard />
        </div>
      </section>
    </div>
  );
}
