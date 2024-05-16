import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, FlatList, TextInput } from 'react-native';
import { settingsSensors } from '../../../service';
import SensorsC from './Sensor';

const { width } = Dimensions.get('window');

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sensors, setSensors] = useState([]);
  const [filteredSensors, setFilteredSensors] = useState([]);

  const fetchSensors = async () => {
    try {
      const response = await settingsSensors.getSensor();
      if (response.data) {
        setSensors(response.data);
        setFilteredSensors(response.data);
      }
    } catch (error) {
      console.error('Error fetching sensor list:', error);
    }
  };

  useEffect(() => {
    fetchSensors();
  }, []);

  useEffect(() => {
    // Filter sensors based on search term
    const filtered = sensors.filter(sensor =>
      sensor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSensors(filtered);
  }, [searchTerm, sensors]);

  return (
    <View style={styles.container}>
      <HeaderView setSearchTerm={setSearchTerm} />
      <FlatListView filteredData={filteredSensors} />
    </View>
  );
}

// HeaderView Component
const HeaderView = ({ setSearchTerm }) => {
  return (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={text => setSearchTerm(text)}
      />
    </View>
  );
};

// FlatListView Component
const FlatListView = ({ filteredData }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <SensorsC item={item} />}
    />
  );
};

// Card Component

// Styles
const styles = {
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 100,
    marginTop: 5,
    backgroundColor: '#D3D3D3',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  flatList: {
    marginTop: 8,
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
  ///////////////card content
};

export default App;
