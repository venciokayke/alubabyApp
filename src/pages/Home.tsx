import React from "react";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";
import CategoryFilters from "../components/home/CategoryFilters";
import PopularItems from "../components/home/PopularItems";
import BottomNav from "../components/home/BottomNav";

const HomePage: React.FC = () => {
  // Dados mocados para os itens populares
  const popularItemsData = [
    {
      id: "1",
      name: "Carrinho de Bebê Dobrável",
      price: "R$90/mês",
      image: "/assets/carrinho.png", // Placeholder - peça para o usuário enviar
    },
    {
      id: "2",
      name: "Berço de Madeira c/ Coxão",
      price: "R$70/mês",
      image: "/assets/berco.png", // Placeholder - peça para o usuário enviar
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FEEBD6] to-[#C3EEFF]">
      <Header userName="Kayke" avatarSrc="/assets/placeholder-avatar.png" />{" "}
      {/* Placeholder avatar */}
      <main className="flex-grow px-4 py-6 space-y-6">
        <div className="text-left mb-2 ml-1">
          <p className="text-gray-600 text-sm">
            Alugue itens de bebê com praticidade e segurança
          </p>
        </div>
        <SearchBar />
        <CategoryFilters />
        <PopularItems items={popularItemsData} />
      </main>
      <BottomNav />
    </div>
  );
};

export default HomePage;
