import Sidebaruserdeatails from "@/components/Sidebaruserdeatails";
import Userdeatailsheaderbox from "@/components/Userdeatailsheaderbox";
import Image from "next/image";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsTicketPerforated } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";

export default function NewTickts() {
  return (
    <div className=" flex gap-x-10 2xl:gap-x-14 px-4 lg:px-8 xl:px-14 2xl:px-25 lg:py-7 ">
      <Sidebaruserdeatails />
      <section className="bg-dark px-5 rounded-2xl w-full max-w-[1432px] mx-auto bg-dark md:p-10 lg:rounded-4xl">
        <header className="flex items-center justify-between bg-gray md:bg-transparent border-b md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 md:p-0">
          <h3 className="hidden md:block text-2xl text-white">
            mohammad valadbiegi عزیز؛ خوش اومدی 🙌
          </h3>
          <div className="flex md:hidden items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
            <RxHamburgerMenu className="text-white w-6 h-6 text-xl cursor-pointer hover:text-green-500 transition-all" />
          </div>
          <div className="flex gap-x-3.5 md:gap-x-7">
            <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
              <IoNotificationsOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
            </div>
            <div className="flex items-center bg-[#ffffff0D] p-4 rounded-full  justify-center">
              <IoSunnyOutline className="text-white w-6 h-6 text-xl cursor-pointer hover:text-yellow-400 transition-all" />
            </div>
            <div className="md:flex items-center hidden  bg-white p-3 rounded-full  justify-center">
              <Image src="/image/userimage.png" width={30} height={30} />{" "}
            </div>
          </div>
        </header>

        <div className="bg_black_100 my-6  p-3.5 md:p-4.5 rounded-2xl">
          <div class="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-700">
            <span class=" md:text-xl text-white">ارسال تیکت</span>
          </div>
          <form>
            <div>
              <label for="department" class=" text-white">
                دپارتمان
              </label>
              <select
                required=""
                class="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
              >
                <option value="">دپارتمان مورد نظر...</option>
                <option value="finance">مالی</option>
                <option value="management">ارتباط با مدیریت</option>
                <option value="support">پشتیبانی</option>
                <option value="counseling">مشاوره</option>
              </select>
            </div>
            <div class="mt-6">
              <label for="title" class=" text-white">
                موضوع تیکت
              </label>
              <input
                type="text"
                class="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slate placeholder:text-gray-500 transition-all"
                id="title"
                name="title"
                required=""
                placeholder="موضوع تیکت خود را وارد کنید"
              />
            </div>
            <div class="mt-6">
              <label for="text" class=" text-white">
                متن تیکت
              </label>
              <textarea
                rows="8"
                class="mt-3.5 md:mt-4 w-full p-3 sm:p-5  text-sm sm:text-base tracking-tight text-white bg-gray-700 rounded-xl border border-transparent focus:border-slateplaceholder:text-gray-500 transition-all"
                id="text"
                name="text"
                required=""
                placeholder="متن تیکت خود را وارد کنید"
              ></textarea>
            </div>
            <div class="flex justify-between gap-5 flex-wrap mt-6">
              <div class="flex gap-x-3 mr-auto">
                <button
                  class="bg-green-500 text-white py-3 px-4 hover:opacity-90 rounded-xl"
                  type="submit"
                >
                  ارسال
                </button>
              </div>
            </div>
            <input type="hidden" name="ticket_id" value="" />
            <input type="hidden" name="nonce" value="51f75ddbb7" />
          </form>
        </div>
      </section>
    </div>
  );
}
