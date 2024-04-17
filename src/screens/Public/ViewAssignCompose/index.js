import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewSensors from './ViewSensors';
import ListSensors from './ListSensors';
import { StyleSheet } from "react-native";
import { Colors } from "../../../core/theme";

const Stack = createStackNavigator();

const TabPrivate = () => {
  return (
    <Stack.Navigator
      id="ListSensorsN"
      initialRouteName="ListSensors"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerShown: false,
        headerBackVisible: false

      }}
    >

      <Stack.Screen
        name="ListSensors"
        component={ListSensors}
        options={{
          title: "Create account",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="ViewSensors"
        component={ViewSensors}
        options={{
          title: "ViewSensors",
          headerTitleStyle: styles.headerTitleStyle,
          headerShown: true,
          headerBackVisible: true
        }}

      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    textAlign: "left",
  },
  logout: {
    color: Colors,
    textAlign: "left",
  },
});

export default TabPrivate;
