"use client";

import { Dropdown } from "../dropdown";
import { useFetchData } from "@/hook";
import { Loading } from "@/components/common/loading";
import { useState } from "react";

export default function Categories() {
  const [categories, loading] = useFetchData("category");

  console.log("DATA -- ", categories);
  console.log("LOADING - ", loading);

  return (
    <div className="overflow-y-scroll w-1/3">
      {/* Desktop View */}
      <div className="md:hidden sm:hidden lg:block">
        <h1 className="flex items-center justify-center bg-green-600 text-white font-semibold py-4 rounded-t-xl">
          Categories
        </h1>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-b-xl">
          {/* Search Bar */}
          <div className="w-full flex relative flex-row items-center rounded-md py-1">
            <input
              type="text"
              placeholder="Search by Categories"
              className="input input-bordered w-full px-8 bg-white text-gray-700"
            />
            <img
              className="w-4 h-4 absolute top-[20px] left-3"
              src="./assets/Vector.png"
              alt=""
            />
          </div>
          {/* Categories Dropdown */}
          {loading ? (
            <Loading />
          ) : (
            categories?.map((category: any) => (
              <Dropdown key={category.id} data={category} />
            ))
          )}
        </div>
      </div>
      {/* Mobile & Tab View */}

    </div>
  );
}
