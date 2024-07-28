import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoChatbubbles } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa6";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import moment from "moment-jalaali";
import Link from "next/link";

export default function Articl({ Articl, AllArdicldata }) {
  const gregorianDate = moment(Articl.createdAt);
  const jalaliDate = gregorianDate.format("jYYYY/jMM/jDD HH:mm:ss");
  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] mx-auto overflow-x-hidden mt-8 sm:mt-10">
        <div className="p-8">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10 text-white">
            <div className="col-span-full lg:col-span-8 xl:col-span-9">
              <div className="bg-dark rounded-2xl p-4 sm:p-5 ">
                <div className="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-white/10 relative">
                  <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm"></span>
                  <h1 className=" text-xl md:text-[1.625rem]/10 text-white">
                    {Articl.title}
                  </h1>
                </div>
                <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6 text-slate-500  text-sm sm:text-base">
                  <div className="flex items-center gap-x-1.5">
                    <FaRegUser className="text-[20px]  mb-1 sm:size-5 text-white/70" />

                    <span className="text-[20px]">{Articl.writer}</span>
                  </div>
                  <div className="flex items-center gap-x-1.5">
                    <CiCalendar className="text-[20px] mb-1 sm:size-5 text-white/70" />

                    <span className="text-[20px]">
                      {jalaliDate.slice(0, 10)}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-1.5">
                    <IoEyeOutline className="text-[20px] mb-1 sm:size-5 text-white/70" />

                    <span className="text-[20px]">480</span>
                  </div>
                </div>
                <Image
                  src={`/image/${Articl.img}`}
                  width={1000}
                  height={1000}
                  className="aspect-video w-full h-auto object-cover my-5 rounded-2xl"
                  alt={Articl.title}
                />
                <div className="wp-content text-[1.1rem] mb-7 opacity-85  text-justify">
                  <h1 className="my-5">
                    <strong>{Articl.title}</strong>
                  </h1>
                  <p className="my-4">{Articl.desc}</p>
                  <p className="my-4">
                    این نوع محیط زمان اجرا از JavaScriptCore، موتوری که سافاری
                    را تأمین می‌کند، استفاده کرده که معمولاً سریع شروع می‌شود و
                    در مقایسه با V8 از حافظه کارآمدتر استفاده می‌کند. اگر در
                    توسعه سمت سرور کار می‌کنید، یکی از مهم‌ترین مفاهیم آموزشی که
                    بعد از <a href="#">آموزش جاوا اسکریپت</a> و{" "}
                    <a href="#">آموزش نود جی اس</a> باید به سراغ آن بروید،
                    یادگیری بان جی اس است.
                  </p>
                  <p className="my-4">
                    در این مطلب از مجله سبز لرن در رابطه با این موضوع که{" "}
                    <strong>Bun js</strong>
                    <strong> چیست</strong>، تاریخچه آن به کجا بازمی‌گردد، چگونه
                    عمل می‌کند، نحوه نصب و غیره اطلاعاتی جامع ارائه خواهیم داد.
                  </p>
                  <p className="my-4">
                    <a href="#">
                      <Image
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-3593 my-5 size-full"
                        src="/image/js.webp"
                        alt="آموزش جاوا اسکریپت"
                        width="1920"
                        height="1080"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                      />
                    </a>
                  </p>
                  <h2 className="my-5">
                    Bun js چیست و تاریخچه آن به کجا و کی بازمی‌گردد؟
                  </h2>
                  <p className="my-4">
                    قبل از اینکه در رابطه با اینکه <strong>Bun js</strong>
                    <strong> چیست</strong> و تاریخچه آن حرف بزنیم، مروری بر نود
                    جی اس (Node.js) و دنو (Deno) و رسالت آن‌ها برای درک بهتر
                    موضوع خالی لطف نیست. Node.js توسط رایان دال در سال 2009
                    معرفی شد و با وجود اینکه اولین محیط زمان اجرای{" "}
                    <a href="#">جاوا اسکریپت</a> سمت سرور نبود، به سرعت محبوبیت
                    پیدا کرد و <a href="#">نقش جاوا اسکریپت در بک‌اند</a> را با
                    دگرگونی‌هایی روبه‌رو ساخت. همان‌طور که توسط npmjs.com گزارش
                    شده است تا سال 2023، نسخه 20 از آن منتشر شد و دارای بزرگترین
                    اکوسیستم توسعه با بیش از 3.2 میلیون ماژول بود که منجر به
                    نزدیک به 500 میلیارد بارگیری در هفته شد.
                  </p>
                  <p className="my-4">
                    در سال 2020، رایان دال Deno را به عنوان یک نسخه مدرن Node.js
                    راه‌اندازی کرد و به مسائلی مانند امنیت، سازگاری API، ابزار و
                    مدیریت ماژول پرداخت. در حالی که Deno بازخورد مثبت دریافت کرد
                    هنوز هم دلایل قابل‌توجهی برای جایگزین شدن نود جی اس ارائه
                    نکرده است.
                  </p>
                  <p className="my-4">
                    در سال 2023 شخصی به نام Jarred Sumner، Bun را به دلیل
                    ناامیدی از سرعت Node.js در حین کار بر روی پروژه Next.js
                    ایجاد کرد. برخلاف Node.js و Deno که از موتور V8 استفاده
                    می‌کنند، Bun از موتور JavaScriptCore استفاده می‌کند که در
                    مرورگرهای WebKit مانند Safari یافت می‌شود.
                  </p>
                  <p className="my-4">
                    Bun عملکرد و تجربه توسعه‌دهنده را در اولویت قرار می‌دهد و
                    هدف آن ساده‌سازی توسعه جاوا اسکریپت بدون هدر دادن نقاط قوت
                    آن است. بان جی اس می‌تواند سریع‌تر از Node.js تکامل یابد
                    زیرا به حفظ سازگاری با اکوسیستم جاوا اسکریپت و npm موجود
                    وابسته نیست. مشابه Deno، Bun به طور بومی از جاوا اسکریپت و{" "}
                    <a href="#">تایپ اسکریپت</a> بدون نیاز به پیکربندی اضافی یا
                    ابزارهای شخص ثالث پشتیبانی می‌کند.
                  </p>
                  <p className="my-4">
                    Bun به عنوان نوعی جایگزین همه‌کاره برای ابزارهای توسعه و
                    زمان اجرا مختلف، از جمله npm، npx، yarn، کامپایلرهای
                    TypeScript، dotenv، nodemon، pm2، Webpack، Babel و Jest قرار
                    گرفته است. در اصل بان جی اس راه‌حل جامع و واحد برای توسعه
                    برنامه ارائه می‌دهد.
                  </p>
                  <h3>مزایای Bun js چیست؟</h3>
                  <p className="my-4">
                    بان جی اس به خودی خود مزایای قابل‌توجهی ارائه می‌دهد که این
                    مزایا به محبوبیت آن روز به روز اضافه می‌کنند. بیایید برخی از
                    مزایای کلیدی استفاده از Bun را بررسی کنیم:
                  </p>
                  <ul>
                    <li>انتخاب موتور کارآمد</li>
                  </ul>
                  <p className="my-4">
                    برخلاف Node.js و Deno که از موتور جاوا اسکریپت V8 کروم
                    استفاده می‌کنند، Bun از موتور JavaScriptCore موجود در
                    مرورگرهای WebKit مانند سافاری استفاده می‌کند. این انتخاب
                    منجر به زمان اجرا سبک با زمان راه‌اندازی سریع‌تر و عملکرد
                    بالقوه چهار برابر سریع‌تر تحت شرایط خاص می‌شود.
                  </p>
                  <ul>
                    <li>نوشته شده به زبان Zig</li>
                  </ul>
                  <p className="my-4">
                    بان جی اس به زبان Zig نوشته شده است. Zig نوعی زبان
                    برنامه‌نویسی سطح پایین که به دلیل مدیریت حافظه دستی و
                    قابلیت‌های نخی بومی شناخته شده است که به آن امکان می‌دهد
                    هم‌زمانی را به طور مؤثر مدیریت کند.
                  </p>
                  <ul>
                    <li>پشتیبانی بومی از جاوا اسکریپت و تایپ اسکریپت</li>
                  </ul>
                  <p className="my-4">
                    مشابه Deno، Bun به طور بومی از جاوا اسکریپت و تایپ اسکریپت
                    بدون نیاز به ترانسپایلرها یا تنظیمات اضافی پشتیبانی می‌کند.
                    همچنین از فایل‌های.jsx و.tsx پشتیبانی کرده و امکان تبدیل
                    نشانه‌گذاری HTML-مانند به جاوا اسکریپت بومی را فراهم می‌کند.
                  </p>
                  <ul>
                    <li>پشتیبانی از WebAssembly</li>
                  </ul>
                  <p className="my-4">
                    Bun پشتیبانی آزمایشی را برای اجرای فایل‌های Wasm کامپایل‌شده
                    توسط WebAssembly ارائه می‌کند و قابلیت‌های آن را گسترش
                    می‌دهد.
                  </p>
                  <ul>
                    <li>مدیریت و ذخیره‌سازی ماژول</li>
                  </ul>
                  <p className="my-4">
                    Bun از ماژول‌های ES به صورت داخلی استفاده کرده و از انتظار
                    سطح بالا پشتیبانی می‌کند. این قابلیت ماژول‌ها را برای کاهش
                    فضای دیسک مورد نیاز و بهبود عملکرد نصب با ارجاع به یک نمونه
                    واحد از همان کتابخانه در سراسر پروژه‌ها در حافظه پنهان ذخیره
                    می‌کند.
                  </p>
                  <ul>
                    <li>مدیریت بسته</li>
                  </ul>
                  <p className="my-4">
                    Bun از Node’s package.json و دستورات معادل npm پشتیبانی
                    می‌کند. همچنین دارای bux است، ابزاری شبیه به npx برای نصب
                    خودکار و اجرای بسته‌ها در یک دستور.
                  </p>
                  <ul>
                    <li>دارای باندلر</li>
                  </ul>
                  <p className="my-4">
                    Bun شامل نوعی باندلر برای ادغام وابستگی‌ها در فایل واحدی است
                    که نیاز به ابزارهای اضافی مانند esbuild یا Rollup را کاهش
                    می‌دهد.
                  </p>
                  <ul>
                    <li>JavaScript API برای گزینه‌های CLI</li>
                  </ul>
                  <p className="my-4">
                    در بان جی اس بسیاری از گزینه‌های رابط خط فرمان از طریق یک{" "}
                    <a href="#">API جاوا اسکریپت</a> قابل‌دسترسی هستند که امکان
                    ایجاد اسکریپت‌های ساخت پیشرفته را بدون اجراکننده وظیفه
                    اختصاصی فراهم می‌کند.
                  </p>
                  <ul>
                    <li>تست و مانیتورینگ</li>
                  </ul>
                  <p className="my-4">
                    Bun نوعی تست اجرا کننده استاندارد مشابه Deno و Node.js به
                    همراه فلگ –watch برای اسکریپت خودکار یا راه‌اندازی مجدد تست
                    پس از اصلاح فایل ارائه می‌دهد.
                  </p>
                  <ul>
                    <li>مدیریت متغیرهای محیطی</li>
                  </ul>
                  <p className="my-4">
                    Bun به طور خودکار متغیرهای محیطی را از فایل‌های project.env
                    بارگیری و تجزیه می‌کند و نیاز به بسته‌های خارجی مانند dotenv
                    را از بین می‌برد.
                  </p>
                  <ul>
                    <li>پشتیبانی از API</li>
                  </ul>
                  <p className="my-4">
                    Bun از API های وب مختلف مانند fetch، URL، blob، WebSocket و
                    موارد دیگر، همراه با API های سازگار با Node.js پشتیبانی کرده
                    و این ویژگی آن را برای انواع مختلف پروژه‌ها همه‌کاره می‌کند.
                  </p>
                  <ul>
                    <li>پشتیبانی از کلاینت بومی SQLite3</li>
                  </ul>
                  <p className="my-4">
                    Bun شامل نوعی کلاینت بومی SQLite3 است که وابستگی پروژه‌هایی
                    که نیاز به یکپارچه‌سازی پایگاه داده SQLite دارند را کاهش
                    می‌دهد.
                  </p>
                  <p className="my-4">
                    این ویژگی‌ها، Bun را به انتخابی قانع‌کننده برای
                    توسعه‌دهندگانی تبدیل می‌کند که به دنبال محیط زمان اجرای سبک،
                    کارآمد و همه‌کاره جاوا اسکریپت هستند. در بخش فوق با اینکه
                    مزایای <strong>Bun js</strong>
                    <strong> چیست </strong>و کجا به درد کاربران می‌خورد توضیحاتی
                    کامل ارائه دادیم. در ادامه نحوه نصب Bun js را در سیستم‌های
                    مختلف مورد بررسی قرار خواهیم داد.
                  </p>
                  <h2>نحوه نصب Bun js</h2>
                  <p className="my-4">
                    برای نصب Bun، بر اساس سیستم‌عامل خود چندین گزینه دارید:
                  </p>
                  <p className="my-4">
                    ١. استفاده از curl: برای نصب Bun در لینوکس، macOS یا Windows
                    WSL، دستور زیر را در ترمینال خود اجرا کنید:
                  </p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    curl -fsSL https://bun.sh/install | bash
                  </pre>
                  <ol start="2">
                    <li>
                      استفاده از Node Package Manager (npm): با اجرای این دستور
                      Bun را به صورت سراسری نصب کنید:
                    </li>
                  </ol>
                  <pre className="overflow-hidden" style={{ direction: "ltr" }}>
                    npm install -g bun
                  </pre>
                  <ol start="3">
                    <li>
                      استفاده از Brew در macOS: اگر از macOS استفاده می‌کنید،
                      می‌توانید Bun را از طریق Brew با این دستورات نصب کنید:
                    </li>
                  </ol>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    brew tap oven-sh/bun
                  </pre>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    brew install bun
                  </pre>
                  <ol start="4">
                    <li>
                      استفاده از داکر: Bun را می‌توان از طریق Docker نیز نصب
                      کرد. برای این هدف باید دستورات زیر را اجرا کنید:
                    </li>
                  </ol>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    docker pull oven/bun
                  </pre>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    docker run --<span className="hljs-built_in">rm</span>{" "}
                    --init --
                    <span className="hljs-built_in">ulimit</span> memlock=-1:-1
                    oven/bun
                  </pre>
                  <p className="my-4">
                    پس از نصب Bun، می‌توانید به راحتی آن را با دستور زیر ارتقا
                    دهید:
                  </p>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    bun upgrade
                  </pre>
                  <p className="my-4">
                    برای حذف نصب Bun مراحل زیر را دنبال کنید:
                  </p>
                  <ol>
                    <li>
                      دایرکتوری باینری و کش Bun را با اجرای دستور زیر حذف کنید:
                    </li>
                  </ol>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    <span className="hljs-built_in">rm</span> -rf ~/.bun
                  </pre>
                  <ol start="2">
                    <li>
                      پس از حذف باید فایل پیکربندی پوسته خود را (مانند.bashrc
                      یا.zshrc) به‌روز کنید تا هرگونه ارجاع به ~/.bun/bin را از
                      متغیر $PATH حذف کرده باشید.
                    </li>
                  </ol>
                  <p className="my-4">
                    <a href="#">
                      <Image
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-3593 my-5 size-full"
                        src="/image/js.webp"
                        alt="آموزش جاوا اسکریپت"
                        width="1920"
                        height="1080"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                      />
                    </a>
                  </p>
                  <h2>مقایسه Bun، Deno و Node.js</h2>
                  <p className="my-4">
                    ممکن است برای کاربران این سؤال پیش باید که تفاوت اصلی نود جی
                    اس، دنو و Bun js چیست؟ بیایید Bun، Deno و Node.js را با هم
                    مقایسه کنیم:
                  </p>
                  <p className="my-4">
                    Deno برخی از محدودیت‌های Node را برطرف کرد، اما
                    توسعه‌دهندگان لزوماً مشتاق استفاده از دنو به جی نود جی اس
                    نیستند که نیستند که دلایل زیر از مهم‌ترین علت‌هایی هستند که
                    کاربران نود جی اس را ترجیح می‌دهند:
                  </p>
                  <p className="my-4">
                    1 | Deno در ابتدا از ماژول‌های شخص ثالث Node پشتیبانی
                    نمی‌کرد.
                  </p>
                  <p className="my-4">
                    2 | انتقال از js به Deno نیازمند یادگیری روش‌ها و تکنیک‌های
                    جدید بود.
                  </p>
                  <p className="my-4">
                    3 | در حالی که Deno تجربه توسعه بهبودیافته‌ای را ارائه کرد،
                    بسیاری از توسعه‌دهندگان js را برای نیازهای آن‌ها کافی
                    دانستند.
                  </p>
                  <p className="my-4">
                    4 | برای ترغیب توسعه‌دهندگان به سوییچ به سمت دنو، Deno
                    درنهایت گزینه‌های سازگاری را برای js اضافه کرد. با این حال،
                    در طول این مدت، Node.js برخی از ویژگی‌های Deno مانند
                    ماژول‌های ES، اجراکننده تست داخلی و حالت تماشا (—watch mode)
                    را نیز در خود جای داده است.
                  </p>
                  <p className="my-4">
                    از طرفی دیگر Bun با تلاش برای تبدیل شدن به نوعی موتور سریع
                    سازگار با Node.js در حالی که پیشرفت‌های Deno را در خود جای
                    داده است، رویکرد متفاوتی دارد. بان جی اس پتانسیل
                    امیدوارکننده‌ای نسبت به دنو دارد اما هنوز با چالش‌هایی مانند
                    موارد زیر روبرو است:
                  </p>
                  <p className="my-4">
                    1 | عملکرد بان جی اس چشمگیر است اما از آنجایی که
                    توسعه‌دهندگان کمی در مورد سرعت js نارضایتی دارند، ممکن است
                    این مزیت به‌اندازه کافی قانع‌کننده نباشد.
                  </p>
                  <p className="my-4">
                    2 | در حالی که سازگاری بان جی اس با js خوب است اما پشتیبانی
                    کامل از همه ماژول‌های Node.js در یک موتور جاوا اسکریپت
                    متفاوت چالشی مهم است. باید دید که آیا JavaScriptCore با
                    سرمایه‌گذاری کمتر می‌تواند با پیشرفت‌های V8 همگام شود یا
                    خیر.
                  </p>
                  <p className="my-4">
                    Bun قصد دارد به کل جایگزین نود جی اس شود اما هنوز طیف
                    گسترده‌ای از ویژگی‌های موجود در Deno را ارائه نکرده است.
                  </p>
                  <h2>منظور از سازگاری Node.js با Bun js چیست؟</h2>
                  <p className="my-4">
                    یکی دیگر از مفاهیم حول محیط زمان اجرای بان جی اس، سازگاری آن
                    با نود جی است اما دقیقاً منظور از سازگاری Node.js با Bun js
                    چیست؟ Bun به طور کلی با Node.js برای پروژه‌های کوچکتر و ساده
                    کار می‌کند. حتی در پروژه‌های عملی ممکن است متوجه شوید که
                    می‌توانید برخی از اسکریپت‌ها را با استفاده از bun start به
                    جای npm start بدون نیاز به ایجاد هیچ تغییری نیز اجرا کنید.
                    در کل سازگاری نود جی اس با بان جی اس را می‌توان در موارد زیر
                    خلاصه کرد:
                  </p>
                  <p className="my-4">
                    1 | ماژول‌ها و APIهای داخلی js مانند fs، path، http، console
                    و assert با بان جی اس سازگار هستند.
                  </p>
                  <p className="my-4">
                    2 | متغیرها و اشیاء جهانی مانند __dirname و process در بان
                    جی اس نیز کاربرد دارند.
                  </p>
                  <p className="my-4">
                    3 | الگوریتم تفکیک ماژول js که به مکان‌یابی فایل‌ها در
                    دایرکتوری node_modules کمک می‌کند در بان جی اس مورد استفاده
                    قرار می‌گیرد.
                  </p>
                  <p className="my-4">
                    اگرچه Bun 1.0 ادعا می‌کند که می‌تواند تقریباً هر برنامه
                    Node.js را اجرا کند اما بسیاری از توسعه‌دهندگان به این ادعا
                    شک دارند. در این رابطه برنامه‌های پیچیده می‌توانند با
                    مشکلاتی مواجه شوند و پیام‌های خطای مرموز را از عمق ماژول‌های
                    شخص ثالث تولید کنند.
                  </p>
                  <h3>ماژول ES و سازگاری CommonJS در بان جی اس</h3>
                  <p className="my-4">
                    Bun از هر دو سیستم ماژول ES (ESM) و ماژول CommonJS، همراه با
                    قابلیت انتظار سطح بالا پشتیبانی می‌کند. در حالی که ESM مدتی
                    طول کشید تا در Node.js معرفی شود، اکوسیستم آن هنوز تا حد
                    زیادی به CommonJS متکی است. با این حال، با Bun، نیازی نیست
                    پسوندهای فایل مانند.js،.cjs، یا.mjs را مشخص کنید، همچنین
                    نیازی نیست که type: module را در فایل package.json خود وارد
                    کنید. شما می‌توانید آزادانه از دستورات import و require به
                    صورت مترادف در هر فایلی استفاده کنید.
                  </p>
                  <p className="my-4">
                    Bun همه ماژول‌ها را به CommonJS ترجمه کرده و از الگوریتم
                    وضوح node_modules Node پیروی می‌کند. همچنین ترتیب اجرا
                    می‌تواند در برخی از برنامه‌ها بسیار مهم باشد، به همین دلیل
                    است که Node.js استفاده از ESM و CommonJS را در یک فایل محدود
                    می‌کند.
                  </p>
                  <h2>APIهای وب در Bun js</h2>
                  <p className="my-4">
                    یکی دیگر از ابهامات در مورد بان جی اس، APIهای وب هستند؛ اما
                    دقیقاً منظور از APIهای وب در Bun <strong>js</strong>
                    <strong> چیست</strong> و آیا بان جی اس APIهای وب خود را دارد
                    یا خیر؟ Bun با پشتیبانی داخلی از APIهای وب استاندارد که
                    معمولاً در مرورگرهای وب استفاده می‌شوند، عملکردی ایده‌آل
                    ارائه می‌دهد. این‌ها شامل عملکردهایی مانند fetch، Request،
                    Response، URL، blob، WebSocket، JSON handling، setTimeout و
                    ReadableStream می‌شود. Deno نیز این APIها را به زمان اجرا
                    سرور خود معرفی کرد که منجر به سازگاری بیشتر در توسعه وب شد.
                    Node.js نیز هم اکنون در حال پیشرفت بوده و ویژگی‌هایی مانند
                    fetch اخیراً در نسخه 18 معرفی کرده است.
                  </p>
                  <p className="my-4">
                    علاوه بر این، Bun مجموعه‌ای از APIهای استاندارد بهینه شده
                    خود را برای کارهای رایج مختلف مانند عملیات فایل، سرویس‌دهی
                    HTTP، پرس و جوی SQLite و هش رمز عبور ارائه می‌دهد.
                  </p>
                  <p className="my-4">
                    WebSocket ها مستقیماً در کنار HTTP در Bun پشتیبانی می‌شوند و
                    نیاز به ماژول‌های شخص ثالث مانند ws را از بین می‌برند. در
                    زیر مثالی از نحوه استفاده از WebSockets در Bun آورده شده
                    است:
                  </p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    <span className="hljs-title class_">Bun</span>.
                    <span className="hljs-title function_">serve</span>
                    <span className="hljs-attr">port</span>:{" "}
                    <span className="hljs-number">8000</span>,
                    <span className="hljs-title function_">fetch</span>
                    <span className="hljs-params">request</span>
                    <span className="hljs-keyword">return</span>{" "}
                    <span className="hljs-keyword">new</span>{" "}
                    <span className="hljs-title class_">Response</span>
                    <span className="hljs-string">
                      'Hello from the Bun server!'
                    </span>
                    <span className="hljs-attr">websocket</span>:
                    <span className="hljs-title function_">open</span>(
                    <span className="hljs-params">ws</span>),
                    <span className="hljs-title function_">message</span>(
                    <span className="hljs-params">ws, data</span>),
                    <span className="hljs-title function_">close</span>(
                    <span className="hljs-params">ws, code, reason</span>),
                  </pre>
                  <h3>تایپ اسکریپت و فرمت های رایج در بان جی اس</h3>
                  <p className="my-4">
                    مشابه Deno، Bun شامل نوعی ترانسپایلر جاوا اسکریپت در زمان
                    اجرا است. این بدان معنی است که می‌توانید فایل‌های جاوا
                    اسکریپت، تایپ اسکریپت، JSX یا TSX را مستقیماً بدون نیاز به
                    هیچ‌گونه وابستگی اضافی اجرا کنید. برای مثال:
                  </p>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    bun index.ts bun index.jsx bun index.tsx
                  </pre>
                  <p className="my-4">
                    این قابلیت اجازه می‌دهد تا بدون دردسر نصب ابزارها یا
                    کتابخانه‌های اضافی، انواع مختلف فایل‌ها را در Bun اجرا کنید.
                  </p>
                  <h3>مدیریت بسته در بان جی اس</h3>
                  <p className="my-4">
                    منظور از مدیریت بسته در <strong>Bun js</strong>
                    <strong> چیست</strong> و آیا این فناوری از قابلیت مدیریت
                    بسته پشتیبانی می‌کند؟ بله می‌توانید مستقیماً از Bun به عنوان
                    جایگزینی برای npm در هر پروژه Node.js استفاده کنید. در اینجا
                    چند نمونه از نحوه استفاده از Bun برای مدیریت بسته آورده شده
                    است:
                  </p>
                  <p className="my-4">برای نصب پکیج‌ها:</p>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    bun install
                  </pre>
                  <p className="my-4">برای افزودن بسته:</p>
                  <pre
                    className="code hljs text-left "
                    style={{ direction: "ltr" }}
                  >
                    bun add &lt;<span className="hljs-built_in">package</span>
                    &gt; [
                    <span className="hljs-comment">
                      --dev|--production|--peer]
                    </span>
                  </pre>
                  <p className="my-4">برای حذف بسته:</p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    bun <span className="hljs-built_in">remove</span> &lt;
                    <span className="hljs-built_in">package</span>&gt;
                  </pre>
                  <p className="my-4">برای به‌روز رسانی بسته:</p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    bun update &lt;<span className="hljs-keyword">package</span>
                    &gt;
                  </pre>
                  <p className="my-4">
                    Bun ماژول‌های کش را در پوشه یا فهرست ~/.bun/install/cache/
                    ذخیره کرده و از پیوندهای سخت برای کپی کردن آن‌ها در
                    دایرکتوری node_modules پروژه استفاده می‌کند. این بدان معناست
                    که همه پروژه‌های روی سیستم شما به نمونه‌ای واحد از کتابخانه
                    ارجاع می‌دهند که این ویژگی استفاده از فضای دیسک را کاهش
                    می‌دهد و عملکرد نصب را تا 30 برابر بهبود می‌بخشد.
                  </p>
                  <p className="my-4">
                    <a href="#">
                      <Image
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-3593 my-5 size-full"
                        src="/image/js.webp"
                        alt="آموزش جاوا اسکریپت"
                        width="1920"
                        height="1080"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                      />
                    </a>
                  </p>
                  <h3>منظور از راه‌اندازی مجدد زنده در Bun js چیست؟</h3>
                  <p className="my-4">
                    در بان جی اس شما به ابزارهای اضافی مانند nodemon نیاز ندارید
                    زیرا فایل اجرایی bun شامل نوعی فلگ یا پرچم -watch است. این
                    پرچم به اسکریپت‌ها یا تست‌ها اجازه می‌دهد تا وقتی تغییراتی
                    در فایل ایجاد می‌کنید، به‌طور خودکار راه‌اندازی مجدد شوند.
                  </p>
                  <p className="my-4">
                    علاوه بر این، Bun نوعی ویژگی مشابه به نام حالت داغ
                    (—hot&nbsp;mode) ارائه می‌دهد. در این حالت، Bun تغییرات را
                    مانیتور کرده و به آرامی ماژول‌ها را بارگذاری می‌کند. در حالی
                    که همه فایل‌ها دوباره ارزیابی می‌شوند، وضعیت سراسری
                    دست‌نخورده باقی می‌ماند.
                  </p>
                  <h3>تست با بان جی اس</h3>
                  <p className="my-4">
                    Bun نوعی تست رانر به نام bun:test ارائه می‌دهد که با Jest
                    سازگار است. این فناوری از تست ایمیج فوری (snapshot)، mocking
                    و پوشش کد (code coverage) پشتیبانی می‌کند. مثال زیر برای
                    بیان این هدف است:
                  </p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    <span className="hljs-keyword">import</span>{" "}
                    <span className="hljs-keyword">from</span>{" "}
                    <span className="hljs-string">"bun:test"</span>;
                    <span className="hljs-title function_">test</span>
                    <span className="hljs-string">'2 + 2'</span>,{" "}
                    <span className="hljs-function"> =&gt;</span>
                    <span className="hljs-title function_">expect</span>
                    <span className="hljs-number">2</span> +{" "}
                    <span className="hljs-number">2</span>.
                    <span className="hljs-title function_">toBe</span>
                    <span className="hljs-number">4</span>
                  </pre>
                  <p className="my-4">
                    مهاجرت از Jest یا Vitest ساده است زیرا واردات (دستورات
                    ایمپورت) از @jest/globals یا vitest به طور خودکار به
                    bun:test نگاشت می‌شوند؛ بنابراین، شما نباید هیچ تغییری در کد
                    خود ایجاد کنید. برای اجرای تست‌ها با Bun، اسکریپت‌هایی را با
                    الگوهای نام‌گذاری زیر اجرا کنید:
                  </p>
                  <pre
                    className="code hljs text-left overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    <span className="hljs-built_in">test</span>
                  </pre>
                  <h3>بسته‌بندی اسکریپت در بان جی اس</h3>
                  <p className="my-4">
                    یکی دیگر از سؤالات رایجی که برای کاربران در کار با بان جی اس
                    پیش می‌آید، بسته‌بندی اسکریپت است؛ اما منظور از بسته‌بندی
                    اسکریپت در <strong>Bun js</strong>
                    <strong> چیست</strong> دقیقاً؟ Bun به‌عنوان نوعی
                    بسته‌بندی‌کننده و مینی‌فایر برای جاوا اسکریپت و تایپ اسکریپت
                    عمل می‌کند و قادر به هدف‌گیری کد برای پلتفرم‌های مختلف مانند
                    مرورگر و Node.js است. این قابلیت بان جی اس از esbuild الهام
                    گرفته و نوعی API پلاگین سازگار برای این هدف ارائه می‌دهد.
                    برای ساخت بسته اولیه، می‌توانید از دستور زیر استفاده کنید:
                  </p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    Bun.
                    <span className="hljs-title function_ invoke__">build</span>
                    <span className="hljs-attr">&nbsp;entrypoints</span>
                    <span className="hljs-string">'index.js'</span>,
                    <span className="hljs-attr">&nbsp;outdir</span>{" "}
                    <span className="hljs-string">'build'</span>;
                  </pre>
                  <p className="my-4">
                    با توجه به معیارها، Bun عملکردی دو برابر سریع‌تر از esbuild
                    کامپایل شده Go را نشان می‌دهد و در عین حال به صرفه‌جویی نیز
                    دست می‌یابد. برخلاف esbuild، Bun در حال حاضر از بسته‌بندی
                    CSS پشتیبانی نمی‌کند ولی احتمالاً در آینده پلاگین‌هایی برای
                    این هدف ارائه شود.
                  </p>
                  <h3>Plugin API در بان جی اس</h3>
                  <p className="my-4">
                    API پلاگین Bun نوعی ابزار همه‌کاره است، زیرا می‌توان از آن
                    هم برای باندلر و هم برای زمان اجرا استفاده کرد. شما
                    می‌توانید پلاگین‌هایی برای رهگیری واردات و اجرای منطق
                    بارگیری سفارشی ایجاد کنید. در اینجا مثالی آورده شده است که
                    واردات فایل‌های.yaml را نشان می‌دهد:
                  </p>
                  <pre
                    className="code hljs text-left  overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    <span className="hljs-keyword">import</span>{" "}
                    <span className="hljs-keyword">from</span>{" "}
                    <span className="hljs-string">"bun"</span>;
                    <span className="hljs-title function_">plugin</span>
                    &nbsp;<span className="hljs-attr">name</span>:{" "}
                    <span className="hljs-string">'YAML'</span>, &nbsp;
                    <span className="hljs-keyword">async</span>{" "}
                    <span className="hljs-title function_">setup</span>
                    <span className="hljs-params">build</span>
                    &nbsp;<span className="hljs-keyword">const</span>
                    <span className="hljs-keyword">await</span>{" "}
                    <span className="hljs-keyword">import</span>
                    <span className="hljs-string">'js-yaml'</span>
                    &nbsp;<span className="hljs-keyword">const</span>={" "}
                    <span className="hljs-keyword">await</span>{" "}
                    <span className="hljs-keyword">import</span>
                    <span className="hljs-string">'fs'</span>
                    &nbsp;build.
                    <span className="hljs-title function_">onLoad</span>{" "}
                    <span className="hljs-attr">filter</span>{" "}
                    <span className="hljs-regexp"></span>{" "}
                    <span className="hljs-function">
                      <span className="hljs-params">args</span> =&gt;
                    </span>
                    &nbsp;<span className="hljs-keyword">const</span>
                    <span className="hljs-title function_">readFileSync</span>
                    (args.
                    <span className="hljs-property">path</span>,{" "}
                    <span className="hljs-string">'utf8'</span>); &nbsp;
                    <span className="hljs-keyword">const</span>{" "}
                    <span className="hljs-built_in">exports</span> ={" "}
                    <span className="hljs-title function_">load</span>(text){" "}
                    <span className="hljs-keyword">as</span>{" "}
                    <span className="hljs-title class_">Record</span>&lt;
                    <span className="hljs-built_in">string</span>,{" "}
                    <span className="hljs-built_in">any</span>&gt;; &nbsp;
                    <span className="hljs-keyword">return</span>{" "}
                    <span className="hljs-built_in">exports</span>,{" "}
                    <span className="hljs-attr">loader</span>:{" "}
                    <span className="hljs-string">'object'</span>
                    &nbsp; &nbsp; ;
                  </pre>
                  <p className="my-4">
                    در مثال فوق، افزونه موجود ارائه فایل‌های.yaml را قطع می‌کند
                    و منطق بارگیری سفارشی را با استفاده از کتابخانه js-yaml
                    انجام می‌دهد. سپس با استفاده از ماژول fs فایل را به صورت
                    هم‌زمان می‌خواند، محتوا را با استفاده از js-yaml بارگیری
                    کرده و داده‌های صادر شده را بازمی‌گراند.
                  </p>
                  <h2>سرعت راه‌اندازی و اجرا در بان جی اس</h2>
                  <p className="my-4">
                    هنگام استفاده از bun run &lt;script&gt; به جای npm run
                    &lt;script&gt;، برنامه معمولاً 150 میلی‌ثانیه سریع‌تر
                    راه‌اندازی می‌شود. اگرچه ممکن است این 150 میلی‌ثانیه پیشرفت
                    کوچکی به نظر برسد اما در واقع چهار برابر سریع‌تر از استفاده
                    از Node.js است. این افزایش سرعت مخصوصاً هنگام اجرای چندین
                    دستور و ساخت اسکریپت‌های سنگین بسیار قابل توجه خواهد بود.
                    همچنین افزایش عملکرد در هنگام استفاده از TypeScript بسیار
                    مهم‌تر است زیرا نیازی به مرحله انتقال نیست. Bun همچنین مدعی
                    بهبود عملکرد زیر در مقایسه با Node.js است؛ اما سؤال اینجاست
                    که دلایل برتری <strong>Bun js</strong>
                    <strong> چیست</strong>؟ دلایل زیر از مهم‌ترین عوامل این
                    برتری هستند:
                  </p>
                  <ul>
                    <li>پنج برابر سریع‌تر از استفاده از npx</li>
                    <li>
                      ده برابر سریع‌تر در خواندن فایل‌ها (با استفاده از read)
                    </li>
                    <li>
                      سه برابر سریع‌تر در نوشتن فایل‌ها (با استفاده از write)
                    </li>
                    <li>
                      چهار برابر سریع‌تر در ارائه درخواست‌های HTTP (با استفاده
                      از serve)
                    </li>
                    <li>
                      چهار برابر سریع‌تر در پرس‌وجوهای SQLite (با استفاده از
                      bun:sqlite)
                    </li>
                    <li>سیزده برابر سریع‌تر از Jest برای آزمایش</li>
                    <li>هشت برابر سریع‌تر از Vitest برای آزمایش</li>
                  </ul>
                  <p className="my-4">
                    در مورد باندلینگ، Bun از سرعت قابل‌توجهی برخوردار است:
                  </p>
                  <ul>
                    <li>تقریباً دو برابر سریع‌تر از esbuild</li>
                    <li>صد و پنجاه برابر سریع‌تر از Parcel 2</li>
                    <li>صد و هشتاد برابر سریع‌تر از Rollup with Terser</li>
                    <li>دویست و بیست برابر سریع‌تر از Webpack</li>
                  </ul>
                  <p className="my-4">
                    همه پروژه‌ها شاهد چنین پیشرفت‌های چشمگیری نیستند استفاده از
                    Bun احتمالاً تجربه توسعه کلی شما را افزایش می‌دهد.
                  </p>
                  <h2>بان جی اس در یک نگاه</h2>
                  <p className="my-4">
                    اگرچه در مطالب فوق به صورت جامع با این مفهوم که{" "}
                    <strong>Bun js</strong>
                    <strong> چیست </strong>
                    <strong>
                      آشنا شدیم اما در اینجا خلاصه‌ای به زبان ساده از بان جی اس
                      ارائه می‌کنیم.{" "}
                    </strong>
                    بان جی اس در اصل نوعی محیط زمان اجرای جاوا اسکریپت است اما
                    Node.js همچنان برای پروژه‌های مهم یا برنامه‌های قدیمی‌تر
                    کاربرد گسترده‌ای دارد.
                  </p>
                  <p className="my-4">
                    اگرچه Bun به طور فعال توسعه‌یافته و در حال پیشرفت است اما
                    چشم‌انداز بلندمدت آن هنوز نامشخص است. با این حال، این محیط
                    زمان اجرا مفاهیم جالبی را معرفی می‌کند که تیم‌های Node.js و
                    Deno می‌توانند از آن استفاده کنند.
                  </p>
                  <p className="my-4">
                    برخلاف رویکرد رادیکال Deno، Bun از ابتدا سازگاری و سرعت را
                    در اولویت قرار داده است. همچنین از آنجا که بان جی اس از
                    سازگاری بالایی با نود جی اس برخوردار است در نتیجه Bun
                    می‌تواند به عنوان جایگزینی مناسب برای ابزارهای خاص در
                    پروژه‌های قدیمی عمل کند. در زیر ٣ تا سؤال متداول مهم در
                    رابطه با بان جی اس ارائه کرده‌ایم که موضوع بحث ما را
                    تکمیل‌تر می‌کند.
                  </p>
                  <h3>Bun js چیست و چه کاربردی دارد؟</h3>
                  <p className="my-4">
                    Bun نوعی محیط زمان اجرا جاوا اسکریپت است که به شما امکان
                    می‌دهد کد جاوا اسکریپت را خارج از مرورگرهای وب یا Node.js
                    اجرا کنید. این ابزار نوعی محیط سبک و سریع برای اجرای
                    برنامه‌های جاوا اسکریپت ارائه می‌دهد که آن را برای تنظیمات
                    بدون سرور و بومی ابری ایده آل می‌کند.
                  </p>
                  <h3>تفاوت نود جی اس با بان جی اس چیست؟</h3>
                  <p className="my-4">
                    Bun طوری طراحی شده است که نوعی محیط زمان اجرا سبک و بدون
                    سرور برای جاوا اسکریپت باشد. در اصل این ابزار به‌گونه‌ای
                    طراحی شده که برای زمان‌های راه‌اندازی سریع‌تر و بهینه‌سازی
                    شده‌تر باشد که آن را به انتخابی ارجح برای عملکردهای بدون
                    سرور و میکروسرویس تبدیل می‌کند. از سوی دیگر، Node.js نوعی
                    زمان اجرا گسترده‌تر با کتابخانه استاندارد بزرگ‌تر است.
                  </p>
                  <p className="my-4">کاربردهای اصلی Bun js چیست؟</p>
                  <p className="my-4">
                    Bun برای محاسبات بدون سرور، توابع ابری و میکروسرویس ها مناسب
                    است. در شرایطی که در محیط‌های ابری زمان راه‌اندازی سریع و
                    مصرف حداقل منابع بسیار فاکتورهای مهمی هستند، این محیط زمان
                    اجرا خیلی خوب می‌درخشد.
                  </p>
                  <h2>آموزش توسعه جاوا اسکریپت سمت سرور</h2>
                  <p className="my-4">
                    اگر به دنبال یادگیری توسعه جاوا اسکریپت سمت سرور هستید، یکی
                    از بهترین ابزارها که می‌توانید کار را با آن شروع کنید،
                    &nbsp;Node.js است. Node.js محیط زمان اجرایی به‌حساب می‌آید
                    که به شما امکان می‌دهد تا کد جاوا اسکریپت را بدون نیاز به
                    مرورگر یا محیطی دیگر، بر روی سرور اجرا کنید. یادگیری Node.js
                    باعث می‌شود تا به راحتی بتوانید برنامه‌های سمت سروری پویا و
                    قدرتمندی بسازید. با استفاده از Node.js، می‌توانید
                    وب‌سرویس‌ها، برنامه‌های اینترنت اشیاء (IoT) و حتی برنامه‌های
                    شبکه اجتماعی را توسعه دهید.
                  </p>
                  <p className="my-4">
                    مزیت اصلی یادگیری Node.js این است که شما می‌توانید با
                    استفاده از زبان جاوا اسکریپت به توسعه برنامه‌های سمت سرور
                    بپردازید. همچنین، جامعه فعال و پشتیبانی فراوانی از سوی جامعه
                    برای نود جی اس وجود دارد که به شما در یادگیری و استفاده از
                    این محیط زمان کمک می‌کند. در این رابطه پیشنهاد ما به شما
                    استفاده از دوره آموزش نود جی اس سبز لرن است. در این دوره شما
                    به صورت کامل و جامع با نود جی اس و نحوه کار آن آشنا خواهید
                    شد و می‌توانید در پروژه‌های عملی از آن استفاده کنید.
                  </p>
                  <p className="my-4">
                    <a href="#">
                      <Image
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-3593 my-5 size-full"
                        src="/image/js.webp"
                        alt="آموزش جاوا اسکریپت"
                        width="1920"
                        height="1080"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                      />
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-dark rounded-2xl p-4 sm:p-5 mt-8">
                <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                  <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-amber-400 rounded-r-sm"></span>
                  <HiOutlineBookOpen className="hidden md:inline-block text-[36px] text-amber-400  w-9.5 h-9.5" />

                  <h3 className=" text-xl md:text-2xl">پیشنهاد مطالعه</h3>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  {AllArdicldata.map((articl) => (
                    <Link
                      href={`/articls/${articl._id}`}
                      key={articl._id}
                      className="flex items-center gap-x-4 bg-dark-light p-3.5 rounded-xl"
                    >
                      <Image
                        src={`/image/${articl.img}`}
                        className="h-20 rounded-lg my-5"
                        alt={articl.title}
                        height={150}
                        width={150}
                      />
                      <div>
                        <a href="#" className=" line-clamp-1">
                          {articl.title}
                        </a>
                        <div className="flex items-center gap-x-1 mt-8 text-slate-500 ">
                          <CiCalendar className="size-5" />
                          <span className="mt-1 text-sm">
                            {moment(articl.createdAt)
                              .format("jYYYY/jMM/jDD HH:mm:ss")
                              .slice(0, 10)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-dark rounded-2xl p-4 sm:p-5 mt-8">
                <div className="flex items-center justify-between mb-6 sm:mb-7">
                  <div className="flex items-center gap-x-3 relative">
                    <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                    <IoChatbubbles className="hidden md:inline-block text-3xl text-red-500 w-9.5 h-9.5" />

                    <div className=" text-xl md:text-2xl">نظرات</div>
                  </div>
                  <button className="flex justify-center items-center hover:opacity-90   button-lg bg-green-500 ">
                    ایجاد نظر جدید
                  </button>
                </div>

                <div className=" space-y-4.5 sm:space-y-5">
                  <div className="flex flex-col items-center justify-center py-5 bg-dark rounded-xl">
                    <svg
                      width="112"
                      height="100"
                      viewBox="0 0 112 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M56.4667 95.4394C81.4064 95.4394 101.624 75.168 101.624 50.1619C101.624 25.1557 81.4064 4.88428 56.4667 4.88428C31.527 4.88428 11.3093 25.1557 11.3093 50.1619C11.3093 75.168 31.527 95.4394 56.4667 95.4394Z"
                        fill="#EAEEF9"
                      ></path>
                      <g filter="url(#filter0_d_2116_10189)">
                        <path
                          d="M30.9359 38.9438H80.818C82.726 38.9438 84.3615 40.4926 84.3615 42.4968V74.018C84.3615 75.9312 82.8169 77.571 80.818 77.571H30.9359C29.0278 77.571 27.3923 76.0223 27.3923 74.018V42.4968C27.3923 40.5837 29.0278 38.9438 30.9359 38.9438Z"
                          fill="#CED7E2"
                        ></path>
                      </g>
                      <path
                        d="M109.016 38.8504C110.424 37.5606 110.522 35.3709 109.236 33.9595C107.95 32.5481 105.766 32.4495 104.358 33.7393C102.95 35.0291 102.852 37.2189 104.139 38.6303C105.425 40.0417 107.609 40.1402 109.016 38.8504Z"
                        fill="#EAEEF9"
                      ></path>
                      <path
                        d="M109.272 23.4583C109.864 22.9152 109.906 21.9932 109.364 21.3989C108.822 20.8047 107.903 20.7632 107.31 21.3062C106.718 21.8493 106.676 22.7713 107.218 23.3656C107.759 23.9598 108.679 24.0013 109.272 23.4583Z"
                        fill="#EAEEF9"
                      ></path>
                      <path
                        d="M72.5948 2.15555C73.0023 1.78219 73.0307 1.14832 72.6584 0.739758C72.286 0.331197 71.6538 0.302661 71.2463 0.676022C70.8389 1.04938 70.8104 1.68325 71.1828 2.09182C71.5552 2.50038 72.1873 2.52891 72.5948 2.15555Z"
                        fill="#EAEEF9"
                      ></path>
                      <path
                        d="M102.457 22.3455L90.0096 44.4831C89.5553 45.2119 88.6467 45.4853 87.9198 45.0298L66.6587 32.6398C65.9318 32.1843 65.6591 31.2735 66.1134 30.5447L82.4682 2.30312C82.9225 1.57431 83.8312 1.30091 84.558 1.75642L100.004 10.7754L102.457 22.3455Z"
                        fill="white"
                      ></path>
                      <path
                        d="M99.9134 10.6841L96.37 16.6969C95.9157 17.608 96.1882 18.6103 97.006 19.1569L102.367 22.2542"
                        fill="#CED7E2"
                      ></path>
                      <path
                        d="M22.5917 12.6892L36.8566 27.5386C37.3109 28.0852 37.3108 28.8141 36.7657 29.3607L22.2281 43.1171C21.6829 43.5726 20.9561 43.5725 20.4109 43.0259L2.32986 23.8038C1.87556 23.2572 1.87565 22.5284 2.42081 21.9818L12.9604 12.0513L22.5917 12.6892Z"
                        fill="white"
                      ></path>
                      <path
                        d="M12.9607 11.9605L16.8677 16.0601C17.4129 16.6067 18.3215 16.6067 18.9575 16.0601L22.5919 12.598"
                        fill="#CED7E2"
                      ></path>
                      <path
                        d="M59.6626 36.1027L54.1201 55.8715C53.9384 56.5092 53.2115 56.9646 52.5755 56.6913L33.404 51.0433C32.768 50.8611 32.3137 50.1321 32.5863 49.4944L40.0368 24.0771C40.2185 23.4394 40.9453 22.9839 41.5814 23.2573L55.483 27.3568L59.6626 36.1027Z"
                        fill="white"
                      ></path>
                      <path
                        d="M55.483 27.4478L53.8474 32.9139C53.6657 33.6427 54.1201 34.4627 54.847 34.736L59.6626 36.1932"
                        fill="#CED7E2"
                      ></path>
                      <path
                        d="M104.637 69.88L86.5157 79.7027C85.9291 80.0175 85.1006 79.814 84.8622 79.1671L75.8002 61.4737C75.4958 60.8904 75.7119 60.0561 76.3608 59.8065L99.8822 47.4102C100.469 47.0955 101.298 47.2986 101.536 47.9456L108.104 60.7779L104.637 69.88Z"
                        fill="white"
                      ></path>
                      <path
                        d="M108.009 60.8414L102.934 63.4824C102.282 63.8606 102 64.7582 102.3 65.47L104.546 69.9395"
                        fill="#CED7E2"
                      ></path>
                      <path
                        d="M59.3902 11.5048L58.8449 11.4136C58.5724 11.4136 58.3908 11.2314 58.2999 10.9581C58.2091 10.7759 58.2089 10.5937 58.118 10.5026C58.0272 10.3204 58.0273 10.0469 58.209 9.86472L58.4816 9.40921C58.6633 9.1359 58.6632 8.77158 58.3906 8.58938L57.482 7.67836C57.2095 7.40506 56.8461 7.40497 56.6644 7.58717L56.2101 7.86075C56.0284 8.04295 55.7558 8.04259 55.4832 7.95149C55.3015 7.86039 55.1197 7.76955 55.0289 7.76955C54.7563 7.67845 54.6654 7.49616 54.5746 7.22285L54.4836 6.67616C54.3928 6.31175 54.1202 6.12946 53.8477 6.12946H52.5757C52.2123 6.12946 51.9397 6.40285 51.9397 6.67616L51.8488 7.22285C51.8488 7.49616 51.6671 7.67845 51.3945 7.76955C51.2128 7.86066 51.031 7.86039 50.9402 7.95149C50.7585 8.04259 50.4859 8.04295 50.3042 7.86075L49.8499 7.58717C49.5773 7.40497 49.2138 7.40506 49.032 7.67836L48.1234 8.58938C47.8509 8.86269 47.851 9.227 48.0327 9.40921L48.3053 9.86472C48.487 10.0469 48.4869 10.3204 48.3961 10.5026C48.3052 10.6848 48.2144 10.867 48.2144 10.9581C48.1235 11.2314 47.9417 11.3225 47.6691 11.4136L47.1241 11.5048C46.7607 11.5959 46.5789 11.869 46.5789 12.1423V13.4176C46.5789 13.782 46.8515 14.0555 47.1241 14.0555L47.6691 14.1467C47.9417 14.1467 48.1235 14.3289 48.2144 14.6022C48.3052 14.7844 48.3052 14.9666 48.3961 15.0577C48.4869 15.2399 48.487 15.513 48.3053 15.7863L48.0327 16.2418C47.851 16.5151 47.8509 16.8796 48.1234 17.1529L49.032 18.0639C49.3046 18.3372 49.6682 18.3373 49.8499 18.1551L50.3042 17.8819C50.4859 17.6997 50.7585 17.6996 50.9402 17.7907C51.1219 17.8819 51.3036 17.9727 51.3945 17.9727C51.6671 18.0638 51.7579 18.2461 51.8488 18.5194L51.9397 19.0661C52.0306 19.4305 52.3031 19.6128 52.5757 19.6128H53.8477C54.2111 19.6128 54.4836 19.3394 54.4836 19.0661L54.5746 18.5194C54.5746 18.2461 54.7563 18.0638 55.0289 17.9727C55.2106 17.8816 55.3923 17.8819 55.4832 17.7907C55.6649 17.6996 55.9375 17.6997 56.2101 17.8819L56.6644 18.1551C56.937 18.3373 57.3003 18.3372 57.482 18.0639L58.3906 17.1529C58.6632 16.8796 58.6633 16.5151 58.4816 16.2418L58.209 15.7863C58.0273 15.6041 58.0272 15.331 58.118 15.0577C58.2089 14.8755 58.2999 14.6933 58.2999 14.6022C58.3908 14.3289 58.5724 14.2378 58.8449 14.1467L59.3902 14.0555C59.7536 13.9644 59.9352 13.6909 59.9352 13.4176V12.1423C59.9352 11.7779 59.7536 11.5048 59.3902 11.5048ZM53.3934 14.9665C52.1213 14.9665 51.1219 13.9644 51.1219 12.689C51.1219 11.4135 52.1213 10.4114 53.3934 10.4114C54.6654 10.4114 55.6648 11.4135 55.6648 12.689C55.574 13.9644 54.5745 14.9665 53.3934 14.9665Z"
                        fill="#FBBF24"
                      ></path>
                      <path
                        d="M14.7781 60.7904L14.4147 60.6997C14.233 60.6997 14.142 60.5172 14.0512 60.4261C14.0512 60.335 13.9604 60.1529 13.8695 60.0618C13.7786 59.8796 13.7787 59.6974 13.9604 59.6063L14.1421 59.3332C14.233 59.1509 14.233 58.8775 14.1421 58.6953L13.5061 58.0574C13.3244 57.8752 13.0519 57.8752 12.8702 58.0574L12.5975 58.2398C12.4158 58.3309 12.2341 58.3309 12.1432 58.2398C12.0524 58.1487 11.8705 58.1485 11.7797 58.0574C11.598 57.9663 11.5073 57.8753 11.5073 57.6931L11.4163 57.3287C11.4163 57.1465 11.2346 56.9644 10.962 56.9644H10.1444C9.87179 56.9644 9.69007 57.1465 9.69007 57.3287L9.59912 57.6931C9.59912 57.8753 9.41736 57.9663 9.3265 58.0574C9.23564 58.0574 9.05401 58.1487 8.96315 58.2398C8.78143 58.3309 8.59971 58.3309 8.50885 58.2398L8.23623 58.0574C8.05451 57.8752 7.78197 57.9663 7.60025 58.0574L6.96428 58.6953C6.78256 58.8775 6.78256 59.1509 6.96428 59.3332L7.14595 59.6063C7.23681 59.7885 7.23681 59.8796 7.14595 60.0618C7.05509 60.1529 7.05514 60.335 6.96428 60.4261C6.87342 60.6083 6.78242 60.6997 6.6007 60.6997L6.23735 60.7904C6.05563 60.7904 5.87378 60.9726 5.87378 61.2459V62.0662C5.87378 62.3395 6.05563 62.5217 6.23735 62.5217L6.6007 62.6125C6.78242 62.6125 6.87342 62.7949 6.96428 62.886C6.96428 62.9771 7.05509 63.1592 7.14595 63.2504C7.23681 63.4326 7.23681 63.6148 7.14595 63.7059L6.96428 63.979C6.87342 64.1612 6.87342 64.4347 6.96428 64.6169L7.60025 65.2548C7.78197 65.437 8.05451 65.437 8.23623 65.2548L8.50885 65.0724C8.59971 64.9813 8.78143 64.9812 8.96315 64.9812C9.05401 65.0723 9.23564 65.0725 9.3265 65.1636C9.50822 65.2547 9.59912 65.3457 9.59912 65.5279L9.69007 65.8922C9.69007 66.0744 9.87179 66.2565 10.1444 66.2565H10.962C11.2346 66.2565 11.4163 66.0744 11.4163 65.8922L11.5073 65.5279C11.5073 65.3457 11.6888 65.2547 11.7797 65.1636C11.8705 65.1636 12.0524 65.0723 12.1432 64.9812C12.325 64.8901 12.5067 64.8902 12.5975 65.0724L12.8702 65.2548C13.0519 65.3459 13.3244 65.3459 13.5061 65.2548L14.1421 64.6169C14.3238 64.4347 14.3238 64.1612 14.1421 63.979L13.9604 63.7059C13.8696 63.5237 13.8695 63.3415 13.8695 63.2504C13.9604 63.1592 13.9603 62.9771 14.0512 62.886C14.142 62.7038 14.233 62.6125 14.4147 62.6125L14.7781 62.5217C14.9598 62.5217 15.1417 62.3395 15.1417 62.0662V61.2459C15.2325 60.9726 15.0507 60.7904 14.7781 60.7904ZM10.5987 63.2504C9.78093 63.2504 9.05388 62.5214 9.05388 61.7014C9.05388 60.8815 9.78093 60.153 10.5987 60.153C11.4164 60.153 12.1432 60.8815 12.1432 61.7014C12.1432 62.5214 11.5073 63.2504 10.5987 63.2504Z"
                        fill="#FBBF24"
                      ></path>
                      <path
                        d="M85.2852 59.2417V74.8202C85.2852 76.8244 83.6497 78.4643 81.6508 78.4643H30.4056C28.4067 78.4643 26.7712 76.8244 26.7712 74.8202V57.9664"
                        stroke="#1676EE"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <g filter="url(#filter1_d_2116_10189)">
                        <path
                          d="M83.3122 49.2662H65.7311C64.0567 49.2662 62.3824 49.8692 61.0886 50.9243L56.4459 54.6924C55.152 55.7474 53.4778 56.3505 51.8034 56.3505H31.7868C29.808 56.3505 28.1335 57.9329 28.1335 59.9677C28.1335 60.1184 28.1336 60.3446 28.2097 60.4953L31.8628 79.7876C32.1672 81.5963 33.6894 82.953 35.516 82.953H78.1368C79.9634 82.953 81.4856 81.6717 81.7901 79.8631L86.8893 53.4865C87.1937 51.5271 85.8999 49.6431 83.845 49.3416C83.6927 49.2662 83.4644 49.2662 83.3122 49.2662Z"
                          fill="white"
                        ></path>
                      </g>
                      <g filter="url(#filter2_d_2116_10189)">
                        <path
                          d="M88.1925 45.7584H67.2038C65.2049 45.7584 63.2061 46.4874 61.6615 47.7628L56.1189 52.3179C54.5743 53.5933 52.5755 54.3223 50.5766 54.3223H26.6804C24.3181 54.3223 22.3191 56.2352 22.3191 58.695C22.3191 58.8772 22.3192 59.1507 22.41 59.3329L26.7711 82.6546C27.1346 84.841 28.9518 86.481 31.1325 86.481H82.014C84.1946 86.481 86.0119 84.9322 86.3753 82.7458L92.4629 50.8602C92.8263 48.4915 91.2817 46.214 88.8285 45.8496C88.6468 45.7585 88.3743 45.7584 88.1925 45.7584Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M59.9998 73.0005H53.9998V74.5339H59.9998V73.0005Z"
                        fill="#111827"
                      ></path>
                      <path
                        d="M47.4871 69.9912C48.7416 69.9912 49.7586 68.9715 49.7586 67.7136C49.7586 66.4558 48.7416 65.4361 47.4871 65.4361C46.2326 65.4361 45.2156 66.4558 45.2156 67.7136C45.2156 68.9715 46.2326 69.9912 47.4871 69.9912Z"
                        fill="#111827"
                      ></path>
                      <path
                        d="M65.2957 69.9004C66.5502 69.9004 67.5672 68.8807 67.5672 67.6228C67.5672 66.365 66.5502 65.3453 65.2957 65.3453C64.0412 65.3453 63.0242 66.365 63.0242 67.6228C63.0242 68.8807 64.0412 69.9004 65.2957 69.9004Z"
                        fill="#111827"
                      ></path>
                      <path
                        d="M97.4032 84.5899C97.1304 85.7751 96.7667 86.869 96.3121 87.963C96.2212 88.2365 96.1303 88.4188 95.9484 88.6923C94.4028 91.7007 91.9479 94.1621 88.9475 95.6207C88.5838 95.803 88.2201 95.9853 87.9474 96.0765C85.0379 97.2616 81.7647 97.7174 78.4915 96.9881C69.854 95.1649 64.3078 86.6867 66.1263 78.0262C67.9447 69.3657 76.4004 63.8047 85.0379 65.628C88.1292 66.2661 90.8568 67.8159 93.1299 70.0038C96.9486 73.7415 98.5851 79.3025 97.4032 84.5899Z"
                        fill="#FBBF24"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M73.9998 81.0005C73.9998 77.0339 77.6898 74.0005 81.9998 74.0005C86.3097 74.0005 89.9998 77.0339 89.9998 81.0005C89.9998 84.9671 86.3097 88.0005 81.9998 88.0005C81.4863 88.0005 80.9836 87.9582 80.4959 87.8772C79.5115 88.584 78.3035 89.0005 76.9998 89.0005C76.8521 89.0005 76.7056 88.9952 76.5604 88.9847C76.2986 88.9657 76.0658 88.8113 75.9466 88.5775C75.8273 88.3437 75.8389 88.0646 75.9772 87.8415C76.2945 87.3296 76.4835 86.73 76.4987 86.0854C74.9782 84.8258 73.9998 83.025 73.9998 81.0005Z"
                        fill="white"
                      ></path>
                      <defs>
                        <filter
                          id="filter0_d_2116_10189"
                          x="5.39233"
                          y="27.9438"
                          width="100.969"
                          height="82.6271"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="11"></feOffset>
                          <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2116_10189"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2116_10189"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <filter
                          id="filter1_d_2116_10189"
                          x="23.1335"
                          y="39.2662"
                          width="68.8"
                          height="43.6868"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="-5"></feOffset>
                          <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2116_10189"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2116_10189"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <filter
                          id="filter2_d_2116_10189"
                          x="0.319092"
                          y="34.7584"
                          width="114.197"
                          height="84.7227"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="11"></feOffset>
                          <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2116_10189"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2116_10189"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                    <p className=" text-center text-slate-500 mt-3">
                      نظری برای این مقاله ثبت نشده است
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
              <div
                className="bg-dark rounded-xl p-5 overflow-hidden"
                id="shortlink-collapse"
              >
                <div className="flex items-center justify-between mb-5 pb-5 border-b border-b-white/10">
                  <div className="flex items-center gap-x-2 ">
                    <CiShare2 className="w-7 h-7" />
                    اشتراک گذاری مطلب
                  </div>
                  <button
                    type="button"
                    data-collapse="#shortlink-collapse"
                    data-height="h-17"
                  >
                    <FaChevronUp className="w-5.5 h-5.5 rotate-180" />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-x-3 p-4 mt-4.5 bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                  <button>
                    <HiClipboardDocumentCheck className="w-8 h-8" />
                  </button>
                  <span
                    className=" text-lg w-64  text-left truncate"
                    style={{ direction: "ltr" }}
                  >
                    https://sabzlearn.ir/?...
                  </span>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  let res = await fetch("http://localhost:3000/api/articl/");
  let data = await res.json();
  const paths = data.map((articl) => ({
    params: { id: String(articl._id) },
  }));
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(contex) {
  let res = await fetch(`http://localhost:3000/api/articl/${contex.params.id}`);
  let Articl = await res.json();
  let resAllArticl = await fetch("http://localhost:3000/api/articl/");
  let AllArdicldata = await resAllArticl.json();
  return {
    props: { Articl, AllArdicldata },
  };
}
