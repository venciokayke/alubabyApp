import React, { useState } from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Storage } from '@ionic/storage';

const slides = [
  {
    title: 'Economize até 70%',
    subtitle: 'Por que comprar se você pode alugar por poucos meses?',
    image: '/assets/onboarding1.png',
  },
  {
    title: 'Sustentabilidade que cabe no bolso',
    subtitle: '1.000kg de itens infantis reutilizados por mês em nossa rede!',
    image: '/assets/onboarding2.png',
  },
  {
    title: 'Tudo simples e rápido',
    subtitle: 'Escolha, agende e receba em casa. Sem estresse!',
    image: '/assets/onboarding3.png',
  },
];

const Onboarding: React.FC = () => {
  const [index, setIndex] = useState(0);
  const history = useHistory();

  const finish = async () => {
    const storage = new Storage();
    await storage.create();
    await storage.set('onboardingShown', true);
    history.replace('/home');
  };

  const next = () =>
    index < slides.length - 1 ? setIndex(i => i + 1) : finish();

  const skip = () => finish();

  return (
    <IonPage>
      <IonContent fullscreen className="flex flex-col items-center px-6 pt-12">
        <img
          src={slides[index].image}
          alt={slides[index].title}
          className="w-3/4 max-w-xs mx-auto"
        />
        <h2 className="mt-8 text-center text-2xl font-bold">
          {slides[index].title}
        </h2>
        <p className="mt-2 text-center text-gray-600">
          {slides[index].subtitle}
        </p>

        {/* Dots */}
        <div className="flex space-x-2 mt-6">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? 'bg-blue-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-full mt-auto mb-12">
          {index < slides.length - 1 ? (
            <>
              <button
                onClick={skip}
                className="text-gray-500 underline"
              >
                Pular
              </button>
              <IonButton onClick={next} className="bg-blue-400">
                Próximo →
              </IonButton>
            </>
          ) : (
            <IonButton expand="block" onClick={finish} className="bg-blue-400">
              Começar agora
            </IonButton>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;