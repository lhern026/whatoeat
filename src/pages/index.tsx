import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react"; // import state

import { api } from "../utils/api";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <nav class="border-gray-200 dark:bg-gray-900 bg-white rounded px-2 py-2.5 sm:px-4">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3003/3003655.png"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="md:text-red-300 dark:text-white self-center whitespace-nowrap text-xl font-semibold">
              What to Eat
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900 md:bg-white mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  class="bg-blue-700 md:text-blue-700 text-white dark:text-white block rounded py-2 pl-3 pr-4 md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:text-white block rounded py-2 pl-3 pr-4 md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:text-white block rounded py-2 pl-3 pr-4 md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:text-white block rounded py-2 pl-3 pr-4 md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <div>
                  {session ? (
                    <>
                      <p class="text-gray-700">hi {session.user?.name}</p>
                      <button
                        class="text-rawumber"
                        onClick={() => {
                          signOut().catch(console.log);
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button
                      class="text-rawumber"
                      onClick={() => {
                        signIn("discord").catch(console.log);
                      }}
                    >
                      Login with Discord
                    </button>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-white text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
