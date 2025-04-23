import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonButton,
  } from '@ionic/react';
  import Header from '../../components/Header/Header';
  import Footer from '../../components/Footer/Footer';
  import { useHistory } from 'react-router-dom';

  import Seguro_de_Vida from "../../assets/Illustrações/Post Seguro de Vida.jpg";
  import Seguro_de_Saude from "../../assets/Illustrações/Post Carnaval.jpg";
  import Seguro_de_Automovel from "../../assets/Illustrações/Post Seguro Fidelidade Auto.jpg";
  import Seguro_Casa from "../../assets/Illustrações/Post Seguro Casa Fidelidade.jpg";
  import Seguro_Pets from "../../assets/Illustrações/Post Seguro Fidelidade Pets.jpg";

  import './Simulador.css';
  
  const Simulador: React.FC = () => {
    const history = useHistory();
  
    const handleSimular = (tipo: string) => {
      history.push(`/simular/${tipo}`);
    };
  
    const seguros = [
      { tipo: 'vida', nome: 'Seguro de Vida', img: Seguro_de_Vida },
      { tipo: 'automovel', nome: 'Seguro Automóvel', img: Seguro_de_Automovel },
      { tipo: 'saude', nome: 'Seguro de Saúde', img: Seguro_de_Saude },
      { tipo: 'casa', nome: 'Seguro Habitação', img: Seguro_Casa },
      { tipo: 'pets', nome: 'Seguro Pets', img: Seguro_Pets },
    ];
  
    return (
      <IonPage>
        <Header />
        <IonContent className="ion-padding simulador-content">
          <h2 className="simulador-title">Simule o seu Seguro</h2>
          <p className="simulador-subtitle">
            Escolha o tipo de seguro que pretende simular.
          </p>
  
          <div className="simulador-grid">
            {seguros.map((seguro) => (
              <IonCard key={seguro.tipo} className="simulador-card">
                <div className="card-image-wrapper">
                  <img src={seguro.img} alt={seguro.nome} />
                  <div className="card-overlay">
                    <h3>{seguro.nome}</h3>
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
        </IonContent>
        <Footer />
      </IonPage>
    );
  };
  
  export default Simulador;
  