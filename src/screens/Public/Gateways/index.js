import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, FlatList, TextInput } from 'react-native';
import { settingsGateways } from '../../../service';
import GatewayComponent from './Gateways'; // Renommé de GatewaysC à GatewayComponent

const { width } = Dimensions.get('window');

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gateways, setGateways] = useState([]);
  const [filteredGateways, setFilteredGateways] = useState([]); // Renommé de filteredSensors à filteredGateways

  useEffect(() => {
    fetchGateways();
  }, []);

  useEffect(() => {
    // Filter gateways based on search term
    const filtered = gateways.filter(gateway =>
      gateway.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGateways(filtered);
  }, [searchTerm, gateways]);

  const fetchGateways = async () => {
    try {
      const response = await settingsGateways.getGateway(); // Changé de getSensor() à getGateway()
      if (response.data) {
        setGateways(response.data);
        setFilteredGateways(response.data);
      }
    } catch (error) {
      console.error('Error fetching gateway list:', error);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderView setSearchTerm={setSearchTerm} />
      <FlatListView filteredData={filteredGateways} />
    </View>
  );
}

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

const FlatListView = ({ filteredData }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <GatewayComponent item={item} />} // Renommé de SensorsC à GatewayComponent
    />
  );
};

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
};

export default App;

