import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import { useGlobalState } from "@/context/GlobalState";
import { verify } from "jsonwebtoken";
import moment from "moment-jalaali";
import React, { useState } from "react";

export default function Mainticket({ MainUser, ticket }) {
  const [showsidebar, setshowsidebar] = useState(false);
  const { state } = useGlobalState();

  return (
    <div
      className={`${state.them === "dark" ? "bg_black_100" : "bg-white"
        } flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 `}
    >
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section
        className={`${state.them === "dark"
            ? "bg-dark text-white"
            : "bg-gray-100 text-black"
          } px-5 rounded-2xl w-full max-w-[1400px] mx-3 my-8 lg:my-0 py-4 lg:py-0  md:p-10 lg:rounded-4xl`}
      >
        <HeaderAccontDetails
          username={MainUser?.username}
          setshowsidebar={setshowsidebar}
        />

        <div
          className={`${state.them === "dark"
              ? "bg_black_100 text-white"
              : "bg-white text-black"
            } my-6  p-3 md:p-4 rounded-2xl`}
        >
          <div className="flex justify-between items-center pb-3 md:pb-4 mb-6 md:mb-7 border-b border-b-gray-700">
            <span className=" md:text-xl ">{ticket?.title}</span>
          </div>
          <div className="space-y-4">
            <div
              className={`w-11/12 sm:w-2/3 ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                }  mb-12 p-4 rounded-2xl rounded-tr-sm`}
            >
              <h4 className="font-danaMedium text-xl mb-1 text-right">
                {MainUser?.username}
              </h4>
              <span
                className="block text-xs  text-slate-400 text-right"
                style={{ direction: "ltr" }}
              >
                {moment(ticket.createdAt)
                  .format("jYYYY/jMM/jDD HH:mm:ss")
                  .slice(0, 10)}
                {"  "}
                {moment(ticket.createdAt)
                  .format("jYYYY/jMM/jDD HH:mm:ss")
                  .slice(10)}
              </span>
              <p className=" mt-4.5">{ticket?.text}</p>
            </div>

            <div className="w-11/12 sm:w-2/3 bg-sky-800 mr-auto text-center text-white  p-4 rounded-2xl rounded-tl-sm">
              <p className=" mt-4.5"></p>

              <p>  {
                state.lan === "fa"
                  ? "منتظر پاسخ"
                  : state.lan === "en"
                    ? "Waiting for a response"
                    : state.lan === "ku"
                      ? "Li benda bersiva"
                      : "Warten auf Antwort"
              }</p>
            </div>
          </div>
        </div>
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
  let res = await fetch(
    `https://sabzlearn-psi.vercel.app/api/user/newticket/${context.query.id}`
  );
  let data = await res.json();
  let ticket = JSON.parse(JSON.stringify(data));

  return { props: { MainUser, ticket } };
}
