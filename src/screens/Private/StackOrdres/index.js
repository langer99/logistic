import React, { useState } from 'react';
import { View, Text, Dimensions, FlatList, StatusBar, TextInput,TouchableOpacity } from 'react-native';

export const data = [
  {
    name: 'iphone 15 pro',
    category: 'elecroniques',
    price: '$2.00',
    quantity: '100',    
  },
  {
    name: 'oppo reno 7',
    category: 'elecroniques',
    price: '$3.00',
    quantity: '100',    
  },
  {
    name: 'milka',
    category: 'alimentations et boissons',
    price: '$1.00',
    quantity: '100',    
  },
  {
    name: 'ballon',
    category: 'sports et plein air',
    price: '$1.00',
    quantity: '500',    
  },
  {
    name: 'cahier 200 pages',
    category: 'educations',
    price: '$18.00',
    quantity: '400',    
  },
  {
    name: 'pulle zara',
    category: 'vetements et accessoires',
    price: '$18.00',
    quantity: '400',    
  },
  {
    name: 'climatiseur',
    category: 'maisons et jardins',
    price: '$18.00',
    quantity: '400',    
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
  if (item.category.toLowerCase() === 'electroniques') {
    categoryColor = '#ff0000';
  } else if (item.category.toLowerCase() === 'alimentations et boissons') {
    categoryColor = '#0000ff';
  } else if (item.category.toLowerCase() === 'sports et plein air') {
    categoryColor = '#ffff00';
  } else if (item.category.toLowerCase() === 'educations') {
    categoryColor = '#800080';
  } else if (item.category.toLowerCase() === 'vetements et accessoires') {
    categoryColor = '#008000';
  } else if (item.category.toLowerCase() === 'maisons et jardins') {
    categoryColor = '#ff69b4';
  }
  


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
      onPress={()=>console.log(item)}
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
          {item.price}
        </Text>
        <Text style={{ alignItems: 'flex-end', color: '#808080', fontSize: 12 }}>
          {item.quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
