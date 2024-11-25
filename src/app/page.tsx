import { Navbar } from "@/components/common/navbar";
import { SearchBar } from "@/components/common/searchbar";
import { Categories, CategoriesDropdown } from "@/components/widgets/categories";
import { Duas } from "@/components/widgets/duas";

export default function Home() {
  return (
    <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse min-h-screen">
      <Navbar />
      <div className="w-full">
        <SearchBar />
        <div className="md:block sm:block lg:hidden">
          <CategoriesDropdown/>
        </div>
        <div className="lg:flex sm:flex-none md:flex-none h-screen w-full gap-4 px-4">
          <Categories />
          <Duas />
        </div>
      </div>
    </div>
  );
}
