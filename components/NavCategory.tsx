"use client";

import useProduct from "@/hook/useProduct";

const NavCategory = () => {
  const { category } = useProduct();

  return (
    <div className="flex overflow-hidden overflow-x-scroll gap-8 pl-7 py-3 text-nowrap">
      <p className="text-lg">All</p>
      {category.map((item, key) => (
        <p key={key} className="text-lg">
          {item}
        </p>
      ))}
    </div>
  );
};

export default NavCategory;
