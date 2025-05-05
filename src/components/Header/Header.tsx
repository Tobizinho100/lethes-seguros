import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonImg,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Alterado para v5
import Logo from '../../assets/Logos/Logo-Lethes.png';

import './Header.css';

const Header: React.FC = () => {
  const history = useHistory(); // Alterado para v5

  return (
    <IonHeader>
      <IonToolbar className="navbar">
        <div className="navbar-left">
          <IonImg
            src={Logo}
            alt="Logo Lethes"
            className="navbar-logo"
            onClick={() =>
              window.open("https://linktr.ee/fidelidadepontedelimacentro", "_blank")
            }
          />
          <IonTitle className="navbar-title" onClick={() => history.push('/')}>Seguros Lethes</IonTitle>
        </div>

        <div className="navbar-right">
          <div className="navbar-scroll">
            <IonButtons>
              <IonButton onClick={() => history.push('/')}>Início</IonButton>
              <IonButton onClick={() => history.push('/seguros')}>Seguros</IonButton>
              <IonButton onClick={() => history.push('/simulador')}>Simulação</IonButton>
              <IonButton onClick={() => history.push('/contactos')}>Contactos</IonButton>
            </IonButtons>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
