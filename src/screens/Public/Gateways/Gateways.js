import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


function GatewayC ({ item }) {
  
  let categoryColor = '#00ff00';
  if (item.type === 'arduino') {
    categoryColor = '#ffa500';
  } else if (item.type === 'esp') {
    categoryColor = '#ff0000';
  } else if (item.type === 'raspberry') {
    categoryColor = '#0000FF';
  }
  
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => console.log(item)}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={[styles.categoryText, { color: categoryColor }]}>Type: {item.type}</Text>
          <Text style={styles.infoText}>IP Address: {item.adresseIp}</Text>
          <Text style={styles.infoText}>MAC Address: {item.adresseMac}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    cardContainer: {
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
    },
    itemText: {
      fontSize: 22,
      fontWeight: '200',
      marginBottom: 4,
      color: '#808080',
    },
    categoryText: {
      alignItems: 'flex-end',
    },
    infoText: {
      alignItems: 'flex-end',
      color: '#808080',
      fontSize: 12,
    },
  })


export default GatewayC