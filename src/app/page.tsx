import { Navbar } from "@/components/common/navbar";
import { SearchBar } from "@/components/common/searchbar";
import { Dropdown } from "@/components/widgets/dropdown";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="w-full">
        <SearchBar />
        <div className="flex gap-4 mx-7">
          <div className="w-[429px]">
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
              <Dropdown />
              <Dropdown />
              <Dropdown />
              <Dropdown />
            </div>
          </div>
          <div>Duas</div>
        </div>
      </div>
    </div>
  );
}
