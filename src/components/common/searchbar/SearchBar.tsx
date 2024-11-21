"use client";

import { useState } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="navbar mt-3 bg-gray-100">
      {/* Left Section: Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl" href="/">
          Duas Page
        </a>
      </div>

      {/* Right Section: Search and Profile */}
      <div className="flex-none gap-24">
        {/* Search Bar */}
        <div className="flex relative flex-row items-center rounded-md px-3 py-1 form-control">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="input input-bordered w-24 md:w-auto bg-white text-gray-700"
          />
          <img
            className="w-10 h-9 absolute top-[9.5px] right-[18px]"
            src="./assets/search-icon.png"
            alt=""
          />
        </div>

        {/* Profile Dropdown */}
        <div className="relative inline-block text-left">
          {/* Profile Image */}
          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 focus:outline-none"
            >
              <img
                src="./assets/profile.png"
                alt="Profile"
                className="rounded-full"
              />
            </button>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 h-[834px] rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <h1 className="flex justify-center m-2 font-bold text-lg">
                  Setting
                </h1>
                <div className="flex relative items-center justify-start w-72 mb-2 bg-gray-100 mx-4 rounded-md">
                  <img
                    className="absolute left-6"
                    src="./assets/language.png"
                  />
                  <a
                    href="/"
                    className="block py-4 px-10 mx-4 text-base text-gray-700  font-normal rounded-md  "
                    role="menuitem"
                  >
                    Language Setting
                  </a>
                </div>
                <div className="flex relative items-center justify-start w-72 mb-2 bg-gray-100 mx-4 rounded-md">
                  <img
                    className="absolute left-6"
                    src="./assets/general_setting.png"
                  />
                  <a
                    href="/"
                    className="block py-4 px-10 mx-4 text-base text-gray-700  font-normal rounded-md  "
                    role="menuitem"
                  >
                    General Setting
                  </a>
                </div>
                <div className="flex relative items-center justify-start w-72 mb-2 bg-gray-100 mx-4 rounded-md">
                  <img className="absolute left-6" src="./assets/menu.png" />
                  <a
                    href="/"
                    className="block py-4 px-10 mx-4 text-base text-gray-700  font-normal rounded-md  "
                    role="menuitem"
                  >
                    Font Settings
                  </a>
                </div>
                <div className="flex relative items-center justify-start w-72 mb-2 bg-gray-100 mx-4 rounded-md">
                  <img className="absolute left-6" src="./assets/menu.png" />
                  <a
                    href="/"
                    className="block py-4 px-10 mx-4 text-base text-gray-700  font-normal rounded-md  "
                    role="menuitem"
                  >
                    Appearance Settings
                  </a>
                </div>
                {/* Night Mode */}
                <div className="flex relative items-center justify-start w-72 mb-2 bg-white border shadow border-gray-100 mx-4 rounded-md">
                  <img src="./assets/on-off.png" className="absolute right-6" />
                  <p className="block py-4 px-2 mx-4 text-base text-gray-700  font-normal rounded-md  ">
                    Night Mode
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
