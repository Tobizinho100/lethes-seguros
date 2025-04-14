import React, { useState } from 'react';
import { IonButton, IonInput, IonLabel, IonItem, IonContent } from '@ionic/react';
import './Perfil.css';

const EditProfile: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSave = async () => {
    const userId = 'userId_aqui'; // O id do utilizador será recuperado do token ou contexto

    const response = await fetch('/api/editProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        name,
        avatar,
        age,
        gender,
        location,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Perfil atualizado com sucesso!');
    } else {
      alert(`Erro: ${data.message}`);
    }
  };

  return (
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Nome</IonLabel>
        <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Foto de Perfil</IonLabel>
        <IonInput value={avatar} onIonChange={(e) => setAvatar(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Idade</IonLabel>
        <IonInput type="number" value={age} onIonChange={(e) => setAge(Number(e.detail.value!))} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Gênero</IonLabel>
        <IonInput value={gender} onIonChange={(e) => setGender(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Localização</IonLabel>
        <IonInput value={location} onIonChange={(e) => setLocation(e.detail.value!)} />
      </IonItem>
      <IonButton expand="full" onClick={handleSave}>Salvar Alterações</IonButton>
    </IonContent>
  );
};

export default EditProfile;
