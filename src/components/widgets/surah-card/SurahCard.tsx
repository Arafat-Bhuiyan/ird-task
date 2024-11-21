"use client";

export default function SurahCard() {
  return (
    <div className="bg-white rounded-lg pt-3 px-8 mt-4">
      <div className="flex gap-2 items-center mb-2">
        <img src="./assets/surah-card-icons/allah.png" alt="" />
        <h1>Conditions for Dua to be successful</h1>
      </div>
      <p className="text-md mb-4">
        Prophet (ﷺ) used to say after every compulsory prayer, The servant will
        ask his Lord for all of his religiously and worldly needs, because the
        treasure of all things is in the hands of Allah. Allah says
        (interpretation of the meaning): “And there is not a thing but that with
        Us are its depositories, and We do not send it down except according to
        a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah
        gives; And, no one can give what he resists.
      </p>

      <p>
        لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
        وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
        مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
        ذَا الْجَدِّ مِنْكَ الْجَدُّ
      </p>

      <p className="my-4">
        <span className="font-semibold">Transliteration:</span>
        Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
        lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a
        limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi
        minka al-jaddu
      </p>

      <p className="my-4">
        <span className="font-semibold">Translation:</span>
        There is none worthy of worship except Allah alone with no partner or
        associate. He is the Dominion and to Him be all praise, and He is able
        to do all things. O Allah, one can withhold what You have given and none
        can give what You have withheld, and no wealth or fortune can benefit
        anyone for from You comes all wealth and fortune.
      </p>

      <h2 className="text-md font-semibold text-green-600">Reference:</h2>
      <p className="text-md font-medium">Bukhari: 844</p>

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
