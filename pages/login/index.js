import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const [isSendPhoneNumber, setisSendPhoneNumber] = useState(false);

  const [code, setcode] = useState(null);
  const [codeUser, setcodeUser] = useState("");
  const [phon, setphon] = useState(null);
  let rout = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (+codeUser === code) {
      toast.success("ورود با موفقیت", {
        position: "top-right",
        rtl: true,
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        autoClose: 2000,
      });

      setTimeout(() => {
        rout.push("/");
      }, 1500);
    } else {
      toast.error("کد نامعتبر", {
        position: "top-right",
        rtl: true,
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        autoClose: 3000,
      });
    }
  };

  const sendPhoneNumber = (e) => {
    e.preventDefault();
    const phoneRegex =
      /^(?:(?:(?:\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/;

    if (phoneRegex.test(+phon)) {
      const codeGenerator = Math.floor(Math.random() * 100000);
      setcode(codeGenerator);
      setisSendPhoneNumber(true);
      toast.success(`کد ارسال شده ${codeGenerator}`, {
        position: "top-right",
        rtl: true,
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        autoClose: 15000,
      });
    } else {
      toast.error("شماره نامعتبر", {
        position: "top-right",
        rtl: true,
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        autoClose: 3000,
      });
    }
  };
  return (
    <>
      <div class="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full"></div>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <Link href="/" class="flex items-center gap-x-3.5 mb-10">
          <Image src="/image/logo.webp" width={110} height={50} alt="mamad" />
          <Image
            src="/image/Screenshot_2024-04-06_025727-removebg-preview.png"
            width={136}
            height={62}
          />
        </Link>
        <div className="bg-dark w-[330px] rounded-2xl flex flex-col items-center gap-2 p-6">
          {!isSendPhoneNumber ? (
            <>
              <h4 className="text-white font-medium text-[23px]">
                ورود با موبایل
              </h4>
              <p className="flex items-center text-white gap-2 font-medium">
                حساب کاربری ندارید؟{" "}
                <Link href="#" className="text-green-500 ">
                  ثبت نام کنید
                </Link>
              </p>
            </>
          ) : (
            <>
              <h4 className="text-white font-medium w-full flex items-center mb-5 justify-between text-[23px]">
                کد تایید
                <FaCircleArrowLeft
                  className=" opacity-70  cursor-pointer"
                  onClick={() => {
                    setisSendPhoneNumber(false);
                  }}
                />
              </h4>
              <p className="flex items-center text-white gap-2 font-medium">
                کد تایید برای 09106578534 ارسال شد.
              </p>
            </>
          )}
          {!isSendPhoneNumber ? (
            <form onSubmit={sendPhoneNumber}>
              <div className="flex items-center  bg-[#ffffff0D] p-4 rounded-xl w-[290px] my-6 justify-center">
                <input
                  type="text"
                  className="input_navBar text-white opacity-70 w-[240px]"
                  placeholder="شماره موبایل"
                  value={phon}
                  onChange={(e) => setphon(e.target.value)}
                />
                <FiPhone className="text-white opacity-70 mt-1 w-4 h-4 " />
              </div>
              <button
                onClick={sendPhoneNumber}
                className="bg-green-500 text-white rounded-full px-32  py-4"
              >
                ادامه
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center  bg-[#ffffff0D] p-4 rounded-xl w-[290px] my-6 justify-center">
                <input
                  type="text"
                  className="input_navBar text-white opacity-70 w-[240px]"
                  placeholder="کد تایید"
                  value={codeUser}
                  onChange={(e) => setcodeUser(e.target.value)}
                />
                <FaLock className="text-white opacity-70 mt-1 w-4 h-4 " />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white rounded-full px-32 py-4"
              >
                تایید
              </button>
            </form>
          )}
          <div class="flex items-center justify-between font-danaMedium text-sm text-slate-500 w-full mt-5">
            <span>ورود با ایمیل</span>
            <span class="underline underline-offset-2">حریم خصوصی</span>{" "}
          </div>
        </div>

        <span className="max-w-[330px] text-white font-normal text-[18px] text-center my-5">
          با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمت{" "}
          <Link href="/" className="text-green-500 m-1">
            سبز لرن{"  "}
          </Link>
          را پذیرفته اید.
        </span>
      </section>
      <div class="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
    </>
  );
}
