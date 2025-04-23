import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Contactos.css'
const Contactos: React.FC = () => (
  <IonPage>
    <Header />
    <IonContent>
      <h1>Contactos</h1>
    </IonContent>
    <Footer />
  </IonPage>
);

export default Contactos;
