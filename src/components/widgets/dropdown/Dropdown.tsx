"use client";

import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-4 shadow-lg rounded-lg border bg-gray-100">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Profile Image and Title */}
        <div className="flex items-center">
          <img
            src="./assets/introduction-to-dua.png"
            alt="Dua Icon"
            className="h-10 w-10 rounded-full border-2 border-green-400 mr-3"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Introduction to Dua
            </h3>
            <p className="text-sm text-gray-500">Subcategory: 11</p>
          </div>
        </div>

        {/* Dropdown Toggle Icon */}
        <span className="text-gray-600 text-xl">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <ul className="mt-4 space-y-2 border-t border-gray-300 pt-4">
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            What is Dua
          </li>
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Conditions for Dua to be successful
          </li>
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            The Method of Dua
          </li>
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Before Dua
          </li>
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            During Dua
          </li>
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Prerequisites of writing Dua and drinking its water
          </li>
          <li className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            The correct way to perform Dua for a small child
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
