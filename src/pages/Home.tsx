import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importar useHistory para navegação
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from "../assets/videos/video-inicio.mp4";
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory(); // Usar o hook useHistory para navegação

  const navigateToLogin = () => {
    history.push("/login"); // A navegação correta para a página de login
  };

  const navigateToProfile = () => {
    history.push("/perfil");
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={Video} type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Proteja o que importa</h2>
            <p className="text-lg">
              A sua segurança é nossa prioridade. Conheça os nossos seguros e sinta-se protegido a qualquer momento.
            </p>
            <IonButton className="primary text-white"  routerLink="/login">
              Fazer simulação
            </IonButton>
            <IonButton className="primary text-white" onClick={navigateToProfile}>
              Perfil
            </IonButton>
          </div>
        </div>

        <div className="p-4 text-center mt-8">
          <h3 className="text-2xl font-semibold mb-4">Seguros Personalizados</h3>
          <p className="text-lg mb-4">
            Escolha o seguro que se adapta à sua vida, com coberturas flexíveis e assistência completa.
          </p>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
