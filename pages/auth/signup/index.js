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
      fetch("https://sabzlearn-fde16fa99-mohammads-projects-2b3603e3.vercel.app/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        res.status === 422 &&
          toast.error(
            state.lan === "fa"
              ? "کاربری با این نام یا شماره قبلا ثبت نام کرده"
              : state.lan === "en"
              ? "A user with this name or number is already registered"
              : state.lan === "ku"
              ? "Kêşeya bi vî navnîşan an hejmarê pêşî qeydkirî ye"
              : "Ein Benutzer mit diesem Namen oder dieser Nummer ist bereits registriert"
          
          );
        res.status === 412 && toast.error( state.lan === "fa"
          ? "مقادیر وارد شده معتبر نیست"
          : state.lan === "en"
          ? "The entered values are not valid"
          : state.lan === "ku"
          ? "Nirxên hatî binivîsîn ne rast in"
          : "Die eingegebenen Werte sind ungültig");
        if (res.status === 201) {
          toast.success(
            state.lan === "fa"
              ? "ثبت نام موفق خوش آمدید"
              : state.lan === "en"
              ? "Registration successful, welcome"
              : state.lan === "ku"
              ? "Qeydkirin serkeftî bû, bi xêr hatin"
              : "Registrierung erfolgreich, willkommen"
          
          );
          rout.push("/");
        }
      });
    },
    validate: (values) => {
      const errors = {};
      if (!validatusername(values.username)) {
        errors.username =   state.lan === "fa"
        ? "نام کاربری باید بیشتر از ۳ کاراکتر باشد"
        : state.lan === "en"
        ? "Username must be more than 3 characters"
        : state.lan === "ku"
        ? "Navê bikarhêner divê ji 3 tîpan zêde be"
        : "Benutzername muss mehr als 3 Zeichen enthalten"
    
      }
      if (!validatPassword(values.password)) {
        errors.password =
        
          state.lan === "fa"
            ? "پسورد باید شامل حداقل یک حرف، یک عدد و یک علامت خاص (#$%@) باشد"
            : state.lan === "en"
            ? "Password must include at least one letter, one number, and one special character (#$%@)"
            : state.lan === "ku"
            ? "Şîfre divê tê de herî kêm yek tîp, yek hejmar û yek nişan taybet (#$%@) be"
            : "Das Passwort muss mindestens einen Buchstaben, eine Zahl und ein Sonderzeichen (#$%@) enthalten"
        
        ;
      }
      if (!validatePhoneNumber(values.phoneNumber)) {
        errors.phoneNumber =   state.lan === "fa"
        ? "شماره معتبر وارد کنید"
        : state.lan === "en"
        ? "Enter a valid number"
        : state.lan === "ku"
        ? "Hejmara rast binivîse"
        : "Geben Sie eine gültige Nummer ein";
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
        <Link href="/" className="flex items-center gap-x-3 mb-10">
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
            <h4 className="   text-[23px]">{
  state.lan === "fa"
    ? "عضویت"
    : state.lan === "en"
    ? "Membership"
    : state.lan === "ku"
    ? "Endamî"
    : "Mitgliedschaft"
}
 </h4>
            <p className="flex items-center  gap-2  ">
            {
  state.lan === "fa"
    ? "قبلا ثبت نام کرده‌اید؟"
    : state.lan === "en"
    ? "Already registered?"
    : state.lan === "ku"
    ? "Pêşî qeydkirî ye?"
    : "Bereits registriert?"
}

              <Link href="/auth/login" className="text-green-500 ">
              {
  state.lan === "fa"
    ? "وارد شوید"
    : state.lan === "en"
    ? "Log in"
    : state.lan === "ku"
    ? "Têkevin"
    : "Einloggen"
}

              </Link>
            </p>
          </>

          <form onSubmit={form.handleSubmit}>
            <div className="flex flex-col items-center py-4">
              <div
                className={`flex items-center ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                } p-4 rounded-xl w-[290px]  justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   w-[240px]"
                  placeholder={
                    state.lan === "fa"
                      ? "نام کاربری"
                      : state.lan === "en"
                      ? "Username"
                      : state.lan === "ku"
                      ? "Navê bikarhêner"
                      : "Benutzername"
                  }
                  
                  onChange={form.handleChange}
                  value={form.values.username}
                  name="username"
                />
                <FaRegUser className=" opacity-70  w-4 h-4 " />
              </div>
              {form.errors.username && form.touched.username && (
                <span className="text-rose-500 text-sm block my-3 text-center">
                  {form.errors.username}{" "}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center  ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                } p-4 rounded-xl w-[290px]  justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   w-[240px]"
                  placeholder={
                    state.lan === "fa"
                      ? "رمز عبور"
                      : state.lan === "en"
                      ? "Password"
                      : state.lan === "ku"
                      ? "Şîfre"
                      : "Passwort"
                  }
                  
                  onChange={form.handleChange}
                  value={form.values.password}
                  name="password"
                />
                <IoLockClosedOutline className=" opacity-70  w-4 h-4 " />
              </div>
              {form.errors.password && form.touched.password && (
                <span className="text-rose-500 text-sm block my-3 text-center">
                  {form.errors.password}{" "}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center py-4">
              <div
                className={`flex items-center  ${
                  state.them === "dark" ? "bg-[#ffffff0D]" : "bg_white_100"
                } p-4 rounded-xl w-[290px]  justify-center`}
              >
                <input
                  type="text"
                  className="input_navBar   w-[240px]"
                  placeholder={
                    state.lan === "fa"
                      ? "شماره موبایل"
                      : state.lan === "en"
                      ? "Mobile Number"
                      : state.lan === "ku"
                      ? "Hejmara mobîl"
                      : "Handynummer"
                  }
                  
                  onChange={form.handleChange}
                  value={form.values.phoneNumber}
                  name="phoneNumber"
                />
                <FiPhone className=" opacity-70  w-4 h-4 " />
              </div>
              {form.errors.phoneNumber && form.touched.phoneNumber && (
                <span className="text-rose-500 text-sm block my-3 text-center">
                  {form.errors.phoneNumber}{" "}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-500  rounded-full px-32  py-4"
            >
              {
  state.lan === "fa"
    ? "ادامه"
    : state.lan === "en"
    ? "Continue"
    : state.lan === "ku"
    ? "Bişopîne"
    : "Fortsetzen"
}

            </button>
          </form>

          <div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 w-full mt-5">
            <span></span>
            <span className="underline underline-offset-2">
              {
                state.lan === "fa"
                  ? "حریم خصوصی"
                  : state.lan === "en"
                    ? "Privacy"
                    : state.lan === "ku"
                      ? "Taybetmendî"
                      : "Datenschutz"
              }

            </span>{" "}
          </div>
        </div>

     <span
          className={`max-w-[330px] ${state.them === "dark" ? "text-white " : "text-black"
            } font-normal text-[18px] text-center my-5`}
        >
          {
            state.lan === "fa"
              ? "با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمت"
              : state.lan === "en"
                ? "By joining the site, you agree to all terms and conditions of service"
                : state.lan === "ku"
                  ? "Bi têketina malpera, hûn razî ne bi hemû şert û şertên xizmetê"
                  : "Mit der Mitgliedschaft auf der Website stimmen Sie allen Nutzungsbedingungen zu"
          }
          {" "}
          <Link href="/" className="text-green-500 m-1">
            {
              state.lan === "fa"
                ? "سبز لرن"
                : state.lan === "en"
                  ? "Sabzlearn Learn"
                  : state.lan === "ku"
                    ? "Sabzlearn Learn"
                    : "Sabzlearn Learn"
            }
            {"  "}
          </Link>
          {
            state.lan === "fa"
              ? "را پذیرفته اید."
              : state.lan === "en"
                ? "You have accepted."
                : state.lan === "ku"
                  ? "Hûn qebûl kiriye."
                  : "Sie haben akzeptiert."
          }

        </span>
      </section>
      <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400 opacity-20 blur-[120px] rounded-full"></div>
    </div>
  );
}
