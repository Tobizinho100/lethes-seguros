import { IonButton, IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoInstagram,
  logoTiktok,
  locationOutline,
  mailOutline,
  callOutline,
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Footer.css';

  const Footer: React.FC = () => {
    const history = useHistory();

  const EasterEgg = () => {
    history.push("./EasterEgg");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contactos</h4>
          <p><IonIcon icon={mailOutline} /> lethes.seguros@gmail.com</p>
          <p><IonIcon icon={callOutline} /> +351 912 345 678</p>
        </div>

        <div className="footer-section">
        <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/letheslojafidelidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoFacebook} />
            </a>
            <a
              href="https://www.instagram.com/fidelidadepontedelimacentro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@fidelidadepontedelimacen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoTiktok} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Localização</h4>
          <p><IonIcon icon={locationOutline} />  Rua Agostinho José Taveira, 52 , 4990-072 Ponte de Lima</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lethes Seguro. Todos os direitos reservados.</p>
        <button className="duarte" onClick={EasterEgg}>Feito por Duarte Nuno Pona Menezes.</button>
      </div>
    </footer>
  );
};

export default Footer;
