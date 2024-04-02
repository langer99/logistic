import * as React from "react";
import { Feather, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "./Home";
import About from './About';
import Gateways from './Gateways';
import TabPrivate from '../Private';
import Help from './Help';
import Sensors from './Sensors';
import ComposeAndAssign from './ComposeAndAssign'
import ViewAssignCompose from './ViewAssignCompose'
import Info from './InfoSensors'
import { Colors } from "../../core/theme";

const Tab = createBottomTabNavigator();

const TabPublic = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabPublic"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        tabBarActiveTintColor: Colors.info,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: { backgroundColor: Colors.white },
        headerStyle: styles.headerStyle,
      }}>
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "Sensors",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="signal" size={size} color={color} />
          ),
        }}
        name="Sensors"
        component={Sensors}
      />
      <Tab.Screen
        options={{
          title: "Gateways",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="USB" size={size} color={color} />
          ),
        }}
        name="Gateways"
        component={Gateways}
      />
      <Tab.Screen
        options={{
          title: "Compose Assign",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cogs" color={color} size={size} />
          ),
        }}
        name="ComposeAndAssign"
        component={ComposeAndAssign}
      />
      <Tab.Screen
        options={{
          title: "View",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file" color={color} size={size} />
          ),
        }}
        name="ViewAssignCompose"
        component={ViewAssignCompose}
      />
   

      {/* <Tab.Screen
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cogs" color={color} size={size} />
          ),
        }}
        name="About"
        component={About}
      /> */}



      <Tab.Screen
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}
        name="TabPrivate"
        component={TabPrivate}
      />
      <Tab.Screen
        options={{
          title: "Help",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="info-circle" color={color} size={size} />
          ),
        }}
        name="Help"
        component={Help}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    textAlign: "left",
  },
  logout: {
    color: Colors.primary,
    textAlign: "left",
  },
  headerStyle: {
    backgroundColor: Colors.accent,
  },
});

export default TabPublic;
