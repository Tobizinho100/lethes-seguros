import { IonButton, IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoInstagram,
  logoTiktok,
  locationOutline,
  mailOutline,
  callOutline,
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';  // Atualizado para v5
import './Footer.css';

const Footer: React.FC = () => {
  const history = useHistory();  // Atualizado para v5

  const EasterEgg = () => {
    history.push("/EasterEgg");  // Atualizado para v5
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contactos</h4>
          <p>
            <a href="mailto:lethes.seguros@gmail.com" className="footer-link">
              <IonIcon icon={mailOutline} /> lethes.seguros@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:258909727" className="footer-link">
              <IonIcon icon={callOutline} /> 258 909 727
            </a>
          </p>
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
          <p onClick={() => window.open("https://maps.app.goo.gl/1JBVeinbwrUKaQz18", "_blank")}>
            <IonIcon icon={locationOutline} /> Rua Agostinho José Taveira, 52 , 4990-072 Ponte de Lima
          </p>
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
