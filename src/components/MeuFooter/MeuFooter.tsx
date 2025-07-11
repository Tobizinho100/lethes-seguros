import { IonButton, IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoInstagram,
  logoTiktok,
  locationOutline,
  mailOutline,
  callOutline,
  logoGithub,
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './MeuFooter.css';

  const MeuFooter: React.FC = () => {
    const history = useHistory();

  const Home = () => {
    history.push("./Home");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contactos</h4>
          <p>
            <a href="mailto:duartedx10@gmail.com" className="footer-link">
              <IonIcon icon={mailOutline} /> duartedx10@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:910832292" className="footer-link">
              <IonIcon icon={callOutline} /> 910 832 292
            </a>
          </p>
        </div>

        <div className="footer-section">
        <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61574426734061"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoFacebook} />
            </a>
            <a
              href="https://www.instagram.com/chronix.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@chronix.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoTiktok} />
            </a>
            <a
              href="https://github.com/Tobizinho100/lethes-seguros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoGithub} />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Duarte Menezes. Todos os direitos reservados.</p>
        <button className="duarte" onClick={Home}>Feito por Duarte Nuno Pona Menezes.</button>
      </div>
    </footer>
  );
};

export default MeuFooter;
