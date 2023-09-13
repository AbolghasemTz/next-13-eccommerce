import React from "react";
import { AiOutlineClockCircle, AiOutlineMobile } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";

function CategrySinglePage() {
  return (
    <div className="hidden md:block col-span-4 lg:col-span-2 xl:col-span-2 row-span-2">
      <div className="bg-white p-5 rounded-xl max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28">
        <div className="mb-7">
          <div className="text-xl font-bold text-orange-500 mb-5">
            دسته بندی
          </div>
          <ul className="">
            <li className="mb-2">
              <a
                href="#"
                className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
              >
                <span className="relative w-5 h-5 rounded-full bg-gray-100">
                 <AiOutlineMobile size={17}/>
                </span>
                <span className="mr-2">گوشی موبایل</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
              >
                <span className="relative w-5 h-5 rounded-full bg-gray-100">
                 <BsLaptop size={17} />
                </span>
                <span className="mr-2">لپ تاپ</span>
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
              >
                <span className="relative w-5 h-5 rounded-full bg-gray-100">
                <AiOutlineClockCircle size={17} />
                </span>
                <span className="mr-2">ساعت هوشمند</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategrySinglePage;
