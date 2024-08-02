import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Image from "next/image";
import React, { useState } from "react";

import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import { User } from "@/Models/UsersModel";
import connectToDB from "@/DB/DataBase";
import { validatePhoneNumber, validatusername } from "@/Utils/Validations";
import { toast } from "react-toastify";
import { useGlobalState } from "@/context/GlobalState";

export default function AccontDeatails({ MainUser }) {
  const [showsidebar, setshowsidebar] = useState(false);
  const { state } = useGlobalState();

  const [Password, setPassword] = useState({
    beforpassword: "",
    newpassword: "",
  });
  const [userinfo, setuserinfo] = useState({
    username: MainUser.username,
    phoneNumber: MainUser.phoneNumber,
  });

  const updateuserinfo = async (e) => {
    e.preventDefault();
    if (
      !validatePhoneNumber(userinfo.phoneNumber) ||
      !validatusername(userinfo.username)
    ) {
      toast.error(state.lan === "fa"
        ? "مقادیر را به درستی وارد کنید"
        : state.lan === "en"
          ? "Please enter the values correctly"
          : state.lan === "ku"
            ? "Ji kerema xwe nirxan rast binivîsin"
            : "Bitte geben Sie die Werte korrekt ein"

      );
    } else {
      let res = await fetch(
        `https://sabzlearn-kappa.vercel.app/api/user/updateuserinfo/${MainUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userinfo),
        }
      );
      if (res.status === 201) {
        toast.success(state.lan === "fa"
          ? "تغییرات با موفقیت اعمال شد"
          : state.lan === "en"
            ? "Changes applied successfully"
            : state.lan === "ku"
              ? "Guhertin bi serkeftin hatin cihê kirin"
              : "Änderungen erfolgreich angewendet");
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        toast.info(state.lan === "fa"
          ? "خطا دوباره امتحان کنید"
          : state.lan === "en"
            ? "Error, please try again"
            : state.lan === "ku"
              ? "Şewtiya, ji kerema xwe dubare bixwazin"
              : "Fehler, bitte versuchen Sie es erneut");
      }
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    let res = await fetch(
      `https://sabzlearn-kappa.vercel.app/api/user/changepassword/${MainUser._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Password),
      }
    );

    res.status === 422 && toast.error(
      state.lan === "fa"
        ? "رمز فعلی صحیح نیست"
        : state.lan === "en"
          ? "Current password is incorrect"
          : state.lan === "ku"
            ? "Şîfreya heyî nehatiye rast kirin"
            : "Aktuelles Passwort ist falsch"

    );
    if (res.status === 201) {
      toast.success(state.lan === "fa"
        ? "رمز عبور با موفقیت تغییر کرد"
        : state.lan === "en"
          ? "Password changed successfully"
          : state.lan === "ku"
            ? "Şîfre bi serkeftin hat guhertin"
            : "Passwort wurde erfolgreich geändert");
      setPassword({ beforpassword: "", newpassword: "" });
    }
    res.status === 417 && toast.info(state.lan === "fa"
      ? "رمز تغییر نکرد دوباره امتحان کنید"
      : state.lan === "en"
        ? "Password not changed, please try again"
        : state.lan === "ku"
          ? "Şîfre nehat guhertin, ji kerema xwe dubare bixwazin"
          : "Passwort wurde nicht geändert, bitte versuchen Sie es erneut");
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
          setshowsidebar={setshowsidebar}
          username={MainUser.username}
        />
        <div className="px-5 md:px-0">
          <h3 className="md:hidden   mb-7">
            {MainUser.username} {
              state.lan === "fa"
                ? "عزیز؛ خوش اومدی"
                : state.lan === "en"
                  ? "Dear; Welcome"
                  : state.lan === "ku"
                    ? "Heval; Bi xêr hatî"
                    : "Liebe/r; Willkommen"
            }🙌
          </h3>{" "}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div
              className={`xl:col-span-2 ${state.them === "dark" ? "bg-gray-800" : "bg-white"
                } p-4 rounded-2xl`}
            >
              <div className="pb-3 m-3 border-b  border-b-slate-500">
                <span className=" md:text-xl  ">{
                  state.lan === "fa"
                    ? "جزئیات حساب کاربری"
                    : state.lan === "en"
                      ? "User Account Details"
                      : state.lan === "ku"
                        ? "Detalên hesabê bikarhêner"
                        : "Benutzerdetails"
                }
                </span>
              </div>
              <form onSubmit={updateuserinfo} className="p-3 pt-8">
                <div className="relative mb-11">
                  <Image
                    src="/image/userimageaccont.png"
                    width={100}
                    height={100}
                    className="w-32 md:w-44 h-32 md:h-44 rounded-full"
                    alt="logo"
                  />

                  <a className="absolute flex items-center justify-center bottom-0 right-0 flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-sky-600 dark:bg-secondary dark:hover:bg-blue-600 border-2 md:border-4 border-white dark:border-gray-800 cursor-pointer transition-colors">
                    <HiMiniArrowPathRoundedSquare className="w-5 md:w-6 h-5 md:h-6 " />
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                  <div>
                    <label htmlFor="phone" className=" ">
                      {
                        state.lan === "fa"
                          ? "شماره موبایل"
                          : state.lan === "en"
                            ? "Mobile Number"
                            : state.lan === "ku"
                              ? "Hejmara mobîl"
                              : "Handynummer"
                      }

                    </label>
                    <input
                      type="text"
                      id="phone"
                      className={`mt-3 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight  ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                        } rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all`}
                      value={userinfo.phoneNumber}
                      onChange={(e) =>
                        setuserinfo((prev) => {
                          return { ...prev, phoneNumber: e.target.value };
                        })
                      }
                      disabled=""
                    />
                  </div>

                  <div>
                    <label htmlFor="username" >
                      {
                        state.lan === "fa"
                          ? "نام کاربری"
                          : state.lan === "en"
                            ? "Username"
                            : state.lan === "ku"
                              ? "Navê bikarhêner"
                              : "Benutzername"
                      }

                    </label>
                    <input
                      type="text"
                      className={`mt-3 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight  ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                        } rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all`}
                      disabled=""
                      id="username"
                      value={userinfo.username}
                      onChange={(e) =>
                        setuserinfo((prev) => {
                          return { ...prev, username: e.target.value };
                        })
                      }
                    />
                  </div>
                </div>
                <input type="hidden" name="nonce" value="3910dac7d5" />
                <button
                  type="submit"
                  className="button-lg text-center bg-green-500 mr-auto w-full md:w-auto mt-10"
                >
                  {
                    state.lan === "fa"
                      ? "ثبت اطلاعات جدید"
                      : state.lan === "en"
                        ? "Save New Information"
                        : state.lan === "ku"
                          ? "Agahdariyên nû tomarkirin"
                          : "Neue Informationen speichern"
                  }

                </button>
              </form>
            </div>
            <div
              className={`xl:col-span-1 ${state.them === "dark" ? "bg-gray-800" : "bg-white"
                } p-4.5 rounded-2xl`}
            >
              <div className="pb-3 m-3 border-b border-b-slate-500">
                <span className=" md:text-xl ">{
                  state.lan === "fa"
                    ? "تغییر رمز عبور"
                    : state.lan === "en"
                      ? "Change Password"
                      : state.lan === "ku"
                        ? "Şîfre biguherîne"
                        : "Passwort ändern"
                }
                </span>
              </div>
              <form
                onSubmit={changePassword}
                id="edit-account-password"
                className="p-3.5 pt-8"
              >
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="old_pass" className=" ">
                      {
                        state.lan === "fa"
                          ? "رمز عبور فعلی"
                          : state.lan === "en"
                            ? "Current Password"
                            : state.lan === "ku"
                              ? "Şîfreya heyî"
                              : "Aktuelles Passwort"
                      }

                    </label>
                    <input
                      type="password"
                      className={`mt-3 md:mt-4 w-full p-3 sm:p-5 mb-3  text-sm sm:text-base tracking-tight ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                        }  rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all`}
                      placeholder={
                        state.lan === "fa"
                          ? "رمز فعلی را وارد کنید"
                          : state.lan === "en"
                            ? "Enter current password"
                            : state.lan === "ku"
                              ? "Şîfreya heyî binivîsin"
                              : "Aktuelles Passwort eingeben"
                      }

                      value={Password.beforpassword}
                      onChange={(e) =>
                        setPassword((prev) => {
                          return { ...prev, beforpassword: e.target.value };
                        })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="new_pass" className=" ">
                      {
                        state.lan === "fa"
                          ? "رمز عبور جدید"
                          : state.lan === "en"
                            ? "New Password"
                            : state.lan === "ku"
                              ? "Şîfreya nû"
                              : "Neues Passwort"
                      }

                    </label>
                    <input
                      type="password"
                      className={`mt-3 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight  ${state.them === "dark" ? "bg-gray-700" : "bg_white_100"
                        } rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all`}
                      placeholder={
                        state.lan === "fa"
                          ? "رمز جدید را وارد کنید"
                          : state.lan === "en"
                            ? "Enter new password"
                            : state.lan === "ku"
                              ? "Şîfreya nû binivîsin"
                              : "Neues Passwort eingeben"
                      }
                      value={Password.newpassword}
                      onChange={(e) =>
                        setPassword((prev) => {
                          return { ...prev, newpassword: e.target.value };
                        })
                      }
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="button-lg bg-green-500 mr-auto text-center w-full md:w-auto mt-10"
                >
                  {
                    state.lan === "fa"
                      ? "تغییر رمز"
                      : state.lan === "en"
                        ? "Change Password"
                        : state.lan === "ku"
                          ? "Şîfre biguherîne"
                          : "Passwort ändern"
                  }

                </button>
              </form>
            </div>
          </div>
          <div className="db-overlay invisible opacity-0 fixed w-full h-full top-0 left-0 bg-black/40 z-20 transition-all"></div>
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
