import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Video from "../assets/videos/video-inicio.mp4";

import Seguro_de_Vida from "../assets/Illustrações/Post Seguro de Vida.jpg";
import Seguro_de_Saude from "../assets/Illustrações/Post Carnaval.jpg";
import Seguro_de_Automovel from "../assets/Illustrações/Post Seguro Fidelidade Auto.jpg";
import Seguro_Casa from "../assets/Illustrações/Post Seguro Casa Fidelidade.jpg";
import Seguro_Pets from "../assets/Illustrações/Post Seguro Fidelidade Pets.jpg";

import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const Simulador = () => {
    history.push("./Simulador");
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="relative video-container">
          <video className="video-element" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            O seu navegador não suporta vídeos.
          </video>

          <div className="video-overlay">
            <h2 className="video-title">Proteja o que importa</h2>
            <p className="video-subtitle">
              A sua segurança é a nossa prioridade.
            </p>
            <IonButton className="btn-simular" onClick={Simulador}>
              Simular
            </IonButton>
          </div>
        </div>

        <section className="seguros-swiper">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
            }}
          >
            <SwiperSlide>
              <div className="seguro-card">
                <img src={Seguro_de_Vida} alt="Seguro de Vida" />
                <h4>Seguro de Vida</h4>
                <p>Proteção financeira para quem mais importa. Tranquilidade em todas as fases da vida.</p>
                <button className="hover-button" onClick={Simulador}>Simular</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="seguro-card">
                <img src={Seguro_de_Automovel} alt="Seguro Automóvel" />
                <h4>Seguro Automóvel</h4>
                <p>Conduza com confiança com uma cobertura adaptada ao seu veículo e estilo de vida.</p>
                <button className="hover-button" onClick={Simulador}>Simular</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="seguro-card">
                <img src={Seguro_de_Saude} alt="Seguro de Saúde" />
                <h4>Seguro de Saúde</h4>
                <p>Acesso facilitado aos melhores cuidados de saúde para si e para a sua família.</p>
                <button className="hover-button" onClick={Simulador}>Simular</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="seguro-card">
                <img src={Seguro_Pets} alt="Seguro Fidelidade Pets" />
                <h4>Seguro Fidelidade Pets</h4>
                <p>Cuidamos dos seus animais como família, com acesso a cuidados veterinários.</p>
                <button className="hover-button" onClick={Simulador}>Simular</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="seguro-card">
                <img src={Seguro_Casa} alt="Seguro Habitação" />
                <h4>Seguro Habitação</h4>
                <p>Proteja a sua casa contra imprevistos com coberturas completas e flexíveis.</p>
                <button className="hover-button" onClick={Simulador}>Simular</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
