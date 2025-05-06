import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './SimuladorTipo.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimuladorTipo: React.FC = () => {
  const { tipo } = useParams<{ tipo: string }>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const getTituloSeguro = (tipo: string | undefined) => {
    if (!tipo) return 'Simulação de Seguro - Tipo não especificado';
    switch (tipo) {
      case 'vida': return 'Simulação de Seguro de Vida';
      case 'automovel': return 'Simulação de Seguro Automóvel';
      case 'saude': return 'Simulação de Seguro de Saúde';
      case 'casa': return 'Simulação de Seguro Habitação';
      case 'pets': return 'Simulação de Seguro Pets';
      default: return 'Simulação de Seguro';
    }
  };

  const handleSimulacao = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !email || !idade) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    let valorSimulacao = 0;
    switch (tipo) {
      case 'vida':
        valorSimulacao = 100 + parseInt(idade) * 2;
        break;
      case 'automovel':
        valorSimulacao = 150 + parseInt(idade) * 1.5;
        break;
      case 'casa':
        valorSimulacao = 200 + parseInt(idade) * 1.2;
        break;
      default:
        valorSimulacao = 100;
    }

    const resultadoTexto = `O valor da sua simulação é: €${valorSimulacao}`;
    setResultado(resultadoTexto);

    const templateParams = {
      nome,
      email,
      idade,
      tipo,
      resultado: `€${valorSimulacao}`,
      data: new Date().toLocaleString('pt-PT'),
    };

    emailjs
      .send('service_l0qraj9', 'template_simulador', templateParams, 'IeKFH4HHEKDxKkwiy')
      .then(() => {
        toast.success('Simulação enviada com sucesso!');
      })
      .catch((error) => {
        toast.error('Erro ao enviar a simulação.');
        console.error(error);
      });
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding">
        <h2 className="titulo-simulacao">{getTituloSeguro(tipo)}</h2>

        <form className="form-simulacao" ref={formRef} onSubmit={handleSimulacao}>
          <IonItem className="input-item">
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput value={nome} onIonChange={(e) => setNome(e.detail.value!)} required />
          </IonItem>

          <IonItem className="input-item">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} required />
          </IonItem>

          <IonItem className="input-item">
            <IonLabel position="floating">Idade</IonLabel>
            <IonInput type="number" value={idade} onIonChange={(e) => setIdade(e.detail.value!)} required />
          </IonItem>

          {tipo === 'automovel' && (
            <>
              <IonItem className="input-item">
                <IonLabel position="floating">Marca do carro</IonLabel>
                <IonInput required />
              </IonItem>
              <IonItem className="input-item">
                <IonLabel position="floating">Ano de fabrico</IonLabel>
                <IonInput type="number" required />
              </IonItem>
            </>
          )}

          {tipo === 'casa' && (
            <IonItem className="input-item">
              <IonLabel position="floating">Valor da casa (€)</IonLabel>
              <IonInput type="number" required />
            </IonItem>
          )}

          <div className="btn-simular-wrapper">
            <IonButton expand="block" color="primary" type="submit">
              Simular
            </IonButton>
          </div>
        </form>

        {resultado && <div className="resultado-simulacao">{resultado}</div>}
        <ToastContainer />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SimuladorTipo;
