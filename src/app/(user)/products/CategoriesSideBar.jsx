"use client";
import React, { useState } from "react";

import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

function CategoriesSideBar({ categories }) {
  const [isOpenBrand, setIsOpneBrand] = useState(false);
  return (
    <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2 mr-4">
          <div className="bg-white p-5 rounded-lg">
            <div className="mb-7">
              <div className="text-[#353535] font-bold text-xl mb-5">
               مرتب سازی
              </div>
             <ProductSort />
            </div>

            <div className="">
              <div className="text-[#353535] font-bold text-xl mb-5">فیلتر ها</div>
              <div onClick={() => setIsOpneBrand(!isOpenBrand)} className="cursor-pointer">
                <div className="mb-4 flex justify-between items-center w-full py-2">
                  <div className="flex items-center cursor-pointer">
                   <AiOutlineHome size={20} />

                    <span className="mr-3">برند محصول</span>
                  </div>
                  <div className="">
                   <IoIosArrowDown size={19}/>
                  </div>
                </div>
                {
                  isOpenBrand &&  <ProductFilter categories={categories} />
                }
             
              </div>

              
            </div>
          </div>
        </div>
  );
}

export default CategoriesSideBar;
