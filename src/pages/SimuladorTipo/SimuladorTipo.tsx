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
import { useState } from 'react';

const SimuladorTipo: React.FC = () => {
  const { tipo } = useParams<{ tipo: string }>();

  // Estado para armazenar os valores dos campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState<string | null>(null); // Resultado da simulação

  // Função para definir o título conforme o tipo de seguro
  const getTituloSeguro = (tipo: string | undefined) => {
    if (!tipo) {
      return 'Simulação de Seguro - Tipo não especificado';
    }

    switch (tipo) {
      case 'vida':
        return 'Simulação de Seguro de Vida';
      case 'automovel':
        return 'Simulação de Seguro Automóvel';
      case 'saude':
        return 'Simulação de Seguro de Saúde';
      case 'casa':
        return 'Simulação de Seguro Habitação';
      case 'pets':
        return 'Simulação de Seguro Pets';
      default:
        return 'Simulação de Seguro';
    }
  };

  // Função para calcular e mostrar o resultado
  const handleSimulacao = () => {
    // Validação básica
    if (!nome || !email || !idade) {
      setResultado('Por favor, preencha todos os campos.');
      return;
    }

    // Exemplo de lógica de cálculo da simulação, dependendo do tipo de seguro
    let valorSimulacao = 0;

    switch (tipo) {
      case 'vida':
        valorSimulacao = 100 + parseInt(idade) * 2; // Exemplo de cálculo fictício
        break;
      case 'automovel':
        valorSimulacao = 150 + parseInt(idade) * 1.5; // Exemplo de cálculo fictício
        break;
      case 'casa':
        valorSimulacao = 200 + parseInt(idade) * 1.2; // Exemplo de cálculo fictício
        break;
      default:
        valorSimulacao = 100; // Valor padrão
    }

    // Exibindo o resultado
    setResultado(`O valor da sua simulação é: €${valorSimulacao}`);
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding">
        <h2 className="titulo-simulacao">{getTituloSeguro(tipo)}</h2>

        <form className="form-simulacao">
          {/* Campos principais */}
          <IonItem className="input-item">
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput 
              value={nome} 
              onIonChange={(e) => setNome(e.detail.value!)} 
              required 
            />
          </IonItem>

          <IonItem className="input-item">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput 
              type="email" 
              value={email} 
              onIonChange={(e) => setEmail(e.detail.value!)} 
              required 
            />
          </IonItem>

          <IonItem className="input-item">
            <IonLabel position="floating">Idade</IonLabel>
            <IonInput 
              type="number" 
              value={idade} 
              onIonChange={(e) => setIdade(e.detail.value!)} 
              required 
            />
          </IonItem>

          {/* Campos específicos por tipo de seguro */}
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

          {/* Botão de simular */}
          <div className="btn-simular-wrapper">
            <IonButton expand="block" color="primary" onClick={handleSimulacao}>
              Simular
            </IonButton>
          </div>
        </form>

        {/* Exibir o resultado da simulação */}
        {resultado && <div className="resultado-simulacao">{resultado}</div>}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SimuladorTipo;
