"use client";

import { Loading } from "@/components/common/loading";
import { SurahCard } from "../surah-card";
import { useFetchData } from "@/hook";

export default function Duas() {
  // Fetch categories from Firebase
  const [duas, loading] = useFetchData("dua");

  console.log("DATA -- ", duas);
  console.log("LOADING - ", loading);

  return (
    <div className="flex flex-col w-2/3 min-h-screen shadow-md overflow-y-scroll">
      <div className="bg-white rounded-lg pt-3 px-8">
        <h2 className="text-lg font-semibold mb-4 text-green-600">
          Section:{" "}
          <span className="text-lg font-normal mb-4 text-black">
            The servant is dependent on his Lord
          </span>
        </h2>
      </div>
      {loading ? ( <Loading />) : (
        duas?.map((dua: any) => (
          <SurahCard key={dua.id} data={dua} />
        ))
      )}

    </div>
  );
}
