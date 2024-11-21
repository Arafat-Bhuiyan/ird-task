import { Navbar } from "@/components/common/navbar";
import { SearchBar } from "@/components/common/searchbar";
import { Categories } from "@/components/widgets/categories";
import { Duas } from "@/components/widgets/duas";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="w-full">
        <SearchBar />
        <div className="flex w-full gap-4 px-4">
          <Categories />
          <Duas />
        </div>
      </div>
    </div>
  );
}
