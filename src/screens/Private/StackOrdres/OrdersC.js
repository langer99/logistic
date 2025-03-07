

import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, FlatList, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../../../core/theme';
const { width } = Dimensions.get('window');



const SensorsC = ({ item, onSelect, isSelected }) => {
  let categoryColor = "#5511AE";

  const toggleColor = item.status === 'Error' ? '#00ff00' : '#ff0000';

  return (
    <TouchableOpacity style={{ ...styles.cardContainer, backgroundColor: isSelected ? Colors.gray : "#ffffff" }} onPress={() => onSelect(item)}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Text style={styles.itemName}>{item.ref} {item.ref}
          </Text>
          <Text style={[styles.category, { color: categoryColor }]}>{item.description}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.status}>{item.categorie}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = {

  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContent: {
    flex: 1,
    flexDirection: 'column',
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  itemName: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00133A',
  },
  category: {
    alignItems: 'flex-end',
  },
  status: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '100',
  },
  statusIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 5,
  },
  cardContainer: {
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
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
  },
};
export default SensorsC