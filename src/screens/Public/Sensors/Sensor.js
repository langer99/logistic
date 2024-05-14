

import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, FlatList, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../../../core/theme';
const { width } = Dimensions.get('window');



const SensorsC = ({ item , onSelect ,isSelected }) => {
 
    const toggleColor = item.location === 'TDY' ? '#00FF00' : '#ff0000';

    return (
        <TouchableOpacity style={{...styles.cardContainer,backgroundColor:isSelected?Colors.gray:"#ffffff"}} onPress={() => onSelect(item)}>
            <View style={styles.cardContent}>
                <View style={styles.leftContent}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.Ip_address}> @IP__ {item.address_ip}</Text>
                    <Text style={styles.Ip_address}> @mac {item.address_mac}</Text>
                </View>
                <View style={styles.rightContent}>
                <View style={styles.rightContent}>
                    <Text style={styles.status}>{item.location === 'TDY'? "active":"inactive"} </Text>
                </View>
                    <View style={[styles.statusIndicator, { backgroundColor: toggleColor }]} />
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = {

    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    leftContent: {
        flex: 1,
        flexDirection: 'column',
    },
    rightContent: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    itemName: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 4,
        color: '#808080',
    },
    Ip_address: {
        alignItems: 'flex-end',
        fontSize: 14,
        color:Colors.info
    },
    status: {
        marginBottom: 4,
        fontSize: 14,
        fontWeight: '100',
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 20,
    },
    cardContainer: {
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        width: width - 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 15,
      },
};
export default SensorsC