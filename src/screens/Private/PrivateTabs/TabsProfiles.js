import * as React from "react";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import Menu from "../Menu";
import Ordres from "../StackOrdres";
import Statistic from '../Statistic'
import Notifications from '../notifications'
import { Colors } from "../../../core/theme";
import { Badge } from 'react-native-elements';
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();
function TabsProfiles(props) {
    const Cartreducer = useSelector(state => state.cartReducer.products)
    return (
        <Tab.Navigator
            initialRouteName="TabsProfiles"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
                headerShown: false
            }}>
            <Tab.Screen
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="align-justify" color={color} size={size} />
                    ),
                }}
                name="Menu"
                component={Menu}
            />
        
            <Tab.Screen
                options={{
                    title: "Statistic",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="line-graph" color={color} size={size} />
                    ),
                }}
                name="Statistic"
                component={Statistic}
            />
            <Tab.Screen
                options={{
                    title: "Ordres",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="cubes" color={color} size={size} />
                    ),
                }}
                name="myOrdres"
                component={Ordres}
            />
            <Tab.Screen
                options={{
                    title: "Notifications",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="notification" color={color} size={size} />
                    ),
                }}
                name="Notifications"
                component={Notifications}
            />
            <Tab.Screen
                options={{
                    title: "Liste",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="wpforms" color={color} size={size} />
                    ),
                }}
                name="FAQ"
                component={Ordres}
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
export default TabsProfiles;