import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library
import { Colors } from '../../../core/theme';
import { UserLogin } from '../../../service';
const menuItems = [
  { key: '2', title: 'Statistic', icon: 'bar-chart', navigation: "HomeScreen" },
  { key: '3', title: 'assign', icon: 'cogs' },
  { key: '5', title: 'Composoition', icon: 'sliders' },
  { key: '1', title: 'view', icon: 'bullseye' },
  { key: '1', title: 'Search', icon: 'search' },
  // Add more menu items as needed
];
function MenuScreen(props) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigationsRouter(item.navigation)} style={styles.item}>
      <Icon name={item.icon} size={24} color="#555" style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  const navigationsRouter = async (navigation) => {

    if (navigation === "Login") {
      var logout = UserLogin.Logout()

      props.navigation.navigate(navigation)
    } else {
      props.navigation.navigate(navigation)
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2} // Set the number of columns here
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: Colors.primary
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: 150,
    height:100
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    padding:15
  },
});

export default MenuScreen;
