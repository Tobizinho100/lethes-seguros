import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './SaberMais.css';

const SaberMais: React.FC = () => {

  const location = useLocation<{ titulo: string; imagem: string }>();
  const history = useHistory();

  const seguro = location.state;

  if (!seguro) {
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

  return (
    <IonPage>
      <Header />
      <IonContent className="pagina">
        <div className="sabermais-conteudo">
          <h1>{seguro.titulo}</h1>
          <img src={seguro.imagem} alt={seguro.titulo} className="seguro-imagem" />
          <p>
            Aqui poderás encontrar todas as informações sobre o <strong>{seguro.titulo}</strong>. 
            Esta secção poderá incluir benefícios, coberturas, exclusões, e opções de simulação personalizada.
          </p>
          <IonButton
            className="btn-simular"
            onClick={() => alert(`Simular "${seguro.titulo}"`)}
          >
            Simular este seguro
          </IonButton>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SaberMais;
