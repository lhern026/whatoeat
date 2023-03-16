import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className="border-gray-400 flex items-center justify-between border-b py-8">
      <a className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3003/3003655.png"
          className="mr-3 h-6 sm:h-9"
        />
        <span className="md:text-red-300 dark:text-white self-center whitespace-nowrap text-xl font-semibold">
          What to Eat
        </span>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON  space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="bg-gray-100 block h-0.5 w-8 animate-pulse">
              __
            </span>
            <span className="bg-gray-100 block h-0.5 w-8 animate-pulse">
              __
            </span>
            <span className="bg-gray-100 block h-0.5 w-8 animate-pulse">
              __
            </span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="text-gray-600 h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex min-h-[250px] flex-col items-center justify-between">
              <li className="border-gray-400 my-8 border-b uppercase">
                <a href="/about">About</a>
              </li>
              <div>
                {session ? (
                  <>
                    <p className="text-gray-700">hi {session.user?.name}</p>
                    <button
                      className="text-rawumber"
                      onClick={() => {
                        signOut().catch(console.log);
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    className="text-rawumber"
                    onClick={() => {
                      signIn("google").catch(console.log);
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/">About</a>
          </li>
          <div>
            {session ? (
              <>
                <p className="text-gray-700">Hi {session.user?.name}</p>
                <button
                  className="text-rawumber"
                  onClick={() => {
                    signOut().catch(console.log);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  signIn("").catch(console.log);
                }}
              >
                Login
              </button>
            )}
          </div>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
