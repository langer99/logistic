import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Options pour le dropdown de statut
const statusOptions = [
  { label: 'En ligne', value: 'En ligne' },
  { label: 'Hors ligne', value: 'Hors ligne' },
];

const ConfigGatewayBLE = () => {
  const [name, setName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState(statusOptions[0].value); // Utilisez le premier statut comme valeur par défaut
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture du dropdown

  const handleAdd = () => {
    // Logique pour ajouter le capteur avec les données du formulaire
    console.log('Name:', name);
    console.log('IP Address:', ipAddress);
    console.log('Description:', description);
    console.log('Type:', type);
    console.log('Status:', status);
    // Réinitialiser les champs après l'ajout
    setName('');
    setIpAddress('');
    setDescription('');
    setType('');
    setStatus(statusOptions[0].value); // Réinitialisez le statut au premier statut
    setIsOpen(false); // Fermez le dropdown après l'ajout
  };

  return (
    <View style={{ padding: 20 }}>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Nom"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Adresse IP"
        value={ipAddress}
        onChangeText={text => setIpAddress(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Type"
        value={type}
        onChangeText={text => setType(text)}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={handleAdd}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Config</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfigGatewayBLE;
