import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../core/theme';
import { UserLogin } from '../../../service';
import { useSelector } from 'react-redux';

function Menu(props) {
  const UserInfoReducer = useSelector((state) => state.UserInfoReducer?.userInfo);
  const menuItems = [
    { key: '2', title: 'Help', icon: 'info-circle', navigation: "Info" },
    { key: '3', title: 'settings', icon: 'cogs', navigation: "ComposeAndAssign" },
    { key: '4', title: 'View', icon: 'eye', navigation: "ViewAssignCompose" },
    { key: '4', title: 'Sensors', icon: 'wifi', navigation: "Sensors" },
    { key: '5', title: 'GW', icon: 'usb', navigation: "Gateways" },
    { key: '6', title: 'Log Out', icon: 'arrow-circle-right', navigation: "LoginScreen" },
    // Add more menu items as needed
  ];

  const navigationsRouter = async (navigation) => {
    if (navigation === "LoginScreen") {
      const logout = await UserLogin.Logout();
      console.log(logout)
      props.navigation.navigate(navigation);
    } else {
      props.navigation.navigate(navigation);
    }
  };

  const calculateNumColumns = () => {
    // Adjust the maximum number of columns as needed
    const maxColumns = 3;
    const length = menuItems.length;
    return Math.min(length, maxColumns);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigationsRouter(item.navigation)} style={styles.menuBox}>
      <View style={styles.menuBoxIcons}>
        <Icon name={item.icon} size={30} style={styles.icon} />
      </View>
      <Text style={styles.info}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View onPress={() => console.log(UserInfoReducer)} style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}
          />
          <View style={styles.Editstyle}>
            <TouchableOpacity onPress={() => navigationsRouter("EditInfo")}>
              <FontAwesome5 name="pen" color={Colors.primary} size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.nameCustomer}>{UserInfoReducer.firstname} User</Text>
          <Text style={styles.CinCustomer}>{UserInfoReducer.username}</Text>
          <Text style={styles.CinCustomer}>{UserInfoReducer.email} email@itelab.com</Text>

        </View>
      </View>

      <View style={styles.ViewListMenu}>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          numColumns={calculateNumColumns()} // Calculate the number of columns dynamically
        />
      </View>

    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.gray,
  },
  headerContent: {
    padding: 10,
    alignItems: 'center',
  },
  ViewListMenu: {
    marginTop: 30
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  nameCustomer: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '600',
  },
  CinCustomer: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '600',
  },

  Editstyle: {
    padding: 10,
    position: 'absolute',
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 20,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end"
  },
  bodyContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.primary
  },
  menuBoxIcons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBox: {
    backgroundColor: Colors.gray,
    width: "30%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    margin: 5,
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
  },
  icon: {
    justifyContent: 'center',
    color: Colors.white

  },
  info: {
    fontSize: 16,
    color: Colors.white

  },

})