import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
  } from '@ionic/react';
  import { useParams } from 'react-router-dom';
  import Header from '../../components/Header/Header';
  import Footer from '../../components/Footer/Footer';
  import './SimuladorTipo.css';
  
  const SimuladorDetalhe: React.FC = () => {
    const { tipo } = useParams<{ tipo: string }>();
  
    const getTituloSeguro = (tipo: string) => {
      switch (tipo) {
        case 'vida': return 'Simulação de Seguro de Vida';
        case 'automovel': return 'Simulação de Seguro Automóvel';
        case 'saude': return 'Simulação de Seguro de Saúde';
        case 'casa': return 'Simulação de Seguro Habitação';
        case 'pets': return 'Simulação de Seguro Pets';
        default: return 'Simulação de Seguro';
      }
    };
  
    return (
      <IonPage>
        <Header />
        <IonContent className="ion-padding">
          <h2 className="titulo-simulacao">{getTituloSeguro(tipo)}</h2>
  
          <form className="form-simulacao">
            <IonItem>
              <IonLabel position="floating">Nome</IonLabel>
              <IonInput required />
            </IonItem>
  
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" required />
            </IonItem>
  
            <IonItem>
              <IonLabel position="floating">Idade</IonLabel>
              <IonInput type="number" required />
            </IonItem>
  
            {/* Campos específicos por tipo de seguro */}
            {tipo === 'automovel' && (
              <>
                <IonItem>
                  <IonLabel position="floating">Marca do carro</IonLabel>
                  <IonInput required />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Ano de fabrico</IonLabel>
                  <IonInput type="number" required />
                </IonItem>
              </>
            )}
  
            {tipo === 'casa' && (
              <IonItem>
                <IonLabel position="floating">Valor da casa (€)</IonLabel>
                <IonInput type="number" required />
              </IonItem>
            )}
  
            {/* Botão de simular */}
            <div className="btn-simular-wrapper">
              <IonButton expand="block" color="primary">Simular</IonButton>
            </div>
          </form>
          <Footer />
        </IonContent>
      </IonPage>
    );
  };
  
  export default SimuladorDetalhe;
  