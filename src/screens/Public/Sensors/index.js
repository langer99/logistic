import React, { useState } from 'react';
import { View, Text, Dimensions, FlatList, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export const data = [
  {
    name: 'DHT11',
    category: 'capteur',
    status: 'online',
  },
  {
    name: 'DHT22',
    category: 'capteur',
    status: 'offline',
  },
  {
    name: 'BMP280',
    category: 'capteur',
    status: 'online',
  },
  {
    name: 'LDR',
    category: 'capteur',
    status: 'offline',
  },
  {
    name: 'MQ135',
    category: 'capteur',
    status: 'online',
  },
];

const { width } = Dimensions.get('window');

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          width: '100%',
          height: 100,
          marginTop:50,
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
        <Text
          style={{
            fontSize: 32,
            marginLeft: 16,
            fontWeight: 'bold',
          }}>
          Sensors
        </Text>
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
        style={{ marginTop: 8 }}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card item={item} />}
      />
    </>
  );
};

const Card = ({ item }) => {
  let categoryColor = '#00ff00';
  if (item.category === 'capteur') {
    categoryColor = '#ffa500';
  } else if (item.category === 'CAPTEUR') {
    categoryColor = '#ff0000';
  }
  const toggleColor = item.status === 'online' ? '#00ff00' : '#ff0000';
  return (
    <TouchableOpacity
      style={{
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        height: 70,
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
          {item.category}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            marginBottom: 4,
            fontSize: 18,
            fontWeight: '100',
          }}>
          {item.status}
        </Text>
        <View
          style={{
            backgroundColor: toggleColor,
            padding: 5,
            borderRadius: 8,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default App;
