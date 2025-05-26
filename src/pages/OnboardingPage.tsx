import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Economize até 70%",
    subtitle: "Por que comprar se você pode alugar por poucos meses?",
    images: [
      {
        src: "/assets/moeda.png",
        className: "absolute top-1 left-3 w-20 opacity-30 rotate-45",
      },
      {
        src: "/assets/moeda.png",
        className: "absolute top-10 right-1/3 w-20 opacity-30 rotate-140",
      },
      {
        src: "/assets/moeda.png",
        className: "absolute top-32 right-9 w-16 opacity-30 rotate-90",
      },
      {
        src: "/assets/moeda.png",
        className: "absolute bottom-0 left-1 w-15 opacity-30 rotate-45",
      },
      {
        src: "/assets/moeda.png",
        className: "absolute bottom-12 right-1 w-25 opacity-30 rotate-180",
      },
      {
        src: "/assets/moeda.png",
        className: "absolute top-1/4 left-5 w-25 opacity-30 rotate-20",
      },
      {
        src: "/assets/moeda.png",
        className:
          "absolute bottom-20 right-2 top-1/3 w-20 opacity-30 rotate-90",
      },
    ],
    mainImage: "/assets/Porquinho.png",
  },
  {
    title: "Sustentabilidade que cabe no bolso",
    subtitle: "1.000kg de itens infantis reutilizados por mês em nossa rede!",
    images: [
      {
        src: "/assets/Nuvem.png",
        className: "absolute top-0 left-3 w-[150px] opacity-60",
      },
      {
        src: "/assets/Nuvem.png",
        className: "absolute top-0 right-0 w-[100px] opacity-60 -scale-x-100",
      },
      {
        src: "/assets/Nuvem.png",
        className: "absolute top-1/4 right-0 w-[130px] opacity-60 -scale-x-100",
      },
      {
        src: "/assets/Nuvem.png",
        className: "absolute top-1/3 left-0 w-[130px] opacity-60",
      },
      {
        src: "/assets/Nuvem.png",
        className: "absolute bottom-0 left-0 w-[100px] opacity-60",
      },
      {
        src: "/assets/Nuvem.png",
        className: "absolute bottom-9 right-0 w-[90px] opacity-60 -scale-x-100",
      },
    ],
    mainImage: "/assets/Planeta.png",
  },
  {
    title: "Tudo simples e rápido",
    subtitle: "Escolha, agende e receba em casa. Sem estresse!",
    images: [],
    mainImage: "/assets/SimplesRapido.png",
  },
];

const SlideContent = ({
  title,
  subtitle,
  images,
  mainImage,
}: {
  title: string;
  subtitle: string;
  images: Array<{ src: string; className: string }>;
  mainImage: string;
}) => (
  <div className="relative flex flex-col items-center justify-center h-full px-3 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={`${image.className} object-contain`}
          alt=""
          aria-hidden="true"
        />
      ))}
    </div>

    {/* Main Content */}
    <h1 className="relative text-3xl font-bold text-[#5DB3D3] mt-10 mb-2 text-center z-10 max-w-xs">
      {title}
    </h1>
    <p className="relative text-base sm:text-xl text-[#6D6D6D] text-center z-10 w-4/5 max-w-sm">
      {subtitle}
    </p>
    <img
      src={mainImage}
      className="relative w-4/5 max-w-xs sm:max-w-sm h-auto object-contain mb-2 z-10"
      alt={`Ilustração: ${title}`}
    />
  </div>
);

const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const finishOnboarding = () => {
    //localStorage.setItem("onboardingShown", "true");
    navigate("/login", { replace: true });
  };

  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishOnboarding();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffdac1] via-[#ffdac1] via-75% to-[#ffffff]">
      <div className="h-screen flex flex-col p-6">
        <SlideContent {...slides[currentIndex]} />

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

        <div className="mt-auto pb-8">
          {currentIndex < slides.length - 1 ? (
            <div className="flex justify-between items-center">
              <button
                onClick={finishOnboarding}
                className="text-[#5DB3D3] text-lg underline font-medium ml-8"
              >
                Pular
              </button>
              <button
                onClick={goToNextSlide}
                className="bg-[#5DB3D3] text-white text-lg px-5 py-3 rounded-full shadow-lg 
                hover:bg-[#4CA1C0] active:scale-95 transition-all"
              >
                Próximo
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button
                onClick={finishOnboarding}
                className="w-4/5 max-w-xs mx-auto bg-[#5DB3D3] text-white py-4 mt-8 rounded-full text-xl font-bold shadow-lg hover:bg-[#4CA1C0] transition-all"
              >
                Começar agora
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
