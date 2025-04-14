import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonImg,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/Logos/Logo-Lethes.png'; // usa o teu logo aqui
import './Header.css';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar className="navbar">
        <div className="navbar-left">
          <IonImg src={Logo} alt="Logo Lethes" className="navbar-logo" />
        </div>

        <div className="navbar-center">
          <IonTitle className="navbar-title">Seguros Lethes</IonTitle>
        </div>

        <div className="navbar-right">
          <IonButtons>
            <IonButton onClick={() => history.push('/')}>Início</IonButton>
            <IonButton onClick={() => history.push('/produtos')}>Seguros</IonButton>
            <IonButton onClick={() => history.push('/contactos')}>Contactos</IonButton>
            <IonButton onClick={() => history.push('/login')}>Login</IonButton>
          </IonButtons>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

