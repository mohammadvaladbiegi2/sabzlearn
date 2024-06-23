import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  validatPassword,
  validatePhoneNumber,
  validatusername,
} from "@/Utils/Validations";
import { useRouter } from "next/router";
import { useGlobalState } from "@/context/GlobalState";

export default function Signup() {
  let rout = useRouter();
  const { state } = useGlobalState();

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        res.status === 422 &&
          toast.error("کاربری با این نام یا شماره قبلا ثبت نام کرده");
        res.status === 412 && toast.error("مقادیر وارد شده معتبر نیست");
        if (res.status === 201) {
          toast.success("ثبت نام موفق خوش آمدید");
          rout.push("/");
        }
      });
    },
    validate: (values) => {
      const errors = {};
      if (!validatusername(values.username)) {
        errors.username = " نام کاربری بیشتر از 3 کاراکتر باشد";
      }
      if (!validatPassword(values.password)) {
        errors.password =
          "پسورد باید شامل حداقل یک حرف، یک عدد و یک علامت خاص(#$%@)";
      }
      if (!validatePhoneNumber(values.phoneNumber)) {
        errors.phoneNumber = "  شماره معتبر وارد کنید";
      }

      return errors;
    },
  });

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
          <>
            <h4 className="   text-[23px]">عضویت </h4>
            <p className="flex items-center  gap-2  ">
              قبلا ثبت نام کرده اید؟{" "}
              <Link href="/auth/login" className="text-green-500 ">
                وارد شوید
              </Link>
            </p>
          </>

          <form onSubmit={form.handleSubmit}>
            <div className="my-3">
              <div
                className={`flex items-center ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                } p-4 rounded-xl w-[290px]  justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   w-[240px]"
                  placeholder="نام کاربری"
                  onChange={form.handleChange}
                  value={form.values.username}
                  name="username"
                />
                <FaRegUser className=" opacity-70  w-4 h-4 " />
              </div>
              {form.errors.username && form.touched.username && (
                <span className="text-rose-500 text-sm block mt-3">
                  {form.errors.username}{" "}
                </span>
              )}
            </div>
            <div className="my-3">
              <div
                className={`flex items-center  ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                } p-4 rounded-xl w-[290px] my-6 justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   w-[240px]"
                  placeholder="رمز عبور"
                  onChange={form.handleChange}
                  value={form.values.password}
                  name="password"
                />
                <IoLockClosedOutline className=" opacity-70  w-4 h-4 " />
              </div>
              {form.errors.password && form.touched.password && (
                <span className="text-rose-500 text-sm block mt-3">
                  {form.errors.password}{" "}
                </span>
              )}
            </div>
            <div className="my-3">
              <div
                className={`flex items-center  ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                } p-4 rounded-xl w-[290px]  justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   w-[240px]"
                  placeholder="شماره موبایل"
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
              type="submit"
              className="bg-green-500  rounded-full px-32  py-4"
            >
              ادامه
            </button>
          </form>

          <div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 w-full mt-5">
            <span></span>
            <span className="underline underline-offset-2">
              حریم خصوصی
            </span>{" "}
          </div>
        </div>

        <span
          className={`max-w-[330px] ${
            state.them === "dark" ? "text-white " : "text-black"
          } font-normal text-[18px] text-center my-5`}
        >
          با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمت{" "}
          <Link href="/" className="text-green-500 m-1">
            سبز لرن{"  "}
          </Link>
          را پذیرفته اید.
        </span>
      </section>
      <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
    </div>
  );
}
