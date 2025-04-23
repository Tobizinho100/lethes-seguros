import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Contactos from './pages/Contactos/Contactos';
import Simulador from './pages/Simulador/Simulador';
import SimuladorTipo from './pages/SimuladorTipo/SimuladorTipo';
import Seguros from './pages/Seguros/Seguros';
import EasterEgg from './pages/EasterEgg/EasterEgg';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/seguros">
          <Seguros />
        </Route>
        <Route exact path="/simulador">
          <Simulador />
        </Route>
        <Route exact path="/contactos">
          <Contactos />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/simular/:tipo" component={SimuladorTipo} exact />
        <Route exact path="/EasterEgg">
          <EasterEgg />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter> 
  </IonApp>
);

export default App;
