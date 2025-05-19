import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './SaberMais.css';
import { segurosDetalhados } from '../../data/seguros';

import Fidelidade_Casa from "../../assets/Illustrações/Post Seguro Casa Fidelidade.jpg";
import Fidelidade_Pets from "../../assets/Illustrações/Post Seguro Fidelidade Pets.jpg";
import Fidelidade_Auto from "../../assets/Illustrações/Post Seguro Fidelidade Auto.jpg";
import Fidelidade_Viagem from "../../assets/Illustrações/Post Seguro Viagem Fidelidade.jpg";
import Protecao_Vital from "../../assets/Illustrações/Post Proteção Vital da Familia.jpg";
import Seguro_Vida from "../../assets/Illustrações/Post Seguro de Vida.jpg";
import Seguro_Saude from "../../assets/Illustrações/Post Carnaval.jpg";
import Poupanca_Fidelidade from "../../assets/Illustrações/Post Seguro Poupança Fidelidade.jpg";
import Protecao_Vital_65 from "../../assets/Illustrações/Post Proteção Vital 65+.jpg";

const imagemMap: Record<string, string> = {
  'Fidelidade_Casa': Fidelidade_Casa,
  'Fidelidade_Pets': Fidelidade_Pets,
  'Fidelidade_Auto': Fidelidade_Auto,
  'Fidelidade_Viagem': Fidelidade_Viagem,
  'Protecao_Vital': Protecao_Vital,
  'Seguro_Vida': Seguro_Vida,
  'Seguro_Saude': Seguro_Saude,
  'Poupanca_Fidelidade': Poupanca_Fidelidade,
  'Protecao_Vital_65': Protecao_Vital_65,
};

const SaberMais: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const titulo = (location.state as { titulo?: string })?.titulo;

  if (!titulo) {
    return (
      <IonPage>
        <Header />
        <IonContent className="pagina">
          <div className="conteudo">
            <h2>Informação do seguro não encontrada.</h2>
            <IonButton onClick={() => history.push('/seguros')}>Voltar</IonButton>
          </div>
        </IonContent>
        <Footer />
      </IonPage>
    );
  }

  const seguroSelecionado = segurosDetalhados.find(
    (s) => s.titulo.toLowerCase() === titulo.toLowerCase()
  );

  if (!seguroSelecionado) {
    return (
      <IonPage>
        <Header />
        <IonContent className="pagina">
          <div className="conteudo">
            <h2>Seguro não encontrado</h2>
            <IonButton onClick={() => history.push('/seguros')}>Voltar</IonButton>
          </div>
        </IonContent>
        <Footer />
      </IonPage>
    );
  }

  const imagemSrc = imagemMap[seguroSelecionado.imagem];

  return (
  <IonPage>
    <Header />
    <IonContent className="pagina">
      <div className="sabermais-wrapper">
        <h1>{seguroSelecionado.titulo}</h1>
        <div className="sabermais-conteudo">
          <div className="sabermais-imagem">
            <img src={imagemSrc} alt={seguroSelecionado.titulo} className="seguro-imagem" />
          </div>
          <div className="sabermais-detalhes">
            <p>{seguroSelecionado.descricao}</p>
            <h3>Benefícios:</h3>
            <ul>
              {seguroSelecionado.beneficios.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <IonButton
              className="btn-simular"
              routerLink={`/simular/${seguroSelecionado.tipo}`}
            >
              Simular este seguro
            </IonButton>

          </div>
        </div>
      </div>
    </IonContent>
    <Footer />
  </IonPage>
);

};

export default SaberMais;
