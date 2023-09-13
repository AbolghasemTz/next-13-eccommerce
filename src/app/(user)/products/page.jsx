import React from "react";
import { getProducts } from "../../services/ProductServices";
import { getCategories } from "../../services/CategoriesServices";
import queryString from "query-string";
import Products from "./Products";
import CategoriesSideBar from "./CategoriesSideBar";

import FiltersMobile from "./FiltersMobile";
import { BsFilter } from "react-icons/bs";

export const daynamic = "force-dynamic"; //uq to cache store ssr

async function Menu({ searchParams }) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <>
      <FiltersMobile categories={categories} />

      {/* sidebar */}
      <div className="grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 mt-8 ">
        <CategoriesSideBar categories={categories} />

        <div className="hidden md:block col-span-12 lg:col-span-9">
          <div className="bg-white mx-4 px-4 flex items-center gap-x-4 text-gray-400 rounded-md">
            <div className="bg-orange-100 p-1 rounded-md flex justify-center items-center">
          <BsFilter size={20} color="#065f46"/>
            </div>
            <button className="py-4">محبوب ترین</button>
            <button className="py-4">پربازدید ترین</button>
            <button className="py-4">پرفروش ترین</button>
            <button className="py-4">ارزان ترین</button>
          </div>
        </div>

        <Products products={products} />
      </div>
    </>
  );
}

export default Menu;

