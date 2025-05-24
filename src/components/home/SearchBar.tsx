import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Buscar itens..."
        className="w-full pl-10 pr-4 py-3 text-base rounded-full shadow-md border-gray-300 focus:ring-[#5DB3D3] focus:border-[#5DB3D3]"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
