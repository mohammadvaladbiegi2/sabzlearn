import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Mycoursecard from "@/components/mycoursecard";
import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { SlRocket } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import Notfound from "@/components/Notfound";
import { useGlobalState } from "@/context/GlobalState";

export default function Mycourse({ MainUser }) {
  const [showsidebar, setshowsidebar] = useState(false);
  const { state } = useGlobalState();

  return (
    <div
      className={`${
        state.them === "dark" ? "bg_black_100" : "bg-white"
      } flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 `}
    >
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section
        className={`${
          state.them === "dark"
            ? "bg-dark text-white"
            : "bg-gray-100 text-black"
        } px-5 rounded-2xl w-full max-w-[1432px] mx-auto md:p-10 lg:rounded-4xl`}
      >
        <HeaderAccontDetails
          username={MainUser?.username}
          setshowsidebar={setshowsidebar}
        />

        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-9">
          <Userdeatailsheaderbox
            title="دوره‌های ثبت نام شده"
            desc={`${MainUser.courses.length} دوره`}
            icon={<FaCreditCard />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="دوره‌های نقدی"
            desc={`${MainUser.courses.length} دوره`}
            icon={<AiOutlineDollar />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title="دوره‌های رایگان"
            desc="0 دوره"
            icon={<SlRocket />}
            bg="bg-green-400"
          />
        </div>
        {MainUser.courses.length ? (
          <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-5">
            {MainUser?.courses.map((cours) => (
              <Mycoursecard key={cours._id} {...cours} />
            ))}
          </div>
        ) : (
          <Notfound title="هنوز در هیچ دوره ای ثبت نام نکرده اید" />
        )}
      </section>
    </div>
  );
}

const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.PriveKey); // chek for valid token
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export async function getServerSideProps(context) {
  connectToDB();
  const { token } = context.req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const tokenPayload = verifyToken(token); // verify and find payload
  if (!tokenPayload) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  let FindUser = await User.findOne({
    phoneNumber: tokenPayload.phoneNumber,
  })
    .populate("courses")
    .lean();
  let MainUser = JSON.parse(JSON.stringify(FindUser));

  return { props: { MainUser } };
}
