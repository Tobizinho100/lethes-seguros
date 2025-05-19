import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Seguros.css';
import { IonPage, IonContent } from '@ionic/react';
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

const segurosParticulares = [
  { titulo: 'Seguro Casa Fidelidade', imagem: Fidelidade_Casa },
  { titulo: 'Seguro de Saúde Fidelidade', imagem: Seguro_Saude },
  { titulo: 'Seguro Fidelidade Pets', imagem: Fidelidade_Pets },
  { titulo: 'Seguro Fidelidade Automóvel', imagem: Fidelidade_Auto },
  { titulo: 'Seguro de Viagem Fidelidade', imagem: Fidelidade_Viagem },
  { titulo: 'Proteção Vital da Família', imagem: Protecao_Vital },
  { titulo: 'Proteção Vital 65+', imagem: Protecao_Vital_65 },
  { titulo: 'Seguro de Vida Fidelidade', imagem: Seguro_Vida },
  { titulo: 'Seguro Poupança Fidelidade', imagem: Poupanca_Fidelidade },
];

const Seguros: React.FC = () => {
  const history = useHistory();

  const SaberMais = (seguro: { titulo: string }) => {
  history.push('/sabermais', { titulo: seguro.titulo });
};

  return (
    <IonPage>
      <Header />
      <IonContent className="pagina">
        <div className="conteudo">
          <h1 className="titulo">Seguros Particulares Fidelidade</h1>
          <div className="simulador-grid">
            {segurosParticulares.map((seguro, i) => (
              <div className="simulador-card" key={i}>
                <div className="card-img-container">
                  <img src={seguro.imagem} alt={seguro.titulo} className="imagem" />
                  <button
                    className="hover-button"
                    onClick={() => SaberMais(seguro)}
                  >
                    Saber Mais
                  </button>
                </div>
                <h3>{seguro.titulo}</h3>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Seguros;
