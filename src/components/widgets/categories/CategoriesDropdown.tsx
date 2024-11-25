"use client";

import { Loading } from "@/components/common/loading";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "../dropdown";
import { useFetchData } from "@/hook";

export default function CategoriesDropdown() {
  const [categories, loading] = useFetchData("category");

  return (
    <Menu as="div" className="relative inline-block text-left ml-4 mb-4">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white pl-3 sm:pr-[500px] md:pr-[630px] py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Categories
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute overflow-y-auto z-10 mt-2 w-[60%] max-h-[35rem] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <div className="py-1">
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
      </MenuItems>
    </Menu>
  );
}
