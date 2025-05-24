import React from "react";
import { User } from "lucide-react"; // Usando um ícone genérico para o avatar

interface HeaderProps {
  userName: string;
  avatarSrc?: string; // Opcional, pode ser uma URL para a imagem do avatar
}

const Header: React.FC<HeaderProps> = ({ userName, avatarSrc }) => {
  return (
    <header className="px-4 pt-6 pb-2 bg-transparent">
      <div className="flex justify-between items-center mb-3">
        <img
          src="/assets/AluBabyTexto.png"
          alt="AluBaby Logo"
          className="h-[70px] sm:h-12 w-auto"
        />
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="Avatar"
            className="mr-2 w-[70px] h-[70px] rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={24} className="text-gray-600" />
          </div>
        )}
      </div>
      <h1 className="text-2xl font-semibold text-[#5DB3D3]">
        Olá, {userName}!
      </h1>
      <p className="text-lg text-gray-700">O que você precisa hoje?</p>
    </header>
  );
};

export default Header;
