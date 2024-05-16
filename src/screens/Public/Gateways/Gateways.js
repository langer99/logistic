import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const GatewayC = ({ item }) => {
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
          <Text style={styles.infoText}>IP Address: {item.address_ip}</Text>
          <Text style={styles.infoText}>MAC Address: {item.address_mac}</Text>
          {/* Add additional fields if needed */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    height: 120, // Increased height to accommodate additional fields if needed
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
    fontSize: 16,
    color: '#808080',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#808080',
  },
});

export default GatewayC;
