import React, { useEffect, useState } from "react";
import { ScrollView, FlatList, StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import Category from '../../../../../components/RenderComponent/Category'
import { Colors } from "../../../../../core/theme";
import { settingsGateways, settingsSensors } from '../../../../../service';
import SensorsC from "../../../../Public/Sensors/Sensor";
import { useDispatch } from 'react-redux';
import { updatesensor } from "../../../../../store/sensors/actions";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function ListCategories(props) {
    const dispatch = useDispatch();
    const [ListSensors, setListSensors] = useState([]);
    const [List, setList] = useState([]);
    const [isSelected, setisSelected] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to handle item selection
    const handleItemSelection = (item) => {
        // Check if the item is already selected
        console.log("fechtch sensors")
        fetchSensors(item)
    };
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

    const fetchSensors = async (id) => {
        try {
            setisSelected(id)
            console.log("setisSelected")
            const list = await settingsSensors.getSensorbyGatway(id);
            if (list) {
                setListSensors(list?.data?.sensors);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    useEffect(() => {
        fetchGateways();
    }, []);
    function empty() {
        return (

            <View >
                <Text style={styles.descriptionEmpty} >{'There is no item for thiscategories.'}</Text>
            </View>

        );
    }

    useEffect(() => {
        console.log("heeer");
    }, []);

    const selectSensorView = async (sensor) => {

        dispatch(updatesensor(sensor));
        props.navigation.navigate("ViewSensors")
    }

    return (
        <View style={styles.container}>

            <View style={styles.categoryContainer}>
                <FlatList
                    data={List}
                    renderItem={({ item }) => (<Category item={item} onpress={(item) => handleItemSelection(item.id)} isSelected={isSelected} />)}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.planPackContainer}>
                    <FlatList
                        data={ListSensors}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={empty()}
                        renderItem={({ item }) =>
                            <SensorsC item={item} onSelect={(item) => selectSensorView(item)} isSelected={selectedItems.includes(item)} />}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Editstyle: {
        padding: 10,
        position: 'absolute',
        backgroundColor: Colors.light,
        margin: 10,
        marginTop: 70,
        borderRadius: 20,
        right: 0,
        bottom: -40,
        justifyContent: "flex-end",
        flex: 1,

    },
    descriptionEmpty: {
        color: Colors.black,
        marginTop: 30,
        textAlign: "center"
    },
    categoryContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: Colors.white,
        height: windowHeight / 5,
        width: windowWidth,
        paddingHorizontal: 16,
        paddingTop: 16,
        marginBottom: 30,
    },
    scrollViewContent: {
        flexGrow: 1,
        marginTop: windowHeight / 5,
        paddingBottom: windowHeight / 2,
    },
    planPackContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        marginBottom: 120,
    },
});

export default ListCategories;
