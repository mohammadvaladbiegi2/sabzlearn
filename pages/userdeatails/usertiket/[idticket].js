import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import { verify } from "jsonwebtoken";
import moment from "moment-jalaali";
import React, { useState } from "react";

export default function Mainticket({ ticketData, userData }) {
  const [showsidebar, setshowsidebar] = useState(false);
  console.log(ticketData);
  // const gregorianDate = moment(createdAt);
  // const jalaliDate = gregorianDate.format("jYYYY/jMM/jDD HH:mm:ss");
  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails
          username={userData.username}
          setshowsidebar={setshowsidebar}
        />

        <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
          <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span className=" md:text-xl text-white">اضافه کردن دوره</span>
          </div>
          <div className="space-y-4">
            <div className="w-11/12 sm:w-2/3 bg-gray-700 text-white mb-12 p-4 rounded-2xl rounded-tr-sm">
              <h4 className="font-danaMedium text-xl mb-1 text-right">
                {userData.username}
              </h4>
              <span
                className="block text-xs  text-slate-400 text-right"
                style={{ direction: "ltr" }}
              >
                1402/11/01 19:17
              </span>
              <p className=" mt-4.5">{ticketData[0]?.text}</p>
            </div>
            {ticketData[0]?.answer ? (
              <div className="w-11/12 sm:w-2/3 bg-sky-800 mr-auto   text-white p-4 rounded-2xl rounded-tl-sm">
                <h4 className=" text-xl mb-1 text-left">Shahram.Kh</h4>
                <span
                  className="block text-xs  text-slate-400 text-left"
                  style={{ direction: "ltr" }}
                >
                  1402/11/02 00:19
                </span>
                <p className=" mt-4.5"></p>

                <p>{ticketData[0]?.answer}</p>
              </div>
            ) : (
              <div className="w-11/12 sm:w-2/3 bg-sky-800 mr-auto text-center  text-white p-4 rounded-2xl rounded-tl-sm">
                <p className=" mt-4.5"></p>

                <p>در انتظار پاسخ</p>
              </div>
            )}
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
  let idticket = context.params.idticket;
  connectToDB();
  const { token } = context.req.cookies;

  const tokenPayload = verifyToken(token); // verify and find payload
  let FindUser = await User.findOne({ phoneNumber: tokenPayload.phoneNumber });
  let MainUser = JSON.parse(JSON.stringify(FindUser));

  let res = await fetch(`http://localhost:3000/api/user/myticket/${idticket}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userID: MainUser._id }),
  });
  let data = await res.json();

  return { props: { ticketData: data, userData: MainUser } };
}
