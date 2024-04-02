import React, { useEffect, useState } from "react";
import { ScrollView, FlatList, StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import Category from '../../../../components/RenderComponent/Category'
import { Colors } from "../../../../core/theme";
import { settingsGateways, settingsSensors } from '../../../../service';
import SensorsC from "../../Sensors/Sensor";
import { FontAwesome5 } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ListCategories(props) {
    const [ListSensors, setListSensors] = useState([]);
    const [List, setList] = useState([]);
    const [isSelected, setisSelected] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to handle item selection
    const handleItemSelection = (item) => {
        // Check if the item is already selected
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
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
    const ComposeGW = async () => {
        try {console.log({ sensors: selectedItems.map(e=>e.id)  ,Gateway: isSelected.id})
            const list = await settingsGateways.updateGatewayCompose({ sensors: selectedItems.map(e=>e.id)  ,Gateway: isSelected},isSelected);
            if (list) {
                setSelectedItems([]);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    const fetchSensors = async () => {
        try {
            const list = await settingsSensors.getSensor();
            if (list) {
                setListSensors(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    useEffect(() => {
        fetchGateways();
        fetchSensors();
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

    return (
        <View style={styles.container}>
           
            <View style={styles.categoryContainer}>
                <FlatList
                    data={List}
                    renderItem={({ item }) => (<Category item={item} onpress={(item) => setisSelected(item.id)} isSelected={isSelected} />)}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
                 <View style={styles.Editstyle}>
                <TouchableOpacity onPress={() => ComposeGW()}>
                    <FontAwesome5 name="plus" color={Colors.primary} size={20} />
                </TouchableOpacity>
            </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.planPackContainer}>
                    <FlatList
                        data={ListSensors}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={empty()}
                        renderItem={({ item }) =>
                            <SensorsC item={item} onSelect={() => handleItemSelection(item)} isSelected={selectedItems.includes(item)} />}
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
        marginTop:70,
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
        marginBottom:30,
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
