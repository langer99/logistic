import React, { useState } from 'react';
import { View, Text, Dimensions, FlatList, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export const gateway = [
  {
    name: 'esp32',
    type: 'esp',
    adresseIp: '00000',
    adresseMac: '1000000',    
  },
  {
    name: 'esp8266',
    type: 'esp',
    adresseIp: '0000098',
    adresseMac: '1004440',    
  },
  {
    name: 'arduino-uno',
    type: 'arduino',
    adresseIp: '1111',
    adresseMac: '090909',    
  },
  {
    name: 'atmega-260',
    type: 'arduino',
    adresseIp: '55454545',
    adresseMac: '7373737',    
  },
  {
    name: 'raspberry pi4',
    type: 'raspberry',
    adresseIp: '8745646',
    adresseMac: '62524312',    
  },
  {
    name: 'arduino-uno',
    type: 'arduino',
    adresseIp: '1111',
    adresseMac: '090909',    
  },
  {
    name: 'atmega-260',
    type: 'arduino',
    adresseIp: '55454545',
    adresseMac: '7373737',    
  },
  {
    name: 'raspberry pi4',
    type: 'raspberry',
    adresseIp: '8745646',
    adresseMac: '62524312',    
  },
];

const { width } = Dimensions.get('window');

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = gateway.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          width: '100%',
          height: 100,
          marginTop: 50,
          backgroundColor: '#D3D3D3',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3,
          shadowOpacity: 0.5,
          justifyContent: 'center',
        }}>
        
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            backgroundColor: '#ffffff',
          }}
          placeholder="Search..."
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card item={item} />}
      />
    </>
  );
};

const Card = ({ item }) => {
  let categoryColor = '#00ff00';
  if (item.type === 'arduino') {
    categoryColor = '#ffa500';
  } else if (item.type === 'esp') {
    categoryColor = '#ff0000';
  } else if (item.type === 'raspberry') {
    categoryColor = '#0000FF';
  }
  return (
    <TouchableOpacity
      style={{
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        height: 90,
        width: width - 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 15,
      }}
      onPress={() => console.log(item)}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '200',
            marginBottom: 4,
            color: '#808080',
          }}>
          {item.name}
        </Text>
        <Text style={{ alignItems: 'flex-end', color: categoryColor }}>
          Type: {item.type}
        </Text>
        <Text style={{ alignItems: 'flex-end', color: '#808080', fontSize: 12 }}>
          IP Address: {item.adresseIp}
        </Text>
        <Text style={{ alignItems: 'flex-end', color: '#808080', fontSize: 12 }}>
          MAC Address: {item.adresseMac}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
