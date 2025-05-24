import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Heart, ListChecks } from "lucide-react"; // Usando ListChecks para "Meus Aluguéis"

const navItems = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Catálogo", path: "/catalog", icon: LayoutGrid },
  { name: "Favoritos", path: "/favorites", icon: Heart },
  { name: "Meus aluguéis", path: "/rentals", icon: ListChecks },
];

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] rounded-t-2xl">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200 
                          ${
                            isActive
                              ? "text-[#5DB3D3]"
                              : "text-gray-500 hover:text-[#5DB3D3]"
                          }`}
            >
              <item.icon size={26} strokeWidth={isActive ? 2.5 : 2} />
              <span
                className={`mt-1 text-xs font-medium ${
                  isActive ? "text-[#5DB3D3]" : "text-gray-600"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
