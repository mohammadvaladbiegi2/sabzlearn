import { useGlobalState } from "@/context/GlobalState";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { state } = useGlobalState();

  return (
    <div
      className={`${
        state.them === "dark" ? "bg-dark text-white" : "bg-white text-black"
      } flex flex-wrap items-center justify-evenly gap-[50px]   p-10`}
    >
      <div className="flex flex-col  gap-y-3 flex-grow">
        <h4 className="font-bold  text-xl">
          {state.lan === "fa"
            ? "درباره ما"
            : state.lan === "en"
            ? "about us"
            : state.lan === "ku"
            ? "çûna nava"
            : "über uns"}
        </h4>
        <p className="sm:max-w-xs text-lg opacity-70">
          {state.lan === "fa"
            ? "سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند"
            : state.lan === "en"
            ? "Sabzleran is a private programming training academy that operates with the aim of providing expert staff based on the production of non-level content."
            : state.lan === "ku"
            ? "Sabzleran akademiyek perwerdehiya bernamesaziyê ya taybet e ku bi armanca peydakirina personelên pispor li ser bingeha hilberîna naverokek ne-ast dixebite."
            : "Sabzleran ist eine private Akademie für Programmierausbildung, deren Ziel es ist, Fachpersonal für die Produktion von nicht-niveauorientierten Inhalten bereitzustellen."}
        </p>
      </div>
      <div className="flex flex-col gap-y-5 flex-grow">
        <h4 className="font-bold  text-xl">
          {state.lan === "fa"
            ? "دسترسی سریع"
            : state.lan === "en"
            ? "quick access"
            : state.lan === "ku"
            ? "gihîştina bilez"
            : "Schneller Zugang"}
        </h4>
        <div className="flex flex-col items-start gap-y-4 opacity-70">
          <a href="#">
            {state.lan === "fa"
              ? "قوانین و مقررات"
              : state.lan === "en"
              ? "Terms and Conditions"
              : state.lan === "ku"
              ? "Şert û mercên"
              : "Geschäftsbedingungen"}
          </a>
          <a href="#">
            {state.lan === "fa"
              ? "ارسال تیکت"
              : state.lan === "en"
              ? "Send ticket"
              : state.lan === "ku"
              ? "Bilêtê bişînin"
              : "Ticket senden"}
          </a>
          <a href="#">
            {state.lan === "fa"
              ? "همه دوره ها"
              : state.lan === "en"
              ? "All courses"
              : state.lan === "ku"
              ? "Hemû kursên"
              : "Alle Kurse"}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 flex-grow">
        <h4 className="font-bold  text-xl">
          {state.lan === "fa"
            ? "لینک‌های سریع"
            : state.lan === "en"
            ? "Quick links"
            : state.lan === "ku"
            ? "Girêdanên bilez"
            : "Schnelle Links"}
        </h4>
        <div className="flex flex-col items-start gap-y-4 opacity-70">
          <a href="#">
            {state.lan === "fa"
              ? "آموزش جاوااسکریپت"
              : state.lan === "en"
              ? "JavaScript training"
              : state.lan === "ku"
              ? "Perwerdehiya JavaScript"
              : "JavaScript-Schulung"}
          </a>
          <a href="#">
            {state.lan === "fa"
              ? "آموزش پایتون"
              : state.lan === "en"
              ? "Python training"
              : state.lan === "ku"
              ? "Perwerdehiya Python"
              : "Python-Training"}
          </a>
          <a href="#">
            {state.lan === "fa"
              ? "آموزش HTML"
              : state.lan === "en"
              ? "HTML tutorial"
              : state.lan === "ku"
              ? "tutorial HTML"
              : "HTML-Tutorial"}
          </a>
          <a href="#">
            {state.lan === "fa"
              ? "آموزش CSS"
              : state.lan === "en"
              ? "CSS tutorial"
              : state.lan === "ku"
              ? "tutorial CSS"
              : "CSS-Tutorial"}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 flex-grow">
        <h4 className="font-bold  text-xl">
          {state.lan === "fa"
            ? "شبکه های اجتماعی"
            : state.lan === "en"
            ? "Social Networks"
            : state.lan === "ku"
            ? "Torên civakî"
            : "Soziale Netzwerke"}
        </h4>
        <div className="flex flex-col items-start gap-y-4 opacity-70">
          <a
            href="#"
            className="transition hover:text-green-500 flex items-center gap-3"
          >
            <div className="flex items-center bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC] p-4 rounded-full mt-1  justify-center">
              <FaInstagram className=" w-4 h-4 text-2xl  " />
            </div>
            sabzlearn_@{" "}
          </a>
          <a
            href="#"
            className="transition hover:text-green-500 flex items-center gap-3"
          >
            <div className="flex items-center bg-gradient-to-b from-blue-400 to-blue-600 p-4 rounded-full mt-1  justify-center">
              <FaTelegramPlane className=" w-4 h-4 text-2xl  " />
            </div>
            sabzlearn@{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
