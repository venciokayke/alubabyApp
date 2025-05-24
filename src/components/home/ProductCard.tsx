import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <Card className="w-full overflow-hidden shadow-lg rounded-xl border border-gray-200">
      <CardContent className="p-0">
        <div className="flex">
          <img
            src={image}
            alt={name}
            className="w-[150px] h-[150px] ml-2 object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-1">
                {name}
              </h3>
              <p className="text-lg font-bold text-[#5DB3D3] mb-2">{price}</p>
            </div>
            <Button className="w-full bg-[#5DB3D3] hover:bg-[#4CA1C0] text-white py-2 rounded-lg text-sm">
              Detalhes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
