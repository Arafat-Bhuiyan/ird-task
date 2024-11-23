"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* Large Screen Navbar */}
      <div className="relative sm:hidden lg:block flex min-h-screen w-28 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 m-6 text-gray-700 shadow-xl shadow-blue-gray-900/5">
        {/* Dua Logo */}
        <div className="flex items-center w-20 h-20 gap-4 p-4 mb-6">
          <Link href="/">
            <img src="/assets/dua-logo.png" alt="Dua Logo" />
          </Link>
        </div>
        {/* navs */}
        <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {/* Home */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/Home.png" alt="" />
            </div>
          </div>
          {/* All Duas */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/All_Duas.png" alt="" />
            </div>
          </div>
          {/* Memorize */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/Memorize.png" alt="" />
            </div>
          </div>
          {/* Bookmarks */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/Bookmark.png" alt="" />
            </div>
          </div>
          {/* Ruqyah */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/Ruqyah.png" alt="" />
            </div>
          </div>
          {/* Dua Q&A */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/Dua_Q&A.png" alt="" />
            </div>
          </div>
          {/* Book */}
          <div
            role="button"
            className="w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid place-items-center">
              <img src="/assets/Book.png" alt="" />
            </div>
          </div>
        </nav>
        {/* Support */}
        <div className="flex items-center w-20 h-20 gap-4 p-4 mt-6">
          <Link href="/">
            <img src="/assets/support.png" alt="" />
          </Link>
        </div>
      </div>
      {/* Small and Medium Screen */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-xl rounded-t-[2rem]">
        <div className="flex justify-around items-center p-2 font-sans text-base font-normal text-blue-gray-700">
          <div role="button" className="p-3">
            <img src="/assets/Home.png" alt="" />
          </div>
          <div role="button" className="p-3">
            <img src="/assets/All_Duas.png" alt="" />
          </div>
          <div role="button" className="p-3">
            <img src="/assets/Memorize.png" alt="" />
          </div>
          <div role="button" className="p-3">
            <img src="/assets/Bookmark.png" alt="" />
          </div>
          <div role="button" className="p-3 w-[4.7rem] h-[4.7rem]">
            <img src="/assets/profile-icon.png" alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}
