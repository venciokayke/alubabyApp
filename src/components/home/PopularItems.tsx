import React from "react";
import ProductCard from "../home/ProductCard";

interface Item {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface PopularItemsProps {
  items: Item[];
}

const PopularItems: React.FC<PopularItemsProps> = ({ items }) => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Itens Populares
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
