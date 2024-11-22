"use client";

export default function SurahCard({ data }: any) {
  console.log("DATA -- ", data);
  return (
    <div className="bg-white rounded-lg pt-3 px-8 mt-4">
      <div className="flex gap-2 items-center mb-2">
        <img src="./assets/surah-card-icons/allah.png" alt="" />
        <h1>
          {data.dua_id}. {data.dua_name_en}
        </h1>
      </div>
      <p className="text-md mb-4">
        {data.top_en}
      </p>

      <p>{data.dua_arabic}</p>

      <p className="my-4">
        <span className="font-semibold">Transliteration:</span>
        {data.transliteration_en}
      </p>

      <p className="my-4">
        <span className="font-semibold">Translation:</span>
        {data.translation_en}
      </p>

      <h2 className="text-md font-semibold text-green-600">Reference:</h2>
      <p className="text-md font-medium">{data.refference_en}</p>

      <div className="flex justify-between items-center mt-6 mb-3">
        <img src="./assets/surah-card-icons/play.png" alt="" />

        <div className="flex justify-end gap-8 my-4">
          <img src="./assets/surah-card-icons/copy.png" alt="" />
          <img src="./assets/surah-card-icons/bookmark.png" alt="" />
          <img src="./assets/surah-card-icons/memorize.png" alt="" />
          <img src="./assets/surah-card-icons/share.png" alt="" />
          <img src="./assets/surah-card-icons/report.png" alt="" />
        </div>
      </div>
    </div>
  );
}
