import {
  IonPage,
  IonContent,
  IonCard,
  IonButton,
} from '@ionic/react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';

import Fidelidade_Casa from "../../assets/Illustrações/Post Seguro Casa Fidelidade.jpg";
import Fidelidade_Pets from "../../assets/Illustrações/Post Seguro Fidelidade Pets.jpg";
import Fidelidade_Auto from "../../assets/Illustrações/Post Seguro Fidelidade Auto.jpg";
import Fidelidade_Viagem from "../../assets/Illustrações/Post Seguro Viagem Fidelidade.jpg";
import Protecao_Vital from "../../assets/Illustrações/Post Proteção Vital da Familia.jpg";
import Seguro_Vida from "../../assets/Illustrações/Post Seguro de Vida.jpg";
import Seguro_Saude from "../../assets/Illustrações/Post Carnaval.jpg";
import Poupanca_Fidelidade from "../../assets/Illustrações/Post Seguro Poupança Fidelidade.jpg";
import Protecao_Vital_65 from "../../assets/Illustrações/Post Proteção Vital 65+.jpg";

import './Simulador.css';

const Simulador: React.FC = () => {
  const history = useHistory();

  const handleSimular = (tipo: string) => {
    history.push(`/simular/${tipo}`);
  };

  const segurosParticulares = [
    { titulo: 'Seguro Casa Fidelidade', imagem: Fidelidade_Casa, tipo: 'casa' },
    { titulo: 'Seguro de Saúde Fidelidade', imagem: Seguro_Saude, tipo: 'saude' },
    { titulo: 'Seguro Fidelidade Pets', imagem: Fidelidade_Pets, tipo: 'pets' },
    { titulo: 'Seguro Fidelidade Automóvel', imagem: Fidelidade_Auto, tipo: 'automovel' },
    { titulo: 'Seguro de Viagem Fidelidade', imagem: Fidelidade_Viagem, tipo: 'viagem' },
    { titulo: 'Proteção Vital da Família', imagem: Protecao_Vital, tipo: 'vida' },
    { titulo: 'Proteção Vital 65+', imagem: Protecao_Vital_65, tipo: 'vida' },
    { titulo: 'Seguro de Vida Fidelidade', imagem: Seguro_Vida, tipo: 'vida' },
    { titulo: 'Seguro Poupança Fidelidade', imagem: Poupanca_Fidelidade, tipo: 'poupanca' },
  ];

  return (
    <IonPage>
      <Header />
      <div className="simulador-page">
        <main className="simulador-content">
          <h2 className="simulador-title">Simule o seu Seguro</h2>
          <p className="simulador-subtitle">
            Escolha o tipo de seguro que pretende simular.
          </p>

          <div className="simulador-grid">
            {segurosParticulares.map((seguro) => (
              <IonCard key={seguro.tipo} className="simulador-card">
                <div className="card-image-wrapper">
                  <img src={seguro.imagem} alt={seguro.titulo} />
                  <div className="card-overlay">
                    <h3>{seguro.titulo}</h3>
                    <IonButton
                      color="light"
                      fill="outline"
                      size="small"
                      onClick={() => handleSimular(seguro.tipo)}
                    >
                      Simular
                    </IonButton>
                  </div>
                </div>
              </IonCard>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </IonPage>
  );
};

export default Simulador;
