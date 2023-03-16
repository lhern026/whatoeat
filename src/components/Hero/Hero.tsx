import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Hero() {
  return (
    <>
      <div className="border-indigo-600 mt-20 flex h-full w-full flex-col place-content-center items-center border-2 border-dotted">
        <h1 className="text-center text-4xl text-rose">
          Dont know what to eat?
        </h1>

        <button className=" hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 rounded  border bg-transparent py-2 px-4 text-center font-semibold hover:border-transparent">
          Generate meal
        </button>
      </div>
    </>
  );
}
