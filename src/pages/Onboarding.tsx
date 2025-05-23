import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { Storage } from "@ionic/storage";

const slides = [
  {
    title: "Economize até 70%",
    subtitle: "Por que comprar se você pode alugar por poucos meses?",
    image: "/assets/onboarding1.png",
  },
  {
    title: "Sustentabilidade que cabe no bolso",
    subtitle: "1.000kg de itens infantis reutilizados por mês em nossa rede!",
    image: "/assets/onboarding2.png",
  },
  {
    title: "Tudo simples e rápido",
    subtitle: "Escolha, agende e receba em casa. Sem estresse!",
    image: "/assets/onboarding3.png",
  },
];

const SlideContent = ({ title, subtitle, image }: any) => (
  <div className="flex flex-col items-center justify-center h-full px-8">
    {/* Imagem com tamanho controlado e margem */}
    <img
      src={image}
      className="w-64 h-64 object-contain mb-8"
      alt={`Ilustração: ${title}`}
    />

    {/* Textos com hierarquia visual */}
    <h1 className="text-3xl font-bold text-[#5DB3D3] mb-4 text-center">
      {title}
    </h1>
    <p className="text-lg text-[#6D6D6D] text-center max-w-md">{subtitle}</p>
  </div>
);

const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const finishOnboarding = async () => {
    const storage = new Storage();
    await storage.create();
    await storage.set("onboardingShown", true);
    history.replace("/home");
  };

  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishOnboarding();
    }
  };

  return (
    <IonPage className="bg-[#FFDAC1]">
      {" "}
      {/* Fundo pêssego */}
      <IonContent className="ion-padding">
        {/* Conteúdo principal */}
        <div className="flex flex-col h-full">
          <SlideContent {...slides[currentIndex]} />

          {/* Progresso (bolinhas) */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#5DB3D3] w-6" : "bg-[#B8E2F2]"
                }`}
              />
            ))}
          </div>

          {/* Botões */}
          <div className="mt-auto pb-8">
            {currentIndex < slides.length - 1 ? (
              <div className="flex justify-between items-center">
                <button
                  onClick={finishOnboarding}
                  className="text-[#5DB3D3] underline font-medium"
                >
                  Pular
                </button>
                <button
                  onClick={goToNextSlide}
                  className="bg-[#5DB3D3] text-white px-8 py-3 rounded-full shadow-lg 
                  hover:bg-[#4CA1C0] active:scale-95 transition-all"
                >
                  Próximo
                </button>
              </div>
            ) : (
              <button
                onClick={finishOnboarding}
                className="w-full bg-[#5DB3D3] text-white py-4 rounded-full 
                text-lg font-bold shadow-lg hover:bg-[#4CA1C0] active:scale-95 transition-all"
              >
                Começar agora
              </button>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
