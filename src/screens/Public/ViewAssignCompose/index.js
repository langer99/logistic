import * as React from "react";
import { Feather, AntDesign, Entypo,FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Assign from "./Assign";
import Compose from "./Compose";
import { Colors } from "../../../core/theme";

const Tab = createBottomTabNavigator();

const ComposeAndAssign = () => {
  return (
    <Tab.Navigator
      initialRouteName="Compose"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        tabBarActiveTintColor: Colors.info,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: { backgroundColor: Colors.white },
        headerStyle: styles.headerStyle,
        headerShown: false,

      }}>
      <Tab.Screen
        options={{
          title: "Compose",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="lastfm" color={color} size={size} />
          ),
        }}
        name="Compose"
        component={Compose}
      />
      <Tab.Screen
        options={{
          title: "Assign",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="flow-tree" size={size} color={color} />
            ),
        }}
        name="Assign"
        component={Assign}
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

export default ComposeAndAssign;
