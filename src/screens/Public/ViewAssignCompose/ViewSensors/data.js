import React, { useEffect } from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';


function App({ data }) {

    useEffect(() => {
        console.log("datatalisisis", data[0])
    })
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>

            <View style={[styles.statusIndicator, { backgroundColor: "#AA0000" }]} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.measurement} {item.unit}</Text>
                <Text style={styles.description}>{item.created_at}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 16,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        width: 64,
        height: 64,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "black"
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
    separator: {
        height: 16,
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 20,
    },
});

export default App;
