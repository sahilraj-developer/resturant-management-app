import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center gap-1">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full cursor-pointer transition duration-200 border-2 ${
          isActive ? "bg-red-600 text-white border-red-700" : "bg-yellow-500 border-gray-400"
        }`}
      >
        <CiForkAndKnife className="text-3xl" />
      </div>
      <p className="text-center font-medium capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
