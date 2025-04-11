import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from "../assets/videos/video-inicio.mp4";
import './Home.css';

const Home: React.FC = () => {
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
          </div>
        </div>

        <div className="p-4 text-center mt-8">
          <h3 className="text-2xl font-semibold mb-4">Seguros Personalizados</h3>
          <p className="text-lg mb-4">
            Escolha o seguro que se adapta à sua vida, com coberturas flexíveis e assistência completa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titulo: "Seguro de Vida", texto: "Proteja o seu futuro e o dos seus entes queridos com planos de seguro de vida flexíveis." },
              { titulo: "Seguro de Saúde", texto: "Cuidamos da sua saúde com uma ampla gama de planos que cobrem tratamentos médicos e hospitalares." },
              { titulo: "Seguro de Casa", texto: "Proteja a sua casa e os seus bens com um seguro contra incêndios, danos naturais e roubo." },
              { titulo: "Seguro de Carro", texto: "A proteção que o seu carro precisa. Coberturas para danos próprios, terceiros e acidentes." },
            ].map((seguro, index) => (
              <div key={index} className="bg-white p-4 shadow-lg rounded-md">
                <h4 className="text-xl font-semibold mb-2">{seguro.titulo}</h4>
                <p className="text-md">{seguro.texto}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gray-100 mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">O que nossos clientes dizem</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 shadow-lg rounded-md max-w-xs">
              <p className="text-md mb-4">
                "A Fidelidade Lethes me ajudou a escolher o seguro perfeito para minha família. Eles são rápidos e confiáveis!"
              </p>
              <p className="font-semibold">Carlos Silva</p>
              <p className="text-sm text-gray-600">Cliente satisfeito</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md max-w-xs">
              <p className="text-md mb-4">
                "O seguro de saúde foi a melhor escolha que fiz. A equipe me ajudou a escolher a cobertura ideal."
              </p>
              <p className="font-semibold">Ana Costa</p>
              <p className="text-sm text-gray-600">Cliente satisfeita</p>
            </div>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
