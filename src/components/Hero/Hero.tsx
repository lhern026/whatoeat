import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Hero() {
  return (
    <>
      <div className="border-indigo-600 mt-20 flex h-full w-full flex-col place-content-center items-center border-2 border-dotted">
        <h1 className="text-center text-4xl text-rose">
          Dont know what to eat?
        </h1>

        <button className="bg-neutral-800 hover:bg-neutral-700 mx-auto block rounded-md py-3 px-6 text-center">
          Generate meal
        </button>
      </div>
    </>
  );
}
