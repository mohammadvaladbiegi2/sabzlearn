import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import React, { useState } from "react";
import { BsTicketPerforated } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import Notfound from "@/components/Notfound";
import moment from "moment-jalaali";
import { useGlobalState } from "@/context/GlobalState";

export default function UserTiket({ MainUser }) {
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
        } px-5 rounded-2xl w-full max-w-[1432px] mx-auto  md:p-10 lg:rounded-4xl`}
      >
        <HeaderAccontDetails
          username={MainUser?.username}
          setshowsidebar={setshowsidebar}
        />

        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
          <Userdeatailsheaderbox
            title="همه تیکت ها"
            desc={`${MainUser.tickets?.length} عدد`}
            icon={<BsTicketPerforated />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="تیکت های باز"
            desc={`${MainUser.tickets?.length} تیکت`}
            icon={<IoMailOpenOutline />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title="تیکت های بسته شده"
            desc="0 تیکت"
            icon={<HiOutlineChatAlt2 />}
            bg="bg-rose-500"
          />
        </div>
        <div className="mb-3">
          <Userdeatailsheaderbox
            desc="تیکت جدید"
            icon={<FiPlusCircle />}
            bg="bg-secondry"
            href="/userdeatails/usertiket/newticket"
          />
        </div>
        {MainUser.tickets?.length ? (
          <div
            className={`${
              state.them === "dark"
                ? "bg_black_100 text-white"
                : "bg-white text-black"
            } my-6  p-3.5 md:p-4.5 rounded-2xl`}
          >
            <div
              className={`flex justify-between items-center pb-3 md:pb-4.5 mb-6 md:mb-7 border-b ${
                state.them === "dark"
                  ? " border-b-gray-700"
                  : " border-b-slate-400"
              }`}
            >
              <span className=" md:text-xl ">تیکت ها</span>
            </div>

            <div>
              {MainUser.tickets?.map((ticket) => (
                <Link
                  key={ticket._id}
                  href={`/userdeatails/usertiket/${ticket._id}`}
                  className={`flex items-center justify-between flex-wrap gap-y-3 p-3 ${
                    state.them === "dark"
                      ? "hover:bg-gray-700"
                      : "hover:bg-slate-400"
                  } rounded-xl transition-colors`}
                >
                  <div className="flex items-center">
                    <span className="block  w-20 text-right ">
                      #{ticket._id.slice(0, 4)}
                    </span>
                    <Link
                      href={`/userdeatails/usertiket/${ticket._id}`}
                      className=" w-full  sm:max-w-md md:truncate"
                    >
                      {ticket.title}
                    </Link>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-slate-400 text-ltr">
                      {moment(ticket.createdAt)
                        .format("jYYYY/jMM/jDD HH:mm:ss")
                        .slice(0, 10)}
                      {"  "}
                      {moment(ticket.createdAt)
                        .format("jYYYY/jMM/jDD HH:mm:ss")
                        .slice(10)}
                    </span>
                    <span
                      className={`text-xs py-1 px-1.5 text-yellow-400  ${
                        state.them === "dark"
                          ? "bg-yellow-400/10"
                          : "bg-yellow-400/20"
                      } rounded`}
                    >
                      {ticket.department}
                    </span>
                    <span
                      className={`text-xs py-1 px-1.5 text-yellow-400  ${
                        state.them === "dark"
                          ? "bg-yellow-400/10"
                          : "bg-yellow-400/20"
                      } rounded`}
                    >
                      منتظر پاسخ
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Notfound title="تیکتی برای نمایش وجود ندارد" />
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
    .populate("tickets")
    .lean();
  let MainUser = JSON.parse(JSON.stringify(FindUser));

  return { props: { MainUser } };
}
