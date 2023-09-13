import React from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";
import { MdDone } from "react-icons/md";

function ContentInfo({ product }) {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-10">
      <div className="flex flex-col xl:flex-row md:bg-white rounded-lg md:p-4">
        <div className="px-4 md:p-0 flex flex-col items-center gap-y-9 md:flex-auto bg-blue- lg:flex-row md:justify-start md:items-start">
          <div className="w-4/5 max-w-[250px] xl:max-w-xs">
            <Image
              className="w-full h-auto"
              src={product.imageLink}
              alt="product"
              width={200}
              height={200}
            />
            <div className="hidden md:flex items-center justify-between gap-x-4 px-2 mt-2">
              <div className="border rounded-lg p-2 border-gray-400">
                <Image
                  className="w-full h-auto"
                  src="/slide1.jpg"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className="border rounded-lg p-2 border-gray-400">
                <Image
                  className="w-full h-auto"
                  src="/slide2.webp"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className="border rounded-lg p-2 border-gray-400">
                <Image
                  className="w-full h-auto"
                  src="/slide1.jpg"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto md:mr-8">
            <div className="mb-8 text-center md:text-right">
              <h1 className="text-slate-800 font-bold text-lg mb-1 md:mb-2 md:text-2xl">
                {product.title}
              </h1>
              <h2 className="font-thin text-gray-500 md:text-lg">
                {product.brand}
              </h2>
            </div>
            <hr className="hidden md:block mb-8" />
            <div className="flex items-center justify-evenly w-full mb-6 md:justify-start">
              <span className="text-slate-800 md:!text-xl">انتخاب رنگ :</span>
              <div className="flex items-center md:mr-4">
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-red-400 border-2 border-white">
                <MdDone size={18} color="#fff" />
                </div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-blue-400 border-2 border-white -mr-1.5">
              
                </div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-green-400 border-2 border-white -mr-1.5">
          
                </div>
              </div>
            </div>

            <div className="text-slate-800 flex flex-wrap gap-x-2 gap-y-3 text-xs md:hidden mb-6">
              <div className="flex items-center flex-auto">
                <div className="flex items-center">
                  <span>
                   
                  </span>
                  <span className="mr-1 font-medium">فروشنده : </span>
                </div>
                <span className="font-light mr-1">دیجی تایز</span>
              </div>
              <div className="flex items-center flex-auto">
                <div className="flex items-center">
                  <span>
                   
                  </span>
                  <span className="mr-1 font-medium">گارانتی : </span>
                </div>
                <span className="font-light mr-1">18 ماه زرین خدمت</span>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center">
                  <span className="mr-1 font-medium">ارسال توسط : </span>
                </div>
                <span className="font-light mr-2">انبار تهران</span>
              </div>
            </div>

            <div className="text-slate-700 mb-20 sm:mb-5 font-bold bg-white p-4 rounded-lg md:p-0 md:bg-none">
              <h2 className="text-base lg:text-xl mb-5">ویژگی های کالا</h2>
              <ul className="list-disc flex flex-col gap-y-2 list-inside">
                <li className="flex flex-col md:items-center items-start gap-y-2 lg:flex-row lg:gap-x-2">
                  <span className="font-semibold text-slate-600 text-sm xl:text-lg ">
                    توضیحات:
                  </span>
                  <span className="text-sm font-medium">
                    {product.description}
                  </span>
                </li>
                <li className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
                  <p className="font-light text-slate-600">
                    قیمت محصول :
                    <span
                      className={`text-base font-medium mr-2 ${
                        product.discount ? "line-through" : "font-bold"
                      }`}
                    >
                      {toPersianNumbersWithComma(product.price)} تومان
                    </span>
                  </p>
                </li>
                <li className="flex  gap-y-2 flex-row lg:gap-x-2">
                  <span className="font-light text-slate-600">تگ ها: </span>
                  {product?.tags?.map((t, i) => {
                    return (
                      <span
                        key={i}
                        className="border border-gray-150 rounded-md cursor-pointer p-2  flex justify-center items-center mx-1"
                      >
                        {t}
                      </span>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* left box bottn add to cart in desktop */}

        <div className="md:w-1/2 lg:h-full hidden md:block">
          <div className="text-slate-800 flex flex-col gap-y-4 bg-gray-50 p-4 rounded-md">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">فروشنده : </span>
              </div>
              <span className="font-light text-xs mr-1">دیجی تایز</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">گارانتی : </span>
              </div>
              <span className="font-light text-xs mr-1">18 ماه زرین خدمت</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">ارسال توسط : </span>
              </div>
              <span className="font-light text-xs mr-2">انبار تهران</span>
            </div>

            <div className="mt-10">
              <div className="mb-4 w-full text-orange-500 font-bold text-xl text-center">
                {!!product.discount && (
                  <div className="flex items-center gap-x-2 mb-6">
                    <p className="text-sm">
                      قیمت با تخفیف :{" "}
                      {toPersianNumbersWithComma(product.offPrice)}
                    </p>
                    <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                      {toPersianNumbersWithComma(product.discount)} %
                    </div>
                  </div>
                )}
              </div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentInfo;
