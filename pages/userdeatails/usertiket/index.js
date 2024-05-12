import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import React, { useState } from "react";
import { BsTicketPerforated } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import HeaderAccontDetails from "@/components/HeaderAccontDetails";
import { verify } from "jsonwebtoken";
import connectToDB from "@/DB/DataBase";
import { User } from "@/Models/UsersModel";

export default function UserTiket({ CoursData }) {
  const [showsidebar, setshowsidebar] = useState(false);

  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails
        showsidebar={showsidebar}
        setshowsidebar={setshowsidebar}
      />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <HeaderAccontDetails setshowsidebar={setshowsidebar} />

        <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
          <Userdeatailsheaderbox
            title="همه تیکت ها"
            desc={`${CoursData.tickets.length} عدد`}
            icon={<BsTicketPerforated />}
            bg="bg-amber-400"
          />
          <Userdeatailsheaderbox
            title="تیکت های باز"
            desc={`${CoursData.tickets.length} تیکت`}
            icon={<IoMailOpenOutline />}
            bg="bg-sky-500"
          />
          <Userdeatailsheaderbox
            title="تیکت های بسته شده"
            desc="0 تیکت"
            icon={<HiOutlineChatAlt2 />}
            bg="bg-rose-500"
          />
        </div>
        <div className="mb-3">
          <Userdeatailsheaderbox
            desc="تیکت جدید"
            icon={<FiPlusCircle />}
            bg="bg-secondry"
            href="/userdeatails/usertiket/newticket"
          />
        </div>
        {CoursData.tickets.length ? (
          <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
            <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
              <span className=" md:text-xl text-white">تیکت ها</span>
            </div>

            <div>
              {CoursData.tickets?.map((ticket) => (
                <Link
                  href={`/userdeatails/usertiket/${ticket._id}`}
                  className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <div className="flex items-center">
                    <span className="block text-white w-20 text-right ">
                      #{ticket._id.slice(0, 4)}
                    </span>
                    <Link
                      href={`/userdeatails/usertiket/${ticket._id}`}
                      className="text-white w-full  sm:max-w-md md:truncate"
                    >
                      {ticket.title}
                    </Link>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-slate-400 text-ltr">
                      1402/11/01 (19:17)
                    </span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400  bg-yellow-400/10 rounded">
                      {ticket.department}
                    </span>
                    <span className="text-xs py-1 px-1.5 text-yellow-400  bg-yellow-400/10 rounded">
                      منتظر پاسخ
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-dark rounded-2xl p-4.5 sm:p-5 mt-8">
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
                  تیکت برای نمایش وجود ندارد
                </p>
              </div>
            </div>
          </div>
        )}
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

  const tokenPayload = verifyToken(token); // verify and find payload
  let FindUser = await User.findOne(
    { phoneNumber: tokenPayload.phoneNumber },
    "username tickets"
  );
  let MainUser = JSON.parse(JSON.stringify(FindUser));

  return { props: { CoursData: MainUser } };
}
