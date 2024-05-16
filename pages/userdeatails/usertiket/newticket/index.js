import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";

import React, { useState } from "react";

import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function NewTickts({ MainUser }) {
  let rout = useRouter();
  const [showsidebar, setshowsidebar] = useState(false);
  const [ticket, setticket] = useState({
    title: "",
    text: "",
    department: "",
    user: MainUser._id,
  });
  const sendTicket = async (e) => {
    e.preventDefault();
    if (
      ticket.department.length > 2 ||
      ticket.title.length > 4 ||
      ticket.text.length > 4
    ) {
      let res = await fetch("http://localhost:3000/api/user/newticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });
      if (res.status === 200) {
        toast.success("تیکت ارسال شد");
        setticket({ title: "", text: "", department: "" });
        setTimeout(() => {
          rout.push("/userdeatails/usertiket");
        }, 2000);
      } else {
        toast.error("خطا در ارسال");
      }
    } else {
      toast.error("مقادیر صحیح وارد کنید");
    }
  };
  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails
          username={MainUser.username}
          setshowsidebar={setshowsidebar}
        />

        <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
          <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span className=" md:text-xl text-white">ارسال تیکت</span>
          </div>
          <form onSubmit={sendTicket}>
            <div>
              <label htmlFor="department" className=" text-white">
                دپارتمان
              </label>
              <select
                required=""
                className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                onChange={(e) =>
                  setticket((prev) => {
                    return { ...prev, department: e.target.value };
                  })
                }
              >
                <option value="">دپارتمان مورد نظر...</option>
                <option value="مالی">مالی</option>
                <option value="ارتباط با مدیریت">ارتباط با مدیریت</option>
                <option value="پشتیبانی">پشتیبانی</option>
                <option value="مشاوره">مشاوره</option>
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="title" className=" text-white">
                موضوع تیکت
              </label>
              <input
                type="text"
                className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                id="title"
                name="title"
                required=""
                placeholder="موضوع تیکت خود را وارد کنید"
                onChange={(e) =>
                  setticket((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
              />
            </div>
            <div className="mt-6">
              <label htmlFor="text" className=" text-white">
                متن تیکت
              </label>
              <textarea
                rows="8"
                className="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slateplaceholder:text-gray-500 transition-all"
                id="text"
                name="text"
                required=""
                placeholder="متن تیکت خود را وارد کنید"
                onChange={(e) =>
                  setticket((prev) => {
                    return { ...prev, text: e.target.value };
                  })
                }
              ></textarea>
            </div>
            <div className="flex justify-between gap-5 flex-wrap mt-6">
              <div className="flex gap-x-3 mr-auto">
                <button
                  className="bg-green-500 text-white py-3 px-4 hover:opacity-90 rounded-xl"
                  type="submit"
                >
                  ارسال
                </button>
              </div>
            </div>
          </form>
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
  });

  let MainUser = JSON.parse(JSON.stringify(FindUser));

  return { props: { MainUser } };
}
