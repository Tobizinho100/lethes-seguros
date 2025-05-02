import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import video from '../../assets/Videos/video-inicio.mp4';

import Seguro_Vida from '../assets/Illustrações/Post Seguro de Vida.jpg';
import Seguro_Saude from '../assets/Illustrações/Post Carnaval.jpg';
import Fidelidade_Auto from '../assets/Illustrações/Post Seguro Fidelidade Auto.jpg';
import Fidelidade_Casa from '../assets/Illustrações/Post Seguro Casa Fidelidade.jpg';
import Fidelidade_Pets from '../assets/Illustrações/Post Seguro Fidelidade Pets.jpg';
import Fidelidade_Viagem from '../assets/Illustrações/Post Seguro Viagem Fidelidade.jpg';
import Protecao_Vital from '../assets/Illustrações/Post Proteção Vital da Familia.jpg';
import Protecao_Vital_65 from '../assets/Illustrações/Post Proteção Vital 65+.jpg';
import Poupanca_Fidelidade from '../assets/Illustrações/Post Seguro Poupança Fidelidade.jpg';

import './Home.css';

const seguros = [
  {
    titulo: 'Seguro de Vida',
    descricao: 'Proteção financeira para quem mais importa. Tranquilidade em todas as fases da vida.',
    imagem: Seguro_Vida,
    alt: 'Imagem ilustrativa do Seguro de Vida',
  },
  {
    titulo: 'Seguro Automóvel',
    descricao: 'Conduza com confiança com uma cobertura adaptada ao seu veículo e estilo de vida.',
    imagem: Fidelidade_Auto,
    alt: 'Imagem ilustrativa do Seguro Automóvel',
  },
  {
    titulo: 'Seguro de Saúde',
    descricao: 'Acesso facilitado aos melhores cuidados de saúde para si e para a sua família.',
    imagem: Seguro_Saude,
    alt: 'Imagem ilustrativa do Seguro de Saúde',
  },
  {
    titulo: 'Seguro Fidelidade Pets',
    descricao: 'Cuidamos dos seus animais como família, com acesso a cuidados veterinários.',
    imagem: Fidelidade_Pets,
    alt: 'Imagem ilustrativa do Seguro Fidelidade Pets',
  },
  {
    titulo: 'Seguro Habitação',
    descricao: 'Proteja a sua casa contra imprevistos com coberturas completas e flexíveis.',
    imagem: Fidelidade_Casa,
    alt: 'Imagem ilustrativa do Seguro Habitação',
  },
  {
    titulo: 'Seguro de Viagem',
    descricao: 'Viaje com tranquilidade com assistência médica, cancelamentos e bagagens protegidas.',
    imagem: Fidelidade_Viagem,
    alt: 'Imagem ilustrativa do Seguro de Viagem',
  },
  {
    titulo: 'Proteção Vital da Família',
    descricao: 'Cobertura inovadora para todas as fases da vida, com prémios acessíveis.',
    imagem: Protecao_Vital,
    alt: 'Imagem ilustrativa da Proteção Vital da Família',
  },
  {
    titulo: 'Proteção Vital 65+',
    descricao: 'Segurança pensada para os mais experientes. Tranquilidade para aproveitar cada momento.',
    imagem: Protecao_Vital_65,
    alt: 'Imagem ilustrativa da Proteção Vital 65+',
  },
  {
    titulo: 'Seguro Poupança Fidelidade',
    descricao: 'Pense no futuro com soluções que combinam proteção e rendimento garantido.',
    imagem: Poupanca_Fidelidade,
    alt: 'Imagem ilustrativa do Seguro Poupança Fidelidade',
  },
];


const Home: React.FC = () => {
  const history = useHistory();

  const Simulador = useCallback(() => {
    history.push('./Simulador');
  }, [history]);

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="relative video-container">
          <video className="video-element" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            O seu navegador não suporta vídeos.
          </video>

          <div className="video-overlay">
            <h2 className="video-title">Proteja o que importa</h2>
            <p className="video-subtitle">A sua segurança é a nossa prioridade.</p>
            <IonButton className="btn-simular" onClick={Simulador}>
              Simular
            </IonButton>
          </div>
        </div>
        
        <section className="seguros-swiper">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 16 },
            768: { slidesPerView: 3.2, spaceBetween: 20 },
            1024: { slidesPerView: 4.2, spaceBetween: 24 },
          }}
        >
            {seguros.map((seguro, index) => (
              <SwiperSlide key={index}>
                <div className="seguro-card">
                  <img src={seguro.imagem} alt={seguro.alt} />
                  <h4>{seguro.titulo}</h4>
                  <p>{seguro.descricao}</p>
                  <button className="hover-button" onClick={Simulador}>
                    Simular
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
