import React from "react";
import { Button } from "../ui/button";
import { Baby, HandPlatter, PercentSquare } from "lucide-react"; // Usando HandPlatter para 6+ meses e PercentSquare para Promoções

// Ícones alternativos que podem ser mais adequados:
// Para 6+ meses: Armchair, Chair, Highchair (se existir um ícone específico)
// Para Promoções: BadgePercent, Tag

const categories = [
  {
    name: "Recém-nascido",
    icon: <Baby size={32} className="text-[#5DB3D3] mb-1" />,
  },
  {
    name: "6+ meses",
    icon: <HandPlatter size={32} className="text-[#5DB3D3] mb-1" />,
  }, // Exemplo, pode precisar de outro ícone
  {
    name: "Promoções",
    icon: <PercentSquare size={32} className="text-[#5DB3D3] mb-1" />,
  }, // Exemplo
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
