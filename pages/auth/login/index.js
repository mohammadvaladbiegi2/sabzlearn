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
import { validatPassword, validatePhoneNumber } from "@/Utils/Validations";

export default function Login() {
  const [sendcode, setsendcode] = useState(false);
  const [Code, setCode] = useState("");
  const [Codeevaluation, setCodeevaluation] = useState("");
  let rout = useRouter();
  const form = useFormik({
    initialValues: {
      password: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        res.status === 500 && toast.error("مشکل سرور وقت دیگر امتحان کنید");
        res.status === 404 &&
          toast.error("کاربری با این   شماره  ثبت نام نشده");
        res.status === 412 && toast.error("مقادیر وارد شده معتبر نیست");
        res.status === 422 && toast.error("رمز یا شماره درست نیست");
        if (res.status === 200) {
          const codegenerator = Math.floor(Math.random() * 100000);
          setCodeevaluation(codegenerator);
          toast.success(`کد ارسال شده : ${codegenerator}`, {
            autoClose: 20000,
          });
          setsendcode(true);
        }
      });
    },
    validate: (values) => {
      const errors = {};

      if (!validatePhoneNumber(values.phoneNumber)) {
        errors.phoneNumber = "  شماره معتبر وارد کنید";
      }

      return errors;
    },
  });
  const confirmCode = (e) => {
    e.preventDefault();
    if (+Codeevaluation === +Code) {
      toast.success("خوش آمدید");
      rout.push("/");
    } else {
      toast.error("کد وارد شده معتبر نیست");
    }
  };
  return (
    <>
      <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full"></div>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <Link href="/" className="flex items-center gap-x-3.5 mb-10">
          <Image src="/image/logo.webp" width={110} height={50} alt="mamad" />
          <Image
            src="/image/Screenshot_2024-04-06_025727-removebg-preview.png"
            width={136}
            height={62}
          />
        </Link>
        <div className="bg-dark w-[330px] rounded-2xl flex flex-col items-center gap-2 p-6">
          {!sendcode ? (
            <>
              <h4 className="text-white font-medium text-[23px]">
                ورود با موبایل
              </h4>
              <p className="flex items-center text-white gap-2 font-medium">
                حساب کاربری ندارید؟{" "}
                <Link href="/auth/signup" className="text-green-500 ">
                  ثبت نام کنید
                </Link>
              </p>
            </>
          ) : (
            <>
              <h4 className="text-white font-medium w-full flex items-center mb-5 justify-between text-[23px]">
                کد تایید
                <FaCircleArrowLeft className=" opacity-70  cursor-pointer" />
              </h4>
              <p className="flex items-center text-white gap-2 font-medium">
                کد تایید برای {form.values.phoneNumber} ارسال شد.
              </p>
            </>
          )}
          {!sendcode ? (
            <form onSubmit={form.handleSubmit}>
              <div className="my-3">
                <div className="flex items-center  bg-[#ffffff0D] p-4 rounded-xl w-[290px] my-6 justify-center">
                  <input
                    type="text"
                    className="input_navBar text-white  w-[240px]"
                    placeholder="رمز عبور"
                    onChange={form.handleChange}
                    value={form.values.password}
                    name="password"
                  />
                  <IoLockClosedOutline className="text-white opacity-70  w-4 h-4 " />
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center  bg-[#ffffff0D] p-4 rounded-xl w-[290px]  justify-center">
                  <input
                    type="text"
                    className="input_navBar text-white  w-[240px]"
                    placeholder="شماره موبایل"
                    onChange={form.handleChange}
                    value={form.values.phoneNumber}
                    name="phoneNumber"
                  />
                  <FiPhone className="text-white opacity-70  w-4 h-4 " />
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
                className="bg-green-500 text-white rounded-full px-32  py-4"
              >
                ادامه
              </button>
            </form>
          ) : (
            <form onSubmit={confirmCode}>
              <div className="flex items-center  bg-[#ffffff0D] p-4 rounded-xl w-[290px] my-6 justify-center">
                <input
                  type="text"
                  className="input_navBar text-white opacity-70 w-[240px]"
                  placeholder="کد تایید"
                  value={Code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <FaLock className="text-white opacity-70 mt-1 w-4 h-4 " />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white rounded-full px-32 py-4"
                onClick={confirmCode}
              >
                تایید
              </button>
            </form>
          )}
          <div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 w-full mt-5">
            <span></span>
            <span className="underline underline-offset-2">
              حریم خصوصی
            </span>{" "}
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
      <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
    </>
  );
}
