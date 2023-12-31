"use client";
import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";
import CartSummery from "./CartSummery";
import { useGetUser } from "../../hooks/useAuth";
import Loading from "../../common/Loading";

function page() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};
  if (isLoading) return <Loading />;
  if (!user || !data)
    return (
      <div className="container lg:max-w-screen-lg min-h-screen md:mr-4 md:text-right text-center mt-9">
        <p className="font-bold mb-4">برای مشاهده سبد خرید لطفا اقدام کنید</p>
        <p className="text-lg font-bold text-primary-900">
          .لطفا وارد حساب کاربری خود شوید
        </p>
      </div>
    );

  if (!user.cart?.products || user.cart?.products.length === 0)
    return (
      <div className="h-screen text-center">
        <p className="my-8">سبد خرید خالی است</p>
        <Link href="/products" className="text-lg font-bold text-green-900">
          رفتن به صفحه محصولات
        </Link>
      </div>
    );

  return (
    <div className="flex items-start lg:flex-row flex-col container mx-auto 2xl:max-w-screen-2xl mt-6">
      <div className="flex flex-col gap-y-2 md:gap-y-4 px-4 sm:flex-1 w-full">
        {cart &&
          cart.productDetail?.map((item) => {
            return <CartItem key={item._id} cartItem={item} />;
          })}
      </div>
      <CartSummery payDetail={cart.payDetail} />
    </div>
  );
}

export default page;
{
  /* <CartSummery payDetail={cart.payDetail}/> */
}

// {cart && cart.productDetail?.map((item) =>{
//   return <CartItem key={item._id} cartItem={item}/>
// })}
