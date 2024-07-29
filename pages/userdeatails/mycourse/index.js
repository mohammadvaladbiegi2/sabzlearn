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
            title={
              state.lan === "fa"
                ? "دوره‌های ثبت نام شده"
                : state.lan === "en"
                ? "Registered Courses"
                : state.lan === "ku"
                ? "Dersên qeyd kirî"
                : "Angemeldete Kurse"
            }
            
            desc={`${MainUser.courses.length} ${state.lan === 'fa' ? 'دوره' : 'course'}`}
            icon={<FaCreditCard />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title={
              state.lan === "fa"
                ? "دوره‌های نقدی"
                : state.lan === "en"
                ? "Paid Courses"
                : state.lan === "ku"
                ? "Dersên parêdanî"
                : "Bezahlte Kurse"
            }
            
            desc={`${MainUser.courses.length} ${state.lan === 'fa' ? 'دوره' : 'course'}`}
            icon={<AiOutlineDollar />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title={
              state.lan === "fa"
                ? "دوره‌های رایگان"
                : state.lan === "en"
                ? "Free Courses"
                : state.lan === "ku"
                ? "Dersên belaş"
                : "Kostenlose Kurse"
            }
            
            desc={`0 ${state.lan === 'fa' ? 'دوره ': 'course'}`}
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
          <Notfound title={
            state.lan === "fa"
              ? "هنوز در هیچ دوره‌ای ثبت نام نکرده‌اید"
              : state.lan === "en"
              ? "You have not enrolled in any course yet"
              : state.lan === "ku"
              ? "Heta niha tu di kursê de nehatî qeyd kirin"
              : "Sie haben sich noch in keinem Kurs angemeldet"
          }
           />
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
