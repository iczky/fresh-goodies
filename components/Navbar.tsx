import { Search, SlidersHorizontal, SlidersVertical } from "lucide-react";
import NavCategory from "./NavCategory";

const Navbar = () => {
  return (
    <>
      <nav className="pt-16 px-4 pb-4 flex justify-between">
        <h1 className="font-semibold text-xl">Vegetables</h1>
        <div className="flex justify-between gap-8">
          <SlidersVertical />
          <Search />
        </div>
      </nav>
      <NavCategory />
    </>
  );
};

export default Navbar;
