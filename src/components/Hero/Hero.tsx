import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Hero() {
  return (
    <>
      <div className="border-indigo-600 h-full w-full ">
        <h1 className="text-center text-4xl text-rose">
          dont know what to eat?
        </h1>

        <button className="hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 rounded border bg-transparent py-2 px-4 font-semibold hover:border-transparent">
          Generate meal
        </button>
      </div>
    </>
  );
}
