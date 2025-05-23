import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding'; //importa o componente
import { Storage } from '@ionic/storage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* ... teus imports de CSS do Ionic ... */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [checking, setChecking] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    (async () => {
      const storage = new Storage();
      await storage.create();
      await storage.remove('onboardingShown'); // 👈 remove o valor salvo (para testes)
      const seen = await storage.get('onboardingShown');
      setShowOnboarding(!seen);
      setChecking(false);
    })();
  }, []);

  if (checking) {
    return null; // ou um spinner, se preferir
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {showOnboarding && (
            <Route exact path="/onboarding">
              <Onboarding />
            </Route>
          )}

          <Route exact path="/home">
            <Home />
          </Route>

          {/* rota raiz redireciona dinamicamente */}
          <Route exact path="/">
            {showOnboarding ? <Redirect to="/onboarding" /> : <Redirect to="/home" />}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
