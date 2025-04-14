import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/react';
  import Header from '../../components/Header/Header';
  import './EasterEgg.css';
  
  const EasterEgg: React.FC = () => {
    return (
      <IonPage>
        <Header />
        <IonContent className="ion-padding competencias-content">
          <h2 className="competencias-title">Competências Desenvolvidas</h2>
          <p className="competencias-subtitle">
            Durante o desenvolvimento desta aplicação, recorri a várias ferramentas e tecnologias que reforçaram as minhas competências em design, programação e estruturação de projetos.
          </p>
  
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="6">
                <IonCard className="competencias-card">
                  <IonCardHeader>
                    <IonCardTitle>💻 Programação</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <ul>
                      <li>React com Ionic Framework</li>
                      <li>TypeScript</li>
                      <li>Estruturação de componentes reutilizáveis</li>
                      <li>Routing com React Router</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              </IonCol>
  
              <IonCol size="12" sizeMd="6">
                <IonCard className="competencias-card">
                  <IonCardHeader>
                    <IonCardTitle>🎨 Design & UX</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <ul>
                      <li>Criação de interfaces responsivas</li>
                      <li>Utilização do Figma/Adobe Illustrator</li>
                      <li>Gestão de estilos com CSS modular</li>
                      <li>Identidade visual da marca</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol size="12" sizeMd="6">
                <IonCard className="competencias-card">
                  <IonCardHeader>
                    <IonCardTitle>🧠 Organização</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <ul>
                      <li>Estrutura de diretórios lógica</li>
                      <li>Separação clara entre lógica e UI</li>
                      <li>Utilização de boas práticas de código</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              </IonCol>
  
              <IonCol size="12" sizeMd="6">
                <IonCard className="competencias-card">
                  <IonCardHeader>
                    <IonCardTitle>📲 Funcionalidades Mobile</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <ul>
                      <li>Design adaptado a ecrãs pequenos</li>
                      <li>Swiper de navegação para mobile</li>
                      <li>Botões touch-friendly</li>
                      <li>Performance otimizada</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default EasterEgg;
  