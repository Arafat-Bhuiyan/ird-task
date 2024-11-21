"use client";

import { SurahCard } from "../surah-card";

export default function Duas() {
  return (
    <div className="flex flex-col w-2/3 min-h-screen shadow-md">
      <div className="bg-white rounded-lg pt-3 px-8">
        <h2 className="text-lg font-semibold mb-4 text-green-600">
          Section:{" "}
          <span className="text-lg font-normal mb-4 text-black">
            The servant is dependent on his Lord
          </span>
        </h2>
      </div>
      <SurahCard />
      <SurahCard />
      <SurahCard />
    </div>
  );
}
