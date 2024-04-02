import React, { useState,useEffect } from 'react';
import { View, FlatList, StatusBar, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../../core/theme';
import OrdersC from './OrdersC';
import { settingsOrders } from '../../../service';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [List, setList] = useState([]);

  const fetchOrders = async () => {
      try {
          const list = await settingsOrders.getOrder();
          if (list) {
              setList(list?.data);
          }
      } catch (error) {
          console.error('Error fetching admin list:', error);
      }
  };
  useEffect(() => {
    fetchOrders();
}, []);
  return (
    <View
      style={styles.container}>
      <StatusBar hidden />
      <View style={styles.container}>

        <TextInput
          style={styles.searchText}
          placeholder="Search..."
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <FlatList
        style={{ marginTop: 8 }}
        data={List}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <OrdersC item={item} isSelected={false} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchText:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  containerView: {
    textAlign: "left",
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
  },
  logout: {
    color: Colors.secondary,
    textAlign: "left",
  },
});


export default App;
