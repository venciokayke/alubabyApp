import React from "react";
import { Button } from "../ui/button";
import { Baby, ToyBrick, PercentSquare } from "lucide-react";

const categories = [
  {
    name: "Recém-nascido",
    icon: <Baby className="text-[#5DB3D3] mb-1 w-10 h-10" />,
  },
  {
    name: "6+ meses",
    icon: <ToyBrick className="text-[#5DB3D3] mb-1 w-10 h-10" />,
  },
  {
    name: "Promoções",
    icon: <PercentSquare className="text-[#5DB3D3] mb-1 w-16 h-16" />,
  },
];

const CategoryFilters: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="outline"
          className="flex flex-col items-center justify-center h-28 bg-white rounded-xl shadow-md hover:bg-gray-50 border-[#E0E0E0]"
        >
          {category.icon}
          <span className="text-xs font-medium text-gray-700">
            {category.name}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
