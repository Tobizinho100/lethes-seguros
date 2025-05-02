import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contactos.css';
import { IonPage } from '@ionic/react';

// Importar imagens locais
import graça from '../../assets/Imagens/GraçaLopes.png';
import sonia from '../../assets/Imagens/sonia.jpg';
import pedroImg from '../../assets/pedro.png';

// Component para exibir uma pessoa com foto, nome e função
const PersonCard: React.FC<{ photo: string; name: string; role: string }> = ({
  photo,
  name,
  role,
}) => (
  <div className="person-card">
    <img src={photo} alt={name} className="profile-photo" />
    <div className="person-info">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  </div>
);

const Contactos: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const now = new Date().toLocaleString('pt-PT');
    const timeInput = form.current.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) {
      timeInput.value = now;
    }

    emailjs
      .sendForm('service_l0qraj9', 'template_sn4ua5y', form.current, 'IeKFH4HHEKDxKkwiy')
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          form.current?.reset();
        },
        (error) => {
          alert('Erro ao enviar mensagem.');
          console.error(error);
        }
      );
  };

  return (
    <IonPage>
      <div className="contactos-page">
        <Header />

        <div className="people-section">
          <h3>Conheça a nossa equipa</h3>
          <div className="people-list">
            <PersonCard photo={graça} name="Graça Lopes" role="Mediadora de Seguros" />
            <PersonCard photo={sonia} name="Sónia Sousa" role="Mediadora de Seguros" />
          </div>
        </div>

        <div className="contactos-container">
          <h2>Contacte-nos</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="O seu nome" required />
            <input type="email" name="email" placeholder="O seu email" required />
            <textarea name="message" placeholder="A sua mensagem" required />
            <input type="hidden" name="time" />
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>

      <Footer />
    </IonPage>
  );
};

export default Contactos;
