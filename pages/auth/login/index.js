import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FaLock } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { useFormik } from "formik";
import { validatePhoneNumber } from "@/Utils/Validations";
import { useGlobalState } from "@/context/GlobalState";

export default function Login() {
  const [sendcode, setsendcode] = useState(false);
  const [Code, setCode] = useState("");
  const [Codeevaluation, setCodeevaluation] = useState("");
  const { state } = useGlobalState();

  let rout = useRouter();
  const form = useFormik({
    initialValues: {
      password: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        res.status === 500 &&
          toast.error(
            state.lan === "fa"
              ? "مشکل سرور وقت دیگر امتحان کنید"
              : "Server problem, try again"
          );
        res.status === 404 &&
          toast.error(
            state.lan === "fa"
              ? "کاربری با این   شماره  ثبت نام نشده"
              : "The user is not registered with this number"
          );
        res.status === 412 &&
          toast.error(
            state.lan === "fa"
              ? "مقادیر وارد شده معتبر نیست"
              : "The entered values ​​are not valid"
          );
        res.status === 422 &&
          toast.error(
            state.lan === "fa"
              ? "رمز یا شماره درست نیست"
              : "Password or number is not correct"
          );
        if (res.status === 200) {
          const codegenerator = Math.floor(Math.random() * 100000);
          setCodeevaluation(codegenerator);
          toast.success(
            `${
              state.lan === "fa" ? "کد ارسال شده " : "Code sent"
            } : ${codegenerator}`,
            {
              autoClose: 20000,
            }
          );
          setsendcode(true);
        }
      });
    },
    validate: (values) => {
      const errors = {};

      if (!validatePhoneNumber(values.phoneNumber)) {
        errors.phoneNumber =
          state.lan === "fa" ? "شماره معتبر وارد کنید" : "Enter a valid number";
      }

      return errors;
    },
  });
  const confirmCode = (e) => {
    e.preventDefault();
    if (+Codeevaluation === +Code) {
      toast.success(state.lan === "fa" ? "خوش آمدید" : "welcom");
      rout.push("/");
    } else {
      toast.error(
        state.lan === "fa"
          ? "کد وارد شده معتبر نیست"
          : "The code entered is not valid"
      );
    }
  };
  return (
    <div
      className={`${state.them === "dark" ? "bg_black_100" : "bg_white_100"}`}
    >
      <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full"></div>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <Link href="/" className="flex items-center gap-x-3.5 mb-10">
          <Image src="/image/logo.webp" width={110} height={50} alt="logo" />
          <Image
            src={`/image/${
              state.them === "dark"
                ? "Screenshot_2024-04-06_025727-removebg-preview.png"
                : "Screenshot 2024-05-23 225320.png"
            }`}
            width={136}
            height={62}
            alt="logo"
          />
        </Link>
        <div
          className={`${
            state.them === "dark" ? "bg-dark text-white" : "bg-white text-black"
          } w-[330px] rounded-2xl flex flex-col items-center gap-2 p-6`}
        >
          {!sendcode ? (
            <>
              <h4 className="text-[23px]">
                {state.lan === "fa"
                  ? "ورود با موبایل"
                  : state.lan === "en"
                  ? "Login with mobile"
                  : state.lan === "ku"
                  ? "Têkeve bi mobîl"
                  : "Mit dem Handy anmelden"}
              </h4>
              <p className="flex items-center gap-2">
                {state.lan === "fa"
                  ? "حساب کاربری ندارید؟"
                  : state.lan === "en"
                  ? "Don't have an account?"
                  : state.lan === "ku"
                  ? "Hesabê we tune?"
                  : "Sie haben noch kein Konto?"}
                <Link href="/auth/signup" className="text-green-500 ">
                  {state.lan === "fa" ? "ثبت نام کنید" : "SignUp"}
                </Link>
              </p>
            </>
          ) : (
            <>
              <h4 className="   w-full flex items-center mb-5 justify-between text-[23px]">
                {state.lan === "fa"
                  ? "کد تایید"
                  : state.lan === "en"
                  ? "Verification code"
                  : state.lan === "ku"
                  ? "Koda verastkirinê"
                  : "Bestätigungscode"}
                <FaCircleArrowLeft className=" opacity-70  cursor-pointer" />
              </h4>
              <p className="flex items-center  gap-2  ">
                {state.lan === "fa"
                  ? `کد ارسال شد برای ${form.values.phoneNumber}`
                  : `code send to ${form.values.phoneNumber}`}
              </p>
            </>
          )}
          {!sendcode ? (
            <form onSubmit={form.handleSubmit}>
              <div className="my-3">
                <div
                  className={`flex items-center ${
                    state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                  }  p-4 rounded-xl w-[290px] my-6 justify-center`}
                >
                  <input
                    type="password"
                    className="input_navBar   w-[240px]"
                    placeholder={state.lan === "fa" ? "رمز عبور" : "password"}
                    onChange={form.handleChange}
                    value={form.values.password}
                    name="password"
                  />
                  <IoLockClosedOutline className=" opacity-70  w-4 h-4 " />
                </div>
              </div>
              <div className="my-3">
                <div
                  className={`flex items-center ${
                    state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                  }   p-4 rounded-xl w-[290px]  justify-center`}
                >
                  <input
                    type="text"
                    className="input_navBar   w-[240px]"
                    placeholder={
                      state.lan === "fa" ? "شماره موبایل" : "phone number"
                    }
                    onChange={form.handleChange}
                    value={form.values.phoneNumber}
                    name="phoneNumber"
                  />
                  <FiPhone className=" opacity-70  w-4 h-4 " />
                </div>
                {form.errors.phoneNumber && form.touched.phoneNumber && (
                  <span className="text-rose-500 text-sm block mt-3">
                    {form.errors.phoneNumber}{" "}
                  </span>
                )}
              </div>
              <button
                type="submit
            "
                className="bg-green-500  rounded-full px-32  py-4"
              >
                {state.lan === "fa" ? "ادامه" : "Continuation"}
              </button>
            </form>
          ) : (
            <form onSubmit={confirmCode}>
              <div
                className={`flex items-center ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                }   p-4 rounded-xl w-[290px] my-6 justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   opacity-70 w-[240px]"
                  placeholder={state.lan === "fa" ? "کد تایید" : "confirm code"}
                  value={Code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <FaLock className=" opacity-70 mt-1 w-4 h-4 " />
              </div>
              <button
                type="submit"
                className="bg-green-500  rounded-full px-32 py-4"
                onClick={confirmCode}
              >
                {state.lan === "fa" ? "تایید" : "Confirm"}
              </button>
            </form>
          )}
          <div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 w-full mt-5">
            <span></span>
            <span className="underline underline-offset-2">
              {state.lan === "fa" ? "حریم خصوصی" : "Privacy"}
            </span>{" "}
          </div>
        </div>

        <span
          className={`max-w-[330px] ${
            state.them === "dark" ? "text-white " : "text-black"
          } font-normal text-[18px] text-center my-5`}
        >
          {state.lan === "fa"
            ? "با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمت"
            : state.lan === "en"
            ? "By joining the site, all the rules and conditions of using the service"
            : state.lan === "ku"
            ? "Bi tevlêbûna malperê, hemî rêgez û mercên karanîna karûbarê"
            : "Durch den Beitritt zur Website gelten alle Regeln und Bedingungen für die Nutzung des Dienstes"}
          <Link href="/" className="text-green-500 m-1">
            {state.lan === "fa" ? "سبز لرن" : "Sabzlearn"}
            {"  "}
          </Link>
          {state.lan === "fa"
            ? "را پذیرفته اید."
            : state.lan === "en"
            ? "have accepted"
            : state.lan === "ku"
            ? "qebûl kirine"
            : "akzeptiert haben"}
        </span>
      </section>
      <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
    </div>
  );
}
