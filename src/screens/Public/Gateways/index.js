import React, { useEffect,useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native';
import { settingsGateways } from '../../../service';
import GatewayC from './Gateways'


function App() {

  const [List, setList] = useState([]);

  const fetchGateways = async () => {
    try {
      const list = await settingsGateways.getGateway();
      if (list) {
        setList(list?.data);
      }
    } catch (error) {
      console.error('Error fetching admin list:', error);
    }
  };
  useEffect(() => {
    fetchGateways();
  }, []);
  return (
    <View style={styles.container}>
      <HeaderView />

      <FlatList
        style={{ marginTop: 10 }}
        data={List}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <GatewayC item={item} />}
      />
    </View>
  );
};
const HeaderView = ({ setSearchTerm }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Gateways</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={text => setSearchTerm(text)}
        value={""}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})


export default App;
