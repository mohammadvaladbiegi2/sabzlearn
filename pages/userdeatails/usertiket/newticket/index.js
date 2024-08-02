import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";

import React, { useState } from "react";

import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useGlobalState } from "@/context/GlobalState";

export default function NewTickts({ MainUser }) {
  let rout = useRouter();
  const { state } = useGlobalState();

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
      let res = await fetch("https://sabzlearn-psi.vercel.app/api/user/newticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });
      if (res.status === 200) {
        toast.success(
          state.lan === "fa"
            ? "تیکت ارسال شد"
            : state.lan === "en"
              ? "Ticket has been sent"
              : state.lan === "ku"
                ? "Tikêt şandî ye"
                : "Ticket wurde gesendet"

        );
        setticket({ title: "", text: "", department: "" });
        setTimeout(() => {
          rout.push("/userdeatails/usertiket");
        }, 2000);
      } else {
        toast.error(
          state.lan === "fa"
            ? "خطا در ارسال"
            : state.lan === "en"
              ? "Error in sending"
              : state.lan === "ku"
                ? "Şewtiya di şandinê de"
                : "Fehler beim Versenden"

        );
      }
    } else {
      toast.error(state.lan === "fa"
        ? "مقادیر صحیح وارد کنید"
        : state.lan === "en"
          ? "Enter correct values"
          : state.lan === "ku"
            ? "Nirxên rast binivîsin"
            : "Geben Sie die richtigen Werte ein");
    }
  };
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
          } px-5 rounded-2xl w-full max-w-[1432px] mx-auto  md:p-10 lg:rounded-4xl`}
      >
        <HeaderAccontDetails
          username={MainUser.username}
          setshowsidebar={setshowsidebar}
        />

        <div
          className={`${state.them === "dark"
              ? "bg_black_100 text-white"
              : "bg-white text-black"
            } my-6  p-3.5 md:p-4.5 rounded-2xl`}
        >
          <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span className=" md:text-xl ">{
              state.lan === "fa"
                ? "ارسال تیکت"
                : state.lan === "en"
                  ? "Send Ticket"
                  : state.lan === "ku"
                    ? "Tikêt şandin"
                    : "Ticket senden"
            }
            </span>
          </div>
          <form onSubmit={sendTicket}>
            <div>
              <label htmlFor="department">{
                state.lan === "fa"
                  ? "دپارتمان"
                  : state.lan === "en"
                    ? "Department"
                    : state.lan === "ku"
                      ? "Beş"
                      : "Abteilung"
              }
              </label>
              <select
                className={`mt-3 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight  ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                  } rounded-xl   placeholder:text-gray-500 transition-all`}
                onChange={(e) =>
                  setticket((prev) => {
                    return { ...prev, department: e.target.value };
                  })
                }
              >
                <option value="">{
                  state.lan === "fa"
                    ? "دپارتمان مورد نظر"
                    : state.lan === "en"
                      ? "Desired Department"
                      : state.lan === "ku"
                        ? "Beşa ku hûn dixwazin"
                        : "Gewünschte Abteilung"
                }
                </option>
                <option value="مالی">{
                  state.lan === "fa"
                    ? "مالی"
                    : state.lan === "en"
                      ? "Finance"
                      : state.lan === "ku"
                        ? "Mali"
                        : "Finanzen"
                }
                </option>
                <option value="ارتباط با مدیریت">{
                  state.lan === "fa"
                    ? "ارتباط با مدیریت"
                    : state.lan === "en"
                      ? "Contact Management"
                      : state.lan === "ku"
                        ? "Têkiliyê bi rêveberiyê"
                        : "Kontakt zur Verwaltung"
                }
                </option>
                <option value="پشتیبانی">{
                  state.lan === "fa"
                    ? "پشتیبانی"
                    : state.lan === "en"
                      ? "Support"
                      : state.lan === "ku"
                        ? "Piştgiriya"
                        : "Support"
                }
                </option>
                <option value="مشاوره">{
                  state.lan === "fa"
                    ? "مشاوره"
                    : state.lan === "en"
                      ? "Consultation"
                      : state.lan === "ku"
                        ? "Şirove"
                        : "Beratung"
                }
                </option>
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="title" className=" ">
                {
                  state.lan === "fa"
                    ? "موضوع تیکت"
                    : state.lan === "en"
                      ? "Ticket Subject"
                      : state.lan === "ku"
                        ? "Mijara tikêtê"
                        : "Ticketthema"
                }

              </label>
              <input
                type="text"
                className={`mt-3 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight  ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                  } rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all`}
                id="title"
                name="title"
                placeholder={
                  state.lan === "fa"
                    ? "موضوع تیکت خود را وارد کنید"
                    : state.lan === "en"
                      ? "Enter your ticket subject"
                      : state.lan === "ku"
                        ? "Mijara tikêtê xwe binivîsin"
                        : "Geben Sie Ihr Ticketthema ein"
                }

                onChange={(e) =>
                  setticket((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
              />
            </div>
            <div className="mt-6">
              <label htmlFor="text" className=" ">
                {
                  state.lan === "fa"
                    ? "متن تیکت"
                    : state.lan === "en"
                      ? "Ticket Text"
                      : state.lan === "ku"
                        ? "Nivîsarê tikêtê"
                        : "Tickettext"
                }

              </label>
              <textarea
                rows="8"
                className={`mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight  ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                  } rounded-xl border border-transparent focus:border-slateplaceholder:text-gray-500 transition-all`}
                id="text"
                name="text"
                placeholder={
                  state.lan === "fa"
                    ? "متن تیکت خود را وارد کنید"
                    : state.lan === "en"
                      ? "Enter your ticket text"
                      : state.lan === "ku"
                        ? "Nivîsara tikêtê xwe binivîsin"
                        : "Geben Sie den Text Ihres Tickets ein"
                }

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
                  className="bg-green-500  py-3 px-4 hover:opacity-90 rounded-xl"
                  type="submit"
                >
                  {
                    state.lan === "fa"
                      ? "ارسال"
                      : state.lan === "en"
                        ? "Send"
                        : state.lan === "ku"
                          ? "Şandîn"
                          : "Senden"
                  }

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
