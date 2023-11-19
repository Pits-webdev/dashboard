import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className=" w-full h-[7vh]">
      <nav className=" h-full w-[90%] mx-auto flex justify-between items-center">
        <Link href="/">Peter</Link>

        <Link className="text-lg" href="/dashboard">
          Dashboard
        </Link>

        <ul className=" flex gap-2">
          <li>
            <Link
              className="text-blue-500 rounded-2xl py-2 px-6 text-lg"
              href="/signIn"
            >
              Sign in
            </Link>
          </li>

          <li>
            <Link
              className="bg-blue-500 text-white rounded-2xl py-2 px-4 text-lg"
              href="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
