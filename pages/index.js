import React, { useState } from "react";

import Image from "next/image";
import { IoCodeSlash, IoPlayOutline } from "react-icons/io5";
import TitleCourseIntroduction from "@/components/TitleCourseIntroduction";

import CourseCard from "@/components/CourseCard";
import Waybox from "@/components/Waybox";
import HelpBox from "@/components/HelpBox";
import ArticlsCard from "@/components/ArticlsCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CourseCardSlider from "@/components/CourseCardSlider";
import { useGlobalState } from "@/context/GlobalState";
import { FaLockOpen, FaPython } from "react-icons/fa6";
import { SlPuzzle } from "react-icons/sl";
import { verify } from "jsonwebtoken";
import { User } from "@/Models/UsersModel";
import connectToDB from "@/DB/DataBase";
export default function Home({ articlsData, courseData, islogin, username }) {
  let [temp, setTemp] = useState(0);
  let [activeCours, setactiveCours] = useState(0);
  const { state } = useGlobalState();

  //slider logic
  function leftClick() {
    if (activeCours <= -2) {
      setTemp(-760);
      setactiveCours(2);
    } else {
      setTemp(temp + 380);
      setactiveCours((prev) => prev - 1);
    }
  }
  function rightClick() {
    if (activeCours >= 2) {
      setTemp(760);
      setactiveCours(-2);
    } else {
      setTemp(temp - 380);
      setactiveCours((prev) => prev + 1);
    }
  }

  return (
    <>
      <div
        className={`${
          state.them === "dark" ? "bg_black_100" : "bg_white_100"
        } pb-8 `}
      >
        <Navbar islogin={islogin} username={username} />
        <div className="max-w-[1400px] m-auto">

       
        <header>
          <section className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-0   justify-between items-center px-8 mt-7">
            <div
              className={`${state.lan !== "fa" && "ltr"} md:w-[600px] flex ${
                state.them === "dark" ? "text-white" : "text-black"
              } flex-col xl:ms-[30px] gap-14`}
            >
              <div className="flex flex-col items-center xl:items-start">
                <span className="  text-[30px] md:text-[50px]">
                  {state.lan === "fa"
                    ? "آکادمی آموزش"
                    : state.lan === "en"
                    ? "Academy of Education"
                    : state.lan === "ku"
                    ? "Akademiya Perwerdehiyê"
                    : "Akademie für Bildung"}
                </span>
                <span className="  text-[35px] md:text-[50px] text-center">
                  {state.lan === "fa"
                    ? "برنامه نویسی سبزلرن"
                    : state.lan === "en"
                    ? "Green programming"
                    : state.lan === "ku"
                    ? "Bernameya Kesk"
                    : "Grüne Programmierung"}
                </span>
              </div>
              <span className=" text-[18px]  md:text-[28px] text-center xl:text-start block">
                {state.lan === "fa"
                  ? "با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن"
                  : state.lan === "en"
                  ? "Learn the science of programming safely and improve with Sabzlern Private Academy"
                  : state.lan === "ku"
                  ? "Zanistiya bernamesaziyê bi ewlehî fêr bibin û bi Akademiya Taybet a Sabzlern re çêtir bikin"
                  : "Lernen Sie die Wissenschaft des Programmierens sicher und verbessern Sie sich mit der Sabzlern Private Academy"}
              </span>
              <div
                className={`${
                  state.lan !== "fa" && "ltr"
                } flex items-center gap-5 justify-center xl:justify-start`}
              >
                <a
                  href="#lastcourse"
                  className=" text-[18px] flex items-center justify-center py-4 px-7 gap-2 rounded-full bg_button_navbar hover:opacity-90 cursor-pointer"
                >
                  {state.lan === "fa"
                    ? "از این مسیرها شروع کن"
                    : state.lan === "en"
                    ? "Start from these paths"
                    : state.lan === "ku"
                    ? "Ji van rêyan dest pê bikin"
                    : "Beginnen Sie auf diesen Wegen"}
                </a>
                <div className="flex items-center bg-green-500 p-3 rounded-full  justify-center">
                  <IoPlayOutline className="text-white w-5 h-5 text-2xl cursor-pointer  transition-all" />
                </div>
                <a
                  href="#popularcourse"
                  className="hidden sm:inline  text-[17px]"
                >
                  {state.lan === "fa"
                    ? "دوره‌های رایگان"
                    : state.lan === "en"
                    ? "Free courses"
                    : state.lan === "ku"
                    ? "Kursên belaş"
                    : "Kostenlose Kurse"}
                </a>
              </div>
              <div className="hidden lg:block absolute top-23 right-0 w-[250px] h-[250px] bg-green-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
              <div className="hidden lg:block absolute -bottom-12 right-96 w-[250px] h-[250px] bg-sky-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
            </div>
            <div>
              <Image
                src={`/image/${
                  state.them === "dark" ? "hero-dark.svg" : "hero-light.svg"
                }`}
                height={650}
                width={850}
                alt="sabzlearnp"
              />
            </div>
          </section>
        </header>
        {/* last cours */}
        <section id="lastcourse">
          <TitleCourseIntroduction
            title={
              state.lan === "fa"
                ? "آخرین دوره ها"
                : state.lan === "en"
                ? "The last courses"
                : state.lan === "ku"
                ? "Kursên dawîn"
                : "Die letzten Kurse"
            }
            desc={
              state.lan === "fa"
                ? "سکوی پرتاپ شما به سمت موفقیت"
                : state.lan === "en"
                ? "Your launch pad to success"
                : state.lan === "ku"
                ? "Destpêkirina weya serkeftinê"
                : "Ihre Startrampe zum Erfolg"
            }
            linktitle={
              state.lan === "fa"
                ? "مشاهده همه دوره‌ها"
                : state.lan === "en"
                ? "View all courses"
                : state.lan === "ku"
                ? "Hemî qursan bibînin"
                : "Alle Kurse ansehen"
            }
            link="/searchcours/frontend"
            pointcolor="bg-amber-400"
          />
          <div className="grid px-14 grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {courseData.slice(0, 8).map((course) => (
              <CourseCard key={course._id} {...course} />
            ))}
          </div>{" "}
        </section>
        {/* way sections */}
        <section>
          <TitleCourseIntroduction
            title={
              state.lan === "fa"
                ? "نقشه راه ها"
                : state.lan === "en"
                ? "Roadmap"
                : state.lan === "ku"
                ? "Tarîfa bikaranînê"
                : "Wegbeschreibung"
            }
            desc={
              state.lan === "fa"
                ? "نقشه های راه برای شروع اصولی یادگیری"
                : state.lan === "en"
                ? "Roadmaps for Starting Fundamental Learning"
                : state.lan === "ku"
                ? "Rêbernameya destpêkirina fêrbûna bingehîn"
                : "Wegweiser für den Start des grundlegenden Lernens"
            }
            showlink={false}
            pointcolor="bg-red-500"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-16 gap-6 sm:gap-7">
            <Waybox
              number={`${state.lan === "fa" ? "دوره" : "course"}5`}
              title={state.lan === "fa" ? "فرانت‌ اند" : "Front end"}
              gradientfrom="FFB535"
              gradientto="F2295B"
              icon={<IoCodeSlash className="text-[30px]" />}
            />
            <Waybox
              number={`${state.lan === "fa" ? "دوره" : "course"}5`}
              title={state.lan === "fa" ? "امنیت" : "Security"}
              gradientfrom="30c5e4"
              gradientto="28e55d"
              icon={<FaLockOpen className="text-[30px]" />}
            />
            <Waybox
              number={`${state.lan === "fa" ? "دوره" : "course"}5`}
              title={state.lan === "fa" ? "پایتون" : "python"}
              gradientfrom="2e9eff"
              gradientto="9c33f7"
              icon={<FaPython className="text-[30px]" />}
            />
            <Waybox
              title={state.lan === "fa" ? "مهارت فردی" : "Personal Skill"}
              number={`${state.lan === "fa" ? "دوره" : "course"}5`}
              gradientfrom="ff3571"
              gradientto="880175"
              icon={<SlPuzzle className="text-[30px]" />}
            />
          </div>
        </section>
        {/* help sections */}
        <section>
          <TitleCourseIntroduction
            title={
              state.lan === "fa"
                ? "ما چه کمکی میتونیم بهت بکنیم"
                : state.lan === "en"
                ? "What can we do to help you?"
                : state.lan === "ku"
                ? "Em dikarin ji bo we çi bikin?"
                : "Was können wir für dich tun?"
            }
            desc={
              state.lan === "fa"
                ? "از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
                : state.lan === "en"
                ? "We won't leave you alone from the beginning of the journey; we're here to support you through thick and thin"
                : state.lan === "ku"
                ? "Em te di destpêka rê de bi tenê nahêlin; em li vir in ji bo piştgirîya we bi qalind û zirav"
                : "Wir lassen dich nicht allein am Anfang des Weges; wir sind hier, um dich durch dick und dünn zu unterstützen"
            }
            showlink={false}
            pointcolor="bg-sky-500"
          />
          <div className="flex flex-wrap items-center justify-evenly  mt-8 px-2">
            <HelpBox
              img="help1-removebg-preview.png"
              title={
                state.lan === "fa"
                  ? "تضمین کاملترین محتوا"
                  : state.lan === "en"
                  ? "Guaranteed Most Comprehensive Content"
                  : state.lan === "ku"
                  ? "Garantî kirin ku naveroka herî berfireh heye"
                  : "Garantiert der umfassendste Inhalt"
              }
              desc={
                state.lan === "fa"
                  ? "بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری"
                  : state.lan === "en"
                  ? "Rest assured that we cover the most detailed aspects in our courses; after completing this course, you won't need any other training"
                  : state.lan === "ku"
                  ? "Xem neke, em di qursên xwe de mijarên herî berfireh vedigirin; Piştî qedandina vê qursê hûn ê hewce nebin perwerdehiyek din"
                  : "Sei unbesorgt, wir behandeln die detailliertesten Themen in unseren Kursen; nach Abschluss dieses Kurses wirst du keine weitere Schulung benötigen"
              }
            />
            <HelpBox
              img="help2-removebg-preview.png"
              title={
                state.lan === "fa"
                  ? "پشتیبانی دائمی"
                  : state.lan === "en"
                  ? "Ongoing Support"
                  : state.lan === "ku"
                  ? "Piştgiriya daîmî"
                  : "Dauerhafte Unterstützung"
              }
              desc={
                state.lan === "fa"
                  ? "هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
                  : state.lan === "en"
                  ? "If you have any questions or encounter any issues, our team is ready to help. Our goal is to ensure you complete the course without worries"
                  : state.lan === "ku"
                  ? "Ger pirsên we hebin an jî pirsgirêkek we hebe, tîmê me amade ye ku ji we re bibe alîkar. Armanca me ew e ku hûn qursê bê xem biqedînin"
                  : "Wenn du Fragen hast oder auf Probleme stößt, steht unser Team bereit, um dir zu helfen. Unser Ziel ist es, dass du den Kurs ohne Sorgen absolvieren kannst"
              }
            />
            <HelpBox
              img="help3-removebg-preview.png"
              title={
                state.lan === "fa"
                  ? "پروژه محور در راستای بازار کار"
                  : state.lan === "en"
                  ? "Project-Based Towards the Job Market"
                  : state.lan === "ku"
                  ? "Proje-based ber bi bazara kar ve"
                  : "Projektbasiert in Richtung Arbeitsmarkt"
              }
              desc={
                state.lan === "fa"
                  ? "کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
                  : state.lan === "en"
                  ? "Our entire focus is for individuals to confidently start and pursue projects independently after completing the course, aiming to generate income"
                  : state.lan === "ku"
                  ? "Tevahiya mebesta me li ser kesên ku qursê diqedînin e ku dikarin bi pêbawerî dest pê bikin û projeyên bi mebesta hilberîna dahatiyê bişopînin."
                  : "Unser gesamter Fokus liegt darauf, dass Personen nach Abschluss des Kurses selbstbewusst Projekte starten und verfolgen können, mit dem Ziel, Einkommen zu erzielen"
              }
            />
            <HelpBox
              img="help4-removebg-preview.png"
              title={
                state.lan === "fa"
                  ? "سراغ حرفه ای ها رفتیم"
                  : state.lan === "en"
                  ? "We've gone to the professionals"
                  : state.lan === "ku"
                  ? "Me bi pisporan re şêwirî"
                  : "Wir haben die Profis konsultiert"
              }
              desc={
                state.lan === "fa"
                  ? "به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
                  : state.lan === "en"
                  ? "I can confidently say we have the strictest criteria for hiring instructors because it's crucial for us to deliver content in a simple and clear manner to ensure smooth learning"
                  : state.lan === "ku"
                  ? "Ez dikarim bi pêbawerî bibêjim ku ji bo girtina mamosteyan pîvanên herî hişk ên me hene ji ber ku ji me re girîng e ku naverokê bi hêsanî û zelal ragihînin da ku fêrbûna bêkêmasî peyda bikin."
                  : "Ich kann mit Zuversicht sagen, dass wir die strengsten Kriterien für die Einstellung von Dozenten haben, denn es ist uns wichtig, den Inhalt einfach und klar zu vermitteln, um ein reibungsloses Lernen zu gewährleisten"
              }
            />
          </div>
        </section>
        {/* last cours slider */}
        <section>
          <TitleCourseIntroduction
            title={
              state.lan === "fa"
                ? "نقشه راه هاجدیدترین دوره ها"
                : state.lan === "en"
                ? "The road map of the latest courses"
                : state.lan === "ku"
                ? "Nexşeya rê ya qursên herî dawî"
                : "Die Roadmap der neuesten Kurse"
            }
            desc={
              state.lan === "fa"
                ? "یادگیری و رشد توسعه فردی"
                : state.lan === "en"
                ? "Learning and personal development growth"
                : state.lan === "ku"
                ? "Fêrbûn û mezinbûna pêşkeftina kesane"
                : "Lernen und persönliche Entwicklung"
            }
            showlink={false}
            showbutton={true}
            pointcolor="bg-green-500"
            leftClick={leftClick}
            rightClick={rightClick}
          />
          <div className="flex justify-center  overflow-x-hidden px-11 w-[90%] overflow-hidden m-auto">
            <div className="flex items-start justify-center gap-[44px] ">
              {courseData.slice(8, 15).map((card) => (
                <CourseCardSlider key={card._id} {...card} temp={temp} />
              ))}
            </div>
          </div>
        </section>
        {/* last articls */}
        <section>
          <TitleCourseIntroduction
            title={
              state.lan === "fa"
                ? "آخرین مقالات"
                : state.lan === "en"
                ? "Latest articles"
                : state.lan === "ku"
                ? "Latest articles"
                : "Neueste Artikel"
            }
            desc={
              state.lan === "fa"
                ? "مقالات بروز برنامه نویسی"
                : state.lan === "en"
                ? "Current programming articles"
                : state.lan === "ku"
                ? "Gotarên bernameya niha"
                : "Aktuelle Programmierartikel"
            }
            showlink={false}
            pointcolor="bg-amber-400 "
          />
          <div className="flex flex-wrap items-center justify-evenly  mt-8 px-2">
            {articlsData.map((articls) => (
              <ArticlsCard key={articls._id} {...articls} />
            ))}
          </div>
        </section>
        {/* popelar course */}
        <section id="popularcourse">
          <TitleCourseIntroduction
            title={
              state.lan === "fa"
                ? "محبوب ترین دوره ها"
                : state.lan === "en"
                ? "The most popular courses"
                : state.lan === "ku"
                ? "Kursên herî populer"
                : "Die beliebtesten Kurse"
            }
            desc={
              state.lan === "fa"
                ? "پرمخاطب ترین و بهترین دوره های سبزلرن"
                : state.lan === "en"
                ? "The most popular and best courses in Sabzleran"
                : state.lan === "ku"
                ? "Li Sabzleran qursên herî populer û çêtirîn"
                : "Die beliebtesten und besten Kurse in Sabzleran"
            }
            link="/searchcours/frontend"
            linktitle={
              state.lan === "fa"
                ? "مشاهده همه دوره‌ها"
                : state.lan === "en"
                ? "View all courses"
                : state.lan === "ku"
                ? "Hemî qursan bibînin"
                : "Alle Kurse ansehen"
            }
            pointcolor="bg-blue-400 "
          />
          <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 px-14">
            {[...courseData]
              .reverse()
              .slice(0, 8)
              .map((course) => (
                <CourseCard key={course._id} {...course} />
              ))}
          </div>{" "}
        </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.PriveKey);
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export async function getServerSideProps(context) {
  connectToDB();

  let username = "user";
  let islogin = false;
  const { token } = context.req.cookies;
  if (token) {
    islogin = true;
  }

  const tokenPayload = verifyToken(token);

  let FindUser = await User.findOne(
    {
      phoneNumber: tokenPayload.phoneNumber,
    },
    "-_id username"
  );

  let MainUser = JSON.parse(JSON.stringify(FindUser));

  if (MainUser) {
    username = await MainUser.username;
  }

  let articlsres = await fetch("https://sabzlearn-kappa.vercel.app/api/articl");
  let articlsData = await articlsres.json();
  let couresres = await fetch("https://sabzlearn-kappa.vercel.app/api/course");
  let courseData = await couresres.json();

  return {
    props: { articlsData, courseData, islogin, username },
  };
}
