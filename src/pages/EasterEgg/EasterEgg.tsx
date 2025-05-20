import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MeuFooter from '../../components/MeuFooter/MeuFooter';
import './EasterEgg.css';

// Importa os logos
import reactLogo from '../../assets/Logos/React.webp';
import viteLogo from '../../assets/Logos/Vite.svg';
import tsLogo from '../../assets/Logos/Typescript.png';
import ionicLogo from '../../assets/Logos/Ionic.png';
import tailwindLogo from '../../assets/Logos/Tailwind.png';
import cssLogo from '../../assets/Logos/CSS.png';
import illustratorLogo from '../../assets/Logos/Illustrator.png';
import blenderLogo from '../../assets/Logos/Blender.png';

const EasterEgg: React.FC = () => {
  const location = useLocation();
    const history = useHistory();

  return (
    <IonPage>
  <Header />
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <IonContent className="ion-padding competencias-content" style={{ flex: '1 0 auto' }}>
      <IonButton
        onClick={() => history.goBack()}
        className="fixed top-4 left-4 z-20 !bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg transition-all duration-200"
      >
        <span className="text-xl">&#8592;</span> Voltar
      </IonButton>

      <h2 className="competencias-title">Tecnologias Utilizadas</h2>
      <p className="competencias-subtitle">
        Estas foram as principais linguagens e ferramentas utilizadas no desenvolvimento da aplicação:
      </p>

      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonCard className="competencias-card">
              <IonCardHeader>
                <IonCardTitle>
                  <img src={reactLogo} alt="React" className="tech-logo" />
                  React & Vite
                  <img src={viteLogo} alt="Vite" className="tech-logo" />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Biblioteca JavaScript para construir interfaces.
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonCard className="competencias-card">
              <IonCardHeader>
                <IonCardTitle>
                  <img src={tsLogo} alt="TypeScript" className="tech-logo" />
                  TypeScript
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Superset do JavaScript com tipagem estática.
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonCard className="competencias-card">
              <IonCardHeader>
                <IonCardTitle>
                  <img src={ionicLogo} alt="Ionic" className="tech-logo" />
                  Ionic Framework
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Framework para aplicações móveis híbridas.
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonCard className="competencias-card">
              <IonCardHeader>
                <IonCardTitle>
                  <img src={cssLogo} alt="CSS" className="tech-logo" />
                  CSS & Tailwind
                  <img src={tailwindLogo} alt="Tailwind" className="tech-logo" />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Estilização personalizada com CSS modular.
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="12" sizeMd="6" sizeLg="4">
            <IonCard className="competencias-card">
              <IonCardHeader>
                <IonCardTitle>
                  <img src={illustratorLogo} alt="Illustrator" className="tech-logo" />
                  Adobe Illustrator & Blender
                  <img src={blenderLogo} alt="Blender" className="tech-logo" />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Ferramentas de design para criação da identidade visual.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
       <MeuFooter />
    </IonContent>

   
  </div>
</IonPage>

  );
};

export default EasterEgg;
